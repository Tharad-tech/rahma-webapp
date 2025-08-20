<script setup lang="ts">
const { t, locale } = useI18n()
</script>

<template>
  <section
    id="about"
    class="py-16 bg-secondary/10 relative before:content-[''] before:absolute before:inset-0 before:z-[-1] before:bg-no-repeat before:bg-[top_right] ltr:before:-scale-x-100"
  >
    <div class="container">
      <div
        class="lg:grid lg:grid-cols-2 gap-10 flex justify-center items-center flex-col"
      >
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
            width="488"
            height="611"
          />
        </div>
        <div class="text-center lg:text-start">
          <span class="text-muted-foreground text-2xl mb-7">{{
            t("landing.about.span")
          }}</span>
          <div class="text-4xl 4xl:text-5xl font-bold text-primary mb-16 pt-7">
            <h2
              class="text-neutral-800 inline-block text-pretty leading-relaxed"
            >
              <span class="title-underline">{{
                t("landing.about.highlight")
              }}</span>
              <span>
                {{ t("landing.about.title") }}
              </span>
            </h2>
          </div>
          <p
            class="text-muted-foreground mb-10 text-xl"
            data-aos="fade-up"
          >
            {{ t("landing.about.description") }}
          </p>

          <div class="text-neutral-800 font-medium text-2xl">
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li
                class="flex items-center gap-8"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Icon
                  name="clarity:success-line"
                  class="text-secondary"
                  width="16"
                  height="10"
                />
                {{ t("landing.about.feature2") }}
              </li>
              <li
                class="flex items-center gap-8"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Icon
                  name="clarity:success-line"
                  class="text-secondary"
                  width="16"
                  height="10"
                />
                {{ t("landing.about.feature1") }}
              </li>
              <li
                class="flex items-center gap-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Icon
                  name="clarity:success-line"
                  class="text-secondary"
                  width="16"
                  height="10"
                />
                {{ t("landing.about.feature3") }}
              </li>
              <li
                class="flex items-center gap-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Icon
                  name="clarity:success-line"
                  class="text-secondary"
                  width="16"
                  height="10"
                />
                {{ t("landing.about.feature4") }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#about::before {
  background-image: url("/img/bg/about-app-bg.svg");
}
</style>
