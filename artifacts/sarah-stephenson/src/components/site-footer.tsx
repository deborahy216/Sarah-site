import { Link } from 'wouter';

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        <p className="font-serif italic text-lg text-background/60">S. D. Stephenson</p>
        <div className="flex flex-wrap justify-center items-center gap-6 text-background/60 text-xs tracking-[0.15em] uppercase">
          <Link href="/bio">Bio</Link>
          <Link href="/bookshelves">Bookshelves</Link>
          <Link href="/socials">Socials</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/dedication">Dedication</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p className="text-background/40">&copy; {new Date().getFullYear()} Sarah Deborah Stephenson. All rights reserved.</p>
      </div>
    </footer>
  );
}
