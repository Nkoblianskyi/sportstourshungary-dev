import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata = {
  title: 'Cookie-politika – SportToursHungary',
}

export default function CookiePage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-3xl font-extrabold text-foreground mb-6 text-balance">
          Cookie-politika
        </h1>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-sm">
          <p>
            A SportToursHungary.com cookie-kat (sütiket) és hasonló technológiákat használ a weboldal
            működésének biztosításához és a felhasználói élmény javításához.
          </p>
          <h2 className="font-display font-bold text-base text-foreground">Milyen cookie-kat használunk?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-foreground">Elengedhetetlen sütik:</strong> A weboldal alapvető működéséhez szükségesek.</li>
            <li><strong className="text-foreground">Analitikai sütik:</strong> A látogatói viselkedés névtelen elemzéséhez (pl. Vercel Analytics).</li>
            <li><strong className="text-foreground">Preferencia sütik:</strong> A felhasználói beállítások mentéséhez (pl. cookie-hozzájárulás).</li>
          </ul>
          <h2 className="font-display font-bold text-base text-foreground">Cookie-k kezelése</h2>
          <p>
            Böngészője beállításaiban bármikor letilthatja vagy törölheti a sütiket. Felhívjuk figyelmét,
            hogy egyes sütik letiltása a weboldal egyes funkcióinak működését befolyásolhatja.
          </p>
          <h2 className="font-display font-bold text-base text-foreground">Hozzájárulás</h2>
          <p>
            A weboldal böngészésével Ön hozzájárul a fenti sütik használatához. Hozzájárulását bármikor
            visszavonhatja böngészője beállításain keresztül.
          </p>
          <p className="text-xs text-muted-foreground pt-4 border-t border-border">
            Utoljára frissítve: 2026. január 1.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
