import common from './ar/common'
import meta from './ar/meta'
import landing from './ar/landing'
import privacy from './ar/privacy'
import forms from './ar/forms'
import error from './ar/error'

export default defineI18nLocale(() => {
  return {
    ...common,
    meta,
    landing,
    privacy,
    forms,
    error,
    // Add more translations or imports here
  }
})
