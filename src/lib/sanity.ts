import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2026-06-17',
})

export interface SiteSettings {
  heroRole: string
  heroTagline: string
  introBio: string
}

export interface Client {
  _id: string
  name: string
  logoKey: 'innovasjon-norge' | 'ntnu' | 'skypass' | null
  logoUrl: string | null
  order: number
}

export async function getPageData(): Promise<{ settings: SiteSettings; clients: Client[] }> {
  const [settings, clients] = await Promise.all([
    sanityClient.fetch<SiteSettings>(`*[_id == "siteSettings"][0]`),
    sanityClient.fetch<Client[]>(`*[_type == "client"] | order(order asc) {
      _id,
      name,
      logoKey,
      order,
      "logoUrl": logo.asset->url
    }`),
  ])
  return { settings, clients }
}
