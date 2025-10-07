import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  projectId: '5cfj6cgg', 
  dataset: 'production', 
  schema: {
    types: [
      {
        name: 'photo',
        title: 'Photo',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
              list: [
                {title: 'Portrait', value: 'portrait'},
                {title: 'Landscape', value: 'landscape'},
                {title: 'Event', value: 'event'},
                {title: 'Street', value: 'street'},
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [structureTool(), visionTool()],
})