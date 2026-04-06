import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { EventCatalog } from '@/components/event-catalog'
import { AlertTriangle } from 'lucide-react'

export const metadata = {
  title: 'Sportesemények – SportToursHungary',
  description:
    'Böngésszen a magyarországi és európai sportesemények között. Hasonlítsa össze az ajánlatokat: labdarúgás, Forma–1, kosárlabda, tenisz és még sok más.',
}

export default function EventsPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Disclaimer top */}
        <div
          className="rounded-lg border px-5 py-4 mb-8 flex items-start gap-3"
          style={{
            backgroundColor: 'var(--disclaimer-bg)',
            borderColor: 'var(--disclaimer-border)',
          }}
        >
          <AlertTriangle
            className="w-5 h-5 shrink-0 mt-0.5"
            style={{ color: 'var(--disclaimer-text)' }}
          />
          <p
            className="text-sm leading-relaxed font-medium"
            style={{ color: 'var(--disclaimer-text)' }}
          >
            Ez az oldal egy <strong>másodlagos sportjegy-összehasonlító portál</strong>.
            Nem vagyunk az eredeti jegyek kibocsátói – az árak viszonteladóktól származnak, és{' '}
            <strong>meghaladhatják a névértéket</strong>.
          </p>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2 text-balance">
          Sportesemények
        </h1>
        <p className="text-muted-foreground mb-8">
          Magyarországi és európai labdarúgás, Forma–1, kosárlabda, tenisz és más sportok – összehasonlított árakkal.
        </p>

        <EventCatalog />
      </main>
      <SiteFooter />
    </>
  )
}
