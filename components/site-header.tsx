'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Trophy } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/', label: 'Főoldal' },
  { href: '/esemenyek', label: 'Sportesemények' },
  { href: '/tippek', label: 'Vásárlási tippek' },
  { href: '/rolunk', label: 'Rólunk' },
  { href: '/kapcsolat', label: 'Kapcsolat' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      {/* Top disclaimer bar */}
      <div className="bg-accent text-accent-foreground text-center text-xs py-1.5 px-4 font-medium leading-relaxed">
        Figyelem: Ez az oldal egy <strong>sportjegy-összehasonlító portál</strong> – nem jegyeladó. Az árak a névértéknél magasabbak lehetnek.
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="bg-accent rounded-md p-1.5">
              <Trophy className="w-5 h-5 text-accent-foreground" />
            </span>
            <span className="font-display text-xl font-bold text-primary-foreground tracking-tight">
              SportTours<span className="text-accent">Hungary</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-primary-foreground/15 text-primary-foreground'
                    : 'text-primary-foreground/75 hover:text-primary-foreground hover:bg-primary-foreground/10'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-primary-foreground p-2 rounded-md hover:bg-primary-foreground/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Navigáció megnyitása"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-primary-foreground/15 text-primary-foreground'
                    : 'text-primary-foreground/75 hover:text-primary-foreground hover:bg-primary-foreground/10'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
