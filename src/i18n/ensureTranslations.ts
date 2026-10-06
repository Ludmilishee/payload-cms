import type { Payload } from 'payload'

import { DRIVERS_TRANSLATIONS } from './driversKeys'

export const ensureTranslations = async (payload: Payload) => {
  const existing = await payload.find({
    collection: 'translations',
    depth: 0,
    limit: 1000,
    locale: 'ru',
    pagination: false,
    select: {
      key: true,
    },
  })

  const knownKeys = new Set(Object.keys(DRIVERS_TRANSLATIONS))
  const existingKeys = new Set(existing.docs.map((doc) => doc.key))
  let created = 0
  let removed = 0

  for (const doc of existing.docs) {
    if (knownKeys.has(doc.key)) continue

    await payload.delete({
      collection: 'translations',
      context: {
        disableRevalidate: true,
      },
      id: doc.id,
    })
    removed += 1
  }

  for (const [key, entry] of Object.entries(DRIVERS_TRANSLATIONS)) {
    if (existingKeys.has(key)) continue

    const translation = await payload.create({
      collection: 'translations',
      context: {
        disableRevalidate: true,
      },
      data: {
        key,
        note: entry.note,
        value: entry.ru,
      },
      locale: 'ru',
    })

    await payload.update({
      collection: 'translations',
      context: {
        disableRevalidate: true,
      },
      data: {
        value: entry.uz,
      },
      id: translation.id,
      locale: 'uz',
    })

    created += 1
  }

  if (created > 0 || removed > 0) {
    payload.logger.info(`Translations sync: created ${created}, removed ${removed}`)
  }
}
