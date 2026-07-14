import { FadeIn } from '@/components/fade-in';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function Dedication() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-foreground">
      <div className="noise-overlay" />
      <SiteHeader />
      <section className="pt-40 pb-32 px-6 min-h-[80vh] flex items-center justify-center text-center bg-background">
        <FadeIn>
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-xs tracking-[0.2em] uppercase text-primary">Dedication</p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground/90 leading-relaxed">
              "To my mother, who taught me that a closed door is simply a redirect. Your strength is the mortar in every brick I lay."
            </p>
            <div className="w-1 h-12 bg-primary/30 mx-auto" />
          </div>
        </FadeIn>
      </section>
      <SiteFooter />
    </main>
  );
}
