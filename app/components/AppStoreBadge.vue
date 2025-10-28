<script lang="ts" setup>
const { t } = useI18n()
const { settings } = useSettings()
</script>

<template>
  <NuxtLinkLocale
    :to="settings.apple_store_url"
    class="bg-primary rounded-lg p-4 flex justify-center items-center"
  >
    <div class="flex flex-row gap-3">
      <NuxtImg
        src="/img/icons/app-store.svg"
        alt="App Store"
        class="md:w-9 md:h-9 w-[25px] h-[25px]"
      />
      <div class="flex flex-col items-center text-white">
        <p class="text-sm">
          {{ t("get") }}
        </p>
        <p class="text-xl font-bold">
          App Store
        </p>
      </div>
    </div>
  </NuxtLinkLocale>
</template>

<style scoped></style>
