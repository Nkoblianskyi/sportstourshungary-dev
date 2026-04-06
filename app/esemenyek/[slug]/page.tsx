import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Tag, ArrowLeft, ExternalLink, AlertTriangle, Users } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { EVENTS } from '@/lib/events'
import { EventCard } from '@/components/event-card'

interface PageProps {
  params: Promise<{ slug: string }>
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'HUF',
    maximumFractionDigits: 0,
  }).format(price)
}

export async function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const event = EVENTS.find((e) => e.slug === slug)
  if (!event) return {}
  return {
    title: `${event.title} – SportToursHungary`,
    description: event.description,
  }
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params
  const event = EVENTS.find((e) => e.slug === slug)
  if (!event) notFound()

  const related = EVENTS.filter((e) => e.category === event.category && e.id !== event.id).slice(0, 3)

  return (
    <>
      <SiteHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">Főoldal</Link>
          <span>/</span>
          <Link href="/esemenyek" className="hover:text-foreground transition-colors">Sportesemények</Link>
          <span>/</span>
          <span className="text-foreground line-clamp-1">{event.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left col */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Image */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

            {/* Title + meta */}
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className="bg-primary text-primary-foreground">{event.categoryLabel}</Badge>
                {event.country !== 'Magyarország' && (
                  <Badge variant="secondary">{event.country}</Badge>
                )}
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground leading-tight text-balance mb-4">
                {event.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-primary" />
                  {event.dateFormatted}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary" />
                  {event.venue}, {event.city}
                </div>
                <div className="flex items-center gap-1.5">
                  <Tag className="w-4 h-4 text-accent" />
                  {formatPrice(event.priceFrom)} – {formatPrice(event.priceTo)}
                </div>
              </div>
            </div>

            {/* MANDATORY DISCLAIMER — top section of event page, always visible, non-closeable, body-text size — Google Ads policy compliant */}
            <div
              className="rounded-xl border-2 p-5"
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
                Nem vagyunk az eredeti mérkőzések vagy versenyek szervezői, sem a hivatalos elsődleges jegyeladók.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--disclaimer-text)' }}
              >
                A megjelenített jegyárak{' '}
                <strong>magasabbak lehetnek a névleges (kasszai) értéknél.</strong>{' '}
                A vásárlás kizárólag a kiválasztott partner weboldalán történik, az ő általános szerződési feltételeik szerint.{' '}
                <Link
                  href="/felelossegkizaras"
                  className="font-semibold underline hover:no-underline"
                  style={{ color: 'var(--disclaimer-text)' }}
                >
                  Teljes felelősség-kizárás
                </Link>
              </p>
            </div>

            {/* Description */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-display font-bold text-lg text-foreground mb-3">Az eseményről</h2>
              <p className="text-muted-foreground leading-relaxed">{event.description}</p>
            </div>
          </div>

          {/* Right col – partner offers */}
          <div className="flex flex-col gap-4">
            <div className="bg-card border border-border rounded-xl p-5 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-4 h-4 text-primary" />
                <h2 className="font-display font-bold text-base text-foreground">
                  Elérhető ajánlatok ({event.partners.length})
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                {event.partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="border border-border rounded-lg p-4 hover:border-primary transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm text-foreground">{partner.name}</span>
                      <Badge variant="secondary" className="text-xs">Viszonteladó</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      {formatPrice(partner.priceFrom)} – {formatPrice(partner.priceTo)}
                    </p>
                    <Button asChild size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <a href={partner.url} target="_blank" rel="noopener noreferrer">
                        Megtekintem <ExternalLink className="ml-1.5 w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                * Az árak tájékoztató jellegűek, változhatnak. A vásárlás a partner oldalán történik.
              </p>
            </div>

            <Button asChild variant="outline" size="sm" className="w-full">
              <Link href="/esemenyek">
                <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Vissza a sportesemé­nyekhez
              </Link>
            </Button>
          </div>
        </div>

        {/* Related events */}
        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="font-display text-xl font-bold text-foreground mb-5">
              Hasonló sportesemények
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  )
}
