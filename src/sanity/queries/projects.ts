import { groq } from 'next-sanity'

export const projectsQuery = groq`
  *[_type == "project"] | order(date desc) {
    _id,
    title,
    slug,
    client,
    type,
    capacity,
    date,
    location,
    "coverImage": gallery[0],
    stats,
    featured,
  }
`

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(date desc)[0...3] {
    _id,
    title,
    slug,
    client,
    type,
    date,
    location,
    "coverImage": gallery[0],
    stats,
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    client,
    type,
    capacity,
    date,
    location,
    gallery,
    stats,
    body,
    featured,
  }
`

export const projectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)] { "slug": slug.current }
`
