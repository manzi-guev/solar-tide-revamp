import type { Metadata } from 'next'
import {
  Hero,
  MissionSection,
  ServicesSection,
  ApplicationSection,
  ProjectsSection,
  PositionSection,
  CtaSection,
} from '@/components/organisms'

export const metadata: Metadata = {
  title: 'Solar Tide — Power & Solar, East Africa',
  description:
    'Solar Tide designs, builds, and advises on power systems across Rwanda and the wider region — from rooftop solar to grid-level consultancy.',
}

export default function HomePage() {
  /*
   * TODO: Uncomment when Sanity is connected.
   *
   * const [services, projects] = await Promise.all([
   *   sanityFetch<Service[]>({ query: servicesQuery, tags: ['service'] }),
   *   sanityFetch<Project[]>({ query: featuredProjectsQuery, tags: ['project'] }),
   * ])
   */

  return (
    <>
      <Hero />
      <MissionSection />
      <ServicesSection />
      <ApplicationSection />
      <ProjectsSection />
      <PositionSection />
      <CtaSection />
    </>
  )
}
