<script setup>
import { useI18n } from 'vue-i18n'

// I18n
const { t } = useI18n()
</script>

<template>
  <NuxtLayout name="default">
    <div class="flex items-center mt-10 flex-col">
      <NuxtImg
        src="img/screens/error.svg"
        width="550"
        height="550"
        alt="404"
      />
    </div>
    <div class="flex justify-center flex-col mb-16">
      <p class="text-center text-lg md:text-2xl my-5 mb-10">
        {{ t('error.pageNotFound') }}
      </p>
      <NuxtLink
        to="/"
        class="flex justify-center mx-5"
      >
        <Button
          color="brand"
          class="w-[420px]"
        >{{
          t('error.backHome')
        }}</Button>
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
