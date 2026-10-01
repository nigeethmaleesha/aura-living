'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { BundleId, ColourOption, BedSize } from '@/data/catalog';

export type CartItem = {
  id: string;
  name: string;
  colour: ColourOption['slug'];
  colourLabel: string;
  size: BedSize;
  bundle: BundleId;
  bundleLabel: string;
  image: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  open: boolean;
  setOpen: (value: boolean) => void;
  addItem: (item: Omit<CartItem, 'id' | 'quantity'>, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = 'aura-living-selection-v1';

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch {}
  }, [items]);

  const addItem: CartContextValue['addItem'] = (item, quantity = 1) => {
    const id = `${item.colour}-${item.size}-${item.bundle}`;
    setItems((current) => {
      const exists = current.find((entry) => entry.id === id);
      if (exists) return current.map((entry) => entry.id === id ? { ...entry, quantity: entry.quantity + quantity } : entry);
      return [...current, { ...item, id, quantity }];
    });
    setOpen(true);
  };

  const removeItem = (id: string) => setItems((current) => current.filter((item) => item.id !== id));
  const updateQuantity = (id: string, quantity: number) => setItems((current) => current.map((item) => item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item));
  const clear = () => setItems([]);
  const count = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);

  return <CartContext.Provider value={{ items, count, open, setOpen, addItem, removeItem, updateQuantity, clear }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');
  return context;
}
