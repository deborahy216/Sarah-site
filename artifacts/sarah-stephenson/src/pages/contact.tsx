import { Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function Contact() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-foreground">
      <div className="noise-overlay" />
      <SiteHeader />
      <section className="pt-40 pb-24 md:pb-32 px-6 md:px-12 lg:px-24 bg-foreground text-background min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7 lg:col-span-6 space-y-8">
            <FadeIn>
              <p className="text-xs tracking-[0.2em] uppercase text-primary">Contact</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-4">Let's keep the conversation honest.</h1>
              <p className="text-background/70 text-lg max-w-md mt-6">
                Join my private newsletter for unfiltered thoughts on property, publishing, and the reality of running a business.
              </p>
              <form className="flex w-full max-w-md gap-0 mt-8" onSubmit={(e) => e.preventDefault()}>
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
            </FadeIn>
          </div>
          <div className="md:col-span-5 lg:col-span-4 lg:col-start-9 flex flex-col md:items-end space-y-12">
            <FadeIn delay={0.2}>
              <div className="flex space-x-8">
                <a href="#" className="text-background/50 hover:text-background transition-colors"><Instagram className="w-6 h-6" /></a>
                <a href="#" className="text-background/50 hover:text-background transition-colors"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="text-background/50 hover:text-background transition-colors"><Twitter className="w-6 h-6" /></a>
                <a href="#" className="text-background/50 hover:text-background transition-colors"><Mail className="w-6 h-6" /></a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
