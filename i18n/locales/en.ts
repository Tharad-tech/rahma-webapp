import common from './en/common'
import meta from './en/meta'
import landing from './en/landing'
import privacy from './en/privacy'
import forms from './en/forms'
import error from './en/error'

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
