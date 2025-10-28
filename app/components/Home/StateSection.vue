<script setup lang="ts">
const { t } = useI18n()
const stats = [
  {
    id: 0,
    title: t('landing.stats.app_downloads'),
    value: 2000,
    icon: '/img/icons/download.svg',
  },
  {
    id: 1,
    title: t('landing.stats.active_users'),
    value: 2000,
    icon: '/img/icons/group.svg',
  },
  {
    id: 2,
    title: t('landing.stats.providers'),
    value: 2000,
    icon: '/img/icons/hospital.svg',
  },
  {
    id: 3,
    title: t('landing.stats.ratings'),
    value: 2000,
    icon: '/img/icons/star.svg',
  },
]
</script>

<template>
  <section
    id="state"
    class="py-16"
  >
    <div class="container">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-y-24 lg:gap-x-30 text-center py-14"
      >
        <div
          v-for="item in stats"
          :key="item.id"
          class="flex flex-col items-center gap-3"
          :class="{
            'md:border-e': item.id % 2 === 0 && item.id !== stats.length - 1,
            'lg:border-e': item.id % 2 !== 0 && item.id !== stats.length - 1,
            'order-first lg:order-none ': item.id == 2,
            'order-3 lg:order-none md:border-s lg:border-s-0 md:border-e-0 lg:border-e':
              item.id == 0,
          }"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <NuxtImg
            :src="item.icon"
            alt="Icon for state"
            class="text-primary size-[50px]"
            format="webp"
          />
          <CounterAnimation
            :number="item.value"
            class="text-lg lg:text-3xl font-bold text-primary mt-2"
          />
          <span class="text-primary md:text-3xl text-base">{{
            item.title
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
