import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const ParksList: Block = {
  slug: 'parksList',
  interfaceName: 'ParksListBlock',
  fields: [
    {
      name: 'introContent',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: 'Вступление',
    },
    {
      name: 'cities',
      type: 'relationship',
      admin: {
        description: 'Если ничего не выбрать, на лендинге будут все города с активными парками.',
      },
      hasMany: true,
      label: 'Города',
      relationTo: 'cities',
    },
  ],
  labels: {
    plural: 'Списки парков',
    singular: 'Список парков',
  },
}
