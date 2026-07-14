import { FadeIn } from '@/components/fade-in';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function Story() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-foreground">
      <div className="noise-overlay" />
      <SiteHeader />
      <section className="pt-40 pb-24 md:pb-32 px-6 md:px-12 lg:px-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <FadeIn>
              <p className="text-xs tracking-[0.2em] uppercase text-primary mb-6">Story</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-[1.1]">The Reality<br/>of the Build.</h1>
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
      <SiteFooter />
    </main>
  );
}
