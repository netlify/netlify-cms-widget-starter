import Control from './Control'
import Preview from './Preview'

if (typeof window !== 'undefined') {
  window.Control = Control
  window.Preview = Preview
}

export { Control, Preview }
