<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const stats = computed(() => [
  { icon: '/img/icons/star.svg', value: 1200, label: t('landing.state.comments') },
  { icon: '/img/icons/earth.svg', value: 7000, label: t('landing.state.active_users') },
  { icon: '/img/icons/group.svg', value: 1500, label: t('landing.state.delegates') },
  { icon: '/img/icons/download.svg', value: 18000, label: t('landing.state.downloads') },
],

)
</script>

<template>
  <section
    id="state"
    class="py-16"
  >
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center py-14">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="flex flex-col items-center gap-4"
          :class="{ 'lg:border-e': index !== stats.length - 1 }"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <NuxtImg
            :src="stat.icon"
            alt="Icon for state"
            class="text-primary size-[61px]"
          />
          <CounterAnimation
            :number="stat.value"
            class="text-[36px] font-bold text-primary mt-2"
          />
          <span class="text-primary text-[26px]">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
