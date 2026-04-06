import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Tag, ExternalLink } from 'lucide-react'
import type { Event } from '@/lib/events'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface EventCardProps {
  event: Event
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'HUF',
    maximumFractionDigits: 0,
  }).format(price)
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow group flex flex-col">
      {/* Image */}
      <Link href={`/esemenyek/${event.slug}`} className="block overflow-hidden relative aspect-[16/9]">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute top-3 left-3">
          <Badge className="bg-primary text-primary-foreground text-xs font-medium shadow">
            {event.categoryLabel}
          </Badge>
        </span>
        {event.country !== 'Magyarország' && (
          <span className="absolute top-3 right-3">
            <Badge variant="secondary" className="text-xs shadow">
              {event.country}
            </Badge>
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <Link href={`/esemenyek/${event.slug}`}>
          <h3 className="font-display font-bold text-base text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
            {event.title}
          </h3>
        </Link>

        <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span>{event.dateFormatted}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>{event.venue}, {event.city}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-auto pt-2 border-t border-border">
          <Tag className="w-3.5 h-3.5 text-accent shrink-0" />
          <span className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{formatPrice(event.priceFrom)}</span>
            {' – '}
            {formatPrice(event.priceTo)}
          </span>
        </div>

        {/* Partner count */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-muted-foreground">
            {event.partners.length} viszonteladó
          </span>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs h-8">
            <Link href={`/esemenyek/${event.slug}`}>
              Ajánlatok <ExternalLink className="w-3 h-3 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
