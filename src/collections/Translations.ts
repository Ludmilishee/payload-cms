import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { revalidateDeleteParks, revalidateParks } from './Parks/hooks/revalidateParks'

export const Translations: CollectionConfig = {
  slug: 'translations',
  labels: {
    singular: 'Ключ перевода',
    plural: 'Переводы',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['key', 'value', 'updatedAt'],
    description:
      'Тексты лендинга водителей. Переключатель языка сверху: Русский / O‘zbekcha. Ключ лучше не переименовывать.',
    group: 'Парки',
    listSearchableFields: ['key', 'value', 'note'],
    useAsTitle: 'key',
  },
  defaultSort: 'key',
  fields: [
    {
      name: 'key',
      type: 'text',
      admin: {
        description: 'Стабильный идентификатор, например becomeDriver или parksBlockTitle',
      },
      index: true,
      label: 'Ключ',
      required: true,
      unique: true,
    },
    {
      name: 'value',
      type: 'textarea',
      admin: {
        description: 'Можно использовать плейсхолдеры {count} и {city}.',
      },
      label: 'Текст',
      localized: true,
      required: true,
    },
    {
      name: 'note',
      type: 'text',
      admin: {
        description: 'Подсказка для редактора, где строка показывается на сайте.',
      },
      label: 'Комментарий',
    },
  ],
  hooks: {
    afterChange: [revalidateParks],
    afterDelete: [revalidateDeleteParks],
  },
  timestamps: true,
}
