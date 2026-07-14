import { FadeIn } from '@/components/fade-in';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const works = [
  {
    tag: 'Stage Play',
    title: 'The Standing Clause',
    year: '2025',
    desc: 'A one-act play about a landlord and tenant locked in a negotiation that becomes a reckoning with fairness, power, and who gets to write the rules.',
  },
  {
    tag: 'Short Story',
    title: 'Keys to a House I Almost Lost',
    year: '2024',
    desc: 'A personal essay on the deal that nearly ended everything, and the phone call that saved it — first published in an independent anthology.',
  },
  {
    tag: 'Speaking',
    title: '"Build Like It Owes You Nothing"',
    year: '2023 – Present',
    desc: 'A recurring talk for founders and investors on building without waiting for permission, funding, or a perfect plan.',
  },
  {
    tag: 'Collaboration',
    title: 'Stephenson Editions Mentorship Circle',
    year: '2022 – Present',
    desc: 'A small, invite-only writing circle supporting first-time authors from manuscript to publication.',
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-foreground">
      <div className="noise-overlay" />
      <SiteHeader />
      <section className="pt-40 pb-16 px-6 md:px-12 lg:px-24">
        <FadeIn>
          <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">Creative Portfolio</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground max-w-3xl">Storytelling beyond the page.</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mt-6">Property and publishing taught me structure. Everything here is where I break it — plays, essays, talks, and the people I've mentored along the way.</p>
        </FadeIn>
      </section>

      <section className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto divide-y divide-border/50">
          {works.map((w, i) => (
            <FadeIn key={w.title} delay={i * 0.1}>
              <div className="grid md:grid-cols-12 gap-6 py-10 items-baseline">
                <div className="md:col-span-3">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary">{w.tag}</p>
                  <p className="text-sm text-foreground/40 mt-1">{w.year}</p>
                </div>
                <div className="md:col-span-9">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">{w.title}</h2>
                  <p className="text-foreground/70 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
