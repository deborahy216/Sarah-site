import { FadeIn } from '@/components/fade-in';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function Bio() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-foreground">
      <div className="noise-overlay" />
      <SiteHeader />
      <section className="pt-40 pb-16 px-6 md:px-12 lg:px-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <FadeIn>
              <p className="text-xs tracking-[0.2em] uppercase text-primary mb-6">Bio / Education / Experience</p>
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

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <FadeIn>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">Education</p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">Grounded in the fundamentals.</h2>
            <ul className="space-y-4 text-foreground/80 font-sans">
              <li className="border-l-2 border-primary/40 pl-4">
                <p className="font-medium text-foreground">BA, Business &amp; Finance</p>
                <p className="text-sm">Studied the numbers before I ever bought a door — the foundation every deal since has been built on.</p>
              </li>
              <li className="border-l-2 border-primary/40 pl-4">
                <p className="font-medium text-foreground">Professional Certificate, Real Estate Investment</p>
                <p className="text-sm">Formal training in valuation, financing structures, and portfolio strategy.</p>
              </li>
              <li className="border-l-2 border-primary/40 pl-4">
                <p className="font-medium text-foreground">Independent Study, Publishing &amp; Editorial Craft</p>
                <p className="text-sm">Self-taught through years of manuscript work before launching my own imprint.</p>
              </li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">Experience</p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">Built one deal, one book, at a time.</h2>
            <ul className="space-y-4 text-foreground/80 font-sans">
              <li className="border-l-2 border-primary/40 pl-4">
                <p className="font-medium text-foreground">Founder, S. D. Stephenson Property</p>
                <p className="text-sm">2018 – Present. Acquired and manage a residential portfolio across multiple markets.</p>
              </li>
              <li className="border-l-2 border-primary/40 pl-4">
                <p className="font-medium text-foreground">Founder, Stephenson Editions</p>
                <p className="text-sm">2022 – Present. An independent imprint publishing unfiltered stories of ambition and resilience.</p>
              </li>
              <li className="border-l-2 border-primary/40 pl-4">
                <p className="font-medium text-foreground">Mentor &amp; Speaker</p>
                <p className="text-sm">Advises first-time investors and writers navigating their own breaking-ground moment.</p>
              </li>
            </ul>
          </FadeIn>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
