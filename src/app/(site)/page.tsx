import type { Metadata } from 'next'
import {
  Hero,
  MissionSection,
  ServicesSection,
  ApplicationSection,
  ProjectsSection,
  CtaSection,
} from '@/components/organisms'
import { sanityFetch } from '@/sanity/lib/client'
import { featuredProjectsQuery, servicesQuery } from '@/sanity/queries'
import type { Project, Service } from '@/types'

export const metadata: Metadata = {
  title: 'Solar Tide — Power & Solar, East Africa',
  description:
    'Solar Tide designs, builds, and advises on power systems across Rwanda and the wider region — from rooftop solar to grid-level consultancy.',
}

export default async function HomePage() {
  const [projects, services] = await Promise.all([
    sanityFetch<Project[]>({ query: featuredProjectsQuery, tags: ['project'] }),
    sanityFetch<Service[]>({ query: servicesQuery, tags: ['service'] }),
  ])

  return (
    <>
      <Hero />
      <MissionSection />
      <ServicesSection services={services} />
      <ApplicationSection />
      <ProjectsSection projects={projects} />
      <CtaSection />
    </>
  )
}
