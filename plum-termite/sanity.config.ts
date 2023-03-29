import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {RocketIcon} from "@sanity/icons";

export default defineConfig({
  name: 'default',
  title: 'Goshin sandbox',
  icon: RocketIcon,

  projectId: '5qlmrfwg',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
