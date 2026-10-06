'use client'

import { ParksPart } from '@/app/(frontend)/drivers/ParksPart'
import { DEFAULT_LOCALE, type Locale } from '@/i18n/config'

import type { ParksListCity, ParksListPark } from './types'

export type { ParksListCity, ParksListPark }

export type ParksListCopy = {
  citiesAria: string
  count: string
  empty: string
  emptyCities: string
}

type Props = {
  cities: ParksListCity[]
  copy: ParksListCopy
  locale?: Locale
  parks: ParksListPark[]
}

export const ParksListView: React.FC<Props> = ({ cities, copy, locale = DEFAULT_LOCALE, parks }) => {
  return (
    <ParksPart
      cities={cities}
      descriptionGeneric={copy.emptyCities}
      descriptions={{}}
      empty={copy.empty}
      locale={locale}
      parks={parks}
      title={copy.count}
    />
  )
}
