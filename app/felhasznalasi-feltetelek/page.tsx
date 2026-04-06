import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata = {
  title: 'Felhasználási feltételek – SportToursHungary',
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-3xl font-extrabold text-foreground mb-6 text-balance">
          Felhasználási feltételek
        </h1>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-sm">
          <p>
            A SportToursHungary.com weboldalának használatával Ön elfogadja az alábbi feltételeket.
          </p>
          <h2 className="font-display font-bold text-base text-foreground">A szolgáltatás jellege</h2>
          <p>
            A portál kizárólag sportjegy-összehasonlítási célokat szolgál. Nem vagyunk jegyeladók, és a partnereink
            oldalain történő vásárlásért nem vállalunk felelősséget.
          </p>
          <h2 className="font-display font-bold text-base text-foreground">Tiltott tevékenységek</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>A portál tartalmának engedély nélküli másolása, terjesztése</li>
            <li>Automatizált adatgyűjtés (scraping) az engedélyünk nélkül</li>
            <li>A portál céljától eltérő vagy jogellenes célokra való felhasználás</li>
          </ul>
          <h2 className="font-display font-bold text-base text-foreground">Módosítások</h2>
          <p>
            Fenntartjuk a jogot a feltételek módosítására. A módosítások hatályba lépéséről a weboldalon értesítjük felhasználóinkat.
          </p>
          <div className="bg-secondary/50 rounded-lg p-4 border border-border">
            <p className="font-semibold text-foreground mb-1">Üzemeltető</p>
            <address className="not-italic text-sm leading-relaxed">
              K.C. NTOMATA LIMITED<br />
              Stylianou Lena,<br />
              24 Christiana Court, Flat/Office 202,<br />
              Strovolos, 2019 Nicosia, Cyprus
            </address>
          </div>
          <p className="text-xs text-muted-foreground pt-4 border-t border-border">
            Utoljára frissítve: 2026. január 1.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
