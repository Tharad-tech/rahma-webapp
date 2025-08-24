<script setup lang="ts">
import logo from '@/assets/img/logo.svg'

const { t, locale } = useI18n()
const route = useRoute()
const isRtl = computed(() => locale.value === 'ar')

const sections = computed(() => [
  { id: 'hero', to: '/#hero', label: t('nav.home') },
  { id: 'service', to: '/#service', label: t('nav.services') },
  { id: 'about', to: '/#about', label: t('nav.about') },
  { id: 'contact', to: '/#contact', label: t('nav.contact') },
])

const isOpen = ref<boolean>(false)

const { isActiveSection, scrollToSection } = useSectionVisibility(sections, {
  validPaths: ['/', '/ar'],
  updateHash: true,
  threshold: 0.3,
  rootMargin: '-80px 0px -80px 0px',
})

// Close mobile menu when route changes
watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  },
)
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-background/95 backdrop-blur-lg py-4 shadow-sm"
  >
    <div class="container">
      <div class="flex items-center justify-between gap-4 md:gap-6">
        <NuxtLinkLocale
          to="/"
          class="flex items-center focus-visible:outline-none"
        >
          <img
            :src="logo"
            alt="Rahma Logo"
            width="59"
            height="60"
            class="logo_response"
          >
        </NuxtLinkLocale>

        <!-- !---- Mobile Menu ----! -->
        <div class="flex lg:hidden items-center order-first">
          <Sheet v-model:open="isOpen">
            <SheetTrigger as-child>
              <NuxtImg
                src="/img/icons/menu.svg"
                width="25"
                height="18"
                alt="menu icon"
                :class="[
                  'cursor-pointer',
                  {
                    'rotate-180': !isRtl,
                  },
                ]"
                @click="isOpen = true"
              />
            </SheetTrigger>
            <SheetContent
              :side="isRtl ? 'right' : 'left'"
              class="flex flex-col justify-between"
            >
              <div>
                <SheetHeader class="mb-8">
                  <SheetTitle class="flex items-center justify-between">
                    <NuxtLinkLocale
                      to="/"
                      class="flex items-center focus-visible:outline-none"
                    >
                      <img
                        :src="logo"
                        alt="rahma Logo"
                        width="50"
                        height="50"
                      >
                    </NuxtLinkLocale>
                    <AppLangSwitcher @change="isOpen = false" />
                  </SheetTitle>
                </SheetHeader>
                <div class="flex flex-col gap-5">
                  <Button
                    v-for="{ to, label, id } in sections"
                    :key="label"
                    as-child
                    variant="link"
                    class="relative justify-start text-xl hover:no-underline"
                  >
                    <NuxtLinkLocale
                      :to="to"
                      :class="[
                        'relative before:content-[\'\'] before:absolute before:start-0 before:w-0.5 before:h-full before:transition-all',
                        isActiveSection(id)
                          ? 'before:bg-secondary text-secondary'
                          : 'before:bg-transparent hover:before:bg-secondary/25',
                      ]"
                      @click="scrollToSection(id)"
                    >
                      {{ label }}
                    </NuxtLinkLocale>
                  </Button>
                </div>
                <div class="flex flex-col gap-4 mt-14">
                  <Button
                    as-child
                    size="lg"
                  >
                    <NuxtLinkLocale
                      to="#contact"
                      external
                      @click="scrollToSection('contact')"
                    >
                      {{ t("nav.contact_us") }}
                    </NuxtLinkLocale>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <!-- !---- Desktop Menu ----! -->
        <NavigationMenu class="hidden lg:block ">
          <NavigationMenuList class="flex items-center gap-6">
            <NavigationMenuItem
              v-for="{ to, label, id } in sections"
              :key="label"
            >
              <NavigationMenuLink
                as-child
                class="navigation-menu-link"
              >
                <NuxtLinkLocale
                  :to="to"
                  :class="[
                    'relative transition-colors text-xl cursor-pointer hover:text-secondary hover:no-underline before:w-0 before:h-0.5 before:transition-all before:duration-300 before:ease-in-out before:absolute before:start-0 before:-bottom-2 before:z-10',
                    isActiveSection(id)
                      ? 'active text-secondary before:bg-secondary before:w-8 before:opacity-100'
                      : 'before:opacity-0 before:bg-transparent hover:before:bg-secondary hover:before:w-8 hover:before:opacity-100',
                  ]"
                  @click="scrollToSection(id)"
                >
                  {{ label }}
                </NuxtLinkLocale>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div class="ms-auto lg:ms-0 hidden sm:flex items-center gap-4">
          <AppLangSwitcher @change="isOpen = false" />

          <Button
            as-child
            size="lg"
            class="hidden md:flex"
          >
            <NuxtLinkLocale
              to="#contact"
              external
              @click="scrollToSection('contact')"
            >
              {{ t("nav.contact_us") }}
            </NuxtLinkLocale>
          </Button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Styling for desktop menu active links with ::after pseudo-element */
.navigation-menu-link a {
  position: relative;
}

.navigation-menu-link a::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -16px;
  width: 0;
  height: 2px;
  background-color: theme("colors.primary.DEFAULT");
  opacity: 0;
  transition:
    width 0.3s ease,
    opacity 0.3s ease;
  margin: 0 auto;
}

.navigation-menu-link a:hover::after {
  width: 40px;
  opacity: 0.5;
}

.navigation-menu-link a.active::after {
  width: 40px;
  opacity: 1;
}

/* Mobile menu active state */
.nuxt-link-locale.before\:bg-primary {
  font-weight: 500;
}
@media screen and (max-width: 1024px){
  .logo_response{
    width: 40.5px;
height: 41.35px;

  }
}
</style>
