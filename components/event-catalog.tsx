'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { EventCard } from '@/components/event-card'
import { Input } from '@/components/ui/input'
import { EVENTS, CATEGORIES, type SportCategory } from '@/lib/events'
import { cn } from '@/lib/utils'

export function EventCatalog() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<SportCategory | 'all'>('all')

  const filtered = EVENTS.filter((e) => {
    const matchesCat = activeCategory === 'all' || e.category === activeCategory
    const matchesQuery =
      query.trim() === '' ||
      e.title.toLowerCase().includes(query.toLowerCase()) ||
      e.city.toLowerCase().includes(query.toLowerCase()) ||
      e.venue.toLowerCase().includes(query.toLowerCase())
    return matchesCat && matchesQuery
  })

  return (
    <section>
      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <Input
          placeholder="Keresés esemény, helyszín vagy város szerint..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 h-11 text-sm"
          aria-label="Esemény keresése"
        />
      </div>

      {/* Category filter */}
      <div className="overflow-x-auto pb-2 mb-7 -mx-1 px-1">
        <div className="flex gap-2 w-max">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.value
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-muted text-muted-foreground hover:bg-secondary hover:text-foreground'
                )}
                aria-pressed={isActive}
              >
                {cat.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-5">
        <span className="font-semibold text-foreground">{filtered.length}</span> esemény
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-lg font-medium">Nincs találat</p>
          <p className="text-sm mt-1">Próbáljon más keresési feltételeket.</p>
        </div>
      )}
    </section>
  )
}
