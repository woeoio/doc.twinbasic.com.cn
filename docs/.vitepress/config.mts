import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: '../dist',
  title: "twinbasic-docs",
  description: "an new vb6",

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
        nav: [
          { text: '首页', link: '/' },
          { text: '官方文档', link: '/official/Home' },
          { text: 'VB6.PRO', link: 'https://doc.vb6.pro/' },
          { text: '加QQ群', link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=c9Pkw_KrA0V0VYNhHq1bQ3ury6s85ZmM&authKey=QJ4ZvpFfXPivXHgvfpcnbPg%2F99jOQOqvHArXoPz5VIvFX%2Bn%2BV0CBf8uQf%2F14aLrn&noverify=0&group_code=788160802' }
        ], sidebar: {
          '/': [
            {
              text: '入门指南',
              items: [
                { text: '首页', link: '/official/Home' },
                { text: '常见问题', link: '/official/twinBASIC-Frequently-Asked-Questions-(FAQs)' }
              ]
            },
            {
              text: 'twinBASIC 功能',
              items: [
                { text: '功能特性 (1)', link: '/official/twinBASIC-Features-1' },
                { text: '功能特性 (2)', link: '/official/twinBASIC-Features-2' },
                { text: '功能特性 (3)', link: '/official/twinBASIC-Features-3' },
                { text: '功能特性 (4)', link: '/official/twinBASIC-Features-4' },
                { text: '编译器常量', link: '/official/twinBASIC-Compiler-Constants' }
              ]
            },
            {
              text: '自定义控件',
              items: [
                { text: '自定义控件介绍', link: '/official/twinBASIC-CustomControls-Introduction' },
                { text: '定义自定义控件', link: '/official/twinBASIC---CustomControls---Defining-a-CustomControl' },
                { text: '窗体设计器说明', link: '/official/twinBASIC---CustomControls---Notes-about-the-form-designer' },
                { text: '控件绘制', link: '/official/twinBASIC---CustomControls---Painting---drawing-to-your-control' },
                { text: '属性表和对象序列化', link: '/official/twinBASIC---CustomControls---Property-Sheet-&-Object-Serialization' }
              ]
            },
            {
              text: '包管理',
              items: [
                { text: '什么是包', link: '/official/twinBASIC-Packages-What-is-a-package' },
                { text: '创建TWINPACK包', link: '/official/twinBASIC-Packages-Creating-a-TWINPACK-package' },
                { text: '从TWINPACK导入包', link: '/official/twinBASIC-Packages-Importing-a-package-from-a-TWINPACK-file' },
                { text: '从TWINSERV导入包', link: '/official/twinBASIC-Packages-Importing-a-package-from-TWINSERV' },
                { text: '更新包', link: '/official/twinBASIC-Packages-Updating-a-package' }
              ]
            }
          ]
        },

        footer: {
          message: 'twinBASIC及其LOGO版权为作者"韦恩"所有',
          copyright: `twinBASIC中文文档 © 2023-${new Date().getFullYear()} 由本站翻译`
        },

        docFooter: {
          prev: '上一页',
          next: '下一页'
        },

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
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Official Docs', link: '/en/official/Home' },
          { text: 'VB6.PRO', link: 'https://doc.vb6.pro/' },
          { text: 'Join QQ Group', link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=c9Pkw_KrA0V0VYNhHq1bQ3ury6s85ZmM&authKey=QJ4ZvpFfXPivXHgvfpcnbPg%2F99jOQOqvHArXoPz5VIvFX%2Bn%2BV0CBf8uQf%2F14aLrn&noverify=0&group_code=788160802' }
        ],

        sidebar: {
          '/en/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Home', link: '/en/official/Home' },
                { text: 'FAQs', link: '/en/official/twinBASIC-Frequently-Asked-Questions-(FAQs)' }
              ]
            },
            {
              text: 'twinBASIC Features',
              items: [
                { text: 'Features (1)', link: '/en/official/twinBASIC-Features-1' },
                { text: 'Features (2)', link: '/en/official/twinBASIC-Features-2' },
                { text: 'Features (3)', link: '/en/official/twinBASIC-Features-3' },
                { text: 'Features (4)', link: '/en/official/twinBASIC-Features-4' },
                { text: 'Compiler Constants', link: '/en/official/twinBASIC-Compiler-Constants' }
              ]
            },
            {
              text: 'Custom Controls',
              items: [
                { text: 'CustomControls Introduction', link: '/en/official/twinBASIC-CustomControls-Introduction' },
                { text: 'Defining a CustomControl', link: '/en/official/twinBASIC---CustomControls---Defining-a-CustomControl' },
                { text: 'Form Designer Notes', link: '/en/official/twinBASIC---CustomControls---Notes-about-the-form-designer' },
                { text: 'Control Painting', link: '/en/official/twinBASIC---CustomControls---Painting---drawing-to-your-control' },
                { text: 'Property Sheet & Serialization', link: '/en/official/twinBASIC---CustomControls---Property-Sheet-&-Object-Serialization' }
              ]
            },
            {
              text: 'Package Management',
              items: [
                { text: 'What is a package', link: '/en/official/twinBASIC-Packages-What-is-a-package' },
                { text: 'Creating TWINPACK package', link: '/en/official/twinBASIC-Packages-Creating-a-TWINPACK-package' },
                { text: 'Import from TWINPACK', link: '/en/official/twinBASIC-Packages-Importing-a-package-from-a-TWINPACK-file' },
                { text: 'Import from TWINSERV', link: '/en/official/twinBASIC-Packages-Importing-a-package-from-TWINSERV' },
                { text: 'Updating packages', link: '/en/official/twinBASIC-Packages-Updating-a-package' }
              ]
            }
          ]
        },

        footer: {
          message: 'twinBASIC and LOGO copyright of "WaynePhillipsEA" author',
          copyright: `twinBASIC Chinese Documentation copyright © 2023-${new Date().getFullYear()} Translated by this site`
        }
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
    `]
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

  lastUpdated: true
})
