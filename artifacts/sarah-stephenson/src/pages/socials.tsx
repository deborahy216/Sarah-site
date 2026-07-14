import { Instagram, Linkedin, Mail, Mic, Twitter, Youtube } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const channels = [
  { icon: Instagram, label: 'Instagram', handle: '@sdstephenson', note: 'Behind-the-scenes on portfolio deals and publishing life.' },
  { icon: Linkedin, label: 'LinkedIn', handle: 'Sarah Deborah Stephenson', note: 'Long-form thoughts on property strategy and business resilience.' },
  { icon: Twitter, label: 'X (Twitter)', handle: '@sdstephenson', note: 'Quick takes and real-time updates from the field.' },
  { icon: Youtube, label: 'YouTube', handle: 'S. D. Stephenson', note: 'Walkthroughs, market breakdowns, and author Q&As.' },
];

const episodes = [
  { title: 'Breaking Ground, Literally', desc: 'On leaving a stable job to buy a first property with no safety net.' },
  { title: 'The Business of Being Unapologetic', desc: 'Why resilience — not luck — is the real asset class.' },
  { title: 'From Spreadsheet to Manuscript', desc: 'How running a portfolio taught me to structure a book.' },
];

export default function Socials() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-foreground">
      <div className="noise-overlay" />
      <SiteHeader />
      <section className="pt-40 pb-16 px-6 md:px-12 lg:px-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">Socials &amp; Podcast</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Follow the build in real time.</h1>
            <p className="text-lg text-background/70 max-w-2xl">Where I share the parts of the journey that don't make it into the books — deals in progress, lessons learned the hard way, and conversations with people building alongside me.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {channels.map((c, i) => (
            <FadeIn key={c.label} delay={i * 0.1}>
              <a href="#" className="group block p-8 border border-border/60 hover:border-primary transition-colors h-full">
                <c.icon className="w-6 h-6 text-primary mb-6" />
                <p className="font-serif text-xl text-foreground mb-1">{c.label}</p>
                <p className="text-sm text-foreground/50 mb-4">{c.handle}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{c.note}</p>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24 bg-card">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-10">
              <Mic className="w-5 h-5 text-primary" />
              <h2 className="text-2xl md:text-3xl font-serif text-foreground">The Breaking Ground Podcast</h2>
            </div>
          </FadeIn>
          <div className="space-y-6">
            {episodes.map((ep, i) => (
              <FadeIn key={ep.title} delay={i * 0.1}>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-6 border-b border-border/50">
                  <span className="text-xs uppercase tracking-[0.15em] text-primary shrink-0">Episode {i + 1}</span>
                  <div>
                    <p className="font-serif text-xl text-foreground">{ep.title}</p>
                    <p className="text-foreground/70 mt-1">{ep.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
