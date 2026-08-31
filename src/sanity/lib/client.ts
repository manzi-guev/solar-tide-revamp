import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'replace-me',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  useCdn: true,
  stega: {
    enabled: false,
  },
})

/** Typed fetch helper with Next.js ISR cache options. */
export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
  tags,
}: {
  query: string
  params?: Record<string, unknown>
  revalidate?: number | false
  tags?: string[]
}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate: tags ? false : revalidate,
      tags,
    },
  })
}
