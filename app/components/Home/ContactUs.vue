<script setup lang="ts">
</script>

<template>
  <section
    id="contact"
    class="py-16 "
  >
    <div class="flex justify-center items-center w-full text-primary font-bold text-4xl">
      <h1 class=" p-4 border-b-4 border-[#020A4C] mb-10">
        تواصل معنا
      </h1>
    </div>
    <div class="container border border-[#E7E7E7] rounded-3xl">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-16 py-16 items-center justify-center">
        <!-- image -->
        <div
          class="lg:col-span-2 flex justify-center lg:justify-start items-center lg:items-start flex-col "
        >
          <NuxtImg
            src="/img/screens/form.png"
            alt="form image"
            loading="lazy"
            width="429"
            height="369"
          />
        </div>
        <!-- form -->
        <div class="lg:col-span-3">
          <ContactForm class="max-w-2xl" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
