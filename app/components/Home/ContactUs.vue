<script setup lang="ts">
</script>

<template>
  <section
    id="contact"
    class="py-16"
  >
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-16 py-16">
        <!-- form -->
        <div class="lg:col-span-3 order-2 lg:order-1">
          <ContactForm class="max-w-2xl" />
        </div>
        <!-- details -->
        <div
          class="lg:col-span-2 flex justify-center lg:justify-start items-center lg:items-start flex-col order-1 lg:order-2"
        >
          <NuxtImg src="/img/screens/form" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
