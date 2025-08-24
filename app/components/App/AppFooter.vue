<script setup lang="ts">
import logoWhite from '@/assets/img/logo-white.svg'

const { t } = useI18n()
const { contact, author } = useAppConfig()
</script>

<template>
  <footer class="bg-[#020A4C] text-white pt-32">
    <div class="container">
      <div class="mx-auto text-center px-4">
        <h2 class="text-2xl lg:text-3xl font-medium mb-6">
          {{ t("footer.download_now") }}
        </h2>
        <!-- download -->
        <div class="flex justify-center gap-4 mb-6">
          <GooglePlayBadge class="!bg-[#6ACEE5]" />
          <AppStoreBadge class="!bg-[#6ACEE5]" />
        </div>
        <!-- develop by -->
        <p class="text-xl mb-12">
          {{ t("footer.developed_by") }}
          <a
            :href="author.url"
            class="underline"
            target="_blank"
          >{{
            t("authorName")
          }}</a>
        </p>
      </div>
    </div>
    <hr class="mx-8">
    <div class="mt-6 py-6">
      <div
        class="container"
      >
        <div class="grid grid-cols-1 md:grid-cols-3 place-content-between gap-4">
          <div class="flex md:justify-start justify-center">
            <img
              :src="logoWhite"
              alt="Rahma Logo"
              width="59"
              height="60"
            >
          </div>

          <div
            class="flex justify-center items-center gap-5 md:gap-10 text-base lg:text-lg"
          >
            <!-- term -->
            <NuxtLinkLocale
              to="/terms-of-use"
              class="hover:underline underline-offset-8"
            >
              {{ t('footer.privacy_policy') }}
            </NuxtLinkLocale>
            <!-- privacy -->
            <NuxtLinkLocale
              to="/terms-and-conditions"
              class="hover:underline underline-offset-8"
            >
              {{ t('footer.terms') }}
            </NuxtLinkLocale>
          </div>

          <div class="flex justify-center md:justify-end items-center gap-2 md:gap-4">
            <!-- twitter -->
            <NuxtLink
              :to="contact.twitter"
              external
              class="text-white flex justify-center items-center size-10 border rounded-full p-2 hover:bg-white/10 transition-colors duration-300"
            ><Icon
              name="mdi:twitter"
              size="20"
            /></NuxtLink>
            <!-- instagram -->
            <NuxtLink
              :to="contact.instagram"
              external
              class="text-white flex justify-center items-center size-10 border rounded-full p-2 hover:bg-white/10 transition-colors duration-300"
            ><Icon
              name="mdi:instagram"
              size="20"
            /></NuxtLink>
            <!-- facebook -->
            <NuxtLink
              :to="contact.facebook"
              external
              class="text-white flex justify-center items-center size-10 border rounded-full p-2 hover:bg-white/10 transition-colors duration-300"
            ><Icon
              name="ri:facebook-fill"
              size="20"
            /></NuxtLink>
            <!-- whatsapp -->
            <NuxtLink
              :to="contact.whatsapp"
              external
              class="text-white flex justify-center items-center size-10 border rounded-full p-2 hover:bg-white/10 transition-colors duration-300"
            ><Icon
              name="mdi:whatsapp"
              size="20"
            /></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
