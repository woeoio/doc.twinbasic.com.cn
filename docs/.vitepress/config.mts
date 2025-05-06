import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "twinbasic-docs",
  description: "an new vb6 ",


  // 多语言配置
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/'
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: { src: '/images/twinBASICIconTransparent.png', width: 24, height: 24 },
    // 搜索
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
          },
        }
      }
    },    


    nav: [
      { text: '首页', link: '/' },
      { text: '官方文档', link: '/zh/official/Home' }
    ],

    sidebar: {
      '/zh/': [
        {
          text: '入门指南',
          items: [
            { text: '首页', link: '/zh/official/Home' },
            { text: '常见问题', link: '/zh/official/twinBASIC-Frequently-Asked-Questions-(FAQs)' }
          ]
        },
        {
          text: 'twinBASIC 功能',
          items: [
            { text: '功能特性 (1)', link: '/zh/official/twinBASIC-Features-1' },
            { text: '功能特性 (2)', link: '/zh/official/twinBASIC-Features-2' },
            { text: '功能特性 (3)', link: '/zh/official/twinBASIC-Features-3' },
            { text: '功能特性 (4)', link: '/zh/official/twinBASIC-Features-4' },
            { text: '编译器常量', link: '/zh/official/twinBASIC-Compiler-Constants' }
          ]
        },
        {
          text: '自定义控件',
          items: [
            { text: '自定义控件介绍', link: '/zh/official/twinBASIC-CustomControls-Introduction' },
            { text: '定义自定义控件', link: '/zh/official/twinBASIC---CustomControls---Defining-a-CustomControl' },
            { text: '窗体设计器说明', link: '/zh/official/twinBASIC---CustomControls---Notes-about-the-form-designer' },
            { text: '控件绘制', link: '/zh/official/twinBASIC---CustomControls---Painting---drawing-to-your-control' },
            { text: '属性表和对象序列化', link: '/zh/official/twinBASIC---CustomControls---Property-Sheet-&-Object-Serialization' }
          ]
        },
        {
          text: '包管理',
          items: [
            { text: '什么是包', link: '/zh/official/twinBASIC-Packages-What-is-a-package' },
            { text: '创建TWINPACK包', link: '/zh/official/twinBASIC-Packages-Creating-a-TWINPACK-package' },
            { text: '从TWINPACK导入包', link: '/zh/official/twinBASIC-Packages-Importing-a-package-from-a-TWINPACK-file' },
            { text: '从TWINSERV导入包', link: '/zh/official/twinBASIC-Packages-Importing-a-package-from-TWINSERV' },
            { text: '更新包', link: '/zh/official/twinBASIC-Packages-Updating-a-package' }
          ]
        }
      ],
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
