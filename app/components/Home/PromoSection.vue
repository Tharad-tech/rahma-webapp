<script setup lang="ts">
const { t, locale } = useI18n()
</script>

<template>
  <section
    id="promo"
    class="bg-secondary text-white text-center py-16"
  >
    <div class="container">
      <!-- header -->
      <h2
        class="text-3xl md:text-4xl font-bold"
        data-aos="fade-up"
      >
        {{ t("landing.driver_promo.title") }}
      </h2>
      <p
        class="text-2xl text-balance mt-4"
        data-aos="fade-up"
      >
        {{ t("landing.driver_promo.description") }}
      </p>
      <!-- images & screens -->
      <div
        class="mt-10 flex justify-center"
        data-aos="zoom-in"
      >
        <NuxtImg
          :src="
            locale === 'ar'
              ? '/img/screens/promo-sm-screen-ar.png'
              : '/img/screens/promo-sm-screen-en.png'
          "
          alt="Promo Image"
          format="webp"
          width="355"
          height="717"
          class="lg:hidden"
        />

        <NuxtImg
          :src="
            locale === 'ar'
              ? '/img/screens/promo-ar.png'
              : '/img/screens/promo-en.png'
          "
          alt="Promo Image"
          format="webp"
          width="1656"
          height="785"
          class="hidden lg:block"
        />
      </div>
      <!-- download the app -->
      <div
        class="mt-5 text-center"
        data-aos="zoom-in"
      >
        <p class="text-2xl my-12">
          {{ t("landing.driver_promo.cta") }}
        </p>
        <div class="flex flex-wrap justify-center items-center gap-y-4 gap-x-8">
          <AppStoreBadge />
          <GooglePlayBadge />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
