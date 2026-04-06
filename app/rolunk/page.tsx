import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { AlertTriangle, Mail, Globe, MapPin, Building2 } from 'lucide-react'

export const metadata = {
  title: 'Rólunk – SportToursHungary',
  description:
    'Ismerje meg a SportToursHungary.com csapatát. Sportjegy-összehasonlító portál Magyarország és Európa sporteseményeire.',
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Disclaimer */}
        <div
          className="rounded-xl border-2 p-5 flex items-start gap-3 mb-10"
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
            className="text-sm font-medium leading-relaxed"
            style={{ color: 'var(--disclaimer-text)' }}
          >
            <strong>Fontos:</strong> A SportToursHungary.com egy{' '}
            <strong>másodlagos piaci sportjegy-összehasonlító portál</strong>. Nem vagyunk az
            eredeti jegyek kibocsátói – az árak viszonteladóktól származnak, és{' '}
            <strong>meghaladhatják a névértéket</strong>.
          </p>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground text-balance mb-6">
          Rólunk
        </h1>

        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            A <strong className="text-foreground">SportToursHungary.com</strong> egy független
            sportjegy-összehasonlító portál, amelynek célja, hogy megkönnyítse a magyarországi és
            európai sportesemények jegyeinek megtalálását és összehasonlítását.
          </p>
          <p>
            Platformunk kizárólag <strong className="text-foreground">összehasonlítási szolgáltatást</strong>{' '}
            nyújt: a sportjegyek árait és elérhetőségét harmadik feles viszonteladóktól (pl. Ticketmaster,
            StubHub, Viagogo, Eventim, Jegy.hu, Jegymester) gyűjtjük össze egy helyen.
          </p>
          <p>
            Nem vagyunk jegyeladók, és nem vállalunk felelősséget a partneroldalak által kínált jegyek
            érvényességéért, árváltozásaiért vagy a vásárlási folyamatért. A vásárlás minden esetben
            a kiválasztott partner weboldalán történik, az ő általános szerződési feltételei szerint.
          </p>

          <div className="bg-secondary/50 rounded-xl p-6 mt-8 border border-border">
            <h2 className="font-display font-bold text-lg text-foreground mb-4">Partnereink</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              {['Ticketmaster', 'StubHub', 'Viagogo', 'Eventim', 'Jegy.hu', 'Jegymester'].map((p) => (
                <li key={p} className="flex items-center gap-2 text-foreground font-medium">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
              <Globe className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm">Weboldal</p>
                <p className="text-xs text-muted-foreground">sporttourshungary.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
              <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm">E-mail</p>
                <p className="text-xs text-muted-foreground">info@sporttourshungary.com</p>
              </div>
            </div>
          </div>

          {/* Company address */}
          <div className="bg-card border border-border rounded-xl p-6 mt-2">
            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-2">Üzemeltető cég</p>
                <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">K.C. NTOMATA LIMITED</strong><br />
                  Stylianou Lena,<br />
                  24 Christiana Court, Flat/Office 202,<br />
                  Strovolos, 2019 Nicosia, Cyprus
                </address>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
