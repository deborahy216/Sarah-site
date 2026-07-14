import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { FadeIn } from '@/components/fade-in';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 w-full max-w-7xl mx-auto items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col justify-center space-y-10">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-foreground font-serif">
              There is <span className="italic text-primary">always</span> a way forward.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-foreground/80 max-w-lg font-sans leading-relaxed">
              Property entrepreneur, investor, and publisher. Building portfolios, amplifying voices, and rewriting the rules for women in business.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Link
              href="/story"
              className="group flex items-center space-x-4 text-sm tracking-widest uppercase font-semibold text-primary transition-colors hover:text-foreground cursor-pointer w-fit"
            >
              <span>Read My Story</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </FadeIn>
        </div>
        <div className="lg:col-span-5 relative">
          <FadeIn delay={0.3}>
            <div className="aspect-[4/5] overflow-hidden bg-muted relative">
              <motion.img
                src="/sarah-hero.jpg"
                alt="Sarah Deborah Stephenson"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              <div className="absolute inset-0 border border-foreground/10 pointer-events-none" />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="hidden md:flex absolute bottom-12 left-12 lg:left-24 flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-foreground/20 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-foreground"
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-foreground">
      <div className="noise-overlay" />
      <SiteHeader />
      <Hero />
      <SiteFooter />
    </main>
  );
}
