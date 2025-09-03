import { z } from 'zod'

// contact us schema
export function createContactUsSchema() {
  const { t } = useI18n()
  return z.object({
    first_name: z.string({
      required_error: t('forms.contact.required_error'),
    }).min(3, t('forms.contact.name_error')),
    email: z.string({
      required_error: t('forms.contact.required_error'),
    }).email(t('forms.contact.email_error')),
    message: z.string({
      required_error: t('forms.contact.required_error'),
    }).min(10, t('forms.contact.message_error')),
  })
}

export type ContactUsSchema = z.infer<ReturnType<typeof createContactUsSchema>>
