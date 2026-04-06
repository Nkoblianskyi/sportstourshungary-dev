import Link from 'next/link'
import { Trophy } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      {/* Main disclaimer */}
      <div className="bg-accent/20 border-t-4 border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-sm text-primary-foreground/90 leading-relaxed text-center max-w-3xl mx-auto font-medium">
            <strong className="text-accent">Fontos közlemény:</strong> A SportToursHungary.com egy{' '}
            <strong>másodlagos sportjegy-összehasonlító portál</strong>. Nem vagyunk az eredeti jegyek kibocsátói.
            Az árakat harmadik feles viszonteladóktól gyűjtjük, és azok{' '}
            <strong>meghaladhatják a névértéket</strong>.
            Mindig ellenőrizze a partneroldal feltételeit vásárlás előtt.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="bg-accent rounded-md p-1.5">
                <Trophy className="w-4 h-4 text-accent-foreground" />
              </span>
              <span className="font-display text-lg font-bold">
                SportTours<span className="text-accent">Hungary</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Sportesemény-jegy összehasonlítás Magyarországon és Európában.
            </p>
            <div className="text-xs text-primary-foreground/50 leading-relaxed">
              <p className="font-semibold text-primary-foreground/70 mb-1">K.C. NTOMATA LIMITED</p>
              <p>Stylianou Lena,</p>
              <p>24 Christiana Court, Flat/Office 202,</p>
              <p>Strovolos, 2019 Nicosia, Cyprus</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide text-primary-foreground/50 mb-3">
              Navigáció
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Főoldal' },
                { href: '/esemenyek', label: 'Sportesemények' },
                { href: '/tippek', label: 'Vásárlási tippek' },
                { href: '/rolunk', label: 'Rólunk' },
                { href: '/kapcsolat', label: 'Kapcsolat' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide text-primary-foreground/50 mb-3">
              Jogi
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/adatvedelmi-iranyelvek', label: 'Adatvédelmi irányelvek' },
                { href: '/felhasznalasi-feltetelek', label: 'Felhasználási feltételek' },
                { href: '/cookie-politika', label: 'Cookie-politika' },
                { href: '/felelossegkizaras', label: 'Felelősség kizárása' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide text-primary-foreground/50 mb-3">
              Partnereink
            </h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Ticketmaster</li>
              <li>StubHub</li>
              <li>Viagogo</li>
              <li>Eventim</li>
              <li>Jegy.hu</li>
              <li>Jegymester</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} SportToursHungary.com – Minden jog fenntartva.</p>
          <p>Ez az oldal egy <strong className="text-primary-foreground/70">másodlagos piac</strong> – nem az elsődleges jegykibocsátó.</p>
        </div>
      </div>
    </footer>
  )
}
