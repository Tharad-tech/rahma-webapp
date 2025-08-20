<script setup lang="ts">
const { t } = useI18n() // For translations
</script>

<template>
  <main>
    <PrivacyPolicy
      :title="t('privacy.terms_conditions')"
      :content="t('privacy.terms_conditions_title')"
      :description="t('privacy.terms_conditions_description')"
    />
  </main>
</template>
