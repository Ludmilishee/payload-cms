import type { Payload } from 'payload'

import { parksSeed } from '@/endpoints/seed/parks'

export const ensureParks = async (payload: Payload) => {
  const stale = await payload.find({
    collection: 'cities',
    depth: 0,
    limit: 100,
    pagination: false,
    where: {
      slug: {
        in: ['kazan', 'moscow', 'ekaterinburg', 'kachkanar'],
      },
    },
  })

  for (const city of stale.docs) {
    const cityParks = await payload.find({
      collection: 'parks',
      depth: 0,
      limit: 100,
      pagination: false,
      where: { city: { equals: city.id } },
    })
    for (const park of cityParks.docs) {
      await payload.delete({
        collection: 'parks',
        context: { disableRevalidate: true },
        id: park.id,
      })
    }
    await payload.delete({
      collection: 'cities',
      context: { disableRevalidate: true },
      id: city.id,
    })
  }

  for (const city of parksSeed) {
    const found = await payload.find({
      collection: 'cities',
      depth: 0,
      limit: 1,
      locale: 'ru',
      pagination: false,
      where: {
        slug: {
          equals: city.slug,
        },
      },
    })

    let cityId = found.docs[0]?.id

    if (!cityId) {
      const created = await payload.create({
        collection: 'cities',
        context: { disableRevalidate: true },
        data: {
          name: city.name.ru,
          slug: city.slug,
        },
        locale: 'ru',
      })
      cityId = created.id
    }

    await payload.update({
      collection: 'cities',
      context: { disableRevalidate: true },
      data: { name: city.name.uz },
      id: cityId,
      locale: 'uz',
    })

    for (const park of city.parks) {
      const existingPark = await payload.find({
        collection: 'parks',
        depth: 0,
        limit: 1,
        locale: 'ru',
        pagination: false,
        where: {
          and: [
            { name: { equals: park.name.ru } },
            { city: { equals: cityId } },
          ],
        },
      })

      if (existingPark.docs[0]) {
        await payload.update({
          collection: 'parks',
          context: { disableRevalidate: true },
          data: {
            address: park.address.uz,
            name: park.name.uz,
          },
          id: existingPark.docs[0].id,
          locale: 'uz',
        })
        continue
      }

      const createdPark = await payload.create({
        collection: 'parks',
        context: { disableRevalidate: true },
        data: {
          address: park.address.ru,
          city: cityId,
          isActive: park.isActive ?? true,
          name: park.name.ru,
          sortOrder: park.sortOrder ?? 0,
        },
        locale: 'ru',
      })

      await payload.update({
        collection: 'parks',
        context: { disableRevalidate: true },
        data: {
          address: park.address.uz,
          name: park.name.uz,
        },
        id: createdPark.id,
        locale: 'uz',
      })
    }
  }
}
