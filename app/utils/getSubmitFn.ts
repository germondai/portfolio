import type * as Yup from 'yup'
// https://github.com/logaretm/vee-validate/issues/3521

export function getSubmitFn<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Schema extends Yup.ObjectSchema<Record<string, any>>,
>(_: Schema, callback: (values: Yup.InferType<Schema>) => void) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (values: Record<string, any>) => {
    return callback(values)
  }
}
