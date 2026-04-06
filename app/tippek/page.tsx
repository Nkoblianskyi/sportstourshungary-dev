import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CheckCircle, AlertTriangle, ShieldCheck, Eye } from 'lucide-react'

export const metadata = {
  title: 'Vásárlási tippek – SportToursHungary',
  description:
    'Hasznos tippek biztonságos sportjegy-vásárláshoz másodlagos piacon. Tudja meg, mire figyeljen, és kerülje el a csalásokat.',
}

const tips = [
  {
    icon: ShieldCheck,
    title: 'Ellenőrizze a viszonteladót',
    body: 'Csak ismert, megbízható platformokon vásároljon – például Ticketmaster, StubHub, Viagogo vagy Eventim. Kerülje az ismeretlen közösségi médiás hirdetőket.',
  },
  {
    icon: AlertTriangle,
    title: 'Figyeljen az árakra',
    body: 'A másodlagos piacon a sportjegyek árai magasabbak lehetnek a névértéknél. Ez törvényes és általánosan elfogadott, de mindig hasonlítsa össze a különböző ajánlatokat.',
  },
  {
    icon: Eye,
    title: 'Olvassa el az apró betűs részt',
    body: 'Vásárlás előtt mindig olvassa el a feltételeket: visszatérítési szabályok, szállítási idő, visszaigazolás módja. Ezek platformonként változhatnak.',
  },
  {
    icon: CheckCircle,
    title: 'Korai foglalás = alacsonyabb ár',
    body: 'A nagy sportesemények (F1, válogatott meccsek, bajnokok ligája) jegyeinek ára a rendezvény közeledtével általában emelkedik. Minél korábban foglal, annál jobb árat érhet el.',
  },
  {
    icon: ShieldCheck,
    title: 'Biztonságos fizetés',
    body: 'Csak biztonságos, titkosított fizetési oldalon adja meg bankkártya adatait. Ellenőrizze a https:// előtagot és a zárt lakat ikont a böngészőben.',
  },
  {
    icon: AlertTriangle,
    title: 'Kerülje az informális ajánlatokat',
    body: 'Ha valaki személyesen, készpénzért kínál sportjegyet a stadion előtt – legyen óvatos. Ezek a jegyek hamisítványok vagy már érvénytelenek lehetnek.',
  },
]

export default function TipsPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Disclaimer banner */}
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
            className="text-sm leading-relaxed font-medium"
            style={{ color: 'var(--disclaimer-text)' }}
          >
            <strong>Emlékeztető:</strong> A SportToursHungary.com egy{' '}
            <strong>másodlagos sportjegy-összehasonlító portál</strong>. Az ajánlatok viszonteladóktól
            (harmadik felektől) származnak – az árak <strong>meghaladhatják a névértéket</strong>.
          </p>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground text-balance mb-3">
          Vásárlási tippek
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-10">
          Ismerje meg a másodlagos sportjegypiac működését, és vásároljon biztonsággal a kedvenc sporteseményeire.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tips.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-display font-bold text-base text-foreground mb-2">{title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
