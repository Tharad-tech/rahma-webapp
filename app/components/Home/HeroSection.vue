<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<template>
  <section
    id="hero"
    class="py-16"
  >
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 md:gap-40 gap-10 items-center">
        <!-- content -->
        <div class="text-start">
          <h1
            class="text-[40px] 4xl:text-3xl font-bold text-primary mb-6"
          >
            {{ t("landing.hero.app_name") }}
          </h1>
          <div class="text-[16px] lg:text-xl 4xl:text-3xl text-secondary">
            <p class="my-6">
              {{ t("landing.hero.app_description") }}
            </p>
          </div>

          <div
            class="flex justify-center lg:justify-start  gap-4 mt-10 lg:mt-20"
          >
            <GooglePlayBadge class="!bg-[#6ACEE5]" />
            <AppStoreBadge class="!bg-[#6ACEE5]" />
          </div>
        </div>

        <!-- image mockup -->
        <div>
          <NuxtImg
            :src="
              locale === 'ar'
                ? '/img/screens/hero-screen-ar.png'
                : '/img/screens/hero-screen-en.png'
            "
            alt="App Mockup"
            height="545"
            width="420"
            class="mx-auto"
            format="webp"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
