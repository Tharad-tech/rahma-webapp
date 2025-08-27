<script setup>
import { useI18n } from 'vue-i18n'

const { data } = await useFetch('https://rahma.tharadtech.com/api/services')

const { t, locale } = useI18n()

const services = [
  { key: 'remote_booking', icon: '/img/icons/success-icon.svg' },
  { key: 'call_or_video', icon: '/img/icons/success-icon.svg' },
  { key: 'certified_professionals', icon: '/img/icons/success-icon.svg' },
  { key: 'privacy_security', icon: '/img/icons/success-icon.svg' },
]
</script>

<template>
  <section
    id="service"
    class="py-16"
  >
    <div class="container">
      <div class="flex flex-col-reverse items-center lg:grid lg:grid-cols-5 gap-24 lg:justify-evenly">
        <!-- image -->
        <div class=" lg:col-span-2 lg:flex justify-center">
          <NuxtImg
            data-aos="fade-up"
            :src="data.value?.data.icon ||locale === 'ar' ? '/img/screens/services-screen-ar.png' : '/img/screens/services-screen-en.png'"
            alt="App preview"
            height="464.18"
            width="468"
            class="w-[314px] h-[311px] lg:w-[464px] lg:h-[468px]"
            format="webp"
          />
        </div>

        <!-- services -->
        <div class="lg:col-span-3 text-start lg:mt-4">
          <h2 class="text-primary text-2xl md:text-4xl font-bold mb-7 border-b-4  border-[#6ACEE5] w-fit pb-3 ">
            {{ data.value?.data.title || t('landing.service.our_services') }}
          </h2>
          <p
            data-aos="fade-up"
            class="text-secondary-foreground text-lg mb-10 md:w-5/6"
          >
            {{ t('landing.service.services_description') }}
          </p>
          <div class=" mt-6 flex flex-col items-start gap-6 justify-center">
            <div
              v-for="(service, index) in services"
              :key="index"
              class="flex items-center md:flex-row  gap-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div>
                <NuxtImg
                  :src="service.icon"
                  alt="success-icon "
                  class="w-6 h-6 g:w-10 lg:h-10"
                  format="webp"
                />
              </div>
              <div>
                <p class="text-xl lg:text-[24px] text-[#121212]">
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
