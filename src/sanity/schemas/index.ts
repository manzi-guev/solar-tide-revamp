import { siteSettings }      from './siteSettings'
import { service }           from './service'
import { project }           from './project'
import { post }              from './post'
import { teamMember }        from './teamMember'
import { contactSubmission } from './contactSubmission'

export const schema = {
  types: [siteSettings, service, project, post, teamMember, contactSubmission],
}
