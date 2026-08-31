/**
 * Sanity Studio embedded at /studio
 *
 * This is a Next.js route that renders the full Sanity Studio.
 * Access it at http://localhost:3000/studio after running `npm run dev`.
 *
 * Set up your Sanity project credentials in .env.local before use.
 */
import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <NextStudio config={config} />
}
