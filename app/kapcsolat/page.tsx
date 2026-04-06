import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Mail, MessageSquare, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Kapcsolat – SportToursHungary',
  description: 'Vegye fel velünk a kapcsolatot a SportToursHungary portállal kapcsolatos kérdéseivel.',
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground text-balance mb-3">
          Kapcsolat
        </h1>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Kérdése van a portál működésével, partnereinkkel vagy egy konkrét sporteseménnyel kapcsolatban?
          Írjon nekünk!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">E-mail</p>
              <a
                href="mailto:info@sporttourshungary.com"
                className="text-sm text-primary hover:underline break-all"
              >
                info@sporttourshungary.com
              </a>
              <p className="text-xs text-muted-foreground mt-1">Általában 1–2 munkanapon belül válaszolunk.</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Támogatás</p>
              <p className="text-sm text-muted-foreground">
                Jegyvásárlással kapcsolatos probléma esetén közvetlenül a viszonteladó ügyfélszolgálatát
                keresse meg.
              </p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Cím</p>
              <address className="not-italic text-xs text-muted-foreground leading-relaxed">
                K.C. NTOMATA LIMITED<br />
                Stylianou Lena,<br />
                24 Christiana Court, Flat/Office 202,<br />
                Strovolos, 2019 Nicosia, Cyprus
              </address>
            </div>
          </div>
        </div>

        {/* Contact form (static/cosmetic) */}
        <div className="bg-card border border-border rounded-xl p-8">
          <h2 className="font-display font-bold text-xl text-foreground mb-6">Üzenet küldése</h2>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Neve <span className="text-destructive">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Kovács János"
                  className="border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  E-mail <span className="text-destructive">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="pelda@email.hu"
                  className="border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">
                Tárgy
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Az üzenet tárgya"
                className="border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Üzenet <span className="text-destructive">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Írja ide üzenetét..."
                className="border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <button
              type="submit"
              className="self-start bg-primary text-primary-foreground font-semibold text-sm px-6 py-2.5 rounded-md hover:bg-primary/90 transition-colors"
            >
              Küldés
            </button>
          </form>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
