<script setup lang="ts">
import { ConfigProvider } from 'reka-ui'
import { useSeoMeta, useHead, useLocaleHead } from '#imports'

const { t } = useI18n()
const head = useLocaleHead()

// Convert translated texts to computed to avoid errors
const title = computed(() => t('meta.title'))
const description = computed(() => t('meta.description'))
const metaDescription = computed(() => t('meta.metaDescription'))

// Define SEO data
useSeoMeta({
  // ogImage: '/img/og.png',
  // twitterImage: '/img/og.png',
  twitterCard: 'summary',
  themeColor: '#15405b',
  author: 'Tharad Tech',
})

// Setup links and icons
useHead({
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
})
</script>

<template>
  <div>
    <Html
      :lang="head?.htmlAttrs?.lang"
      :dir="head?.htmlAttrs?.dir"
    >
      <Head>
        <Title>{{ title }}</Title>

        <!-- Check if links exist before repeating -->
        <template v-if="head?.link">
          <template
            v-for="(link, index) in head.link"
            :key="index"
          >
            <Link
              :rel="link.rel"
              :href="link.href"
              :hreflang="link.hreflang"
            />
          </template>
        </template>

        <!-- Meta data -->
        <Meta
          name="description"
          :content="description"
        />
        <Meta
          property="og:title"
          :content="title"
        />
        <Meta
          property="og:description"
          :content="metaDescription"
        />
        <Meta
          property="twitter:title"
          :content="title"
        />
        <Meta
          property="twitter:description"
          :content="metaDescription"
        />

        <!-- Check if meta data exists before repeating -->
        <template v-if="head?.meta">
          <template
            v-for="(meta, index) in head.meta"
            :key="index"
          >
            <Meta
              :property="meta.property"
              :content="meta.content"
            />
          </template>
        </template>
      </Head>

      <Body>
        <NuxtLoadingIndicator />
        <ConfigProvider :dir="head?.htmlAttrs?.dir">
          <div>
            <NuxtLayout>
              <NuxtPage />
            </NuxtLayout>
            <ClientOnly>
              <Toaster />
            </ClientOnly>
          </div>
        </ConfigProvider>
      </Body>
    </Html>
  </div>
</template>
