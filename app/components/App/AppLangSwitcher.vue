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
    variant="link"
    class="px-2"
    @click="switchLanguage(l.code)"
  >
    <span class="text-sm md:text-base">{{ l.name }}</span>

    <NuxtImg
      v-if="l.code === 'ar'"
      src="/img/icons/Flag_of_Saudi_Arabia1.svg"
      alt="Flag_of_Saudi_Arabia"
      densities="1x 2x"
      width="24"
      height="24"
    />
    <NuxtImg
      v-else
      src="/img/icons/United_kingdom_flag.jpeg"
      alt="United_kingdom_flag"
      densities="1x 2x"
      width="24"
      height="24"
    />
  </Button>
</template>

<style scoped></style>
