<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useHead } from '#imports'

const { t } = useI18n()

useHead(() => ({
  title: t('meta.title'),
}))
</script>س

<template>
  <div class="min-h-80">
    <HomeHeroSection />
    <HomeAboutSection />
    <HomePromoSection />
    <HomeServicesSection />
    <HomeStateSection />
    <HomeContactUs />
  </div>
</template>

<style scoped></style>
