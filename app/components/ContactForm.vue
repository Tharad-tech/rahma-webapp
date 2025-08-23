<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { useToast } from '@/components/ui/toast'
import {
  createContactUsSchema,
  type ContactUsSchema,
} from '@/schemas/contactFormSchema'

const { t } = useI18n()
const { toast } = useToast()

const formSchema = toTypedSchema(createContactUsSchema())

const { handleSubmit, resetForm } = useForm<ContactUsSchema>({
  validationSchema: formSchema,
})

const isSubmitting = ref(false)

const onSubmit = handleSubmit(async (values) => {
  if (isSubmitting.value) return

  isSubmitting.value = true

  try {
    await useNuxtApp().$api('/contact', {
      method: 'POST',
      body: values,
    })

    toast({
      title: t('forms.contact.success_title'),
      description: t('forms.contact.success_message'),
      variant: 'default',
    })

    // Reset form after successful submission
    resetForm()
  }
  catch (_error) {
    toast({
      title: t('forms.contact.error_title'),
      description: t('forms.contact.error_message'),
      variant: 'destructive',
    })
  }
  finally {
    isSubmitting.value = false
  }
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="grid grid-cols-3  gap-6 mb-8">
      <div class="col-span-3">
        <!-- name -->
        <AppFormField
          name="name"
          required
        >
          <template #default="{ componentField }">
            <Input
              type="text"
              class="py-7 text-lg placeholder:text-muted-foreground/75 border-secondary focus-visible:ring-secondary relative ps-10"
              :placeholder="t('forms.contact.full_name')"
              v-bind="componentField"
              :disabled="isSubmitting"
            />
            <NuxtImg
              src="/img/icons/profile.svg"
              class="absolute start-0 inset-y-0 m-3 py-3"
              size="24"
            />
          </template>
        </AppFormField>
      </div>
      <div class="col-span-3 ">
        <!-- email -->
        <AppFormField
          name="email"
          required
        >
          <template #default="{ componentField }">
            <Input
              type="email"
              class="py-7 text-lg placeholder:text-muted-foreground/75 border-secondary focus-visible:ring-secondary relative ps-10"
              :placeholder="t('forms.contact.email')"
              v-bind="componentField"
              :disabled="isSubmitting"
            />
            <NuxtImg
              src="/img/icons/sms.svg"
              class="absolute start-0 inset-y-0 m-3 py-3"
              size="24"
            />
          </template>
        </AppFormField>
      </div>

      <div class="col-span-3 ">
        <!-- message -->
        <AppFormField
          name="message"
          required
        >
          <template #default="{ componentField }">
            <Textarea
              v-bind="componentField"
              :placeholder="t('forms.contact.message')"
              class="resize-none text-lg placeholder:text-muted-foreground/75 border-secondary focus-visible:ring-secondary relative ps-10"
              rows="7"
              :disabled="isSubmitting"
            />
            <NuxtImg
              src="/img/icons/message-text.svg"
              class="absolute start-0 inset-y-0 m-3 py-3"
              size="24"
            />
          </template>
        </AppFormField>
      </div>

      <Button
        type="submit"
        size="lg"
        class="bg-primary text-white w-full md:w-52 text-xl font-bold"
        variant="default"
        :disabled="isSubmitting"
      >
        <template v-if="isSubmitting">
          <span class="i-lucide-loader-2 animate-spin mr-2" />
          {{ t("forms.contact.sending") }}
        </template>
        <template v-else>
          {{ t("forms.contact.send") }}
        </template>
      </Button>
    </div>
  </form>
</template>
