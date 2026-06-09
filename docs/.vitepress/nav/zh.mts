export const zhNav = [
  { text: '首页', link: '/' },
  { text: 'TBMAN', link: '/tbman' },
  { text: '官方文档', link: '/official/' },
  { text: '第三方包', items: [
    { text: 'VBCCR', link: '/packages/vbccr/' },
  ]},
  { text: '挑战', link: '/challenge/2026/202601' },
  { text: 'VB6.PRO', link: 'https://vb6.pro/' },
  { text: '捐赠', link: 'https://doc.vb6.pro/donate/' },
  { text: '加QQ群', link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=c9Pkw_KrA0V0VYNhHq1bQ3ury6s85ZmM&authKey=QJ4ZvpFfXPivXHgvfpcnbPg%2F99jOQOqvHArXoPz5VIvFX%2Bn%2BV0CBf8uQf%2F14aLrn&noverify=0&group_code=788160802' }
]

export const zhSidebar = {
  '/': [],
  '/official/': [
    {
      text: 'Twinbasic 官方文档',
      items: [
        { text: '概览', link: '/official/' }
      ]
    },
    {
      text: 'Features 功能特性',
      items: [
        { text: '概览', link: '/official/Features/' },
        { text: '64位编译', link: '/official/Features/64bit' },
        { text: '属性', link: '/official/Features/Attributes-Intro' },
        { text: 'Fusion', link: '/official/Features/Fusion' },
        {
          text: '高级特性',
          items: [
            { text: '概览', link: '/official/Features/Advanced/' },
            { text: '增强型 API 声明', link: '/official/Features/Advanced/API-Declarations' },
            { text: '内联汇编插入', link: '/official/Features/Advanced/Assembly' },
            { text: '类特性', link: '/official/Features/Advanced/Classes-and-Modules' },
            { text: '多线程', link: '/official/Features/Advanced/Multithreading' },
            { text: '静态链接', link: '/official/Features/Advanced/Static-Linking' }
          ]
        },
        {
          text: '编译器与 IDE',
          items: [
            { text: '概览', link: '/official/Features/Compiler-IDE/' },
            { text: 'CodeLens', link: '/official/Features/Compiler-IDE/CodeLens' },
            { text: '编译器警告', link: '/official/Features/Compiler-IDE/Compiler-Warnings' },
            { text: '调试', link: '/official/Features/Compiler-IDE/Debugging' },
            { text: '现代 IDE 功能', link: '/official/Features/Compiler-IDE/IDE-Features' },
            { text: '包服务器', link: '/official/Features/Compiler-IDE/Package-Server' }
          ]
        },
        {
          text: 'GUI 组件',
          items: [
            { text: '概览', link: '/official/Features/GUI-Components/' },
            { text: '锚定与停靠', link: '/official/Features/GUI-Components/Anchoring-Docking' },
            { text: '控件属性', link: '/official/Features/GUI-Components/Control-Properties' },
            { text: '窗体', link: '/official/Features/GUI-Components/Forms' },
            { text: '现代化', link: '/official/Features/GUI-Components/Modernization' },
            { text: '新控件', link: '/official/Features/GUI-Components/New' },
            { text: 'UserControl', link: '/official/Features/GUI-Components/UserControl' },
            { text: '无窗口', link: '/official/Features/GUI-Components/Windowless' }
          ]
        },
        {
          text: '语言特性',
          items: [
            { text: '概览', link: '/official/Features/Language/' },
            { text: '别名类型', link: '/official/Features/Language/Alias-Types' },
            { text: '注释', link: '/official/Features/Language/Comments' },
            { text: '数据类型', link: '/official/Features/Language/Data-Types' },
            { text: '委托', link: '/official/Features/Language/Delegates' },
            { text: '泛型', link: '/official/Features/Language/Generics' },
            { text: '处理程序', link: '/official/Features/Language/Handlers' },
            { text: '继承', link: '/official/Features/Language/Inheritance' },
            { text: '内联初始化', link: '/official/Features/Language/Inline-Initialization' },
            { text: '接口与 CoClass', link: '/official/Features/Language/Interfaces-CoClasses' },
            { text: '字面量', link: '/official/Features/Language/Literals' },
            { text: '循环控制', link: '/official/Features/Language/Loop-Control' },
            { text: '模块组织', link: '/official/Features/Language/Module-Organization' },
            { text: '运算符', link: '/official/Features/Language/Operators' },
            { text: '重载', link: '/official/Features/Language/Overloading' },
            { text: '指针', link: '/official/Features/Language/Pointers' },
            { text: 'Return', link: '/official/Features/Language/Return' },
            { text: '类型推断', link: '/official/Features/Language/Type-Inference' },
            { text: 'UDT', link: '/official/Features/Language/UDTs' }
          ]
        },
        {
          text: '包管理',
          items: [
            { text: '概览', link: '/official/Features/Packages/' },
            { text: '创建 TWINPACK', link: '/official/Features/Packages/Creating-a-TWINPACK-package' },
            { text: '从 TWINPACK 导入', link: '/official/Features/Packages/Importing-a-package-from-a-TWINPACK-file' },
            { text: '从 TWINSERV 导入', link: '/official/Features/Packages/Importing-a-package-from-TWINSERV' },
            { text: '关联包', link: '/official/Features/Packages/Linked-Packages' },
            { text: '更新包', link: '/official/Features/Packages/Updating-a-package' }
          ]
        },
        {
          text: '项目配置',
          items: [
            { text: '概览', link: '/official/Features/Project-Configuration/' },
            { text: 'ActiveX 注册', link: '/official/Features/Project-Configuration/ActiveX-Registration' },
            { text: '编译器选项', link: '/official/Features/Project-Configuration/Compiler-Options' },
            { text: '项目类型', link: '/official/Features/Project-Configuration/Project-Types' }
          ]
        },
        {
          text: '标准库',
          items: [
            { text: '概览', link: '/official/Features/Standard-Library/' },
            { text: '文件 I/O', link: '/official/Features/Standard-Library/File-IO' },
            { text: '新函数', link: '/official/Features/Standard-Library/New-Functions' },
            { text: 'Unicode 支持', link: '/official/Features/Standard-Library/Unicode-Support' }
          ]
        }
      ]
    },
    {
      text: 'IDE 开发环境',
      items: [
        { text: '概览', link: '/official/IDE/' },
        { text: '调用堆栈', link: '/official/IDE/Call-Stack' },
        { text: '调试控制台', link: '/official/IDE/Debug-Console' },
        { text: '诊断', link: '/official/IDE/Diagnostics' },
        { text: '编辑器', link: '/official/IDE/Editor' },
        { text: '查找/替换', link: '/official/IDE/FindReplace' },
        { text: '历史记录', link: '/official/IDE/History' },
        { text: '内存', link: '/official/IDE/Memory' },
        { text: '新建项目', link: '/official/IDE/New-Project' },
        { text: '打开的编辑器', link: '/official/IDE/Open-Editors' },
        { text: '大纲', link: '/official/IDE/Outline' },
        { text: '包发布', link: '/official/IDE/Package-Publishing' },
        { text: '项目资源管理器', link: '/official/IDE/Project-Explorer' },
        { text: '项目设置', link: '/official/IDE/Project-Settings' },
        { text: '属性窗口', link: '/official/IDE/Properties' },
        { text: '启动画面', link: '/official/IDE/Splash-Screen' },
        { text: '状态栏', link: '/official/IDE/Status-Bar' },
        { text: 'tbForm', link: '/official/IDE/tbForm' },
        { text: 'tbReport', link: '/official/IDE/tbReport' },
        { text: '工具栏', link: '/official/IDE/Toolbar' },
        { text: '工具箱', link: '/official/IDE/Toolbox' },
        { text: '变量', link: '/official/IDE/Variables' },
        { text: '监视', link: '/official/IDE/Watches' },
        { text: '网页', link: '/official/IDE/Webpage' },
        {
          text: '菜单',
          items: [
            { text: '概览', link: '/official/IDE/Menu/' },
            { text: '文件', link: '/official/IDE/Menu/File' },
            { text: '编辑', link: '/official/IDE/Menu/Edit' },
            { text: '视图', link: '/official/IDE/Menu/View' },
            { text: '项目', link: '/official/IDE/Menu/Project' },
            { text: '格式', link: '/official/IDE/Menu/Format' },
            { text: '调试', link: '/official/IDE/Menu/Debug' },
            { text: '运行', link: '/official/IDE/Menu/Run' },
            { text: '加载项', link: '/official/IDE/Menu/Add-Ins' },
            { text: '工具', link: '/official/IDE/Menu/Tools' },
            { text: '窗口', link: '/official/IDE/Menu/Window' },
            { text: '帮助', link: '/official/IDE/Menu/Help' }
          ]
        },
        {
          text: '加载项',
          items: [
            { text: '概览', link: '/official/IDE/AddIns/' },
            { text: '全局搜索', link: '/official/IDE/AddIns/GlobalSearch' },
            { text: '社区加载项', link: '/official/IDE/AddIns/Community/' }
          ]
        }
      ]
    },
    {
      text: 'Miscellaneous 其他',
      items: [
        { text: '常见问题', link: '/official/Miscellaneous/FAQs' }
      ]
    },
    {
      text: 'Reference API参考',
      items: [
        { text: '概览', link: '/official/Reference/' },
        { text: '属性', link: '/official/Reference/Attributes' },
        { text: '分类', link: '/official/Reference/Categories' },
        { text: '编译器常量', link: '/official/Reference/Compiler-Constants' },
        { text: '控件', link: '/official/Reference/Controls' },
        { text: '数据类型', link: '/official/Reference/Data-Types' },
        { text: '枚举', link: '/official/Reference/Enumerations' },
        { text: '术语表', link: '/official/Reference/Glossary' },
        { text: '运算符', link: '/official/Reference/Operators' },
        { text: '包', link: '/official/Reference/Packages' },
        { text: '过程与函数', link: '/official/Reference/Procedures-and-Functions' },
        { text: '语句', link: '/official/Reference/Statements' },
        { text: 'twinBASIC 新增', link: '/official/Reference/twinBASIC-Additions' },
        {
          text: 'Assert 包',
          items: [
            { text: '概览', link: '/official/Reference/Assert/' },
            { text: 'Exact', link: '/official/Reference/Assert/Exact' },
            { text: 'Permissive', link: '/official/Reference/Assert/Permissive' },
            { text: 'Strict', link: '/official/Reference/Assert/Strict' }
          ]
        },
        {
          text: 'CEF 包',
          items: [
            { text: '概览', link: '/official/Reference/CEF/' },
            { text: 'CefBrowser', link: '/official/Reference/CEF/CefBrowser/' },
            { text: '枚举', link: '/official/Reference/CEF/Enumerations/' }
          ]
        },
        {
          text: '核心语句',
          collapsed: true,
          items: [
            { text: 'AddressOf', link: '/official/Reference/Core/AddressOf' },
            { text: 'Alias', link: '/official/Reference/Core/Alias' },
            { text: 'And / AndAlso', link: '/official/Reference/Core/And' },
            { text: 'Call', link: '/official/Reference/Core/Call' },
            { text: 'Class', link: '/official/Reference/Core/Class' },
            { text: 'Close', link: '/official/Reference/Core/Close' },
            { text: 'CoClass', link: '/official/Reference/Core/CoClass' },
            { text: 'Comparison Operators', link: '/official/Reference/Core/Comparison-Operators' },
            { text: 'Const', link: '/official/Reference/Core/Const' },
            { text: 'Continue', link: '/official/Reference/Core/Continue' },
            { text: 'Declare', link: '/official/Reference/Core/Declare' },
            { text: 'Deftype', link: '/official/Reference/Core/Deftype' },
            { text: 'Delegate', link: '/official/Reference/Core/Delegate' },
            { text: 'Dim', link: '/official/Reference/Core/Dim' },
            { text: 'Do...Loop', link: '/official/Reference/Core/Do-Loop' },
            { text: 'End', link: '/official/Reference/Core/End' },
            { text: 'Enum', link: '/official/Reference/Core/Enum' },
            { text: 'Eqv', link: '/official/Reference/Core/Eqv' },
            { text: 'Erase', link: '/official/Reference/Core/Erase' },
            { text: 'Error', link: '/official/Reference/Core/Error' },
            { text: 'Event', link: '/official/Reference/Core/Event' },
            { text: 'Exit', link: '/official/Reference/Core/Exit' },
            { text: 'For Each...Next', link: '/official/Reference/Core/For-Each-Next' },
            { text: 'For...Next', link: '/official/Reference/Core/For-Next' },
            { text: 'Function', link: '/official/Reference/Core/Function' },
            { text: 'Get', link: '/official/Reference/Core/Get' },
            { text: 'GoSub...Return', link: '/official/Reference/Core/GoSub-Return' },
            { text: 'GoTo', link: '/official/Reference/Core/GoTo' },
            { text: 'Handles', link: '/official/Reference/Core/Handles' },
            { text: 'If...Then...Else', link: '/official/Reference/Core/If-Then-Else' },
            { text: 'Imp', link: '/official/Reference/Core/Imp' },
            { text: 'Implements', link: '/official/Reference/Core/Implements' },
            { text: 'Input #', link: '/official/Reference/Core/Input' },
            { text: 'Interface', link: '/official/Reference/Core/Interface' },
            { text: 'Is', link: '/official/Reference/Core/Is' },
            { text: 'IsNot', link: '/official/Reference/Core/IsNot' },
            { text: 'Let', link: '/official/Reference/Core/Let' },
            { text: 'Like', link: '/official/Reference/Core/Like' },
            { text: 'Line Input #', link: '/official/Reference/Core/Line-Input' },
            { text: 'Load', link: '/official/Reference/Core/Load' },
            { text: 'Lock / Unlock', link: '/official/Reference/Core/Lock' },
            { text: 'LSet', link: '/official/Reference/Core/LSet' },
            { text: 'Mid = / MidB =', link: '/official/Reference/Core/Mid-equals' },
            { text: 'Mod', link: '/official/Reference/Core/Mod' },
            { text: 'Module', link: '/official/Reference/Core/Module' },
            { text: 'Name', link: '/official/Reference/Core/Name' },
            { text: 'New', link: '/official/Reference/Core/New' },
            { text: 'Not', link: '/official/Reference/Core/Not' },
            { text: 'On Error', link: '/official/Reference/Core/On-Error' },
            { text: 'On...GoSub', link: '/official/Reference/Core/On-GoSub' },
            { text: 'On...GoTo', link: '/official/Reference/Core/On-GoTo' },
            { text: 'Open', link: '/official/Reference/Core/Open' },
            { text: 'Option', link: '/official/Reference/Core/Option' },
            { text: 'Or / OrElse', link: '/official/Reference/Core/Or' },
            { text: 'ParamArray', link: '/official/Reference/Core/ParamArray' },
            { text: 'Print #', link: '/official/Reference/Core/Print' },
            { text: 'Private', link: '/official/Reference/Core/Private' },
            { text: 'Property', link: '/official/Reference/Core/Property' },
            { text: 'Protected', link: '/official/Reference/Core/Protected' },
            { text: 'Public', link: '/official/Reference/Core/Public' },
            { text: 'Put', link: '/official/Reference/Core/Put' },
            { text: 'RaiseEvent', link: '/official/Reference/Core/RaiseEvent' },
            { text: 'ReDim', link: '/official/Reference/Core/ReDim' },
            { text: 'Resume', link: '/official/Reference/Core/Resume' },
            { text: 'Return', link: '/official/Reference/Core/Return' },
            { text: 'RSet', link: '/official/Reference/Core/RSet' },
            { text: 'SavePicture', link: '/official/Reference/Core/SavePicture' },
            { text: 'Select Case', link: '/official/Reference/Core/Select-Case' },
            { text: 'Set', link: '/official/Reference/Core/Set' },
            { text: 'Static', link: '/official/Reference/Core/Static' },
            { text: 'Stop', link: '/official/Reference/Core/Stop' },
            { text: 'Sub', link: '/official/Reference/Core/Sub' },
            { text: '#If, #Const', link: '/official/Reference/Core/Topic-Preprocessor' },
            { text: 'Type', link: '/official/Reference/Core/Type' },
            { text: 'Unload', link: '/official/Reference/Core/Unload' },
            { text: 'While...Wend', link: '/official/Reference/Core/While-Wend' },
            { text: 'With', link: '/official/Reference/Core/With' },
            { text: 'Write #', link: '/official/Reference/Core/Write' },
            { text: 'Xor', link: '/official/Reference/Core/Xor' }
          ]
        },
        {
          text: 'CustomControls 包',
          collapsed: true,
          items: [
            { text: '概览', link: '/official/Reference/CustomControls/' },
            { text: 'WaynesFrame', link: '/official/Reference/CustomControls/WaynesFrame' },
            { text: 'WaynesLabel', link: '/official/Reference/CustomControls/WaynesLabel' },
            { text: 'WaynesTimer', link: '/official/Reference/CustomControls/WaynesTimer' },
            {
              text: '枚举',
              items: [
                { text: '概览', link: '/official/Reference/CustomControls/Enumerations/' },
                { text: 'BorderStyle', link: '/official/Reference/CustomControls/Enumerations/BorderStyle' },
                { text: 'ColorRGBA', link: '/official/Reference/CustomControls/Enumerations/ColorRGBA' },
                { text: 'CornerShape', link: '/official/Reference/CustomControls/Enumerations/CornerShape' },
                { text: 'DockMode', link: '/official/Reference/CustomControls/Enumerations/DockMode' },
                { text: 'FillPattern', link: '/official/Reference/CustomControls/Enumerations/FillPattern' },
                { text: 'FontWeight', link: '/official/Reference/CustomControls/Enumerations/FontWeight' },
                { text: 'PixelCount', link: '/official/Reference/CustomControls/Enumerations/PixelCount' },
                { text: 'PointSize', link: '/official/Reference/CustomControls/Enumerations/PointSize' },
                { text: 'StartupPosition', link: '/official/Reference/CustomControls/Enumerations/StartupPosition' },
                { text: 'TextAlignment', link: '/official/Reference/CustomControls/Enumerations/TextAlignment' },
                { text: 'TextOverflowMode', link: '/official/Reference/CustomControls/Enumerations/TextOverflowMode' },
                { text: 'WindowState', link: '/official/Reference/CustomControls/Enumerations/WindowState' }
              ]
            },
            {
              text: '框架',
              items: [
                { text: '概览', link: '/official/Reference/CustomControls/Framework/' },
                { text: 'Canvas', link: '/official/Reference/CustomControls/Framework/Canvas' },
                { text: 'CustomControlContext', link: '/official/Reference/CustomControls/Framework/CustomControlContext' },
                { text: 'CustomControlsCollection', link: '/official/Reference/CustomControls/Framework/CustomControlsCollection' },
                { text: 'CustomControlTimer', link: '/official/Reference/CustomControls/Framework/CustomControlTimer' },
                { text: 'CustomFormContext', link: '/official/Reference/CustomControls/Framework/CustomFormContext' },
                { text: 'ICustomControl', link: '/official/Reference/CustomControls/Framework/ICustomControl' },
                { text: 'ICustomForm', link: '/official/Reference/CustomControls/Framework/ICustomForm' },
                { text: 'SerializeInfo', link: '/official/Reference/CustomControls/Framework/SerializeInfo' }
              ]
            },
            {
              text: '样式',
              items: [
                { text: '概览', link: '/official/Reference/CustomControls/Styles/' },
                { text: 'Anchors', link: '/official/Reference/CustomControls/Styles/Anchors' },
                { text: 'Borders', link: '/official/Reference/CustomControls/Styles/Borders' },
                { text: 'Corners', link: '/official/Reference/CustomControls/Styles/Corners' },
                { text: 'Fill', link: '/official/Reference/CustomControls/Styles/Fill' },
                { text: 'Line', link: '/official/Reference/CustomControls/Styles/Line' },
                { text: 'Padding', link: '/official/Reference/CustomControls/Styles/Padding' },
                { text: 'TextRendering', link: '/official/Reference/CustomControls/Styles/TextRendering' }
              ]
            },
            {
              text: 'WaynesButton',
              items: [
                { text: '概览', link: '/official/Reference/CustomControls/WaynesButton/' },
                { text: 'WaynesButtonState', link: '/official/Reference/CustomControls/WaynesButton/WaynesButtonState' }
              ]
            },
            {
              text: 'WaynesForm',
              items: [
                { text: '概览', link: '/official/Reference/CustomControls/WaynesForm/' },
                { text: 'WindowsFormOptions', link: '/official/Reference/CustomControls/WaynesForm/WindowsFormOptions' }
              ]
            },
            {
              text: 'WaynesGrid',
              items: [
                { text: '概览', link: '/official/Reference/CustomControls/WaynesGrid/' },
                { text: 'CellRenderingOptions', link: '/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions' },
                { text: 'Column', link: '/official/Reference/CustomControls/WaynesGrid/Column' }
              ]
            },
            {
              text: 'WaynesSlider',
              items: [
                { text: '概览', link: '/official/Reference/CustomControls/WaynesSlider/' },
                { text: 'WaynesSliderState', link: '/official/Reference/CustomControls/WaynesSlider/WaynesSliderState' }
              ]
            },
            {
              text: 'WaynesTextBox',
              items: [
                { text: '概览', link: '/official/Reference/CustomControls/WaynesTextBox/' },
                { text: 'WaynesTextBoxState', link: '/official/Reference/CustomControls/WaynesTextBox/WaynesTextBoxState' }
              ]
            }
          ]
        },
        {
          text: 'tbIDE 包',
          collapsed: true,
          items: [
            { text: '概览', link: '/official/Reference/tbIDE/' },
            { text: 'AddIn', link: '/official/Reference/tbIDE/AddIn' },
            { text: 'AddinTimer', link: '/official/Reference/tbIDE/AddinTimer' },
            { text: 'Button', link: '/official/Reference/tbIDE/Button' },
            { text: 'CodeEditor', link: '/official/Reference/tbIDE/CodeEditor' },
            { text: 'DebugConsole', link: '/official/Reference/tbIDE/DebugConsole' },
            { text: 'Editor', link: '/official/Reference/tbIDE/Editor' },
            { text: 'Editors', link: '/official/Reference/tbIDE/Editors' },
            { text: 'File', link: '/official/Reference/tbIDE/File' },
            { text: 'FileSystem', link: '/official/Reference/tbIDE/FileSystem' },
            { text: 'FileSystemItem', link: '/official/Reference/tbIDE/FileSystemItem' },
            { text: 'Folder', link: '/official/Reference/tbIDE/Folder' },
            { text: 'Host', link: '/official/Reference/tbIDE/Host' },
            { text: 'HtmlElement', link: '/official/Reference/tbIDE/HtmlElement' },
            { text: 'HtmlElementProperties', link: '/official/Reference/tbIDE/HtmlElementProperties' },
            { text: 'HtmlElementProperty', link: '/official/Reference/tbIDE/HtmlElementProperty' },
            { text: 'HtmlElements', link: '/official/Reference/tbIDE/HtmlElements' },
            { text: 'HtmlEventProperties', link: '/official/Reference/tbIDE/HtmlEventProperties' },
            { text: 'HtmlEventProperty', link: '/official/Reference/tbIDE/HtmlEventProperty' },
            { text: 'KeyboardShortcuts', link: '/official/Reference/tbIDE/KeyboardShortcuts' },
            { text: 'Project', link: '/official/Reference/tbIDE/Project' },
            { text: 'Themes', link: '/official/Reference/tbIDE/Themes' },
            { text: 'Toolbar', link: '/official/Reference/tbIDE/Toolbar' },
            { text: 'Toolbars', link: '/official/Reference/tbIDE/Toolbars' },
            { text: 'ToolWindow', link: '/official/Reference/tbIDE/ToolWindow' },
            { text: 'ToolWindows', link: '/official/Reference/tbIDE/ToolWindows' }
          ]
        },
        {
          text: 'VB 包',
          collapsed: true,
          items: [
            { text: '概览', link: '/official/Reference/VB/' },
            { text: 'App', link: '/official/Reference/VB/App/' },
            { text: 'CheckBox', link: '/official/Reference/VB/CheckBox/' },
            { text: 'CheckMark', link: '/official/Reference/VB/CheckMark/' },
            { text: 'Clipboard', link: '/official/Reference/VB/Clipboard/' },
            { text: 'ComboBox', link: '/official/Reference/VB/ComboBox/' },
            { text: 'CommandButton', link: '/official/Reference/VB/CommandButton/' },
            { text: 'Data', link: '/official/Reference/VB/Data/' },
            { text: 'DirListBox', link: '/official/Reference/VB/DirListBox/' },
            { text: 'DriveListBox', link: '/official/Reference/VB/DriveListBox/' },
            { text: 'FileListBox', link: '/official/Reference/VB/FileListBox/' },
            { text: 'Form', link: '/official/Reference/VB/Form/' },
            { text: 'Frame', link: '/official/Reference/VB/Frame/' },
            { text: 'Global', link: '/official/Reference/VB/Global/' },
            { text: 'HScrollBar', link: '/official/Reference/VB/HScrollBar/' },
            { text: 'Image', link: '/official/Reference/VB/Image/' },
            { text: 'Label', link: '/official/Reference/VB/Label/' },
            { text: 'Line', link: '/official/Reference/VB/Line/' },
            { text: 'ListBox', link: '/official/Reference/VB/ListBox/' },
            { text: 'MDIForm', link: '/official/Reference/VB/MDIForm/' },
            { text: 'Menu', link: '/official/Reference/VB/Menu/' },
            { text: 'MultiFrame', link: '/official/Reference/VB/MultiFrame/' },
            { text: 'OLE', link: '/official/Reference/VB/OLE/' },
            { text: 'OptionButton', link: '/official/Reference/VB/OptionButton/' },
            { text: 'PictureBox', link: '/official/Reference/VB/PictureBox/' },
            { text: 'Printer', link: '/official/Reference/VB/Printer/' },
            { text: 'Printers', link: '/official/Reference/VB/Printers/' },
            { text: 'PropertyPage', link: '/official/Reference/VB/PropertyPage/' },
            { text: 'QRCode', link: '/official/Reference/VB/QRCode/' },
            { text: 'Report', link: '/official/Reference/VB/Report/' },
            { text: 'Screen', link: '/official/Reference/VB/Screen/' },
            { text: 'Shape', link: '/official/Reference/VB/Shape/' },
            { text: 'TextBox', link: '/official/Reference/VB/TextBox/' },
            { text: 'Timer', link: '/official/Reference/VB/Timer/' },
            { text: 'UserControl', link: '/official/Reference/VB/UserControl/' },
            { text: 'VScrollBar', link: '/official/Reference/VB/VScrollBar/' }
          ]
        },
        {
          text: 'VBA 包',
          collapsed: true,
          items: [
            { text: '概览', link: '/official/Reference/VBA/' },
            { text: 'Collection', link: '/official/Reference/VBA/Collection/' },
            { text: 'Compilation', link: '/official/Reference/VBA/Compilation/' },
            { text: 'Constants', link: '/official/Reference/VBA/Constants/' },
            { text: 'Conversion', link: '/official/Reference/VBA/Conversion/' },
            { text: 'DateTime', link: '/official/Reference/VBA/DateTime/' },
            { text: 'ErrObject', link: '/official/Reference/VBA/ErrObject/' },
            { text: 'FileSystem', link: '/official/Reference/VBA/FileSystem/' },
            { text: 'Financial', link: '/official/Reference/VBA/Financial/' },
            { text: 'HiddenModule', link: '/official/Reference/VBA/HiddenModule/' },
            { text: 'Information', link: '/official/Reference/VBA/Information/' },
            { text: 'Interaction', link: '/official/Reference/VBA/Interaction/' },
            { text: 'Math', link: '/official/Reference/VBA/Math/' },
            { text: 'Strings', link: '/official/Reference/VBA/Strings/' },
            { text: 'TbExpressionService', link: '/official/Reference/VBA/TbExpressionService/' }
          ]
        },
        {
          text: 'VBRUN 包',
          collapsed: true,
          items: [
            { text: '概览', link: '/official/Reference/VBRUN/' },
            { text: 'AmbientProperties', link: '/official/Reference/VBRUN/AmbientProperties/' },
            { text: 'AsyncProperty', link: '/official/Reference/VBRUN/AsyncProperty/' },
            { text: 'Constants', link: '/official/Reference/VBRUN/Constants/' },
            { text: 'ContainedControls', link: '/official/Reference/VBRUN/ContainedControls/' },
            { text: 'DataMembers', link: '/official/Reference/VBRUN/DataMembers/' },
            { text: 'DataObject', link: '/official/Reference/VBRUN/DataObject/' },
            { text: 'ErrorCallstack', link: '/official/Reference/VBRUN/ErrorCallstack/' },
            { text: 'ErrorContext', link: '/official/Reference/VBRUN/ErrorContext/' },
            { text: 'ErrorStackFrame', link: '/official/Reference/VBRUN/ErrorStackFrame/' },
            { text: 'Hyperlink', link: '/official/Reference/VBRUN/Hyperlink/' },
            { text: 'ParentControls', link: '/official/Reference/VBRUN/ParentControls/' },
            { text: 'PropertyBag', link: '/official/Reference/VBRUN/PropertyBag/' }
          ]
        },
        {
          text: 'WebView2 包',
          collapsed: true,
          items: [
            { text: '概览', link: '/official/Reference/WebView2/' },
            { text: 'WebView2', link: '/official/Reference/WebView2/WebView2/' },
            { text: 'WebView2Header', link: '/official/Reference/WebView2/WebView2Header' },
            { text: 'WebView2HeadersCollection', link: '/official/Reference/WebView2/WebView2HeadersCollection' },
            { text: 'WebView2Request', link: '/official/Reference/WebView2/WebView2Request' },
            { text: 'WebView2RequestHeaders', link: '/official/Reference/WebView2/WebView2RequestHeaders' },
            { text: 'WebView2Response', link: '/official/Reference/WebView2/WebView2Response' },
            { text: 'WebView2ResponseHeaders', link: '/official/Reference/WebView2/WebView2ResponseHeaders' },
            { text: '枚举', link: '/official/Reference/WebView2/Enumerations/' },
            { text: '类型', link: '/official/Reference/WebView2/Types/' }
          ]
        },
        {
          text: 'WinEventLogLib',
          items: [
            { text: '概览', link: '/official/Reference/WinEventLogLib/' },
            { text: 'EventLog', link: '/official/Reference/WinEventLogLib/EventLog' },
            { text: 'EventLogHelperPublic', link: '/official/Reference/WinEventLogLib/EventLogHelperPublic' }
          ]
        },
        {
          text: 'WinNamedPipesLib',
          items: [
            { text: '概览', link: '/official/Reference/WinNamedPipesLib/' },
            { text: 'NamedPipeClientConnection', link: '/official/Reference/WinNamedPipesLib/NamedPipeClientConnection' },
            { text: 'NamedPipeClientManager', link: '/official/Reference/WinNamedPipesLib/NamedPipeClientManager' },
            { text: 'NamedPipeServer', link: '/official/Reference/WinNamedPipesLib/NamedPipeServer' },
            { text: 'NamedPipeServerConnection', link: '/official/Reference/WinNamedPipesLib/NamedPipeServerConnection' }
          ]
        },
        {
          text: 'WinNativeCommonCtls',
          collapsed: true,
          items: [
            { text: '概览', link: '/official/Reference/WinNativeCommonCtls/' },
            { text: 'DTPicker', link: '/official/Reference/WinNativeCommonCtls/DTPicker' },
            { text: 'MonthView', link: '/official/Reference/WinNativeCommonCtls/MonthView' },
            { text: 'ProgressBar', link: '/official/Reference/WinNativeCommonCtls/ProgressBar' },
            { text: 'Slider', link: '/official/Reference/WinNativeCommonCtls/Slider' },
            { text: 'UpDown', link: '/official/Reference/WinNativeCommonCtls/UpDown' },
            { text: '枚举', link: '/official/Reference/WinNativeCommonCtls/Enumerations/' },
            { text: 'ImageList', link: '/official/Reference/WinNativeCommonCtls/ImageList/' },
            { text: 'ListView', link: '/official/Reference/WinNativeCommonCtls/ListView/' },
            { text: 'TreeView', link: '/official/Reference/WinNativeCommonCtls/TreeView/' }
          ]
        },
        {
          text: 'WinServicesLib',
          items: [
            { text: '概览', link: '/official/Reference/WinServicesLib/' },
            { text: 'ITbService', link: '/official/Reference/WinServicesLib/ITbService' },
            { text: 'ServiceCreator', link: '/official/Reference/WinServicesLib/ServiceCreator' },
            { text: 'ServiceManager', link: '/official/Reference/WinServicesLib/ServiceManager' },
            { text: 'Services', link: '/official/Reference/WinServicesLib/Services' },
            { text: 'ServiceState', link: '/official/Reference/WinServicesLib/ServiceState' },
            { text: '枚举', link: '/official/Reference/WinServicesLib/Enumerations/' }
          ]
        }
      ]
    },
    {
      text: 'Tutorials 教程',
      items: [
        { text: '概览', link: '/official/Tutorials/' },
        { text: '数组', link: '/official/Tutorials/Arrays' },
        { text: '窗体基础', link: '/official/Tutorials/Forms' },
        { text: 'Hello World', link: '/official/Tutorials/Hello-World' },
        { text: '使用 Assert 编写单元测试', link: '/official/Tutorials/Testing-with-Assert' },
        { text: '调用 Windows API', link: '/official/Tutorials/Windows-API' },
        {
          text: 'CEF',
          items: [
            { text: '概览', link: '/official/Tutorials/CEF/' },
            { text: '入门', link: '/official/Tutorials/CEF/Getting-started' },
            { text: '构建浏览器外壳', link: '/official/Tutorials/CEF/Building-a-browser-shell' },
            { text: '自定义 UserDataFolder', link: '/official/Tutorials/CEF/Customize-the-UserDataFolder' },
            { text: '从 tB 驱动 Monaco', link: '/official/Tutorials/CEF/Driving-Monaco' },
            { text: '托管本地 Web 资源', link: '/official/Tutorials/CEF/Hosting-local-web-assets' },
            { text: 'JavaScript 互操作', link: '/official/Tutorials/CEF/JavaScript-interop' },
            { text: '重入', link: '/official/Tutorials/CEF/Re-entrancy' }
          ]
        },
        {
          text: 'CustomControls',
          items: [
            { text: '概览', link: '/official/Tutorials/CustomControls/' },
            { text: '定义 CustomControl', link: '/official/Tutorials/CustomControls/Defining-a-CustomControl' },
            { text: '关于窗体设计器的说明', link: '/official/Tutorials/CustomControls/Notes-about-the-form-designer' },
            { text: '为控件绘制图形', link: '/official/Tutorials/CustomControls/Painting-drawing-to-your-control' },
            { text: '属性表与对象序列化', link: '/official/Tutorials/CustomControls/Property-sheet-and-object-serialization' }
          ]
        },
        {
          text: 'WebView2',
          items: [
            { text: '概览', link: '/official/Tutorials/WebView2/' },
            { text: '入门', link: '/official/Tutorials/WebView2/Getting-started' },
            { text: '构建浏览器外壳', link: '/official/Tutorials/WebView2/Building-a-browser-shell' },
            { text: '自定义 UserDataFolder', link: '/official/Tutorials/WebView2/Customize-the-UserDataFolder' },
            { text: '从 tB 驱动 Monaco', link: '/official/Tutorials/WebView2/Driving-Monaco' },
            { text: '托管本地 Web 资源', link: '/official/Tutorials/WebView2/Hosting-local-web-assets' },
            { text: 'JavaScript 互操作', link: '/official/Tutorials/WebView2/JavaScript-interop' },
            { text: '重入', link: '/official/Tutorials/WebView2/Re-entrancy' }
          ]
        }
      ]
    },
    {
      text: 'Challenges 挑战赛',
      items: [
        { text: '概览', link: '/official/Challenges/' },
        { text: '创建游戏', link: '/official/Challenges/create-a-game' },
        { text: '自包含诊断工具', link: '/official/Challenges/self-contained_diagnostic_tool' }
      ]
    },    
    {
      text: 'Documentation 文档构建',
      items: [
        { text: '文档开发', link: '/official/Documentation/' },
        { text: '书籍配置', link: '/official/Documentation/Book-Configuration' },
        { text: 'tbdocs 构建器', link: '/official/Documentation/Builder' },
        { text: '构建与部署', link: '/official/Documentation/Building' },
        { text: '扩展构建器', link: '/official/Documentation/Extending' },
        { text: '库补丁', link: '/official/Documentation/Fixes' },
        { text: 'Mermaid Dagre 补丁', link: '/official/Documentation/Fixes-Dagre' },
        { text: 'Paged.js 补丁', link: '/official/Documentation/Fixes-PagedJS' },
        { text: 'pdf-lib 补丁', link: '/official/Documentation/Fixes-PDFLib' },
        { text: 'PDF 生成', link: '/official/Documentation/PDF-Generation' },
        { text: '永久链接', link: '/official/Documentation/Permanent-Links' },
        { text: '流水线阶段', link: '/official/Documentation/Pipeline-Stages' },
        { text: '工具与脚本', link: '/official/Documentation/Tools' }
      ]
    },    
    {
      text: 'Videos 视频',
      items: [
        { text: '概览', link: '/official/Videos/' },
        { text: 'Access DevCon 视频', link: '/official/Videos/AccessDevCon' },
        { text: 'tB 视频', link: '/official/Videos/twinBASIC' }
      ]
    }
  ],
  '/packages/vbccr/': [
    {
      text: 'VBCCR 开发手册',
      items: [
        { text: '概述', link: '/packages/vbccr/' },
        {
          text: '按钮类',
          collapsed: false,
          items: [
            { text: 'CheckBoxW', link: '/packages/vbccr/buttons/checkboxw' },
            { text: 'CommandButtonW', link: '/packages/vbccr/buttons/commandbuttonw' },
            { text: 'CommandLink', link: '/packages/vbccr/buttons/commandlink' },
            { text: 'OptionButtonW', link: '/packages/vbccr/buttons/optionbuttonw' },
          ]
        },
        {
          text: '文本标签类',
          collapsed: false,
          items: [
            { text: 'TextBoxW', link: '/packages/vbccr/text/textboxw' },
            { text: 'RichTextBox', link: '/packages/vbccr/text/richtextbox' },
            { text: 'SpinBox', link: '/packages/vbccr/text/spinbox' },
            { text: 'LabelW', link: '/packages/vbccr/text/labelw' },
            { text: 'WindowedLabel', link: '/packages/vbccr/text/windowedlabel' },
            { text: 'LinkLabel', link: '/packages/vbccr/text/linklabel' },
            { text: 'HotKey', link: '/packages/vbccr/text/hotkey' },
          ]
        },
        {
          text: '列表选择类',
          collapsed: false,
          items: [
            { text: 'ComboBoxW', link: '/packages/vbccr/lists/comboboxw' },
            { text: 'ListBoxW', link: '/packages/vbccr/lists/listboxw' },
            { text: 'FontCombo', link: '/packages/vbccr/lists/fontcombo' },
            { text: 'ImageCombo', link: '/packages/vbccr/lists/imagecombo' },
            { text: 'IPAddress', link: '/packages/vbccr/lists/ipaddress' },
            { text: 'VirtualCombo', link: '/packages/vbccr/lists/virtualcombo' },
            { text: 'VListBox', link: '/packages/vbccr/lists/vlistbox' },
          ]
        },
        {
          text: '视图类',
          collapsed: false,
          items: [
            { text: 'ListView', link: '/packages/vbccr/views/listview' },
            { text: 'TreeView', link: '/packages/vbccr/views/treeview' },
            { text: 'TabStrip', link: '/packages/vbccr/views/tabstrip' },
          ]
        },
        {
          text: '工具条/状态栏类',
          collapsed: false,
          items: [
            { text: 'ToolBar', link: '/packages/vbccr/bars/toolbar' },
            { text: 'StatusBar', link: '/packages/vbccr/bars/statusbar' },
            { text: 'CoolBar', link: '/packages/vbccr/bars/coolbar' },
            { text: 'Pager', link: '/packages/vbccr/bars/pager' },
          ]
        },
        {
          text: '滑块/进度/调节类',
          collapsed: false,
          items: [
            { text: 'Slider', link: '/packages/vbccr/ranges/slider' },
            { text: 'ProgressBar', link: '/packages/vbccr/ranges/progressbar' },
            { text: 'UpDown', link: '/packages/vbccr/ranges/updown' },
            { text: 'Animation', link: '/packages/vbccr/ranges/animation' },
          ]
        },
        {
          text: '日期时间类',
          collapsed: false,
          items: [
            { text: 'DTPicker', link: '/packages/vbccr/datetime/dtpicker' },
            { text: 'MonthView', link: '/packages/vbccr/datetime/monthview' },
          ]
        },
        {
          text: '对话框/系统/容器/多媒体类',
          collapsed: false,
          items: [
            { text: 'CommonDialog', link: '/packages/vbccr/system/commondialog' },
            { text: 'SysInfo', link: '/packages/vbccr/system/sysinfo' },
            { text: 'ImageList', link: '/packages/vbccr/system/imagelist' },
            { text: 'FrameW', link: '/packages/vbccr/system/framew' },
            { text: 'MCIWnd', link: '/packages/vbccr/system/mciwnd' },
          ]
        },
        { text: '作者原文档', link: '/packages/vbccr/author' },
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
