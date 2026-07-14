import React from 'react';
import { Link, useLocation } from 'wouter';

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [location] = useLocation();
  const isActive = location === href;
  return (
    <Link
      href={href}
      className={`relative text-xs tracking-[0.2em] uppercase after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-current after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'after:w-full' : 'after:w-0'}`}
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  return (
    <nav className="absolute top-0 left-0 w-full p-6 md:px-12 lg:px-24 z-50 flex justify-between items-center mix-blend-difference text-white">
      <Link href="/" className="font-serif text-xl md:text-2xl tracking-wide">
        S. D. Stephenson
      </Link>
      <div className="hidden md:flex items-center gap-10">
        <NavLink href="/story">Story</NavLink>
        <NavLink href="/book">The Book</NavLink>
        <NavLink href="/dedication">Dedication</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}
