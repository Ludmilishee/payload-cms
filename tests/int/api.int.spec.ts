import { getPayload, Payload } from 'payload'
import config from '@/payload.config'

import { describe, it, beforeAll, expect } from 'vitest'

let payload: Payload

describe('API', () => {
  beforeAll(async () => {
    const payloadConfig = await config
    payload = await getPayload({ config: payloadConfig })
  })

  it('fetches users', async () => {
    const users = await payload.find({
      collection: 'users',
    })
    expect(users).toBeDefined()
  })

  it('creates a city and an active park', async () => {
    const city = await payload.create({
      collection: 'cities',
      context: {
        disableRevalidate: true,
      },
      data: {
        name: 'Тестовый город',
        slug: `test-city-${Date.now()}`,
      },
    })

    const park = await payload.create({
      collection: 'parks',
      context: {
        disableRevalidate: true,
      },
      data: {
        name: 'Тестовый парк',
        address: 'ул. Тестовая, 1',
        city: city.id,
        isActive: true,
        sortOrder: 0,
      },
    })

    const found = await payload.find({
      collection: 'parks',
      where: {
        and: [
          { city: { equals: city.id } },
          { isActive: { equals: true } },
        ],
      },
    })

    expect(park.name).toBe('Тестовый парк')
    expect(found.docs.some((doc) => doc.id === park.id)).toBe(true)

    await payload.delete({
      collection: 'parks',
      context: { disableRevalidate: true },
      id: park.id,
    })
    await payload.delete({
      collection: 'cities',
      context: { disableRevalidate: true },
      id: city.id,
    })
  })
})
