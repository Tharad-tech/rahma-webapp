<script lang="ts" setup>
const { t } = useI18n()

const { settings } = useSettings()
</script>

<template>
  <NuxtLink
    :to="settings?.google_play_url"
    class="bg-primary cursor-pointer rounded-lg p-4 flex justify-center items-center"
  >
    <div class="flex flex-row gap-3">
      <NuxtImg
        src="/img/icons/google-play.svg"
        alt="Google Play"
        class="md:w-9 md:h-9 w-[25px] h-[25px]"
      />
      <div class="flex flex-col items-center text-white">
        <p class="text-sm">{{ t("get") }}</p>
        <p class="text-xl font-bold">Google Play</p>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
