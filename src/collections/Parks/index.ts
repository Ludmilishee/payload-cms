import type { CollectionConfig } from 'payload'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'
import { revalidateDeleteParks, revalidateParks } from './hooks/revalidateParks'

export const Parks: CollectionConfig = {
  slug: 'parks',
  labels: {
    singular: 'Парк',
    plural: 'Парки',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'city', 'address', 'isActive', 'updatedAt'],
    group: 'Парки',
    listSearchableFields: ['name', 'address'],
    useAsTitle: 'name',
  },
  defaultPopulate: {
    name: true,
    address: true,
    city: true,
  },
  defaultSort: 'sortOrder',
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Название',
      localized: true,
      required: true,
    },
    {
      name: 'address',
      type: 'text',
      label: 'Адрес',
      localized: true,
      required: true,
    },
    {
      name: 'city',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      label: 'Город',
      relationTo: 'cities',
      required: true,
    },
    {
      name: 'isActive',
      type: 'checkbox',
      admin: {
        description: 'Снимите флаг, чтобы скрыть парк с лендинга без удаления.',
        position: 'sidebar',
      },
      defaultValue: true,
      label: 'Показывать на лендинге',
    },
    {
      name: 'sortOrder',
      type: 'number',
      admin: {
        position: 'sidebar',
        step: 1,
      },
      defaultValue: 0,
      label: 'Порядок',
    },
  ],
  hooks: {
    afterChange: [revalidateParks],
    afterDelete: [revalidateDeleteParks],
  },
  timestamps: true,
}
