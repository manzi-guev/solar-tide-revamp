import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Eyebrow, Badge } from '@/components/atoms'
import { formatDate } from '@/lib/utils'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return { title: slug.replace(/-/g, ' ') }
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params

  /*
   * TODO: Fetch from Sanity when connected.
   * const post = await sanityFetch<Post>({
   *   query: postBySlugQuery,
   *   params: { slug },
   *   tags: [`post:${slug}`],
   * })
   * if (!post) notFound()
   */

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-ink border-b border-slate/10" aria-label="Breadcrumb">
        <div className="wrap py-3 flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.05em] uppercase text-slate">
          <Link href="/news" className="hover:text-sand transition-colors">News</Link>
          <span>›</span>
          <span className="text-solar truncate">{slug.replace(/-/g, ' ')}</span>
        </div>
      </nav>

      {/* Article header */}
      <section className="bg-ink text-sand pt-16 pb-14">
        <div className="wrap max-w-[720px]">
          <div className="flex items-center gap-3 mb-5">
            <Badge variant="tide">Article</Badge>
          </div>
          <h1 className="font-display font-semibold text-sand leading-[1.1] mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)' }}>
            {slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
          </h1>
          <Eyebrow className="text-slate" showLine={false}>
            Solar Tide · {formatDate(new Date().toISOString())}
          </Eyebrow>
        </div>
      </section>

      {/* Body placeholder */}
      <section className="bg-sand py-16">
        <div className="wrap max-w-[680px]">
          <p className="text-slate-700 text-[0.9rem] italic border border-sand-dim bg-white p-4 mb-8">
            Article body is authored via Sanity CMS using Portable Text. Publish content
            in the studio and it will render here with full rich-text formatting.
          </p>
          <Link
            href="/news"
            className="font-mono text-[0.8rem] uppercase tracking-[0.06em] text-tide hover:text-tide-dim transition-colors"
          >
            ← Back to news
          </Link>
        </div>
      </section>
    </>
  )
}
