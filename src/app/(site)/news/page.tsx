import type { Metadata } from 'next'
import { Eyebrow, Badge } from '@/components/atoms'
import { PostCard } from '@/components/molecules'
import { CtaSection } from '@/components/organisms'
import { sanityFetch } from '@/sanity/lib/client'
import { postsQuery } from '@/sanity/queries'
import type { Post } from '@/types'

export const metadata: Metadata = {
  title: 'News & Updates',
  description: 'The latest news, project updates, and insights from Solar Tide.',
}

const TAGS = ['All', 'Solar', 'Storage', 'Consultancy', 'Company', 'Industry'] as const

export default async function NewsPage() {
  const posts = await sanityFetch<Post[]>({
    query: postsQuery,
    revalidate: 30,
  })

  return (
    <>
      {/* Header */}
      <section className="bg-ink text-sand pt-24 pb-16">
        <div className="wrap max-w-[640px]">
          <Eyebrow className="text-tide mb-5">News &amp; Updates</Eyebrow>
          <h1
            className="font-display font-semibold text-sand leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}
          >
            From the field.
          </h1>
          <p className="text-[1rem] leading-relaxed text-slate">
            Project updates, industry commentary, and technical notes.
          </p>
        </div>
      </section>

      {/* Tag filter */}
      <section className="bg-sand py-3 border-b border-sand-dim sticky top-[72px] z-10">
        <div className="wrap flex gap-2 overflow-x-auto no-scrollbar">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.7rem] uppercase tracking-[0.06em] px-3 py-2 border border-sand-dim text-slate-700 cursor-pointer hover:border-ink hover:text-ink transition-colors whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Posts or empty state */}
      <section className="bg-sand py-16">
        <div className="wrap">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <PostCard key={post._id} post={post} featured={i === 0} />
              ))}
            </div>
          ) : (
            <div className="max-w-[560px] mx-auto text-center py-16">
              <p className="font-display font-semibold text-ink text-[1.2rem] mb-3">No articles yet.</p>
              <p className="text-slate-900 text-[0.95rem] leading-[1.7] mb-6">
                Add your first post in the{' '}
                <a href="/studio" className="text-solar underline">Sanity Studio</a>{' '}
                and it will appear here automatically.
              </p>
              <Badge variant="tide" size="md">CMS-powered</Badge>
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
