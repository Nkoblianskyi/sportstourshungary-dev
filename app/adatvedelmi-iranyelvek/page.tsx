import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata = {
  title: 'Adatvédelmi irányelvek – SportToursHungary',
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-3xl font-extrabold text-foreground mb-6 text-balance">
          Adatvédelmi irányelvek
        </h1>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-sm">
          <p>
            A SportToursHungary.com elkötelezett a felhasználók személyes adatainak védelme iránt.
            Jelen adatvédelmi irányelvek leírják, milyen adatokat gyűjtünk, hogyan használjuk azokat,
            és milyen jogai vannak Önnek.
          </p>
          <h2 className="font-display font-bold text-base text-foreground">Gyűjtött adatok</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Kapcsolati adatok (ha Ön üzenetet küld nekünk): név, e-mail cím</li>
            <li>Böngészési adatok: látogatott oldalak, kattintások (névtelenül, analytics célból)</li>
            <li>Cookie-k és hasonló technológiák (lásd Cookie-politika)</li>
          </ul>
          <h2 className="font-display font-bold text-base text-foreground">Adatfelhasználás</h2>
          <p>Az adatokat kizárólag a portál működtetéséhez, ügyfélszolgálati célokra és a weboldal fejlesztéséhez használjuk. Nem adjuk el és nem osztjuk meg harmadik felekkel.</p>
          <h2 className="font-display font-bold text-base text-foreground">Jogai</h2>
          <p>Ön jogosult hozzáférni, módosítani vagy törölni személyes adatait. Kérésével forduljon hozzánk: info@sporttourshungary.com</p>
          <div className="bg-secondary/50 rounded-lg p-4 border border-border">
            <p className="font-semibold text-foreground mb-1">Adatkezelő</p>
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
