import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }}
      className="relative text-xs tracking-[0.2em] uppercase after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </a>
  );
}

function Header() {
  return (
    <nav className="absolute top-0 left-0 w-full p-6 md:px-12 lg:px-24 z-50 flex justify-between items-center mix-blend-difference text-white">
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="font-serif text-xl md:text-2xl tracking-wide"
      >
        S. D. Stephenson
      </a>
      <div className="hidden md:flex items-center gap-10">
        <NavLink href="#about">Story</NavLink>
        <NavLink href="#book">The Book</NavLink>
        <NavLink href="#dedication">Dedication</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] flex items-center pt-24 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
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
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center space-x-4 text-sm tracking-widest uppercase font-semibold text-primary transition-colors hover:text-foreground cursor-pointer"
            >
              <span>Read My Story</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </button>
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

function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-5">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-[1.1]">The Reality<br/>of the Build.</h2>
            <div className="w-12 h-1 bg-primary mb-8" />
          </FadeIn>
        </div>
        <div className="lg:col-span-7 space-y-8 text-lg md:text-xl text-background/80 leading-relaxed font-sans font-light">
          <FadeIn delay={0.1}>
            <p>
              I bought my first property in 2018. I didn't have a blueprint, and the market wasn't waiting for me to figure it out. Since then, I've built a robust residential portfolio and launched a publishing house to amplify voices that the traditional industry ignores.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>
              But the highlight reel only tells half the story. The truth is found in the setbacks—the deals that fell through, the doors that closed, the moments when quitting made the most sense.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-background font-medium">
              I share my journey not to paint a picture of effortless success, but to prove that resilience is the only currency that truly matters. If you're a woman navigating the world of business: keep going. Your breakthrough is on the other side of your resistance.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Book() {
  return (
    <section id="book" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-card overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground">Breaking Ground</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Part memoir, part tactical manifesto. Breaking Ground chronicles my journey from an outsider in the property market to building a self-sustaining portfolio and a publishing imprint.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-foreground/80 leading-relaxed">
              It’s an unfiltered look at the cost of ambition, the anatomy of a setback, and the quiet power of refusing to yield. No platitudes. Just the reality of what it takes to build something that lasts.
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
  );
}

function Dedication() {
  return (
    <section id="dedication" className="py-32 px-6 flex items-center justify-center text-center bg-background border-t border-border/50">
      <FadeIn>
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground/90 leading-relaxed">
            "To my mother, who taught me that a closed door is simply a redirect. Your strength is the mortar in every brick I lay."
          </p>
          <div className="w-1 h-12 bg-primary/30 mx-auto" />
        </div>
      </FadeIn>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-7 lg:col-span-6 space-y-8">
          <h3 className="text-3xl md:text-4xl font-serif">Let's keep the conversation honest.</h3>
          <p className="text-background/70 text-lg max-w-md">
            Join my private newsletter for unfiltered thoughts on property, publishing, and the reality of running a business.
          </p>
          <form className="flex w-full max-w-md gap-0" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent border border-background/20 text-background px-4 py-4 flex-grow focus:outline-none focus:border-background transition-colors placeholder:text-background/40"
              required
            />
            <button type="submit" className="bg-background text-foreground px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary border border-background transition-colors">
              Join
            </button>
          </form>
        </div>
        <div className="md:col-span-5 lg:col-span-4 lg:col-start-9 flex flex-col md:items-end space-y-12">
          <div className="flex space-x-8">
            <a href="#" className="text-background/50 hover:text-background transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="text-background/50 hover:text-background transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="text-background/50 hover:text-background transition-colors"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="text-background/50 hover:text-background transition-colors"><Mail className="w-6 h-6" /></a>
          </div>
          <div className="text-background/40 text-sm space-y-2 text-left md:text-right">
            <p className="font-serif italic text-lg text-background/60">S. D. Stephenson</p>
            <p>&copy; {new Date().getFullYear()} Sarah Deborah Stephenson.<br/>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-foreground">
      <div className="noise-overlay" />
      <Header />
      <Hero />
      <About />
      <Book />
      <Dedication />
      <Footer />
    </main>
  );
}