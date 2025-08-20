import common from './en/common'
import meta from './en/meta'
import landing from './en/landing'
import privacy from './en/privacy'
import forms from './en/forms'

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
