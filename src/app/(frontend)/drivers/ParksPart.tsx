'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useMemo, useState } from 'react'

import type { Locale } from '@/i18n/config'
import type { ParksListCity, ParksListPark } from '@/components/ParksList/types'

type Props = {
  cities: ParksListCity[]
  descriptionGeneric: string
  descriptions: Record<string, string>
  empty: string
  locale: Locale
  parks: ParksListPark[]
  title: string
}

export const ParksPart = ({
  cities,
  descriptionGeneric,
  descriptions,
  empty,
  locale,
  parks,
  title,
}: Props) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const requested = searchParams.get('city')
  const [selected, setSelected] = useState(
    (requested && cities.some((city) => city.slug === requested) && requested) ||
      cities[0]?.slug ||
      '',
  )

  const visible = useMemo(
    () => parks.filter((park) => park.city.slug === selected),
    [parks, selected],
  )

  const description = descriptions[selected] || descriptionGeneric

  const onCityChange = (slug: string) => {
    setSelected(slug)
    const params = new URLSearchParams(searchParams.toString())
    if (locale !== 'ru') params.set('locale', locale)
    else params.delete('locale')
    params.set('city', slug)
    window.history.replaceState(null, '', `${pathname}?${params.toString()}`)
  }

  if (cities.length === 0) return null

  return (
    <section className="dl-parks" id="parks">
      <div>
        <h2>{title}</h2>
        <p className="dl-parks-desc">{description}</p>
        {cities.length > 1 ? (
          <select
            className="dl-select"
            onChange={(event) => onCityChange(event.target.value)}
            value={selected}
          >
            {cities.map((city) => (
              <option key={city.id} value={city.slug}>
                {city.name}
              </option>
            ))}
          </select>
        ) : null}
      </div>
      <div className={visible.length > 5 ? 'dl-parks-list two-cols' : 'dl-parks-list'}>
        {visible.length === 0 ? (
          <span>{empty}</span>
        ) : (
          visible.map((park) => (
            <article className="dl-park" key={park.id}>
              <span className="dl-park-title">{park.name}</span>
              <span className="dl-park-address">{park.address}</span>
            </article>
          ))
        )}
      </div>
    </section>
  )
}
