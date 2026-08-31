import { groq } from 'next-sanity'

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    coverImage,
    excerpt,
    tags,
    "author": author->{ _id, name, photo },
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    coverImage,
    excerpt,
    tags,
    "author": author->{ _id, name, role, photo },
    body,
  }
`

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)] { "slug": slug.current }
`
