import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, Payload } from 'payload'
import { revalidatePath, revalidateTag } from 'next/cache'

const revalidateParksPages = async (payload: Payload) => {
  revalidatePath('/drivers')
  revalidateTag('parks', 'max')

  const pages = await payload.find({
    collection: 'pages',
    depth: 0,
    limit: 100,
    pagination: false,
    select: {
      slug: true,
    },
    where: {
      'layout.blockType': {
        equals: 'parksList',
      },
    },
  })

  for (const page of pages.docs) {
    const path = page.slug === 'home' ? '/' : `/${page.slug}`
    revalidatePath(path)
  }
}

export const revalidateParks: CollectionAfterChangeHook = async ({ req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info('Revalidating parks landing')
    await revalidateParksPages(payload)
  }
}

export const revalidateDeleteParks: CollectionAfterDeleteHook = async ({
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info('Revalidating parks landing after delete')
    await revalidateParksPages(payload)
  }
}
