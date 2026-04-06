'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = sessionStorage.getItem('cookie-consent')
    if (!accepted) setVisible(true)
  }, [])

  const accept = () => {
    sessionStorage.setItem('cookie-consent', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie-hozzájárulás"
      className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-xl border-t-4 border-accent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm leading-relaxed flex-1 text-primary-foreground/90">
          Weboldalunk sütiket (cookie-kat) használ a jobb felhasználói élmény érdekében.
          A böngészés folytatásával elfogadja a{' '}
          <Link href="/cookie-politika" className="underline text-accent hover:text-accent/80 transition-colors">
            cookie-politikánkat
          </Link>
          .
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={accept}
            className="bg-accent text-accent-foreground text-sm font-semibold px-4 py-2 rounded-md hover:bg-accent/90 transition-colors"
          >
            Elfogadom
          </button>
          <button
            onClick={accept}
            aria-label="Bezárás"
            className="p-1.5 rounded-md hover:bg-primary-foreground/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
