import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from '@/sanity/schemas'

const projectId = 'rxi61ihl'
const dataset = 'production'

export default defineConfig({
  name: 'solar-tide',
  title: 'Solar Tide CMS',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings'),
              ),
            S.divider(),
            S.documentTypeListItem('service').title('Services'),
            S.documentTypeListItem('project').title('Projects'),
            S.documentTypeListItem('post').title('News & Updates'),
            S.documentTypeListItem('teamMember').title('Team'),
            S.divider(),
            S.documentTypeListItem('contactSubmission').title('Lead Records'),
          ]),
    }),
    visionTool(),
  ],
  schema,
})
