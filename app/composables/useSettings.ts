import { useFetch } from '#app'

export const useSettings = () => {
  const settings = useState<any>('settings', () => null)
  const config = useRuntimeConfig()

  const fetchSettings = async () => {
    if (settings.value) return settings

    const { data, error } = await useFetch(`${config.public.apiBase}/settings`)

    if (error.value) {
      console.error('Failed to load settings:', error.value)
      return null
    }

    settings.value = data.value
    return settings.value
  }

  return {
    settings,
    fetchSettings,
  }
}
