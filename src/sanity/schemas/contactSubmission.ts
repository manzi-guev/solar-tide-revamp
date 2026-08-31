import { defineType, defineField } from 'sanity'

export const contactSubmission = defineType({
  name: 'contactSubmission',
  title: 'Lead Records',
  type: 'document',
  fields: [
    defineField({ name: 'name',  title: 'Name',  type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({
      name: 'serviceType',
      title: 'Service Type',
      type: 'string',
      options: {
        list: [
          { title: 'Residential Solar',           value: 'residential' },
          { title: 'C&I Solar',                   value: 'commercial' },
          { title: 'Power & Solar Consultancy',   value: 'consultancy' },
          { title: 'Energy Audit',                value: 'audit' },
          { title: 'Not Sure',                    value: 'unsure' },
        ],
      },
    }),
    defineField({ name: 'siteLocation', title: 'Site Location',         type: 'string' }),
    defineField({ name: 'loadDetails',  title: 'Load / Roof Details',   type: 'text', rows: 3 }),
    defineField({ name: 'timeline',     title: 'Preferred Timeline',    type: 'string' }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: '🟡 New',     value: 'new' },
          { title: '🔵 Read',    value: 'read' },
          { title: '✅ Replied', value: 'replied' },
        ],
        layout: 'radio',
      },
      initialValue: 'new',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'email' },
  },
})
