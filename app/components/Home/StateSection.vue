<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const stats = computed(() => [
  { icon: '/img/icons/download.svg', value: 20, label: t('landing.stats.app_downloads') },
  { icon: '/img/icons/group.svg', value: 20, label: t('landing.stats.active_users') },
  { icon: '/img/icons/hospital.svg', value: 20, label: t('landing.stats.providers') },
  { icon: '/img/icons/star.svg', value: 20, label: t('landing.stats.ratings') },
],
)
</script>

<template>
  <section
    id="state"
    class="py-16"
  >
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16  lg:gap-y-24 lg:gap-x-30 text-center py-14">
        <div
          v-for="(stat, index) in stats"
          :key="index"

          class="flex flex-col items-center gap-3"
          :class="{
            'md:border-e': index % 2 === 0 && index !== stats.length - 1,
            'lg:border-e': index % 2 !== 0 && index !== stats.length - 1,
            'order-first lg:order-none ': index ==2,
            'order-3 lg:order-none md:border-s lg:border-s-0 md:border-e-0 lg:border-e': index==0,
          }"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <NuxtImg
            :src="stat.icon"
            alt="Icon for state"
            class="text-primary size-[50px]"
          />
          <CounterAnimation
            :number="stat.value"
            class="text-[24px] font-bold text-primary mt-2"
          />
          <span class="text-primary md:text-[32px] text-[16px]">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
