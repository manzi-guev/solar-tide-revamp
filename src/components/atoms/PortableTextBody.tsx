import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@/types'

const components = {
  block: {
    normal:     ({ children }: any) => <p   className="text-slate-900 text-[0.95rem] leading-[1.75] mb-4">{children}</p>,
    h2:         ({ children }: any) => <h2  className="font-display font-semibold text-ink text-[1.4rem] leading-[1.25] mt-10 mb-3">{children}</h2>,
    h3:         ({ children }: any) => <h3  className="font-display font-semibold text-ink text-[1.15rem] leading-[1.3] mt-6 mb-2">{children}</h3>,
    blockquote: ({ children }: any) => <blockquote className="border-l-2 border-solar pl-4 italic text-slate-700 my-6">{children}</blockquote>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold text-ink">{children}</strong>,
    em:     ({ children }: any) => <em className="italic">{children}</em>,
    link:   ({ value, children }: any) => (
      <a href={value?.href} className="text-solar underline hover:text-solar-dim transition-colors" target={value?.blank ? '_blank' : undefined} rel={value?.blank ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-5 mb-4 space-y-1 text-slate-900 text-[0.95rem]">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-5 mb-4 space-y-1 text-slate-900 text-[0.95rem]">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="leading-[1.7]">{children}</li>,
    number: ({ children }: any) => <li className="leading-[1.7]">{children}</li>,
  },
}

export function PortableTextBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />
}
