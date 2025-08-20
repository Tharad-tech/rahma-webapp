<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const emit = defineEmits<{
  change: [code: 'ar' | 'en']
}>()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const switchLanguage = async (code: 'ar' | 'en') => {
  emit('change', code)
  // wait for the sidebar to close
  await new Promise(resolve => setTimeout(resolve, 200))
  setLocale(code)
}
</script>

<template>
  <Button
    v-for="l in availableLocales"
    :key="l.code"
    variant="outline"
    size="lg"
    class="px-2"
    @click="switchLanguage(l.code)"
  >
    <Icon
      name="heroicons:language"
      class="text-base md:text-lg"
    />
    <span class="text-sm md:text-base">{{ l.name }}</span>
  </Button>
</template>

<style scoped></style>
