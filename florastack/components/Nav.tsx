
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { MenuIcon } from '@heroicons/react/24/outline';
export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white/60 dark:bg-transparent backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-flora-400 to-flora-600 flex items-center justify-center text-white font-bold">FS</div>
          <div>
            <div className="font-semibold">FloraStack</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 -mt-0.5">Grow your business intelligently</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/features" className="hover:text-flora-700">Features</Link>
          <Link href="/pricing" className="hover:text-flora-700">Pricing</Link>
          <Link href="/shop" className="hover:text-flora-700">Marketplace</Link>
          <Link href="/dashboard" className="px-4 py-2 bg-flora-500 text-white rounded-lg hover:bg-flora-600">Dashboard</Link>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
          <MenuIcon className="w-6 h-6 text-slate-700 dark:text-slate-300" />
        </button>
      </div>
      {open && (<div className="md:hidden border-t"><div className="flex flex-col p-4 gap-3"><Link href="/features">Features</Link><Link href="/pricing">Pricing</Link><Link href="/shop">Marketplace</Link><Link href="/dashboard" className="px-3 py-2 bg-flora-500 text-white rounded-lg">Dashboard</Link></div></div>)}
    </header>
  );
}
