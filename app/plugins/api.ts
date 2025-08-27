// plugins/app-config.ts
export default defineNuxtPlugin(async () => {
  const { data } = await useFetch('https://rahma.tharadtech.com/api/settings')
  
  if (data.value) {
    const appConfig = useAppConfig()
    // Merge API data with local config
    const mergedConfig = {
      ...appConfig,
      ...data.value,
      // Preserve nested structures
      author: { ...appConfig.author, ...data.value?.author },
      app: { ...appConfig.app, ...data.value?.app },
      contact: { ...appConfig.contact, ...data.value?.contact }
    }
    
    // Update runtime config
    const runtimeConfig = useRuntimeConfig()
    runtimeConfig.app = mergedConfig
  }
})