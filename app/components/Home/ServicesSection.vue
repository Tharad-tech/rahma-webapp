<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const services = [
  { key: 'remote_booking', icon: '/img/icons/suit.svg' },
  { key: 'call_or_video', icon: '/img/icons/repairing.svg' },
  { key: 'certified_professionals', icon: '/img/icons/engineering.svg' },
  { key: 'privacy_security', icon: '/img/icons/delivery-fast-thin.svg' },
]
</script>

<template>
  <section
    id="service"
    class="py-16"
  >
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-10 justify-between">
        <!-- image -->
        <div class="hidden lg:col-span-2 lg:flex justify-center">
          <NuxtImg
            data-aos="fade-up"
            :src="locale === 'ar' ? '/img/screens/services-screen-ar.png' : '/img/screens/services-screen-en.png'"
            alt="App preview"
            height="660"
            width="327"
            format="webp"
          />
        </div>

        <!-- services -->
        <div class="lg:col-span-3 text-center lg:text-start -mt-4 lg:mt-4">
          <h2 class="title-underline text-primary text-2xl md:text-4xl font-bold inline-block mb-11">
            {{ t('landing.service.our_services') }}
          </h2>
          <p
            data-aos="fade-up"
            class="text-muted-foreground text-xl font-medium mb-20"
          >
            {{ t('landing.service.services_description') }}
          </p>
          <div class="md:grid  md:grid-cols-2 gap-y-20 gap-x-28 mt-6 flex flex-col items-center justify-center">
            <div
              v-for="(service, index) in services"
              :key="index"
              class="flex items-center md:flex-row flex-col gap-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="bg-primary p-3 rounded-md">
                <NuxtImg
                  :src="service.icon"
                  alt="Service icon"
                  class="w-8 h-8"
                  width="32"
                  height="32"
                  format="webp"
                />
              </div>
              <div>
                <p class="text-[24px]">
                  {{ t(`landing.service.${service.key}`) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
