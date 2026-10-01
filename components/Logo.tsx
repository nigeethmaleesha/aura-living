import Link from 'next/link';

export function Logo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <Link href="/" className={`brand-logo ${light ? 'brand-logo--light' : ''}`} aria-label="Aura Living home">
      <span className="brand-logo__aura">AURA</span>
      {!compact && <span className="brand-logo__living">LIVING</span>}
    </Link>
  );
}
