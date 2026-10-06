import React, { Suspense } from 'react'

import type { ParksListBlock as ParksListBlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { ParksListView } from '@/components/ParksList'
import { parseLocale, type Locale } from '@/i18n/config'
import { createTranslator } from '@/i18n/t'
import { getActiveParks, getCities } from '@/utilities/getParks'
import { getTranslations } from '@/utilities/getTranslations'
import '@/app/(frontend)/drivers/drivers.css'

export const ParksListBlock: React.FC<
  ParksListBlockProps & {
    id?: string
    locale?: Locale | string
  }
> = async (props) => {
  const { id, cities, introContent } = props
  const locale = parseLocale(props.locale)

  const cityIds = cities?.flatMap((city) => {
    if (typeof city === 'object' && city !== null) return [city.id]
    return [city]
  })

  const [cityDocs, parks, translations] = await Promise.all([
    getCities(cityIds, locale),
    getActiveParks({ cityIds, locale }),
    getTranslations(locale),
  ])
  const t = createTranslator(translations, locale)

  return (
    <div className="drivers-landing" id={`block-${id}`}>
      {introContent && (
        <div className="mb-10">
          <RichText className="ms-0 max-w-[48rem]" data={introContent} enableGutter={false} />
        </div>
      )}
      <Suspense>
        <ParksListView
          cities={cityDocs.map((city) => ({
            id: city.id,
            name: city.name,
            slug: city.slug ?? '',
          }))}
          copy={{
            citiesAria: t('parksBlockTitle'),
            count: t('parksBlockTitle'),
            empty: t('noParks'),
            emptyCities: t('parksBlockDescription.generic'),
          }}
          locale={locale}
          parks={parks.map((park) => ({
            id: park.id,
            name: park.name,
            address: park.address,
            city: {
              id: park.city.id,
              name: park.city.name,
              slug: park.city.slug ?? '',
            },
          }))}
        />
      </Suspense>
    </div>
  )
}
