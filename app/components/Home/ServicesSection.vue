<script setup lang="ts">
const { t, locale } = useI18n()
const config = useRuntimeConfig()
const { data } = await useFetch(`${config.public.apiBase}/services`)
const services = ref([])

if (data.value && data.value.data) {
  data.value.data.forEach((element) => {
    services.value.push({
      key: element.title,
      icon: element.icon,
    })
  })
}
</script>

<template>
  <!-- ليه تستنى؟ الرعاية الصحية بقت أسهل!  -->
  <section
    id="service"
    class="py-16 bg-secondary/10"
  >
    <div class="container mx-auto px-4">
      <div
        class="lg:grid lg:grid-cols-2 gap-24 flex justify-center items-center flex-col-reverse"
      >
        <!-- Image section -->
        <div
          class="flex justify-center"
          data-aos="fade-right"
        >
          <NuxtImg
            :src="
              locale === 'ar'
                ? '/img/screens/about-screen-ar.png'
                : '/img/screens/about-screen-en.png'
            "
            alt="mobile image explain the feature in our website"
            format="webp"
            class="w-[344.7px] h-[300px] lg:w-[484px] lg:h-[422px] rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl"
            loading="lazy"
          />
        </div>

        <!-- Content section -->
        <div class="text-start">
          <div class="text-2xl lg:text-4xl 4xl:text-5xl font-bold text-primary mb-8 pt-7">
            <h2
              class="text-primary inline-block text-pretty leading-relaxed mb-4"
              data-aos="fade-left"
            >
              {{ t("landing.about.title") }}
            </h2>
            <p
              class="text-muted-foreground mb-10 text-xs md:text-lg leading-relaxed"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              {{ t("landing.about.description") }}
            </p>
          </div>

          <div class="mt-6 flex flex-col items-start gap-6 justify-center">
            <div
              v-for="(service, index) in services"
              :key="index"
              class="flex items-center gap-5 group hover:translate-x-2 transition-transform duration-300"
              data-aos="fade-up"
              :data-aos-delay="100 + (index * 100)"
            >
              <div class="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <NuxtImg
                  :src="service.icon"
                  :alt="service.key"
                  class="w-6 h-6 lg:w-10 lg:h-10"
                  format="webp"
                  loading="lazy"
                />
              </div>
              <div>
                <p class="text-base md:text-xl text-[#121212] font-medium">
                  {{ service.key }}
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
