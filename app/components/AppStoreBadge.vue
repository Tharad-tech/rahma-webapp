<script lang="ts" setup>
import enBadge from '@/assets/img/badges/app-store-en.svg'
import arBadge from '@/assets/img/badges/app-store-ar.svg'

const { locale } = useI18n()
const { app } = useAppConfig()
</script>

<template>
  <a
    :href="app.ios"
    target="_blank"
    class="bg-primary rounded-lg p-4 flex justify-center items-center"
  >
    <img
      :src="locale === 'ar' ? arBadge : enBadge"
      alt="App Store"
      height="36"
      width="165"
      class="pointer-events-none -mb-1"
    >
  </a>
</template>

<style scoped></style>
