import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    contactEmail,
    contactPhone,
    location,
    hours,
    linkedin,
    twitter,
    defaultSEO,
  }
`

export const teamQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    photo,
    linkedin,
  }
`
