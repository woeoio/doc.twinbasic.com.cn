import { defineConfig } from 'vitepress'
import { zhNav, zhSidebar, zhFooter, zhDocFooter } from './nav/zh.mts'
import { enNav, enSidebar, enFooter } from './nav/en.mts'
import navRedirectPlugin from './plugins/navRedirect'
import llmstxtQuiet from './plugins/llmstxt-quiet'
import markdownItDeflist from 'markdown-it-deflist'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: '../dist',
  title: "Twinbasic Document",
  description: "an new vb6",

  // 【重要优化】将页面元数据分离到单独的 JS 文件中
  // 这可以将 HTML 体积减少约 40-50%，同时不影响 SEO
  // 页面内容、标题、meta标签仍在 HTML 中，只有站点配置数据移到外部 JS
  metaChunk: true,

  // 死链接检查：永远不要设为 true，不允许任何死链存在
  ignoreDeadLinks: false,

  // 重写路由：zh/ 下的文件去掉 zh/ 前缀，URL 为 /xxx 而非 /zh/xxx
  // 源文件在 docs/zh/ 下保持目录整洁，URL 与目录结构一致，兼容 SEO 已收录路径
  rewrites: {
    'zh/:path*': ':path*'
  },

  sitemap: {
    hostname: 'https://doc.twinbasic.com.cn',
  },

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      link: '/',
      themeConfig: {
        nav: zhNav, 
        outline: { 
          level: [2, 3], 
          label: '页内目录' 
        },          
        sidebar: zhSidebar,

        footer: zhFooter,

        docFooter: zhDocFooter,

        lastUpdated: {
          text: '最后更新',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'short',
            timeZone: 'Asia/Shanghai',
          }
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: enNav,
        outline: { 
          level: [2, 3], 
          label: 'On this page' 
        },
        sidebar: enSidebar,
        footer: enFooter
      }
    }
  },

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/images/twinBASICIconTransparent.png' }],
    // SEO
    ['link', { rel: 'alternate', hreflang: 'zh-CN', href: 'https://doc.twinbasic.com.cn/zh/' }],
    ['link', { rel: 'alternate', hreflang: 'en-US', href: 'https://doc.twinbasic.com.cn/en/' }],
    ['meta', { name: 'keywords', content: 'twinBASIC文档,twinBASIC中文文档,VB6替代品' }],
    ['meta', { name: 'author', content: 'twinBASIC中文社区' }],
    ['meta', { property: 'og:title', content: 'twinBASIC中文文档' }],
    ['meta', { property: 'og:description', content: 'twinBASIC是一个现代化的VB6替代品' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'twinBASIC Docs' }],
    ['meta', { property: 'og:image', content: 'https://doc.twinbasic.com.cn/images/twinBASICIconTransparent.png' }],
    ['meta', { property: 'og:url', content: 'https://doc.twinbasic.com.cn/' }],
    ['script', { type: 'application/ld+json' }, `
      {
        "@context": "https://doc.twinbasic.com.cn/",
        "@type": "WebSite",
        "name": "twinBASIC中文文档",
        "url": "https://doc.twinbasic.com.cn"
      }
    `],
    // 统计
    ['script', { src: 'https://tj.a-vi.com/script.js', 'data-website-id': '981a4811-c51f-4403-a37a-8351e0e3b1cb', 'data-spa': 'auto', defer: '' }],
    ['script', { src: '//api.a-vi.com/tongji/vist.js' }],
  ],

  themeConfig: {
    logo: { src: '/images/twinBASICIconTransparent.png', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/twinbasic' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear query conditions',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Switch'
                }
              }
            }
          }
        }
      }
    }
  },

  lastUpdated: true,

  markdown: {
    config: (md) => {
      md.use(markdownItDeflist)
    }
  },

  vite: {
    plugins: [
      llmstxtQuiet() as any, 
      navRedirectPlugin() as any
    ]
  }
})
