// lib/live.ts
import defineLive from "@sanity/preview-kit";
import { client } from './sanity'

export const SanityLive = defineLive({
  client: client.withConfig({
    apiVersion: '2024-01-01'
  }),
  children: null
});