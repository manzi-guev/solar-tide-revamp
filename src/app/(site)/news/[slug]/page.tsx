import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Eyebrow, Badge, Button, PortableTextBody } from '@/components/atoms'
import { CtaSection } from '@/components/organisms'
import { sanityFetch } from '@/sanity/lib/client'
import { postBySlugQuery, postSlugsQuery } from '@/sanity/queries'
import { urlFor } from '@/sanity/lib/image'
import { formatDate } from '@/lib/utils'
import type { Post } from '@/types'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>({
    query: postSlugsQuery,
    revalidate: false,
  })
  return slugs.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await sanityFetch<Post | null>({
    query: postBySlugQuery,
    params: { slug },
    revalidate: 60,
  })
  return {
    title: post?.title ?? slug.replace(/-/g, ' '),
    description: post?.excerpt ?? 'A Solar Tide article.',
  }
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params
  const post = await sanityFetch<Post | null>({
    query: postBySlugQuery,
    params: { slug },
    revalidate: 60,
  })

  if (!post) notFound()

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-ink border-b border-slate/10" aria-label="Breadcrumb">
        <div className="wrap py-3 flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.05em] uppercase text-slate">
          <Link href="/news" className="hover:text-sand transition-colors">News</Link>
          <span>›</span>
          <span className="text-solar truncate">{post.title}</span>
        </div>
      </nav>

      {/* Article header */}
      <section className="bg-ink text-sand pt-16 pb-14">
        <div className="wrap max-w-[720px]">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="tide">{tag}</Badge>
              ))}
            </div>
          )}

          <h1
            className="font-display font-semibold text-sand leading-[1.1] mb-5"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}
          >
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-[1rem] leading-[1.7] text-slate max-w-[56ch] mb-6">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center gap-4">
            {post.author?.photo && (
              <Image
                src={urlFor(post.author.photo).width(48).height(48).url()}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            )}
            <Eyebrow className="text-slate" showLine={false}>
              {post.author ? post.author.name : 'Solar Tide'}
              {post.author?.role && ` · ${post.author.role}`}
              {post.publishedAt && ` · ${formatDate(post.publishedAt)}`}
            </Eyebrow>
          </div>
        </div>
      </section>

      {/* Cover image */}
      {post.coverImage && (
        <div className="bg-ink">
          <div className="wrap max-w-[900px] pb-0">
            <Image
              src={urlFor(post.coverImage).width(1200).url()}
              alt={(post.coverImage as { alt?: string }).alt ?? post.title}
              width={1200}
              height={540}
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Body */}
      <section className="bg-sand py-16">
        <div className="wrap max-w-[680px]">
          {post.body ? (
            <PortableTextBody value={post.body} />
          ) : (
            <p className="text-slate-500 text-[0.9rem] italic">
              No content yet. Add body text in the{' '}
              <a href="/studio" className="text-solar underline">Sanity Studio</a>.
            </p>
          )}

          <div className="mt-12 pt-8 border-t border-sand-dim">
            <Button href="/news" variant="outline" size="md">← Back to news</Button>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
