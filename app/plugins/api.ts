export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const api = $fetch.create({
    baseURL: config.public.apiBase,
    onRequest({ options }) {
      const lang = useCookie('i18n_locale').value || 'en'
      options.headers.set('Accept-Language', lang)
    },
  })

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  }
})
