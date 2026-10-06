import { DEFAULT_LOCALE, type Locale } from '@/i18n/config'
import type { City, Park } from '@/payload-types'

import { payloadFind } from './payloadApi'

type GetParksArgs = {
  cityIds?: (number | string)[]
  locale?: Locale
}

export type ParkWithCity = Park & {
  city: City
}

const isPopulatedCity = (city: Park['city']): city is City => {
  return typeof city === 'object' && city !== null
}

export const getCities = async (cityIds?: (number | string)[], locale: Locale = DEFAULT_LOCALE) => {
  const result = await payloadFind<City>('cities', {
    depth: 0,
    limit: 100,
    locale,
    pagination: false,
    select: {
      name: true,
      slug: true,
    },
    sort: 'name',
    ...(cityIds && cityIds.length > 0
      ? {
          where: {
            id: {
              in: cityIds,
            },
          },
        }
      : {}),
  })

  return result.docs
}

export const getActiveParks = async ({
  cityIds,
  locale = DEFAULT_LOCALE,
}: GetParksArgs = {}): Promise<ParkWithCity[]> => {
  const result = await payloadFind<Park>('parks', {
    depth: 1,
    limit: 500,
    locale,
    pagination: false,
    select: {
      name: true,
      address: true,
      city: true,
    },
    sort: 'sortOrder',
    where: {
      and: [
        {
          isActive: {
            equals: true,
          },
        },
        ...(cityIds && cityIds.length > 0
          ? [
              {
                city: {
                  in: cityIds,
                },
              },
            ]
          : []),
      ],
    },
  })

  return result.docs.filter((park): park is ParkWithCity => isPopulatedCity(park.city))
}
