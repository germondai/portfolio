import type { Device } from '@nuxtjs/device/runtime/types/index'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $device: Device
  }
}
