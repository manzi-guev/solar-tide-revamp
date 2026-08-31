/* ──────────────────────────────────────────────
   Global TypeScript types — Solar Tide
────────────────────────────────────────────── */

/* ── Sanity primitives ─────────────────────── */
export interface SanitySlug {
  current: string
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
  alt?: string
}

export type PortableTextBlock = {
  _type: string
  _key: string
  children?: Array<{
    _type: string
    _key: string
    text: string
    marks?: string[]
  }>
  markDefs?: Array<{
    _key: string
    _type: string
    href?: string
  }>
  style?: string
  listItem?: string
  level?: number
}

/* ── Domain types ──────────────────────────── */
export type ProjectType = 'residential' | 'commercial' | 'consultancy' | 'audit'

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  residential: 'Residential Solar',
  commercial:  'C&I Solar',
  consultancy: 'Consultancy',
  audit:       'Energy Audit',
}

export interface ProjectStat {
  label: string
  value: string
}

export interface Project {
  _id: string
  title: string
  slug: SanitySlug
  client?: string
  type: ProjectType
  capacity?: string
  date?: string
  location?: {
    city?: string
    country?: string
  }
  coverImage?: SanityImage
  gallery?: SanityImage[]
  stats?: ProjectStat[]
  body?: PortableTextBlock[]
  featured?: boolean
}

export interface Post {
  _id: string
  title: string
  slug: SanitySlug
  publishedAt?: string
  coverImage?: SanityImage
  excerpt?: string
  tags?: string[]
  author?: Pick<TeamMember, '_id' | 'name' | 'photo' | 'role'>
  body?: PortableTextBlock[]
}

export interface Service {
  _id: string
  title: string
  slug?: SanitySlug
  description?: string
  tag?: string
  features?: string[]
  ctaLabel?: string
  order?: number
}

export interface TeamMember {
  _id: string
  name: string
  role?: string
  bio?: string
  photo?: SanityImage
  linkedin?: string
  order?: number
}

export interface SiteSettings {
  contactEmail?: string
  contactPhone?: string
  location?: string
  hours?: string
  linkedin?: string
  twitter?: string
  defaultSEO?: {
    title?: string
    description?: string
  }
}

/* ── Form / API types ──────────────────────── */
export type ServiceType = 'residential' | 'commercial' | 'consultancy' | 'audit' | 'unsure'

export const SERVICE_TYPE_LABELS: Record<ServiceType, string> = {
  residential: 'Residential solar system',
  commercial:  'C&I solar system',
  consultancy: 'Power & solar consultancy',
  audit:       'Energy audit',
  unsure:      'Not sure yet',
}

export interface ContactFormData {
  serviceType: ServiceType
  siteLocation?: string
  loadDetails?: string
  timeline?: string
  name: string
  email: string
}
