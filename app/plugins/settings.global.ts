export default defineNuxtPlugin(async (nuxtApp) => {
  const { fetchSettings } = useSettings()
  await fetchSettings()
})
