import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'
import { zhNav, zhSidebar, zhFooter, zhDocFooter } from './nav/zh.mts'
import { enNav, enSidebar, enFooter } from './nav/en.mts'

// 自定义插件：处理 Jekyll 语法
const jekyllPlugin = () => ({
  name: 'jekyll-transform',
  enforce: 'pre',
  transform(code: string, id: string) {
    // 只处理 markdown 文件
    if (!id.endsWith('.md')) return null
    
    let transformed = code
    
    // 1. 处理图片的 {:style="..."} -> 改为 VitePress 支持的 {style="..."}
    transformed = transformed.replace(
      /!\[([^\]]*)\]\(([^)]+)\)\{:style="([^"]+)"\}/g,
      '![$1]($2){style="$3"}'
    )
    
    // 2. 移除其他所有 Jekyll Attribute Lists ({: ... })
    // 包括 {: #id }, {: .class }, {: .no_toc } 等
    transformed = transformed.replace(/\s*\{:[^}]+\}/g, '')
    
    // 3. 移除 Jekyll 的 {% include %} 语法
    transformed = transformed.replace(/\{%\s*include\s+[^%]+%\}/g, '')
    
    return transformed === code ? null : transformed
  }
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: '../dist',
  title: "Twinbasic Document",
  description: "an new vb6",

  // 忽略死链接检查（从Jekyll迁移的文档链接需要逐步修复）
  ignoreDeadLinks: true,

  // 重定向默认语言目录
  rewrites: {
    'zh/:rest*': ':rest*'
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
    plugins: [llmstxt(), jekyllPlugin() as any]
  }
})
