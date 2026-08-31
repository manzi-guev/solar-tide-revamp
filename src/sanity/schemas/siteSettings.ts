import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'contactEmail', title: 'Contact Email', type: 'string' }),
    defineField({ name: 'contactPhone', title: 'Contact Phone', type: 'string' }),
    defineField({ name: 'location',     title: 'Location',      type: 'string' }),
    defineField({ name: 'hours',        title: 'Business Hours', type: 'string' }),
    defineField({ name: 'linkedin',     title: 'LinkedIn URL',   type: 'url' }),
    defineField({ name: 'twitter',      title: 'Twitter/X URL',  type: 'url' }),
    defineField({
      name: 'defaultSEO',
      title: 'Default SEO',
      type: 'object',
      fields: [
        defineField({ name: 'title',       type: 'string', title: 'SEO Title' }),
        defineField({ name: 'description', type: 'text',   title: 'SEO Description', rows: 3 }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
})
