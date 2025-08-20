<script setup lang="ts">
const { t } = useI18n() // For translations
</script>

<template>
  <main>
    <PrivacyPolicy
      :title="t('privacy.privacy_policy')"
      :content="t('privacy.privacy_policy_title')"
      :description="t('privacy.privacy_policy_description')"
    />
  </main>
</template>
