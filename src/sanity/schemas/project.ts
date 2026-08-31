import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'client', title: 'Client Name', type: 'string' }),
    defineField({
      name: 'type',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Residential Solar',           value: 'residential' },
          { title: 'Commercial & Industrial Solar', value: 'commercial' },
          { title: 'Consultancy',                  value: 'consultancy' },
          { title: 'Energy Audit',                 value: 'audit' },
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'capacity',
      title: 'System Capacity',
      type: 'string',
      description: 'e.g. "45 kWp" or "200 kWh battery"',
    }),
    defineField({ name: 'date', title: 'Completion Date', type: 'date' }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        defineField({ name: 'city',    type: 'string', title: 'City' }),
        defineField({ name: 'country', type: 'string', title: 'Country' }),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', type: 'string', title: 'Alt Text', description: 'Required for accessibility' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Project Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Label' }),
            defineField({ name: 'value', type: 'string', title: 'Value' }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'value' },
          },
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Project Description',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Feature on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Most Recent',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'type', media: 'gallery.0' },
  },
})
