import { groq } from 'next-sanity'

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    tag,
    features,
    ctaLabel,
    order,
  }
`

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    tag,
    features,
    body,
    ctaLabel,
  }
`
