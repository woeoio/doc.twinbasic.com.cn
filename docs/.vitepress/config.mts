import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'
import { zhNav, zhSidebar, zhFooter, zhDocFooter } from './nav/zh.mts'
import { enNav, enSidebar, enFooter } from './nav/en.mts'
import { clearDieLink } from './plugins/clearDieLink.ts'

// clearDieLink 插件：从 Jekyll 迁移的文档死链修复
// 功能：
// 1. 自动添加 .md 后缀到相对链接
// 2. HTML 后缀转 MD
// 3. 目录链接规范化（/ → /index.md）
// 4. Jekyll Attribute Lists 清理
// 5. Jekyll TOC 语法清理
// 6. 图片路径空格处理
// 7. Jekyll include 语法移除
const dieLinkPlugin = clearDieLink({
  debug: false,           // 开发时可设为 true 查看处理日志
  addMdExtension: true,   // 自动添加 .md 后缀
  convertHtmlToMd: true,  // HTML 转 MD
  normalizeDirLinks: true,// 目录链接规范化
  cleanJekyllSyntax: true,// 清理 Jekyll 语法
  encodeImageSpaces: true // 编码图片路径空格
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: '../dist',
  title: "twinbasic-docs",
  description: "an new vb6",

  // 忽略死链接检查（从Jekyll迁移的文档链接需要逐步修复）
  // ignoreDeadLinks: true,

  // 重定向默认语言目录 + Jekyll 迁移的旧路径
  rewrites: {
    'zh/:rest*': ':rest*',
    // Jekyll tB/ 路径重定向到实际路径 - 覆盖所有可能的路径
    ':lang(zh|en)/official/tB/:path*': ':lang/official/:path*',
    ':lang(zh|en)/official/tB/Core/:path*': ':lang/official/Reference/:path*',
    ':lang(zh|en)/official/tB/Modules/:path*': ':lang/official/Reference/Modules/:path*',
    ':lang(zh|en)/official/tB/IDE/Project/:path*': ':lang/official/IDE/:path*',
    ':lang(zh|en)/official/tB/IDE/AddIns/:path*': ':lang/official/IDE/AddIns/:path*',
    ':lang(zh|en)/official/tB/Reference/:path*': ':lang/official/Reference/:path*',
    ':lang(zh|en)/official/tB/Tutorials/:path*': ':lang/official/Tutorials/:path*',
    ':lang(zh|en)/official/tB/Features/:path*': ':lang/official/Features/:path*',
    ':lang(zh|en)/official/tB/Videos/:path*': ':lang/official/Videos/:path*',
    ':lang(zh|en)/official/tB/Controls': ':lang/official/Reference/Controls',
    ':lang(zh|en)/official/tB/Gloss': ':lang/official/Reference/Glossary',
    ':lang(zh|en)/official/tB/Modules': ':lang/official/Reference/Modules',
    ':lang(zh|en)/official/tB/Core': ':lang/official/Reference',
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
      // llmstxt(), 
      dieLinkPlugin as any
    ]
  }
})
