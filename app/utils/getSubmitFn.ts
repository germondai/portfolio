import type * as Yup from "yup"
// https://github.com/logaretm/vee-validate/issues/3521

export function getSubmitFn<
  // biome-ignore lint/suspicious/noExplicitAny: required for schema typing
  Schema extends Yup.ObjectSchema<Record<string, any>>,
>(_: Schema, callback: (values: Yup.InferType<Schema>) => void) {
  // biome-ignore lint/suspicious/noExplicitAny: values can be any shape
  return (values: Record<string, any>) => {
    return callback(values)
  }
}
