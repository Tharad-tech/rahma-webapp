<script lang="ts" setup>
import enBadge from '@/assets/img/badges/app-store-en.svg'
import arBadge from '@/assets/img/badges/app-store-ar.svg'

const { locale } = useI18n()
const { settings } = useSettings()
</script>

<template>
  <a
    :href="settings.apple_store_url"
    target="_blank"
    class="bg-primary rounded-lg p-4 flex justify-center items-center"
  >
    <img
      :src="locale === 'ar' ? arBadge : enBadge"
      alt="App Store"
      height="36"
      width="165"
      class="pointer-events-none -mb-1"
      format="webp"
    >
  </a>
</template>

<style scoped></style>
