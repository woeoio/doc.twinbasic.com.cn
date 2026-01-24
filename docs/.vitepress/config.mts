import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'

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
          { text: 'TBMAN', link: '/tbman' },
          { text: '官方', link: '/official/Home' },
          { text: '挑战', link: '/challenge/2026/202601' },
          { text: 'VBCCR', link: '/packages/vbccr/' },
          { text: 'VB6.PRO', link: 'https://vb6.pro/' },
          { text: '捐赠', link: 'https://doc.vb6.pro/donate/' },
          { text: '加QQ群', link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=c9Pkw_KrA0V0VYNhHq1bQ3ury6s85ZmM&authKey=QJ4ZvpFfXPivXHgvfpcnbPg%2F99jOQOqvHArXoPz5VIvFX%2Bn%2BV0CBf8uQf%2F14aLrn&noverify=0&group_code=788160802' }
        ], 
        outline: { 
          // level: [2, 3], 
          label: '页内目录' 
        },          
        sidebar: {
          '/': [
            {
              text: '入门指南',
              items: [
                { text: '首页', link: '/official/Home' },
                { text: '常见问题', link: '/official/twinBASIC-Frequently-Asked-Questions-(FAQs)' }
              ]
            },
            {
              text: 'twinBASIC 入门',
              items: [
                { text: '入门指南', link: '/start/base' },
                { text: '资源文件', link: '/res/pic' },
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
              text: '控件和属性',
              items: [
                { text: '锚定布局', link: '/official/Control-Anchoring-and-Docking-‐-Automatic-size-and-position-management' },
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
          ],
          '/packages/vbccr': [
            {
              text: 'VBCCR 控件',
              items: [
                { text: '介绍', link: '/packages/vbccr/' },
                { text: '动画控件', link: '/packages/vbccr/animation' },
                { text: '复选框控件', link: '/packages/vbccr/checkbox' },
                { text: '组合框控件', link: '/packages/vbccr/combobox' },
                { text: '命令按钮控件', link: '/packages/vbccr/commandbutton' },
                { text: '命令链接控件', link: '/packages/vbccr/commandlink' },
                { text: '通用对话框控件', link: '/packages/vbccr/commondialog' },
                { text: '工具条控件', link: '/packages/vbccr/coolbar' },
                { text: '日期时间选择器控件', link: '/packages/vbccr/datetimepicker' },
                { text: '驱动器列表控件', link: '/packages/vbccr/drivelist' },
                { text: '驱动器路径控件', link: '/packages/vbccr/drivepath' },
                { text: '文件路径控件', link: '/packages/vbccr/filepath' },
                { text: '字体组合框控件', link: '/packages/vbccr/fontcombo' },
                { text: '框架控件', link: '/packages/vbccr/frame' },
                { text: '热键控件', link: '/packages/vbccr/hotkey' },
                // { text: '图像控件', link: '/packages/vbccr/image' },
                { text: '图像组合框控件', link: '/packages/vbccr/imagecombo' },
                { text: '图像列表控件', link: '/packages/vbccr/imagelist' },
                { text: 'IP地址控件', link: '/packages/vbccr/ipaddress' },
                { text: '标签控件', link: '/packages/vbccr/label' },
                { text: '线条控件', link: '/packages/vbccr/line' },
                { text: '链接标签控件', link: '/packages/vbccr/linklabel' },
                { text: '列表框控件', link: '/packages/vbccr/listbox' },
                { text: '列表视图控件', link: '/packages/vbccr/listview' },
                { text: '多媒体控件', link: '/packages/vbccr/mciwnd' },
                { text: '月历控件', link: '/packages/vbccr/monthcalendar' },
                { text: '月视图控件', link: '/packages/vbccr/monthview' },
                { text: '选项控件', link: '/packages/vbccr/option' },
                { text: '选项按钮控件', link: '/packages/vbccr/optionbutton' },
                { text: '分页控件', link: '/packages/vbccr/pager' },
                { text: '图片框控件', link: '/packages/vbccr/picture' },
                { text: '进度条控件', link: '/packages/vbccr/progressbar' },
                { text: '富文本框控件', link: '/packages/vbccr/richtextbox' },
                { text: '滚动条控件', link: '/packages/vbccr/scrollbar' },
                { text: '形状控件', link: '/packages/vbccr/shape' },
                { text: '滑块控件', link: '/packages/vbccr/slider' },
                { text: '数字调节框控件', link: '/packages/vbccr/spinbox' },
                { text: '状态栏控件', link: '/packages/vbccr/statusbar' },
                { text: '系统信息控件', link: '/packages/vbccr/sysinfo' },
                { text: '选项卡控件', link: '/packages/vbccr/tabstrip' },
                { text: '文本框控件', link: '/packages/vbccr/textbox' },
                { text: '定时器控件', link: '/packages/vbccr/timer' },
                { text: '工具栏控件', link: '/packages/vbccr/toolbar' },
                { text: '树形视图控件', link: '/packages/vbccr/treeview' },
                { text: '上下调节控件', link: '/packages/vbccr/updown' },
                { text: '虚拟组合框控件', link: '/packages/vbccr/virtualcombo' },
                { text: '虚拟列表框控件', link: '/packages/vbccr/vlistbox' },
                // { text: '网页浏览器控件', link: '/packages/vbccr/webbrowser' },
                { text: '窗口化标签控件', link: '/packages/vbccr/windowedlabel' },
                { text: '官方文档', link: '/packages/vbccr/readme' }
              ]
            }
          ],          
          '/tbman/': [
          {
              text: 'TBMAN 开发手册',
              items: [
                { text: '简介', link: '/tbman/' },
                // {
                //   text: '线程池类库',
                //   collapsed: false,
                //   items: [
                //     { text: '简介', link: '/tbman/threadPool/' },
                //     { text: 'API 参考', link: '/tbman/threadPool/api-reference' },
                //     { text: '使用教程', link: '/tbman/threadPool/tutorials' },
                //     { text: '示例代码', link: '/tbman/threadPool/examples' },
                //     { text: '高级特性', link: '/tbman/threadPool/advanced-features' },
                //     { text: '任务数据与结果管理', link: '/tbman/threadPool/TaskDataAndResult' },
                //     { text: '性能优化指南', link: '/tbman/threadPool/PerformanceOptimization' },
                //     { text: '特性集成指南', link: '/tbman/threadPool/FeatureIntegration' },
                //     { text: '高级应用示例', link: '/tbman/threadPool/AdvancedExamples' },
                //     { text: '故障排除指南', link: '/tbman/threadPool/Troubleshooting' }
                //   ]
                // }
              ]
            },
          ],
          '/challenge/2026/202601': [
          {
              text: '官方赛事',
              items: [
                { text: '2026年1月', link: '/challenge/2026/202601' },
                
              ]
            },
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
          { text: 'TBMAN', link: '/tbman' },
          { text: 'Official Docs', link: '/en/official/Home' },
          { text: 'Challenges', link: '/en/challenge/2026/202601' },
          { text: 'VBCCR', link: '/packages/vbccr/' },
          { text: 'VB6.PRO', link: 'https://vb6.pro/' },
          { text: 'Join QQ Group', link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=c9Pkw_KrA0V0VYNhHq1bQ3ury6s85ZmM&authKey=QJ4ZvpFfXPivXHgvfpcnbPg%2F99jOQOqvHArXoPz5VIvFX%2Bn%2BV0CBf8uQf%2F14aLrn&noverify=0&group_code=788160802' }
        ],

        sidebar: {
          '/en/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Home', link: '/en/official/Home' },
                { text: 'FAQs', link: '/en/official/twinBASIC-Frequently-Asked-Questions-(FAQs)' },
                { text: 'Resource Files', link: '/en/res/pic' },
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
              text: 'Controls and Properties',
              items: [
                { text: 'Anchoring and Docking', link: '/official/Control-Anchoring-and-Docking-‐-Automatic-size-and-position-management' },
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
          ],
          '/en/packages/vbccr/': [
            {
              text: 'VBCCR Controls',
              items: [
                { text: 'Introduction', link: '/en/packages/vbccr/' },
                { text: 'Animation Control', link: '/en/packages/vbccr/animation' },
                { text: 'Checkbox Control', link: '/en/packages/vbccr/checkbox' },
                { text: 'ComboBox Control', link: '/en/packages/vbccr/combobox' },
                { text: 'CommandButton Control', link: '/en/packages/vbccr/commandbutton' },
                { text: 'CommandLink Control', link: '/en/packages/vbccr/commandlink' },
                { text: 'CommonDialog Control', link: '/en/packages/vbccr/commondialog' },
                { text: 'CoolBar Control', link: '/en/packages/vbccr/coolbar' },
                { text: 'DateTimePicker Control', link: '/en/packages/vbccr/datetimepicker' },
                { text: 'DriveList Control', link: '/en/packages/vbccr/drivelist' },
                { text: 'DrivePath Control', link: '/en/packages/vbccr/drivepath' },
                { text: 'FilePath Control', link: '/en/packages/vbccr/filepath' },
                { text: 'FontCombo Control', link: '/en/packages/vbccr/fontcombo' },
                { text: 'Frame Control', link: '/en/packages/vbccr/frame' },
                { text: 'HotKey Control', link: '/en/packages/vbccr/hotkey' },
                // { text: 'Image Control', link: '/en/packages/vbccr/image' },
                { text: 'ImageCombo Control', link: '/en/packages/vbccr/imagecombo' },
                { text: 'ImageList Control', link: '/en/packages/vbccr/imagelist' },
                { text: 'IPAddress Control', link: '/en/packages/vbccr/ipaddress' },
                { text: 'Label Control', link: '/en/packages/vbccr/label' },
                { text: 'Line Control', link: '/en/packages/vbccr/line' },
                { text: 'LinkLabel Control', link: '/en/packages/vbccr/linklabel' },
                { text: 'ListBox Control', link: '/en/packages/vbccr/listbox' },
                { text: 'ListView Control', link: '/en/packages/vbccr/listview' },
                { text: 'MCIWnd Control', link: '/en/packages/vbccr/mciwnd' },
                { text: 'MonthCalendar Control', link: '/en/packages/vbccr/monthcalendar' },
                { text: 'MonthView Control', link: '/en/packages/vbccr/monthview' },
                { text: 'Option Control', link: '/en/packages/vbccr/option' },
                { text: 'OptionButton Control', link: '/en/packages/vbccr/optionbutton' },
                { text: 'Pager Control', link: '/en/packages/vbccr/pager' },
                { text: 'Picture Control', link: '/en/packages/vbccr/picture' },
                { text: 'ProgressBar Control', link: '/en/packages/vbccr/progressbar' },
                { text: 'RichTextBox Control', link: '/en/packages/vbccr/richtextbox' },
                { text: 'ScrollBar Control', link: '/en/packages/vbccr/scrollbar' },
                { text: 'Shape Control', link: '/en/packages/vbccr/shape' },
                { text: 'Slider Control', link: '/en/packages/vbccr/slider' },
                { text: 'SpinBox Control', link: '/en/packages/vbccr/spinbox' },
                { text: 'StatusBar Control', link: '/en/packages/vbccr/statusbar' },
                { text: 'SysInfo Control', link: '/en/packages/vbccr/sysinfo' },
                { text: 'TabStrip Control', link: '/en/packages/vbccr/tabstrip' },
                { text: 'TextBox Control', link: '/en/packages/vbccr/textbox' },
                { text: 'Timer Control', link: '/en/packages/vbccr/timer' },
                { text: 'ToolBar Control', link: '/en/packages/vbccr/toolbar' },
                { text: 'TreeView Control', link: '/en/packages/vbccr/treeview' },
                { text: 'UpDown Control', link: '/en/packages/vbccr/updown' },
                { text: 'VirtualCombo Control', link: '/en/packages/vbccr/virtualcombo' },
                { text: 'VListBox Control', link: '/en/packages/vbccr/vlistbox' },
                // { text: 'WebBrowser Control', link: '/en/packages/vbccr/webbrowser' },
                { text: 'WindowedLabel Control', link: '/en/packages/vbccr/windowedlabel' },
                { text: 'Official Documentation', link: '/en/packages/vbccr/readme' }
              ]
            }
          ],
          '/en/tbman/': [
            {
              text: 'TBMAN Developer',
              items: [
                { text: 'Introduction', link: '/en/tbman/' },
                // {
                //   text: 'ThreadPool Library',
                //   collapsed: false,
                //   items: [
                //     { text: 'Introduction', link: '/en/tbman/threadPool/' },
                //     { text: 'API Reference', link: '/en/tbman/threadPool/api-reference' },
                //     { text: 'Tutorials', link: '/en/tbman/threadPool/tutorials' },
                //     { text: 'Examples', link: '/en/tbman/threadPool/examples' },
                //     { text: 'Advanced Features', link: '/en/tbman/threadPool/advanced-features' },
                //     { text: 'Task Data and Result Management', link: '/en/tbman/threadPool/TaskDataAndResult' },
                //     { text: 'Performance Optimization Guide', link: '/en/tbman/threadPool/PerformanceOptimization' },
                //     { text: 'Feature Integration Guide', link: '/en/tbman/threadPool/FeatureIntegration' },
                //     { text: 'Advanced Application Examples', link: '/en/tbman/threadPool/AdvancedExamples' },
                //     { text: 'Troubleshooting Guide', link: '/en/tbman/threadPool/Troubleshooting' }
                //   ]
                // }
              ]
            },
          ],
          '/en/challenge/2026/202601': [
          {
              text: 'Challenges',
              items: [
                { text: '2026.01', link: '/en/challenge/2026/202601' },
                
              ]
            },
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
    plugins: [llmstxt()]
  }
})
