import Link from 'next/link'
import Image from 'next/image'
import { Search, Shield, TrendingUp, CheckCircle, ArrowRight, AlertTriangle, Zap, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { EventCard } from '@/components/event-card'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CookieBanner } from '@/components/cookie-banner'
import { EVENTS } from '@/lib/events'

const featuredEvents = EVENTS.filter((e) => e.featured).slice(0, 6)

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&q=60"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 lg:pb-28">

            {/* MANDATORY DISCLAIMER — top 20% of page, always visible, non-closeable, body-text size — Google Ads secondary ticket seller policy compliant */}
            <div
              className="rounded-xl border-2 p-5 mb-10"
              style={{
                backgroundColor: 'var(--disclaimer-bg)',
                borderColor: 'var(--disclaimer-border)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle
                  className="w-5 h-5 shrink-0"
                  style={{ color: 'var(--disclaimer-text)' }}
                />
                <p
                  className="text-base font-bold uppercase tracking-wide"
                  style={{ color: 'var(--disclaimer-text)' }}
                >
                  Fontos tájékoztatás
                </p>
              </div>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: 'var(--disclaimer-text)' }}
              >
                A <strong>SportToursHungary.com egy másodlagos sportjegy-piactér (вторинний ринок)</strong> —
                kizárólag viszonteladóktól (harmadik felektől) származó{' '}
                <strong>peresztelt (újraértékesített) jegyeket</strong> kínál.
                Nem vagyunk az eredeti mérkőzések, versenyek szervezői, sem a hivatalos elsődleges jegyeladók.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--disclaimer-text)' }}
              >
                A weboldalon megjelenített jegyárak{' '}
                <strong>magasabbak lehetnek a névleges (kasszai) értéknél.</strong>{' '}
                A vásárlás kizárólag a partnereink weboldalán történik, az ő általános szerződési feltételeik szerint.{' '}
                <Link
                  href="/felelossegkizaras"
                  className="font-semibold underline hover:no-underline"
                  style={{ color: 'var(--disclaimer-text)' }}
                >
                  Teljes felelősség-kizárás
                </Link>
              </p>
            </div>

            <div className="max-w-2xl">
              <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
                Sportjegy-összehasonlító portál
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-primary-foreground leading-tight text-balance mb-5">
                Hasonlítsd össze a legjobb sportesemény-jegyajánlatokat
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-xl">
                Labdarúgás, Forma–1, kosárlabda, tenisz és még sok más sport –
                egy helyen, a megbízható viszonteladók áraival.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  <Link href="/esemenyek">
                    Sportesemények böngészése <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  <Link href="/tippek">Vásárlási tippek</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sport category pills */}
        <section className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Labdarúgás', href: '/esemenyek?kategoria=labdarugas' },
                { label: 'Forma–1', href: '/esemenyek?kategoria=formula1' },
                { label: 'Kosárlabda', href: '/esemenyek?kategoria=kosarlabda' },
                { label: 'Tenisz', href: '/esemenyek?kategoria=tenisz' },
                { label: 'Vízilabda', href: '/esemenyek?kategoria=vizilabda' },
                { label: 'Atlétika', href: '/esemenyek?kategoria=atletika' },
                { label: 'Jégkorong', href: '/esemenyek?kategoria=jegkorong' },
                { label: 'Boksz / MMA', href: '/esemenyek?kategoria=bokszMMA' },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-border bg-secondary text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground text-balance">
              Hogyan működik?
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              Három egyszerű lépés a legjobb sportjegy-ajánlat megtalálásához.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: '1. Keresés',
                desc: 'Böngésszen a sportesemények között – sport típusa, dátum és helyszín szerint szűrve.',
              },
              {
                icon: TrendingUp,
                title: '2. Összehasonlítás',
                desc: 'Hasonlítsa össze több partner ajánlatát – árak, szektortípusok és feltételek alapján.',
              },
              {
                icon: CheckCircle,
                title: '3. Vásárlás',
                desc: 'Kattintson a kiválasztott partnerre, és fejezze be a vásárlást az ő biztonságos oldalán.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured events */}
        <section className="bg-secondary/40 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground text-balance">
                  Kiemelt sportesemények
                </h2>
                <p className="text-muted-foreground mt-1 text-sm">Legkeresettebb meccsek és versenyek 2026-ban</p>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href="/esemenyek">
                  Összes <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Trust section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground text-balance">
              Miért érdemes velünk összehasonlítani?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Átlátható árak', desc: 'Minden partnernél a teljes árat mutatjuk, rejtett díjak nélkül.' },
              { icon: Zap, title: 'Több forrás', desc: 'Ticketmaster, StubHub, Viagogo, Eventim és hazai viszonteladók egy helyen.' },
              { icon: Users, title: 'Ellenőrzött partnerek', desc: 'Csak megbízható, ismert sportjegy-eladókkal dolgozunk együtt.' },
              { icon: TrendingUp, title: 'Naprakész adatok', desc: 'A sportjegyek árai és készletei rendszeresen frissülnek.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-xl p-6 border border-border">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <CookieBanner />
    </>
  )
}
