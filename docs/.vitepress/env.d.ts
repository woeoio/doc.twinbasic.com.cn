/// <reference types="vitepress/client" />

declare module 'vitepress' {
  interface ImportMetaEnv {
    readonly VITE_MATOMO_URL_BASE?: string
    readonly VITE_MATOMO_SITE_ID?: string
    readonly VITE_MATOMO_DISABLED?: string
  }
}

interface ImportMetaEnv {
  readonly VITE_MATOMO_URL_BASE?: string
  readonly VITE_MATOMO_SITE_ID?: string
  readonly VITE_MATOMO_DISABLED?: string
}

