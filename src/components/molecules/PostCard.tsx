import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/cn'
import { Badge } from '@/components/atoms'
import { formatDate } from '@/lib/utils'
import { urlFor } from '@/sanity/lib/image'
import type { Post } from '@/types'

interface PostCardProps {
  post: Post
  className?: string
  featured?: boolean
}

export function PostCard({ post, className, featured = false }: PostCardProps) {
  return (
    <Link
      href={`/news/${post.slug.current}`}
      className={cn(
        'group block bg-sand border border-sand-dim',
        'hover:border-slate/30 transition-colors duration-200',
        'focus-visible:outline-2 focus-visible:outline-tide',
        className,
      )}
    >
      {/* Cover image */}
      {post.coverImage && (
        <div className={cn('overflow-hidden', featured ? 'aspect-[16/7]' : 'aspect-[16/9]')}>
          <Image
            src={urlFor(post.coverImage).width(800).url()}
            alt={(post.coverImage as { alt?: string }).alt ?? post.title}
            width={800}
            height={featured ? 350 : 450}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      )}

      <div className="p-6">
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="tide">{tag}</Badge>
            ))}
          </div>
        )}

        <h3 className={cn(
          'font-display font-semibold text-ink leading-[1.25] mb-2',
          featured ? 'text-[1.4rem]' : 'text-[1.1rem]',
        )}>
          {post.title}
        </h3>

        {post.excerpt && (
          <p className="text-[0.88rem] leading-[1.65] text-slate-900 line-clamp-2 mb-3">
            {post.excerpt}
          </p>
        )}

        <div className="font-mono text-[0.7rem] tracking-[0.05em] uppercase text-slate">
          {post.publishedAt && formatDate(post.publishedAt)}
          {post.author && ` · ${post.author.name}`}
        </div>
      </div>
    </Link>
  )
}
