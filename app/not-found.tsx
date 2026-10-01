import Link from 'next/link';
import { ArrowRightIcon } from '@/components/Icons';
export default function NotFound(){return <section className="not-found"><span className="eyebrow">404</span><h1>This room is still being made.</h1><p>Head back to the collection and keep exploring.</p><Link href="/" className="button button--dark">Back home <ArrowRightIcon size={18}/></Link></section>}
