import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { revalidateDeleteParks, revalidateParks } from './Parks/hooks/revalidateParks'

export const Cities: CollectionConfig = {
  slug: 'cities',
  labels: {
    singular: 'Город',
    plural: 'Города',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'slug', 'updatedAt'],
    group: 'Парки',
    useAsTitle: 'name',
  },
  defaultPopulate: {
    name: true,
    slug: true,
  },
  defaultSort: 'name',
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Название',
      localized: true,
      required: true,
    },
    slugField({
      name: 'slug',
      useAsSlug: 'name',
      position: undefined,
    }),
    {
      name: 'parks',
      type: 'join',
      collection: 'parks',
      label: 'Парки в этом городе',
      on: 'city',
      admin: {
        allowCreate: true,
        defaultColumns: ['name', 'address', 'isActive'],
      },
    },
  ],
  hooks: {
    afterChange: [revalidateParks],
    afterDelete: [revalidateDeleteParks],
  },
}
