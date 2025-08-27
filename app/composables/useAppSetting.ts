export const useAppSettings = async () => {
  const config = useRuntimeConfig()
  const { data, error } = await useFetch('https://rahma.tharadtech.com/api/settings')
  
  if (error.value) {
    console.error('Failed to fetch app settings:', error.value)
    // Fall back to local configuration
    return useAppConfig()
  }
  
  return data.value
}