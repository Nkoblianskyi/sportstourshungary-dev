import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata = {
  title: 'Felelősség kizárása – SportToursHungary',
  description: 'Felelősség kizárása a SportToursHungary.com másodlagos sportjegy-összehasonlító portálra vonatkozóan.',
}

export default function DisclaimerPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-3xl font-extrabold text-foreground mb-6 text-balance">
          Felelősség kizárása
        </h1>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-sm">
          <p>
            A <strong className="text-foreground">SportToursHungary.com</strong> (a továbbiakban: „Portál")
            egy <strong className="text-foreground">másodlagos piaci sportjegy-összehasonlító szolgáltatás</strong>.
            A Portál nem jegyeladó, és nem az eredeti sportesemények szervezője vagy jegykibocsátója.
          </p>
          <p>
            A Portálon megjelenített árak, elérhetőségek és ajánlatok{' '}
            <strong className="text-foreground">harmadik feles viszonteladóktól</strong> (pl. Ticketmaster,
            StubHub, Viagogo, Eventim, Jegy.hu, Jegymester) származnak. Az árak{' '}
            <strong className="text-foreground">meghaladhatják a névértéket</strong>, és bármikor változhatnak.
          </p>
          <p>A Portál nem vállal felelősséget:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>a viszonteladók által kínált sportjegyek érvényességéért;</li>
            <li>az árak pontosságáért és naprakészségéért;</li>
            <li>a vásárlási folyamat során felmerülő problémákért;</li>
            <li>a sportesemény lemondásáért, elhalasztásáért vagy megváltoztatásáért;</li>
            <li>a harmadik feles weboldalak tartalmáért vagy adatkezeléséért.</li>
          </ul>
          <p>
            A vásárlás minden esetben a kiválasztott partner weboldalán és az ő feltételei szerint történik.
            Vásárlás előtt kérjük, tájékozódjon a partner visszatérítési és csere-politikájáról.
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
