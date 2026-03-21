export const zhNav = [
  { text: '首页', link: '/' },
  { text: 'TBMAN', link: '/tbman' },
  { text: '官方', link: 'https://docs.twinbasic.com/' },
  { text: '挑战', link: '/challenge/2026/202601' },
  { text: 'VB6.PRO', link: 'https://vb6.pro/' },
  { text: '捐赠', link: 'https://doc.vb6.pro/donate/' },
  { text: '加QQ群', link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=c9Pkw_KrA0V0VYNhHq1bQ3ury6s85ZmM&authKey=QJ4ZvpFfXPivXHgvfpcnbPg%2F99jOQOqvHArXoPz5VIvFX%2Bn%2BV0CBf8uQf%2F14aLrn&noverify=0&group_code=788160802' }
]

export const zhSidebar = {
  '/': [
    {
      text: 'Challenges 挑战',
      items: [
        { text: '概述', link: '/official2/Challenges/' },
        { text: '创建游戏', link: '/official2/Challenges/create-a-game' },
        { text: '诊断工具', link: '/official2/Challenges/self-contained_diagnostic_tool' }
      ]
    },
    {
      text: 'Features 功能特性',
      items: [
        { text: '概述', link: '/official2/Features/' },
        { text: '64位支持', link: '/official2/Features/64bit' },
        { text: '属性介绍', link: '/official2/Features/Attributes-Intro' },
        {
          text: 'Advanced 高级',
          items: [
            { text: '概述', link: '/official2/Features/Advanced/' },
            { text: 'API声明', link: '/official2/Features/Advanced/API-Declarations' },
            { text: '汇编', link: '/official2/Features/Advanced/Assembly' },
            { text: '类和模块', link: '/official2/Features/Advanced/Classes-and-Modules' },
            { text: '多线程', link: '/official2/Features/Advanced/Multithreading' },
            { text: '静态链接', link: '/official2/Features/Advanced/Static-Linking' }
          ]
        },
        {
          text: 'Compiler-IDE 编译器和IDE',
          items: [
            { text: '概述', link: '/official2/Features/Compiler-IDE/' },
            { text: '代码透镜', link: '/official2/Features/Compiler-IDE/CodeLens' },
            { text: '编译器警告', link: '/official2/Features/Compiler-IDE/Compiler-Warnings' },
            { text: '调试', link: '/official2/Features/Compiler-IDE/Debugging' },
            { text: 'IDE功能', link: '/official2/Features/Compiler-IDE/IDE-Features' },
            { text: '包服务器', link: '/official2/Features/Compiler-IDE/Package-Server' }
          ]
        },
        {
          text: 'GUI-Components 界面组件',
          items: [
            { text: '概述', link: '/official2/Features/GUI-Components/' },
            { text: '锚定和停靠', link: '/official2/Features/GUI-Components/Anchoring-Docking' },
            { text: '控件属性', link: '/official2/Features/GUI-Components/Control-Properties' },
            { text: '窗体', link: '/official2/Features/GUI-Components/Forms' },
            { text: '现代化', link: '/official2/Features/GUI-Components/Modernization' },
            { text: '新控件', link: '/official2/Features/GUI-Components/New' },
            { text: '用户控件', link: '/official2/Features/GUI-Components/UserControl' },
            { text: '无窗口控件', link: '/official2/Features/GUI-Components/Windowless' }
          ]
        },
        {
          text: 'Language 语言特性',
          items: [
            { text: '概述', link: '/official2/Features/Language/' },
            { text: '别名类型', link: '/official2/Features/Language/Alias-Types' },
            { text: '注释', link: '/official2/Features/Language/Comments' },
            { text: '数据类型', link: '/official2/Features/Language/Data-Types' },
            { text: '委托', link: '/official2/Features/Language/Delegates' },
            { text: '泛型', link: '/official2/Features/Language/Generics' },
            { text: '处理程序', link: '/official2/Features/Language/Handlers' },
            { text: '继承', link: '/official2/Features/Language/Inheritance' },
            { text: '内联初始化', link: '/official2/Features/Language/Inline-Initialization' },
            { text: '接口和CoClasses', link: '/official2/Features/Language/Interfaces-CoClasses' },
            { text: '字面量', link: '/official2/Features/Language/Literals' },
            { text: '循环控制', link: '/official2/Features/Language/Loop-Control' },
            { text: '模块组织', link: '/official2/Features/Language/Module-Organization' },
            { text: '运算符', link: '/official2/Features/Language/Operators' },
            { text: '重载', link: '/official2/Features/Language/Overloading' },
            { text: '指针', link: '/official2/Features/Language/Pointers' },
            { text: '返回值', link: '/official2/Features/Language/Return' },
            { text: '类型推断', link: '/official2/Features/Language/Type-Inference' },
            { text: '用户定义类型', link: '/official2/Features/Language/UDTs' }
          ]
        },
        {
          text: 'Packages 包管理',
          items: [
            { text: '概述', link: '/official2/Features/Packages/' },
            { text: '创建TWINPACK包', link: '/official2/Features/Packages/Creating a TWINPACK package' },
            { text: '从TWINPACK导入包', link: '/official2/Features/Packages/Importing a package from a TWINPACK file' },
            { text: '从TWINSERV导入包', link: '/official2/Features/Packages/Importing a package from TWINSERV' },
            { text: '更新包', link: '/official2/Features/Packages/Updating a package' }
          ]
        },
        {
          text: 'Project-Configuration 项目配置',
          items: [
            { text: '概述', link: '/official2/Features/Project-Configuration/' },
            { text: 'ActiveX注册', link: '/official2/Features/Project-Configuration/ActiveX-Registration' },
            { text: '编译器选项', link: '/official2/Features/Project-Configuration/Compiler-Options' },
            { text: '项目类型', link: '/official2/Features/Project-Configuration/Project-Types' }
          ]
        },
        {
          text: 'Standard-Library 标准库',
          items: [
            { text: '概述', link: '/official2/Features/Standard-Library/' },
            { text: '文件I/O', link: '/official2/Features/Standard-Library/File-IO' },
            { text: '新函数', link: '/official2/Features/Standard-Library/New-Functions' },
            { text: 'Unicode支持', link: '/official2/Features/Standard-Library/Unicode-Support' }
          ]
        }
      ]
    },
    {
      text: 'IDE 集成开发环境',
      items: [
        { text: '概述', link: '/official2/IDE/' },
        { text: '调用堆栈', link: '/official2/IDE/Call Stack' },
        { text: '调试控制台', link: '/official2/IDE/Debug Console' },
        { text: '诊断', link: '/official2/IDE/Diagnostics' },
        { text: '编辑器', link: '/official2/IDE/Editor' },
        { text: '查找替换', link: '/official2/IDE/FindReplace' },
        { text: '历史记录', link: '/official2/IDE/History' },
        { text: '内存', link: '/official2/IDE/Memory' },
        { text: '新建项目', link: '/official2/IDE/New Project' },
        { text: '打开的编辑器', link: '/official2/IDE/Open Editors' },
        { text: '大纲', link: '/official2/IDE/Outline' },
        { text: '包发布', link: '/official2/IDE/Package Publishing' },
        { text: '项目资源管理器', link: '/official2/IDE/Project Explorer' },
        { text: '项目设置', link: '/official2/IDE/Project Settings' },
        { text: '属性', link: '/official2/IDE/Properties' },
        { text: '启动画面', link: '/official2/IDE/Splash Screen' },
        { text: '状态栏', link: '/official2/IDE/Status Bar' },
        { text: 'tbForm', link: '/official2/IDE/tbForm' },
        { text: 'tbReport', link: '/official2/IDE/tbReport' },
        { text: '工具栏', link: '/official2/IDE/Toolbar' },
        { text: '工具箱', link: '/official2/IDE/Toolbox' },
        { text: '变量', link: '/official2/IDE/Variables' },
        { text: '监视', link: '/official2/IDE/Watches' },
        { text: '网页', link: '/official2/IDE/Webpage' }
      ]
    },
    {
      text: 'Miscellaneous 其他',
      items: [
        { text: '文档开发', link: '/official2/Miscellaneous/Documentation Development' },
        { text: '常见问题', link: '/official2/Miscellaneous/FAQs' }
      ]
    },
    {
      text: 'Reference 参考',
      items: [
        { text: '概述', link: '/official2/Reference/' },
        { text: '属性', link: '/official2/Reference/Attributes' },
        { text: '分类', link: '/official2/Reference/Categories' },
        { text: '编译器常量', link: '/official2/Reference/Compiler Constants' },
        { text: '控件', link: '/official2/Reference/Controls' },
        { text: '术语表', link: '/official2/Reference/Glossary' },
        { text: '过程和函数', link: '/official2/Reference/Procedures and Functions' },
        { text: '语句', link: '/official2/Reference/Statements' }
      ]
    },
    {
      text: 'Tutorials 教程',
      items: [
        { text: '概述', link: '/official2/Tutorials/' },
        { text: '数组', link: '/official2/Tutorials/Arrays' },
        {
          text: 'CustomControls 自定义控件',
          items: [
            { text: '概述', link: '/official2/Tutorials/CustomControls/' },
            { text: '定义自定义控件', link: '/official2/Tutorials/CustomControls/Defining a CustomControl' },
            { text: '窗体设计器说明', link: '/official2/Tutorials/CustomControls/Notes about the form designer' },
            { text: '绘制控件', link: '/official2/Tutorials/CustomControls/Painting-drawing to your control' },
            { text: '属性表和对象序列化', link: '/official2/Tutorials/CustomControls/Property sheet and object serialization' }
          ]
        },
        {
          text: 'WebView2',
          items: [
            { text: '概述', link: '/official2/Tutorials/WebView2/' },
            { text: '自定义用户数据文件夹', link: '/official2/Tutorials/WebView2/Customize the UserDataFolder' },
            { text: '入门指南', link: '/official2/Tutorials/WebView2/Getting started' },
            { text: '重入', link: '/official2/Tutorials/WebView2/Re-entrancy' }
          ]
        }
      ]
    },
    {
      text: 'Videos 视频',
      items: [
        { text: '概述', link: '/official2/Videos/' },
        { text: 'AccessDevCon', link: '/official2/Videos/AccessDevCon' },
        { text: 'twinBASIC', link: '/official2/Videos/twinBASIC' }
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
      ]
    },
  ],
  '/challenge/2026': [
    {
      text: '官方赛事',
      items: [
        { text: '2026年1月', link: '/challenge/2026/202601' },
        { text: '2026年2月', link: '/challenge/2026/202602' },
      ]
    },
  ]
}

export const zhFooter = {
  message: 'twinBASIC及其LOGO版权为作者"韦恩"所有',
  copyright: `twinBASIC中文文档 © 2023-${new Date().getFullYear()} 由本站翻译`
}

export const zhDocFooter = {
  prev: '上一页',
  next: '下一页'
}
