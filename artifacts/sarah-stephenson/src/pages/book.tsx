import { motion } from 'framer-motion';
import { FadeIn } from '@/components/fade-in';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function Book() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-foreground">
      <div className="noise-overlay" />
      <SiteHeader />
      <section className="pt-40 pb-24 md:pb-32 px-6 md:px-12 lg:px-24 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 lg:col-start-2 relative perspective-[1200px] order-2 lg:order-1">
            <FadeIn>
              <motion.div
                whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 shadow-2xl mx-auto max-w-sm lg:max-w-none"
              >
                <img src="/book-cover.jpg" alt="Breaking Ground Book Cover" className="w-full h-auto object-cover" />
              </motion.div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-3xl -z-10 rounded-full pointer-events-none" />
            </FadeIn>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 space-y-8 order-1 lg:order-2">
            <FadeIn>
              <div className="inline-block border border-primary text-primary text-xs tracking-[0.2em] uppercase px-3 py-1 mb-6">
                Debut Memoir
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground">Breaking Ground</h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Part memoir, part tactical manifesto. Breaking Ground chronicles my journey from an outsider in the property market to building a self-sustaining portfolio and a publishing imprint.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-foreground/80 leading-relaxed">
                It's an unfiltered look at the cost of ambition, the anatomy of a setback, and the quiet power of refusing to yield. No platitudes. Just the reality of what it takes to build something that lasts.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <button className="bg-primary text-primary-foreground px-8 py-4 uppercase tracking-[0.15em] text-sm font-medium hover:bg-foreground transition-colors w-full sm:w-auto text-center mt-4">
                Pre-order the Hardcover
              </button>
            </FadeIn>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
