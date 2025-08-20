import common from './ar/common'
import meta from './ar/meta'
import landing from './ar/landing'
import privacy from './ar/privacy'
import forms from './ar/forms'

export default defineI18nLocale(() => {
  return {
    ...common,
    meta,
    landing,
    privacy,
    forms,
    // Add more translations or imports here
  }
})
