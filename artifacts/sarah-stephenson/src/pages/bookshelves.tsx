import { motion } from 'framer-motion';
import { FadeIn } from '@/components/fade-in';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const books = [
  {
    tag: 'Debut Memoir',
    title: 'Breaking Ground',
    cover: '/book-cover.jpg',
    description:
      "Part memoir, part tactical manifesto. Breaking Ground chronicles my journey from an outsider in the property market to building a self-sustaining portfolio and a publishing imprint. No platitudes. Just the reality of what it takes to build something that lasts.",
    status: 'Pre-order the Hardcover',
  },
  {
    tag: 'Fiction — In Progress',
    title: 'The Quiet Ledger',
    cover: null,
    description:
      "A novel following three women who inherit a failing property firm and must decide whether to save it, sell it, or burn it down and start again. A story about legacy, debt, and the cost of choosing yourself.",
    status: 'Coming 2027',
  },
  {
    tag: 'Nonfiction — In Development',
    title: 'The Cost of the Yes',
    cover: null,
    description:
      "A collection of essays on the deals, partnerships, and opportunities worth walking away from — and how to tell the difference between fear and instinct.",
    status: 'Manuscript in development',
  },
];

export default function Bookshelves() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-foreground">
      <div className="noise-overlay" />
      <SiteHeader />
      <section className="pt-40 pb-8 px-6 md:px-12 lg:px-24">
        <FadeIn>
          <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4 max-w-7xl mx-auto">Bookshelves</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground max-w-7xl mx-auto">Words I've put my name on.</h1>
        </FadeIn>
      </section>

      {books.map((book, i) => (
        <section
          key={book.title}
          className={`py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden ${i % 2 === 0 ? 'bg-card' : 'bg-background'}`}
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className={`lg:col-span-5 relative perspective-[1200px] order-2 ${i % 2 === 0 ? 'lg:col-start-2 lg:order-1' : 'lg:col-start-8 lg:order-2'}`}>
              <FadeIn>
                {book.cover ? (
                  <motion.div
                    whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="relative z-10 shadow-2xl mx-auto max-w-sm lg:max-w-none"
                  >
                    <img src={book.cover} alt={`${book.title} cover`} className="w-full h-auto object-cover" />
                  </motion.div>
                ) : (
                  <div className="relative z-10 mx-auto max-w-sm lg:max-w-none aspect-[2/3] bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                    <span className="font-serif text-2xl text-foreground/40 italic px-8 text-center">{book.title}</span>
                  </div>
                )}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-3xl -z-10 rounded-full pointer-events-none" />
              </FadeIn>
            </div>
            <div className={`lg:col-span-5 space-y-6 order-1 ${i % 2 === 0 ? 'lg:col-start-8 lg:order-2' : 'lg:col-start-2 lg:order-1'}`}>
              <FadeIn>
                <div className="inline-block border border-primary text-primary text-xs tracking-[0.2em] uppercase px-3 py-1 mb-4">
                  {book.tag}
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">{book.title}</h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-lg text-foreground/80 leading-relaxed">{book.description}</p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-sm uppercase tracking-[0.15em] text-primary font-medium mt-4">{book.status}</p>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}
      <SiteFooter />
    </main>
  );
}
