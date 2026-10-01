import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 20) => ({ width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const });

export function SearchIcon({ size = 20, ...props }: IconProps) {
  return <svg {...base(size)} {...props}><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg>;
}
export function BagIcon({ size = 20, ...props }: IconProps) {
  return <svg {...base(size)} {...props}><path d="M5 8.5h14l-1 11H6l-1-11Z"/><path d="M9 9V6.5a3 3 0 0 1 6 0V9"/></svg>;
}
export function MenuIcon({ size = 22, ...props }: IconProps) {
  return <svg {...base(size)} {...props}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
}
export function CloseIcon({ size = 22, ...props }: IconProps) {
  return <svg {...base(size)} {...props}><path d="m6 6 12 12M18 6 6 18"/></svg>;
}
export function ArrowRightIcon({ size = 20, ...props }: IconProps) {
  return <svg {...base(size)} {...props}><path d="M5 12h14M14 7l5 5-5 5"/></svg>;
}
export function ArrowUpRightIcon({ size = 18, ...props }: IconProps) {
  return <svg {...base(size)} {...props}><path d="M7 17 17 7M8 7h9v9"/></svg>;
}
export function ChevronDownIcon({ size = 18, ...props }: IconProps) {
  return <svg {...base(size)} {...props}><path d="m6 9 6 6 6-6"/></svg>;
}
export function MinusIcon({ size = 18, ...props }: IconProps) {
  return <svg {...base(size)} {...props}><path d="M5 12h14"/></svg>;
}
export function PlusIcon({ size = 18, ...props }: IconProps) {
  return <svg {...base(size)} {...props}><path d="M12 5v14M5 12h14"/></svg>;
}
export function TruckIcon({ size = 24, ...props }: IconProps) {
  return <svg {...base(size)} {...props}><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="18" cy="18" r="1.8"/></svg>;
}
export function LeafIcon({ size = 24, ...props }: IconProps) {
  return <svg {...base(size)} {...props}><path d="M20 4C11 4 5 8 5 15c0 3 2 5 5 5 7 0 10-7 10-16Z"/><path d="M5 20c3-5 7-8 12-11"/></svg>;
}
export function DropIcon({ size = 24, ...props }: IconProps) {
  return <svg {...base(size)} {...props}><path d="M12 3s6 6.6 6 11a6 6 0 1 1-12 0c0-4.4 6-11 6-11Z"/></svg>;
}
export function FeatherIcon({ size = 24, ...props }: IconProps) {
  return <svg {...base(size)} {...props}><path d="M20 4C14 3 7 7 5 13c-1 3 1 6 4 6 6 0 10-8 11-15Z"/><path d="M5 20c4-5 7-8 12-11M9 15h5M12 11v4"/></svg>;
}
export function ShieldIcon({ size = 24, ...props }: IconProps) {
  return <svg {...base(size)} {...props}><path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z"/><path d="m9.5 12 1.8 1.8 3.6-4"/></svg>;
}
export function WashIcon({ size = 24, ...props }: IconProps) {
  return <svg {...base(size)} {...props}><path d="M4 8h16l-1 11H5L4 8Z"/><path d="M6 8 8 4h8l2 4"/><path d="M8 13c1 1 2 1 3 0s2-1 3 0 2 1 3 0"/></svg>;
}
export function InstagramIcon({ size = 20, ...props }: IconProps) {
  return <svg {...base(size)} {...props}><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><path d="M17.5 6.5h.01"/></svg>;
}
