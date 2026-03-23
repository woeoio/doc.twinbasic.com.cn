import { defineConfig } from 'vitepress'
import path from 'path'
import { zhNav, zhSidebar, zhFooter, zhDocFooter } from './nav/zh.mts'
import { enNav, enSidebar, enFooter } from './nav/en.mts'
import clearDieLinkPlugin from './plugins/clearDieLink'
import jekyllPlugin from './plugins/jekyll'
import navRedirectPlugin from './plugins/navRedirect'
import rewrites from './plugins/rewrites'
import llmstxtQuiet from './plugins/llmstxt-quiet'
import { renameBuildFiles } from './plugins/renameBuildFiles'
import { generateSpaceRedirects } from './plugins/spaceRedirect'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: '../dist',
  title: "Twinbasic Document",
  description: "an new vb6",

  // 忽略死链接检查（插件 clearDieLinkPlugin 会在构建时替换死链为纯文本）
  // ignoreDeadLinks: true,

  // 重定向默认语言目录
  rewrites,

  async buildEnd(siteConfig) {
    const outDir = siteConfig.outDir || path.resolve(__dirname, '../../dist')
    // 1. 重命名文件（空格 -> 连字符）并修复内部链接
    renameBuildFiles(outDir)
    // 2. 为带连字符的文件生成带空格的重定向文件
    generateSpaceRedirects(outDir)
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
          // level: [2, 3], 
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

  vite: {
    plugins: [
      llmstxtQuiet(), 
      clearDieLinkPlugin(),
      jekyllPlugin() as any,
      navRedirectPlugin()
    ]
  }
})
