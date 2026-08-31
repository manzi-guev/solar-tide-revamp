import createImageUrlBuilder from '@sanity/image-url'
import type { SanityClientLike } from '@sanity/image-url/lib/types/types'
import { client } from './client'
import type { SanityImage } from '@/types'

const builder = createImageUrlBuilder(client as SanityClientLike)

/** Build a Sanity CDN image URL with hotspot support. */
export function urlFor(source: SanityImage) {
  return builder.image(source)
}
