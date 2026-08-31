import { defineType, defineField } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'tag',
      title: 'Service Tag (shown on card)',
      type: 'string',
      description: 'e.g. "Design · Install · Commission"',
    }),
    defineField({
      name: 'features',
      title: 'Feature Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Short bullet labels shown on the service page',
    }),
    defineField({
      name: 'body',
      title: 'Page Body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({ name: 'ctaLabel', title: 'CTA Button Label', type: 'string' }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  orderings: [
    {
      title: 'Sort Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
