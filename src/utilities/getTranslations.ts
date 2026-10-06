import type { Locale } from '@/i18n/config'
import type { Translation } from '@/payload-types'

import { payloadFind } from './payloadApi'

export const getTranslations = async (locale: Locale): Promise<Record<string, string>> => {
  const result = await payloadFind<Translation>('translations', {
    depth: 0,
    limit: 1000,
    locale,
    pagination: false,
    select: {
      key: true,
      value: true,
    },
  })

  return Object.fromEntries(
    result.docs.flatMap((doc) => (doc.key && doc.value ? [[doc.key, doc.value]] : [])),
  )
}
