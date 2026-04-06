import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ContactForm } from '@/components/contact-form'
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

        <ContactForm />
      </main>
      <SiteFooter />
    </>
  )
}
