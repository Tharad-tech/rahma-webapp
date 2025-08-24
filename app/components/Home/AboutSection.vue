<script setup lang="ts">
const { t, locale } = useI18n()
const aboutServices = [
  { key: 'feature1', icon: '/img/icons/success-icon.svg' },
  { key: 'feature2', icon: '/img/icons/success-icon.svg' },
  { key: 'feature3', icon: '/img/icons/success-icon.svg' },
  { key: 'feature4', icon: '/img/icons/success-icon.svg' },
  { key: 'feature5', icon: '/img/icons/success-icon.svg' },
]
</script>

<template>
  <section
    id="about"
    class="py-16 bg-secondary/10"
  >
    <div class="container">
      <div
        class="lg:grid lg:grid-cols-2 gap-24 flex justify-center items-center flex-col-reverse"
      >
        <!-- image  -->
        <div class="flex">
          <NuxtImg
            data-aos="fade-up"
            :src="
              locale === 'ar'
                ? '/img/screens/about-screen-ar.png'
                : '/img/screens/about-screen-en.png'
            "
            alt="About Image"
            format="webp"
            class="w-[344.7px] h-[300px] lg:w-[484px] lg:h-[422px]"
          />
        </div>
        <!-- content -->
        <div class="text-start">
          <div class="text-2xl lg:text-4xl 4xl:text-5xl font-bold text-primary mb-8 pt-7">
            <h2
              class="text-primary inline-block text-pretty leading-relaxed mb-4"
            >
              {{ t("landing.about.title") }}
            </h2>
            <p
              class="text-muted-foreground mb-10 text-xs md:text-lg"
              data-aos="fade-up"
            >
              {{ t("landing.about.description") }}
            </p>
          </div>

          <div class=" mt-6 flex flex-col items-start gap-6 justify-center">
            <div
              v-for="(service, index) in aboutServices"
              :key="index"
              class="flex items-center md:flex-row  gap-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div>
                <NuxtImg
                  :src="service.icon"
                  alt="success-icon "
                  class="w-6 h-6 lg:w-10 lg:h-10"
                  format="webp"
                />
              </div>
              <div>
                <p class="text-base md:text-2xl text-[#121212]">
                  {{ t(`landing.about.${service.key}`) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
