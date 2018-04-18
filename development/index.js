import './bootstrap.js'
import CMS, { init } from 'netlify-cms'
import 'netlify-cms/dist/cms.css'
import { Control, Preview } from '../src'

window.repoFiles = {
  'test.yml': {
    content: `
title: Widget Development Test UI
`
  },
}

const config = {
  backend: {
    name: 'test-repo',
  },
  media_folder: 'assets',
  collections: [{
    name: 'test',
    label: 'Test',
    files: [{
      file: 'test.yml',
      name: 'test',
      label: 'Test',
      fields: [
        { name: 'title', label: 'Title'},
        { name: 'test_widget', label: 'Test Widget', widget: 'test'},
        { name: 'group', label: 'Group', widget: 'list', fields: [
          { name: 'test_widget', label: 'Test Widget In a Group', widget: 'test'},
        ]},
      ],
    }],
  }],
}

CMS.registerWidget('test', Control, Preview)

init({ config })
