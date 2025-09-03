<script setup lang="ts">
const stats = ref([])
const config = useRuntimeConfig()
const { data } = await useFetch(`${config.public.apiBase}/statistics`)
if (data.value && data.value.data) {
  data.value.data.forEach((state) => {
    stats.value.push({
      icon: state.icon,
      value: state.number,
      label: state.title || '',
    })
  })
}
</script>

<template>
  <section
    id="state"
    class="py-16"
  >
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-y-24 lg:gap-x-30 text-center py-14">
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
            class="text-lg lg:text-3xl font-bold text-primary mt-2"
          />
          <span class="text-primary md:text-3xl text-base">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
