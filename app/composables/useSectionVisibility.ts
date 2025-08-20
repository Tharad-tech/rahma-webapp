import { useElementVisibility } from '@vueuse/core'
import { useRoute } from '#imports'

export interface Section {
  id: string
  to: string
  label: string
}

export interface UseSectionVisibilityOptions {
  /** Root margin for intersection observer */
  rootMargin?: string
  /** Threshold for intersection observer */
  threshold?: number
  /** Valid paths where section tracking should be active */
  validPaths?: string[]
  /** Whether to update URL hash when section changes */
  updateHash?: boolean
}

export function useSectionVisibility(
  sections: Ref<Section[]>,
  options: UseSectionVisibilityOptions = {},
) {
  const {
    rootMargin = '-100px 0px -100px 0px',
    threshold = 0.5,
    validPaths = ['/'],
    updateHash = true,
  } = options

  const route = useRoute()
  const activeSectionId = ref<string>('')
  const sectionVisibilityStates = ref<Record<string, boolean>>({})

  // Initialize visibility tracking for each section
  const setupVisibilityTracking = () => {
    if (!import.meta.client) return

    // Reset visibility states
    sectionVisibilityStates.value = {}

    // Setup tracking for each section
    sections.value.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        const isVisible = useElementVisibility(element, {
          threshold,
          rootMargin,
        })

        // Watch visibility changes for this section
        watch(isVisible, (visible) => {
          if (!validPaths.includes(route.path)) return

          sectionVisibilityStates.value[id] = visible

          // If section becomes visible, make it active
          if (visible) {
            activeSectionId.value = id
            if (updateHash) {
              const currentPath = window.location.pathname
              if (window.location.hash !== `#${id}`) {
                history.replaceState(null, '', `${currentPath}#${id}`)
              }
            }
          }
        }, { immediate: true })
      }
    })
  }

  // Watch for route changes
  watch(
    () => route.path,
    (newPath) => {
      if (!validPaths.includes(newPath)) {
        activeSectionId.value = ''
        sectionVisibilityStates.value = {}
      }
      else {
        // Re-setup visibility tracking when entering valid paths
        setupVisibilityTracking()
      }
    },
    { immediate: true },
  )

  // Watch for section list changes
  watch(sections, () => {
    if (validPaths.includes(route.path)) {
      setupVisibilityTracking()
    }
  }, { deep: true })

  // Function to check if a link is active
  const isActiveSection = (sectionId: string) => {
    return activeSectionId.value === sectionId
  }

  // Function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    if (!import.meta.client) return

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // Update active section immediately
      activeSectionId.value = sectionId
      if (updateHash) {
        const currentPath = window.location.pathname
        history.replaceState(null, '', `${currentPath}#${sectionId}`)
      }
    }
  }

  // Handle initial setup
  onMounted(() => {
    if (import.meta.client) {
      if (validPaths.includes(route.path)) {
        setupVisibilityTracking()

        // Handle initial hash if present
        if (route.hash) {
          const targetId = route.hash.slice(1)
          scrollToSection(targetId)
        }
      }
    }
  })

  return {
    activeSectionId,
    isActiveSection,
    scrollToSection,
    sectionVisibility: computed(() => sectionVisibilityStates.value),
  }
}
