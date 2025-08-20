<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import type { InputHTMLAttributes, HTMLAttributes } from 'vue'
import { useFieldError, type FieldSlotProps } from 'vee-validate'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

interface Props {
  name: string
  label?: string
  class?: HTMLAttributes['class']
  labelClass?: HTMLAttributes['class']
  type?: InputHTMLAttributes['type']
  initialValue?: any
  uncheckedValue?: any
  description?: string
  descriptionClass?: HTMLAttributes['class']
  showErrors?: boolean
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showErrors: true,
})

type FormFieldSlotProps = Pick<
  FieldSlotProps<any>,
  | 'field'
  | 'componentField'
  | 'value'
  | 'meta'
  | 'errors'
  | 'errorMessage'
  | 'handleChange'
  | 'resetField'
  | 'validate'
>

const slots = defineSlots<{
  label?: () => void
  default: (props: FormFieldSlotProps) => any
  description?: (props: { isValid: boolean }) => void
}>()

const error = useFieldError(props.name)

const shouldValidateOnModelUpdate = computed(() => {
  return !!error.value
})
</script>

<template>
  <FormField
    v-slot="{
      componentField,
      field,
      value,
      meta,
      errors,
      errorMessage,
      handleChange,
      resetField,
      validate,
    }"
    :name="name"
    :type="type"
    :validate-on-model-update="shouldValidateOnModelUpdate"
    class="my-5"
  >
    <FormItem
      v-auto-animate
      :class="props.class"
    >
      <!-- Label section -->
      <FormLabel
        v-if="label || slots.label"
        :class="labelClass"
        class="my-3"
      >
        <slot name="label">
          {{ label }} <span v-if="required">*</span>
        </slot>
      </FormLabel>

      <!-- Main input section -->
      <FormControl>
        <slot
          :field="field"
          :component-field="componentField"
          :value="value"
          :meta="meta"
          :errors="errors"
          :error-message="errorMessage"
          :handle-change="handleChange"
          :reset-field="resetField"
          :validate="validate"
        />
      </FormControl>

      <FormDescription
        v-if="!errorMessage && (description || slots.description)"
        :key="'description'"
      >
        <slot
          name="description"
          :is-valid="meta.valid"
        >
          {{ description }}
        </slot>
      </FormDescription>

      <FormMessage
        v-else-if="errorMessage && props.showErrors"
        :key="'error'"
        class="my-1"
      >
        {{ errorMessage }}
      </FormMessage>
    </FormItem>
  </FormField>
</template>

<style scoped></style>
