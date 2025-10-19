// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'


/**************插件*************** */

// 引入图片查看器
import imageViewer from "vitepress-plugin-image-viewer";
import "viewerjs/dist/viewer.min.css";

import { useRoute } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  setup() {
    // 使用图片查看器
    imageViewer(useRoute());
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
