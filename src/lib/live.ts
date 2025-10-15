import { LiveQueryProvider } from '@sanity/preview-kit'
import { client } from './sanity'

export { LiveQueryProvider }
export const sanityFetch = client.fetch