// https://vitepress.dev/guide/custom-theme
import { h, watch } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'


/**************插件*************** */

// 引入图片查看器
import imageViewer from "vitepress-plugin-image-viewer";
import "viewerjs/dist/viewer.min.css";

import { useRoute } from 'vitepress'

// 引入 Matomo 追踪
import { initMatomo, trackPageView } from '../utils/matomo'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  setup() {
    // 使用图片查看器
    const route = useRoute()
    imageViewer(route);

    // 只在客户端初始化 Matomo
    if (typeof window !== 'undefined') {
      // 初始化 Matomo 追踪器
      // 注意：请根据您的实际 Matomo 配置修改以下参数
      // 您可以通过环境变量来配置这些值
      const env = (import.meta as any).env
      const matomoConfig = {
        urlBase: env.VITE_MATOMO_URL_BASE || 'https://tj2.a-vi.com/',  // 例如: 'https://your-matomo-domain.com/'
        siteId: Number(env.VITE_MATOMO_SITE_ID) || 4,  // 您的站点 ID
        disabled: env.VITE_MATOMO_DISABLED === 'true',  // 开发环境可以设置为 true 来禁用
        heartBeat: {
          active: true,
          seconds: 15,  // 心跳计时器（秒）
        },
        linkTracking: true,  // 启用链接追踪
      }

      // 如果配置了 Matomo，则初始化
      if (matomoConfig.urlBase && matomoConfig.siteId > 0 && !matomoConfig.disabled) {
        initMatomo(matomoConfig)

        // 追踪初始页面视图（页面首次加载）
        setTimeout(() => {
          trackPageView()
        }, 100)

        // 监听路由变化（SPA 页面切换）
        watch(() => route.path, (newPath, oldPath) => {
          if (newPath !== oldPath) {
            // 延迟一下确保页面已渲染
            setTimeout(() => {
              trackPageView(undefined, window.location.href)
            }, 100)
          }
        })
      } else if ((import.meta as any).env?.DEV) {
        console.warn('Matomo 未配置或已禁用。请在环境变量中设置 VITE_MATOMO_URL_BASE 和 VITE_MATOMO_SITE_ID')
      }
    }
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
