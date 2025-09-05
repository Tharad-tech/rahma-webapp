<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section
    id="contact"
    class="py-10 md:py-16  "
  >
    <div class="flex justify-center items-center w-full text-primary font-bold text-2xl md:text-4xl">
      <h1 class=" p-4 border-b-4 border-[#020A4C] mb-10">
        {{ t("forms.contact.title") }}
      </h1>
    </div>
    <div class="container lg:border border-[#E7E7E7] rounded-3xl">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-16 py-16 items-center justify-center">
        <!-- image -->
        <div
          class="lg:col-span-2 flex justify-center lg:justify-start items-center lg:items-start flex-col order-2 lg:order-1"
        >
          <NuxtImg
            src="/img/screens/form.png"
            alt="form image"
            loading="lazy"
            width="429"
            height="369"
            format="webp"
          />
        </div>
        <!-- form -->
        <div class="lg:col-span-3 order-1 lg:order-2 flex justify-center lg:justify-start lg:items-start items-center  ">
          <ContactForm class="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
