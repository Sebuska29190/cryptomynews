import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './src/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'My Daily News CMS',

  projectId: '9gym6q5m', // Replace with actual project ID
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})