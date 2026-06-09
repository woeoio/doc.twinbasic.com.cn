export const enNav = [
  { text: 'Home', link: '/en/' },
  { text: 'TBMAN', link: '/tbman' },
  { text: 'Official Docs', link: '/en/official/' },
  { text: 'Packages', items: [
    { text: 'VBCCR', link: '/en/packages/vbccr/' },
  ]},  
  { text: 'Challenges', link: '/en/challenge/2026/202601' },
  { text: 'VB6.PRO', link: 'https://vb6.pro/' },
  { text: 'Join Us', link: 'https://discord.gg/UaW9GgKKuE' }
]

export const enSidebar = {
  '/en/official/': [
    {
      text: 'Twinbasic official',
      items: [
        { text: 'Overview', link: '/en/official/' }
      ]
    }, 
    {
      text: 'Features',
      items: [
        { text: 'Overview', link: '/en/official/Features/' },
        { text: '64bit Compilation', link: '/en/official/Features/64bit' },
        { text: 'Attributes', link: '/en/official/Features/Attributes-Intro' },
        { text: 'Fusion', link: '/en/official/Features/Fusion' },
        {
          text: 'Advanced',
          items: [
            { text: 'Overview', link: '/en/official/Features/Advanced/' },
            { text: 'Enhanced API Declarations', link: '/en/official/Features/Advanced/API-Declarations' },
            { text: 'Direct Assembly Insertion', link: '/en/official/Features/Advanced/Assembly' },
            { text: 'Class Features', link: '/en/official/Features/Advanced/Classes-and-Modules' },
            { text: 'Multithreading', link: '/en/official/Features/Advanced/Multithreading' },
            { text: 'Static Linking', link: '/en/official/Features/Advanced/Static-Linking' }
          ]
        },
        {
          text: 'Compiler & IDE',
          items: [
            { text: 'Overview', link: '/en/official/Features/Compiler-IDE/' },
            { text: 'CodeLens', link: '/en/official/Features/Compiler-IDE/CodeLens' },
            { text: 'Compiler Warnings', link: '/en/official/Features/Compiler-IDE/Compiler-Warnings' },
            { text: 'Debugging', link: '/en/official/Features/Compiler-IDE/Debugging' },
            { text: 'Modern IDE Features', link: '/en/official/Features/Compiler-IDE/IDE-Features' },
            { text: 'Package Server', link: '/en/official/Features/Compiler-IDE/Package-Server' }
          ]
        },
        {
          text: 'GUI Components',
          items: [
            { text: 'Overview', link: '/en/official/Features/GUI-Components/' },
            { text: 'Anchoring & Docking', link: '/en/official/Features/GUI-Components/Anchoring-Docking' },
            { text: 'Control Properties', link: '/en/official/Features/GUI-Components/Control-Properties' },
            { text: 'Forms', link: '/en/official/Features/GUI-Components/Forms' },
            { text: 'Modernization', link: '/en/official/Features/GUI-Components/Modernization' },
            { text: 'New Controls', link: '/en/official/Features/GUI-Components/New' },
            { text: 'UserControl', link: '/en/official/Features/GUI-Components/UserControl' },
            { text: 'Windowless', link: '/en/official/Features/GUI-Components/Windowless' }
          ]
        },
        {
          text: 'Language',
          items: [
            { text: 'Overview', link: '/en/official/Features/Language/' },
            { text: 'Alias Types', link: '/en/official/Features/Language/Alias-Types' },
            { text: 'Comments', link: '/en/official/Features/Language/Comments' },
            { text: 'Data Types', link: '/en/official/Features/Language/Data-Types' },
            { text: 'Delegates', link: '/en/official/Features/Language/Delegates' },
            { text: 'Generics', link: '/en/official/Features/Language/Generics' },
            { text: 'Handlers', link: '/en/official/Features/Language/Handlers' },
            { text: 'Inheritance', link: '/en/official/Features/Language/Inheritance' },
            { text: 'Inline Initialization', link: '/en/official/Features/Language/Inline-Initialization' },
            { text: 'Interfaces & CoClasses', link: '/en/official/Features/Language/Interfaces-CoClasses' },
            { text: 'Literals', link: '/en/official/Features/Language/Literals' },
            { text: 'Loop Control', link: '/en/official/Features/Language/Loop-Control' },
            { text: 'Module Organization', link: '/en/official/Features/Language/Module-Organization' },
            { text: 'Operators', link: '/en/official/Features/Language/Operators' },
            { text: 'Overloading', link: '/en/official/Features/Language/Overloading' },
            { text: 'Pointers', link: '/en/official/Features/Language/Pointers' },
            { text: 'Return', link: '/en/official/Features/Language/Return' },
            { text: 'Type Inference', link: '/en/official/Features/Language/Type-Inference' },
            { text: 'UDTs', link: '/en/official/Features/Language/UDTs' }
          ]
        },
        {
          text: 'Packages',
          items: [
            { text: 'Overview', link: '/en/official/Features/Packages/' },
            { text: 'Creating TWINPACK', link: '/en/official/Features/Packages/Creating-a-TWINPACK-package' },
            { text: 'Importing from TWINPACK', link: '/en/official/Features/Packages/Importing-a-package-from-a-TWINPACK-file' },
            { text: 'Importing from TWINSERV', link: '/en/official/Features/Packages/Importing-a-package-from-TWINSERV' },
            { text: 'Linked Packages', link: '/en/official/Features/Packages/Linked-Packages' },
            { text: 'Updating', link: '/en/official/Features/Packages/Updating-a-package' }
          ]
        },
        {
          text: 'Project Configuration',
          items: [
            { text: 'Overview', link: '/en/official/Features/Project-Configuration/' },
            { text: 'ActiveX Registration', link: '/en/official/Features/Project-Configuration/ActiveX-Registration' },
            { text: 'Compiler Options', link: '/en/official/Features/Project-Configuration/Compiler-Options' },
            { text: 'Project Types', link: '/en/official/Features/Project-Configuration/Project-Types' }
          ]
        },
        {
          text: 'Standard Library',
          items: [
            { text: 'Overview', link: '/en/official/Features/Standard-Library/' },
            { text: 'File I/O', link: '/en/official/Features/Standard-Library/File-IO' },
            { text: 'New Functions', link: '/en/official/Features/Standard-Library/New-Functions' },
            { text: 'Unicode Support', link: '/en/official/Features/Standard-Library/Unicode-Support' }
          ]
        }
      ]
    },
    {
      text: 'IDE',
      items: [
        { text: 'Overview', link: '/en/official/IDE/' },
        { text: 'Call Stack', link: '/en/official/IDE/Call-Stack' },
        { text: 'Debug Console', link: '/en/official/IDE/Debug-Console' },
        { text: 'Diagnostics', link: '/en/official/IDE/Diagnostics' },
        { text: 'Editor', link: '/en/official/IDE/Editor' },
        { text: 'Find / Replace', link: '/en/official/IDE/FindReplace' },
        { text: 'History', link: '/en/official/IDE/History' },
        { text: 'Memory', link: '/en/official/IDE/Memory' },
        { text: 'New Project', link: '/en/official/IDE/New-Project' },
        { text: 'Open Editors', link: '/en/official/IDE/Open-Editors' },
        { text: 'Outline', link: '/en/official/IDE/Outline' },
        { text: 'Package Publishing', link: '/en/official/IDE/Package-Publishing' },
        { text: 'Project Explorer', link: '/en/official/IDE/Project-Explorer' },
        { text: 'Project Settings', link: '/en/official/IDE/Project-Settings' },
        { text: 'Properties', link: '/en/official/IDE/Properties' },
        { text: 'Splash Screen', link: '/en/official/IDE/Splash-Screen' },
        { text: 'Status Bar', link: '/en/official/IDE/Status-Bar' },
        { text: 'tbForm', link: '/en/official/IDE/tbForm' },
        { text: 'tbReport', link: '/en/official/IDE/tbReport' },
        { text: 'Toolbar', link: '/en/official/IDE/Toolbar' },
        { text: 'Toolbox', link: '/en/official/IDE/Toolbox' },
        { text: 'Variables', link: '/en/official/IDE/Variables' },
        { text: 'Watches', link: '/en/official/IDE/Watches' },
        { text: 'Webpage', link: '/en/official/IDE/Webpage' },
        {
          text: 'Menu',
          items: [
            { text: 'Overview', link: '/en/official/IDE/Menu/' },
            { text: 'File', link: '/en/official/IDE/Menu/File' },
            { text: 'Edit', link: '/en/official/IDE/Menu/Edit' },
            { text: 'View', link: '/en/official/IDE/Menu/View' },
            { text: 'Project', link: '/en/official/IDE/Menu/Project' },
            { text: 'Format', link: '/en/official/IDE/Menu/Format' },
            { text: 'Debug', link: '/en/official/IDE/Menu/Debug' },
            { text: 'Run', link: '/en/official/IDE/Menu/Run' },
            { text: 'Add-Ins', link: '/en/official/IDE/Menu/Add-Ins' },
            { text: 'Tools', link: '/en/official/IDE/Menu/Tools' },
            { text: 'Window', link: '/en/official/IDE/Menu/Window' },
            { text: 'Help', link: '/en/official/IDE/Menu/Help' }
          ]
        },
        {
          text: 'AddIns',
          items: [
            { text: 'Overview', link: '/en/official/IDE/AddIns/' },
            { text: 'Global Search', link: '/en/official/IDE/AddIns/GlobalSearch' },
            { text: 'Community Add Ins', link: '/en/official/IDE/AddIns/Community/' }
          ]
        }
      ]
    },
    {
      text: 'Miscellaneous',
      items: [
        { text: 'FAQs', link: '/en/official/Miscellaneous/FAQs' }
      ]
    },
    {
      text: 'Reference',
      items: [
        { text: 'Overview', link: '/en/official/Reference/' },
        { text: 'Attributes', link: '/en/official/Reference/Attributes' },
        { text: 'Categories', link: '/en/official/Reference/Categories' },
        { text: 'Compiler Constants', link: '/en/official/Reference/Compiler-Constants' },
        { text: 'Controls', link: '/en/official/Reference/Controls' },
        { text: 'Data Types', link: '/en/official/Reference/Data-Types' },
        { text: 'Enumerations', link: '/en/official/Reference/Enumerations' },
        { text: 'Glossary', link: '/en/official/Reference/Glossary' },
        { text: 'Operators', link: '/en/official/Reference/Operators' },
        { text: 'Packages', link: '/en/official/Reference/Packages' },
        { text: 'Procedures and Functions', link: '/en/official/Reference/Procedures-and-Functions' },
        { text: 'Statements', link: '/en/official/Reference/Statements' },
        { text: 'twinBASIC Additions', link: '/en/official/Reference/twinBASIC-Additions' },
        {
          text: 'Assert Package',
          items: [
            { text: 'Overview', link: '/en/official/Reference/Assert/' },
            { text: 'Exact', link: '/en/official/Reference/Assert/Exact' },
            { text: 'Permissive', link: '/en/official/Reference/Assert/Permissive' },
            { text: 'Strict', link: '/en/official/Reference/Assert/Strict' }
          ]
        },
        {
          text: 'CEF Package',
          items: [
            { text: 'Overview', link: '/en/official/Reference/CEF/' },
            { text: 'CefBrowser', link: '/en/official/Reference/CEF/CefBrowser/' },
            { text: 'Enumerations', link: '/en/official/Reference/CEF/Enumerations/' }
          ]
        },
        {
          text: 'Core Statements',
          collapsed: true,
          items: [
            { text: 'AddressOf', link: '/en/official/Reference/Core/AddressOf' },
            { text: 'Alias', link: '/en/official/Reference/Core/Alias' },
            { text: 'And / AndAlso', link: '/en/official/Reference/Core/And' },
            { text: 'Call', link: '/en/official/Reference/Core/Call' },
            { text: 'Class', link: '/en/official/Reference/Core/Class' },
            { text: 'Close', link: '/en/official/Reference/Core/Close' },
            { text: 'CoClass', link: '/en/official/Reference/Core/CoClass' },
            { text: 'Comparison Operators', link: '/en/official/Reference/Core/Comparison-Operators' },
            { text: 'Const', link: '/en/official/Reference/Core/Const' },
            { text: 'Continue', link: '/en/official/Reference/Core/Continue' },
            { text: 'Declare', link: '/en/official/Reference/Core/Declare' },
            { text: 'Deftype', link: '/en/official/Reference/Core/Deftype' },
            { text: 'Delegate', link: '/en/official/Reference/Core/Delegate' },
            { text: 'Dim', link: '/en/official/Reference/Core/Dim' },
            { text: 'Do...Loop', link: '/en/official/Reference/Core/Do-Loop' },
            { text: 'End', link: '/en/official/Reference/Core/End' },
            { text: 'Enum', link: '/en/official/Reference/Core/Enum' },
            { text: 'Eqv', link: '/en/official/Reference/Core/Eqv' },
            { text: 'Erase', link: '/en/official/Reference/Core/Erase' },
            { text: 'Error', link: '/en/official/Reference/Core/Error' },
            { text: 'Event', link: '/en/official/Reference/Core/Event' },
            { text: 'Exit', link: '/en/official/Reference/Core/Exit' },
            { text: 'For Each...Next', link: '/en/official/Reference/Core/For-Each-Next' },
            { text: 'For...Next', link: '/en/official/Reference/Core/For-Next' },
            { text: 'Function', link: '/en/official/Reference/Core/Function' },
            { text: 'Get', link: '/en/official/Reference/Core/Get' },
            { text: 'GoSub...Return', link: '/en/official/Reference/Core/GoSub-Return' },
            { text: 'GoTo', link: '/en/official/Reference/Core/GoTo' },
            { text: 'Handles', link: '/en/official/Reference/Core/Handles' },
            { text: 'If...Then...Else', link: '/en/official/Reference/Core/If-Then-Else' },
            { text: 'Imp', link: '/en/official/Reference/Core/Imp' },
            { text: 'Implements', link: '/en/official/Reference/Core/Implements' },
            { text: 'Input #', link: '/en/official/Reference/Core/Input' },
            { text: 'Interface', link: '/en/official/Reference/Core/Interface' },
            { text: 'Is', link: '/en/official/Reference/Core/Is' },
            { text: 'IsNot', link: '/en/official/Reference/Core/IsNot' },
            { text: 'Let', link: '/en/official/Reference/Core/Let' },
            { text: 'Like', link: '/en/official/Reference/Core/Like' },
            { text: 'Line Input #', link: '/en/official/Reference/Core/Line-Input' },
            { text: 'Load', link: '/en/official/Reference/Core/Load' },
            { text: 'Lock / Unlock', link: '/en/official/Reference/Core/Lock' },
            { text: 'LSet', link: '/en/official/Reference/Core/LSet' },
            { text: 'Mid = / MidB =', link: '/en/official/Reference/Core/Mid-equals' },
            { text: 'Mod', link: '/en/official/Reference/Core/Mod' },
            { text: 'Module', link: '/en/official/Reference/Core/Module' },
            { text: 'Name', link: '/en/official/Reference/Core/Name' },
            { text: 'New', link: '/en/official/Reference/Core/New' },
            { text: 'Not', link: '/en/official/Reference/Core/Not' },
            { text: 'On Error', link: '/en/official/Reference/Core/On-Error' },
            { text: 'On...GoSub', link: '/en/official/Reference/Core/On-GoSub' },
            { text: 'On...GoTo', link: '/en/official/Reference/Core/On-GoTo' },
            { text: 'Open', link: '/en/official/Reference/Core/Open' },
            { text: 'Option', link: '/en/official/Reference/Core/Option' },
            { text: 'Or / OrElse', link: '/en/official/Reference/Core/Or' },
            { text: 'ParamArray', link: '/en/official/Reference/Core/ParamArray' },
            { text: 'Print #', link: '/en/official/Reference/Core/Print' },
            { text: 'Private', link: '/en/official/Reference/Core/Private' },
            { text: 'Property', link: '/en/official/Reference/Core/Property' },
            { text: 'Protected', link: '/en/official/Reference/Core/Protected' },
            { text: 'Public', link: '/en/official/Reference/Core/Public' },
            { text: 'Put', link: '/en/official/Reference/Core/Put' },
            { text: 'RaiseEvent', link: '/en/official/Reference/Core/RaiseEvent' },
            { text: 'ReDim', link: '/en/official/Reference/Core/ReDim' },
            { text: 'Resume', link: '/en/official/Reference/Core/Resume' },
            { text: 'Return', link: '/en/official/Reference/Core/Return' },
            { text: 'RSet', link: '/en/official/Reference/Core/RSet' },
            { text: 'SavePicture', link: '/en/official/Reference/Core/SavePicture' },
            { text: 'Select Case', link: '/en/official/Reference/Core/Select-Case' },
            { text: 'Set', link: '/en/official/Reference/Core/Set' },
            { text: 'Static', link: '/en/official/Reference/Core/Static' },
            { text: 'Stop', link: '/en/official/Reference/Core/Stop' },
            { text: 'Sub', link: '/en/official/Reference/Core/Sub' },
            { text: '#If, #Const', link: '/en/official/Reference/Core/Topic-Preprocessor' },
            { text: 'Type', link: '/en/official/Reference/Core/Type' },
            { text: 'Unload', link: '/en/official/Reference/Core/Unload' },
            { text: 'While...Wend', link: '/en/official/Reference/Core/While-Wend' },
            { text: 'With', link: '/en/official/Reference/Core/With' },
            { text: 'Write #', link: '/en/official/Reference/Core/Write' },
            { text: 'Xor', link: '/en/official/Reference/Core/Xor' }
          ]
        },
        {
          text: 'CustomControls Package',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/en/official/Reference/CustomControls/' },
            { text: 'WaynesFrame', link: '/en/official/Reference/CustomControls/WaynesFrame' },
            { text: 'WaynesLabel', link: '/en/official/Reference/CustomControls/WaynesLabel' },
            { text: 'WaynesTimer', link: '/en/official/Reference/CustomControls/WaynesTimer' },
            {
              text: 'Enumerations',
              items: [
                { text: 'Overview', link: '/en/official/Reference/CustomControls/Enumerations/' },
                { text: 'BorderStyle', link: '/en/official/Reference/CustomControls/Enumerations/BorderStyle' },
                { text: 'ColorRGBA', link: '/en/official/Reference/CustomControls/Enumerations/ColorRGBA' },
                { text: 'CornerShape', link: '/en/official/Reference/CustomControls/Enumerations/CornerShape' },
                { text: 'DockMode', link: '/en/official/Reference/CustomControls/Enumerations/DockMode' },
                { text: 'FillPattern', link: '/en/official/Reference/CustomControls/Enumerations/FillPattern' },
                { text: 'FontWeight', link: '/en/official/Reference/CustomControls/Enumerations/FontWeight' },
                { text: 'PixelCount', link: '/en/official/Reference/CustomControls/Enumerations/PixelCount' },
                { text: 'PointSize', link: '/en/official/Reference/CustomControls/Enumerations/PointSize' },
                { text: 'StartupPosition', link: '/en/official/Reference/CustomControls/Enumerations/StartupPosition' },
                { text: 'TextAlignment', link: '/en/official/Reference/CustomControls/Enumerations/TextAlignment' },
                { text: 'TextOverflowMode', link: '/en/official/Reference/CustomControls/Enumerations/TextOverflowMode' },
                { text: 'WindowState', link: '/en/official/Reference/CustomControls/Enumerations/WindowState' }
              ]
            },
            {
              text: 'Framework',
              items: [
                { text: 'Overview', link: '/en/official/Reference/CustomControls/Framework/' },
                { text: 'Canvas', link: '/en/official/Reference/CustomControls/Framework/Canvas' },
                { text: 'CustomControlContext', link: '/en/official/Reference/CustomControls/Framework/CustomControlContext' },
                { text: 'CustomControlsCollection', link: '/en/official/Reference/CustomControls/Framework/CustomControlsCollection' },
                { text: 'CustomControlTimer', link: '/en/official/Reference/CustomControls/Framework/CustomControlTimer' },
                { text: 'CustomFormContext', link: '/en/official/Reference/CustomControls/Framework/CustomFormContext' },
                { text: 'ICustomControl', link: '/en/official/Reference/CustomControls/Framework/ICustomControl' },
                { text: 'ICustomForm', link: '/en/official/Reference/CustomControls/Framework/ICustomForm' },
                { text: 'SerializeInfo', link: '/en/official/Reference/CustomControls/Framework/SerializeInfo' }
              ]
            },
            {
              text: 'Styles',
              items: [
                { text: 'Overview', link: '/en/official/Reference/CustomControls/Styles/' },
                { text: 'Anchors', link: '/en/official/Reference/CustomControls/Styles/Anchors' },
                { text: 'Borders', link: '/en/official/Reference/CustomControls/Styles/Borders' },
                { text: 'Corners', link: '/en/official/Reference/CustomControls/Styles/Corners' },
                { text: 'Fill', link: '/en/official/Reference/CustomControls/Styles/Fill' },
                { text: 'Line', link: '/en/official/Reference/CustomControls/Styles/Line' },
                { text: 'Padding', link: '/en/official/Reference/CustomControls/Styles/Padding' },
                { text: 'TextRendering', link: '/en/official/Reference/CustomControls/Styles/TextRendering' }
              ]
            },
            {
              text: 'WaynesButton',
              items: [
                { text: 'Overview', link: '/en/official/Reference/CustomControls/WaynesButton/' },
                { text: 'WaynesButtonState', link: '/en/official/Reference/CustomControls/WaynesButton/WaynesButtonState' }
              ]
            },
            {
              text: 'WaynesForm',
              items: [
                { text: 'Overview', link: '/en/official/Reference/CustomControls/WaynesForm/' },
                { text: 'WindowsFormOptions', link: '/en/official/Reference/CustomControls/WaynesForm/WindowsFormOptions' }
              ]
            },
            {
              text: 'WaynesGrid',
              items: [
                { text: 'Overview', link: '/en/official/Reference/CustomControls/WaynesGrid/' },
                { text: 'CellRenderingOptions', link: '/en/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions' },
                { text: 'Column', link: '/en/official/Reference/CustomControls/WaynesGrid/Column' }
              ]
            },
            {
              text: 'WaynesSlider',
              items: [
                { text: 'Overview', link: '/en/official/Reference/CustomControls/WaynesSlider/' },
                { text: 'WaynesSliderState', link: '/en/official/Reference/CustomControls/WaynesSlider/WaynesSliderState' }
              ]
            },
            {
              text: 'WaynesTextBox',
              items: [
                { text: 'Overview', link: '/en/official/Reference/CustomControls/WaynesTextBox/' },
                { text: 'WaynesTextBoxState', link: '/en/official/Reference/CustomControls/WaynesTextBox/WaynesTextBoxState' }
              ]
            }
          ]
        },
        {
          text: 'tbIDE Package',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/en/official/Reference/tbIDE/' },
            { text: 'AddIn', link: '/en/official/Reference/tbIDE/AddIn' },
            { text: 'AddinTimer', link: '/en/official/Reference/tbIDE/AddinTimer' },
            { text: 'Button', link: '/en/official/Reference/tbIDE/Button' },
            { text: 'CodeEditor', link: '/en/official/Reference/tbIDE/CodeEditor' },
            { text: 'DebugConsole', link: '/en/official/Reference/tbIDE/DebugConsole' },
            { text: 'Editor', link: '/en/official/Reference/tbIDE/Editor' },
            { text: 'Editors', link: '/en/official/Reference/tbIDE/Editors' },
            { text: 'File', link: '/en/official/Reference/tbIDE/File' },
            { text: 'FileSystem', link: '/en/official/Reference/tbIDE/FileSystem' },
            { text: 'FileSystemItem', link: '/en/official/Reference/tbIDE/FileSystemItem' },
            { text: 'Folder', link: '/en/official/Reference/tbIDE/Folder' },
            { text: 'Host', link: '/en/official/Reference/tbIDE/Host' },
            { text: 'HtmlElement', link: '/en/official/Reference/tbIDE/HtmlElement' },
            { text: 'HtmlElementProperties', link: '/en/official/Reference/tbIDE/HtmlElementProperties' },
            { text: 'HtmlElementProperty', link: '/en/official/Reference/tbIDE/HtmlElementProperty' },
            { text: 'HtmlElements', link: '/en/official/Reference/tbIDE/HtmlElements' },
            { text: 'HtmlEventProperties', link: '/en/official/Reference/tbIDE/HtmlEventProperties' },
            { text: 'HtmlEventProperty', link: '/en/official/Reference/tbIDE/HtmlEventProperty' },
            { text: 'KeyboardShortcuts', link: '/en/official/Reference/tbIDE/KeyboardShortcuts' },
            { text: 'Project', link: '/en/official/Reference/tbIDE/Project' },
            { text: 'Themes', link: '/en/official/Reference/tbIDE/Themes' },
            { text: 'Toolbar', link: '/en/official/Reference/tbIDE/Toolbar' },
            { text: 'Toolbars', link: '/en/official/Reference/tbIDE/Toolbars' },
            { text: 'ToolWindow', link: '/en/official/Reference/tbIDE/ToolWindow' },
            { text: 'ToolWindows', link: '/en/official/Reference/tbIDE/ToolWindows' }
          ]
        },
        {
          text: 'VB Package',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/en/official/Reference/VB/' },
            { text: 'App', link: '/en/official/Reference/VB/App/' },
            { text: 'CheckBox', link: '/en/official/Reference/VB/CheckBox/' },
            { text: 'CheckMark', link: '/en/official/Reference/VB/CheckMark/' },
            { text: 'Clipboard', link: '/en/official/Reference/VB/Clipboard/' },
            { text: 'ComboBox', link: '/en/official/Reference/VB/ComboBox/' },
            { text: 'CommandButton', link: '/en/official/Reference/VB/CommandButton/' },
            { text: 'Data', link: '/en/official/Reference/VB/Data/' },
            { text: 'DirListBox', link: '/en/official/Reference/VB/DirListBox/' },
            { text: 'DriveListBox', link: '/en/official/Reference/VB/DriveListBox/' },
            { text: 'FileListBox', link: '/en/official/Reference/VB/FileListBox/' },
            { text: 'Form', link: '/en/official/Reference/VB/Form/' },
            { text: 'Frame', link: '/en/official/Reference/VB/Frame/' },
            { text: 'Global', link: '/en/official/Reference/VB/Global/' },
            { text: 'HScrollBar', link: '/en/official/Reference/VB/HScrollBar/' },
            { text: 'Image', link: '/en/official/Reference/VB/Image/' },
            { text: 'Label', link: '/en/official/Reference/VB/Label/' },
            { text: 'Line', link: '/en/official/Reference/VB/Line/' },
            { text: 'ListBox', link: '/en/official/Reference/VB/ListBox/' },
            { text: 'MDIForm', link: '/en/official/Reference/VB/MDIForm/' },
            { text: 'Menu', link: '/en/official/Reference/VB/Menu/' },
            { text: 'MultiFrame', link: '/en/official/Reference/VB/MultiFrame/' },
            { text: 'OLE', link: '/en/official/Reference/VB/OLE/' },
            { text: 'OptionButton', link: '/en/official/Reference/VB/OptionButton/' },
            { text: 'PictureBox', link: '/en/official/Reference/VB/PictureBox/' },
            { text: 'Printer', link: '/en/official/Reference/VB/Printer/' },
            { text: 'Printers', link: '/en/official/Reference/VB/Printers/' },
            { text: 'PropertyPage', link: '/en/official/Reference/VB/PropertyPage/' },
            { text: 'QRCode', link: '/en/official/Reference/VB/QRCode/' },
            { text: 'Report', link: '/en/official/Reference/VB/Report/' },
            { text: 'Screen', link: '/en/official/Reference/VB/Screen/' },
            { text: 'Shape', link: '/en/official/Reference/VB/Shape/' },
            { text: 'TextBox', link: '/en/official/Reference/VB/TextBox/' },
            { text: 'Timer', link: '/en/official/Reference/VB/Timer/' },
            { text: 'UserControl', link: '/en/official/Reference/VB/UserControl/' },
            { text: 'VScrollBar', link: '/en/official/Reference/VB/VScrollBar/' }
          ]
        },
        {
          text: 'VBA Package',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/en/official/Reference/VBA/' },
            { text: 'Collection', link: '/en/official/Reference/VBA/Collection/' },
            { text: 'Compilation', link: '/en/official/Reference/VBA/Compilation/' },
            { text: 'Constants', link: '/en/official/Reference/VBA/Constants/' },
            { text: 'Conversion', link: '/en/official/Reference/VBA/Conversion/' },
            { text: 'DateTime', link: '/en/official/Reference/VBA/DateTime/' },
            { text: 'ErrObject', link: '/en/official/Reference/VBA/ErrObject/' },
            { text: 'FileSystem', link: '/en/official/Reference/VBA/FileSystem/' },
            { text: 'Financial', link: '/en/official/Reference/VBA/Financial/' },
            { text: 'HiddenModule', link: '/en/official/Reference/VBA/HiddenModule/' },
            { text: 'Information', link: '/en/official/Reference/VBA/Information/' },
            { text: 'Interaction', link: '/en/official/Reference/VBA/Interaction/' },
            { text: 'Math', link: '/en/official/Reference/VBA/Math/' },
            { text: 'Strings', link: '/en/official/Reference/VBA/Strings/' },
            { text: 'TbExpressionService', link: '/en/official/Reference/VBA/TbExpressionService/' }
          ]
        },
        {
          text: 'VBRUN Package',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/en/official/Reference/VBRUN/' },
            { text: 'AmbientProperties', link: '/en/official/Reference/VBRUN/AmbientProperties/' },
            { text: 'AsyncProperty', link: '/en/official/Reference/VBRUN/AsyncProperty/' },
            { text: 'Constants', link: '/en/official/Reference/VBRUN/Constants/' },
            { text: 'ContainedControls', link: '/en/official/Reference/VBRUN/ContainedControls/' },
            { text: 'DataMembers', link: '/en/official/Reference/VBRUN/DataMembers/' },
            { text: 'DataObject', link: '/en/official/Reference/VBRUN/DataObject/' },
            { text: 'ErrorCallstack', link: '/en/official/Reference/VBRUN/ErrorCallstack/' },
            { text: 'ErrorContext', link: '/en/official/Reference/VBRUN/ErrorContext/' },
            { text: 'ErrorStackFrame', link: '/en/official/Reference/VBRUN/ErrorStackFrame/' },
            { text: 'Hyperlink', link: '/en/official/Reference/VBRUN/Hyperlink/' },
            { text: 'ParentControls', link: '/en/official/Reference/VBRUN/ParentControls/' },
            { text: 'PropertyBag', link: '/en/official/Reference/VBRUN/PropertyBag/' }
          ]
        },
        {
          text: 'WebView2 Package',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/en/official/Reference/WebView2/' },
            { text: 'WebView2', link: '/en/official/Reference/WebView2/WebView2/' },
            { text: 'WebView2Header', link: '/en/official/Reference/WebView2/WebView2Header' },
            { text: 'WebView2HeadersCollection', link: '/en/official/Reference/WebView2/WebView2HeadersCollection' },
            { text: 'WebView2Request', link: '/en/official/Reference/WebView2/WebView2Request' },
            { text: 'WebView2RequestHeaders', link: '/en/official/Reference/WebView2/WebView2RequestHeaders' },
            { text: 'WebView2Response', link: '/en/official/Reference/WebView2/WebView2Response' },
            { text: 'WebView2ResponseHeaders', link: '/en/official/Reference/WebView2/WebView2ResponseHeaders' },
            { text: 'Enumerations', link: '/en/official/Reference/WebView2/Enumerations/' },
            { text: 'Types', link: '/en/official/Reference/WebView2/Types/' }
          ]
        },
        {
          text: 'WinEventLogLib',
          items: [
            { text: 'Overview', link: '/en/official/Reference/WinEventLogLib/' },
            { text: 'EventLog', link: '/en/official/Reference/WinEventLogLib/EventLog' },
            { text: 'EventLogHelperPublic', link: '/en/official/Reference/WinEventLogLib/EventLogHelperPublic' }
          ]
        },
        {
          text: 'WinNamedPipesLib',
          items: [
            { text: 'Overview', link: '/en/official/Reference/WinNamedPipesLib/' },
            { text: 'NamedPipeClientConnection', link: '/en/official/Reference/WinNamedPipesLib/NamedPipeClientConnection' },
            { text: 'NamedPipeClientManager', link: '/en/official/Reference/WinNamedPipesLib/NamedPipeClientManager' },
            { text: 'NamedPipeServer', link: '/en/official/Reference/WinNamedPipesLib/NamedPipeServer' },
            { text: 'NamedPipeServerConnection', link: '/en/official/Reference/WinNamedPipesLib/NamedPipeServerConnection' }
          ]
        },
        {
          text: 'WinNativeCommonCtls',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/en/official/Reference/WinNativeCommonCtls/' },
            { text: 'DTPicker', link: '/en/official/Reference/WinNativeCommonCtls/DTPicker' },
            { text: 'MonthView', link: '/en/official/Reference/WinNativeCommonCtls/MonthView' },
            { text: 'ProgressBar', link: '/en/official/Reference/WinNativeCommonCtls/ProgressBar' },
            { text: 'Slider', link: '/en/official/Reference/WinNativeCommonCtls/Slider' },
            { text: 'UpDown', link: '/en/official/Reference/WinNativeCommonCtls/UpDown' },
            { text: 'Enumerations', link: '/en/official/Reference/WinNativeCommonCtls/Enumerations/' },
            { text: 'ImageList', link: '/en/official/Reference/WinNativeCommonCtls/ImageList/' },
            { text: 'ListView', link: '/en/official/Reference/WinNativeCommonCtls/ListView/' },
            { text: 'TreeView', link: '/en/official/Reference/WinNativeCommonCtls/TreeView/' }
          ]
        },
        {
          text: 'WinServicesLib',
          items: [
            { text: 'Overview', link: '/en/official/Reference/WinServicesLib/' },
            { text: 'ITbService', link: '/en/official/Reference/WinServicesLib/ITbService' },
            { text: 'ServiceCreator', link: '/en/official/Reference/WinServicesLib/ServiceCreator' },
            { text: 'ServiceManager', link: '/en/official/Reference/WinServicesLib/ServiceManager' },
            { text: 'Services', link: '/en/official/Reference/WinServicesLib/Services' },
            { text: 'ServiceState', link: '/en/official/Reference/WinServicesLib/ServiceState' },
            { text: 'Enumerations', link: '/en/official/Reference/WinServicesLib/Enumerations/' }
          ]
        }
      ]
    },
    {
      text: 'Tutorials',
      items: [
        { text: 'Overview', link: '/en/official/Tutorials/' },
        { text: 'Arrays', link: '/en/official/Tutorials/Arrays' },
        { text: 'Forms basics', link: '/en/official/Tutorials/Forms' },
        { text: 'Hello World', link: '/en/official/Tutorials/Hello-World' },
        { text: 'Writing unit tests with Assert', link: '/en/official/Tutorials/Testing-with-Assert' },
        { text: 'Calling the Windows API', link: '/en/official/Tutorials/Windows-API' },
        {
          text: 'CEF',
          items: [
            { text: 'Overview', link: '/en/official/Tutorials/CEF/' },
            { text: 'Getting Started', link: '/en/official/Tutorials/CEF/Getting-started' },
            { text: 'Building a browser shell', link: '/en/official/Tutorials/CEF/Building-a-browser-shell' },
            { text: 'Customize the UserDataFolder', link: '/en/official/Tutorials/CEF/Customize-the-UserDataFolder' },
            { text: 'Driving Monaco from tB', link: '/en/official/Tutorials/CEF/Driving-Monaco' },
            { text: 'Hosting local web assets', link: '/en/official/Tutorials/CEF/Hosting-local-web-assets' },
            { text: 'JavaScript interop', link: '/en/official/Tutorials/CEF/JavaScript-interop' },
            { text: 'Re-entrancy', link: '/en/official/Tutorials/CEF/Re-entrancy' }
          ]
        },
        {
          text: 'CustomControls',
          items: [
            { text: 'Overview', link: '/en/official/Tutorials/CustomControls/' },
            { text: 'Defining a CustomControl', link: '/en/official/Tutorials/CustomControls/Defining-a-CustomControl' },
            { text: 'Notes about the form designer', link: '/en/official/Tutorials/CustomControls/Notes-about-the-form-designer' },
            { text: 'Painting / drawing to your control', link: '/en/official/Tutorials/CustomControls/Painting-drawing-to-your-control' },
            { text: 'Property sheet and object serialization', link: '/en/official/Tutorials/CustomControls/Property-sheet-and-object-serialization' }
          ]
        },
        {
          text: 'WebView2',
          items: [
            { text: 'Overview', link: '/en/official/Tutorials/WebView2/' },
            { text: 'Getting Started', link: '/en/official/Tutorials/WebView2/Getting-started' },
            { text: 'Building a browser shell', link: '/en/official/Tutorials/WebView2/Building-a-browser-shell' },
            { text: 'Customize the UserDataFolder', link: '/en/official/Tutorials/WebView2/Customize-the-UserDataFolder' },
            { text: 'Driving Monaco from tB', link: '/en/official/Tutorials/WebView2/Driving-Monaco' },
            { text: 'Hosting local web assets', link: '/en/official/Tutorials/WebView2/Hosting-local-web-assets' },
            { text: 'JavaScript interop', link: '/en/official/Tutorials/WebView2/JavaScript-interop' },
            { text: 'Re-entrancy', link: '/en/official/Tutorials/WebView2/Re-entrancy' }
          ]
        }
      ]
    },
   {
      text: 'Challenges',
      items: [
        { text: 'Overview', link: '/en/official/Challenges/' },
        { text: 'Create a Game', link: '/en/official/Challenges/create-a-game' },
        { text: 'Self-Contained Diagnostic Tool', link: '/en/official/Challenges/self-contained_diagnostic_tool' }
      ]
    },
    {
      text: 'Documentation',
      items: [
        { text: 'Documentation Development', link: '/en/official/Documentation/' },
        { text: 'Book Configuration', link: '/en/official/Documentation/Book-Configuration' },
        { text: 'tbdocs Builder', link: '/en/official/Documentation/Builder' },
        { text: 'Building and Deployment', link: '/en/official/Documentation/Building' },
        { text: 'Extending the Builder', link: '/en/official/Documentation/Extending' },
        { text: 'Library Patches', link: '/en/official/Documentation/Fixes' },
        { text: 'Mermaid Dagre Patches', link: '/en/official/Documentation/Fixes-Dagre' },
        { text: 'Paged.js Patches', link: '/en/official/Documentation/Fixes-PagedJS' },
        { text: 'pdf-lib Patches', link: '/en/official/Documentation/Fixes-PDFLib' },
        { text: 'PDF Generation', link: '/en/official/Documentation/PDF-Generation' },
        { text: 'Permanent Links', link: '/en/official/Documentation/Permanent-Links' },
        { text: 'Pipeline Stages', link: '/en/official/Documentation/Pipeline-Stages' },
        { text: 'Tools and Scripts', link: '/en/official/Documentation/Tools' }
      ]
    },    
    {
      text: 'Videos',
      items: [
        { text: 'Overview', link: '/en/official/Videos/' },
        { text: 'Access DevCon Videos', link: '/en/official/Videos/AccessDevCon' },
        { text: 'tB Videos', link: '/en/official/Videos/twinBASIC' }
      ]
    }
  ],
  '/en/packages/vbccr/': [
    {
      text: 'VBCCR Controls',
      items: [
       { text: 'Introduction', link: '/en/vbccr/' },
        { text: 'Animation Control', link: '/en/vbccr/animation' },
        { text: 'Checkbox Control', link: '/en/vbccr/checkbox' },
        { text: 'ComboBox Control', link: '/en/vbccr/combobox' },
        { text: 'CommandButton Control', link: '/en/vbccr/commandbutton' },
        { text: 'CommandLink Control', link: '/en/vbccr/commandlink' },
        { text: 'CommonDialog Control', link: '/en/vbccr/commondialog' },
        { text: 'CoolBar Control', link: '/en/vbccr/coolbar' },
        { text: 'DateTimePicker Control', link: '/en/vbccr/dtpicker' },
        { text: 'FontCombo Control', link: '/en/vbccr/fontcombo' },
        { text: 'Frame Control', link: '/en/vbccr/frame' },
        { text: 'HotKey Control', link: '/en/vbccr/hotkey' },
        { text: 'ImageCombo Control', link: '/en/vbccr/imagecombo' },
        { text: 'ImageList Control', link: '/en/vbccr/imagelist' },
        { text: 'IPAddress Control', link: '/en/vbccr/ipaddress' },
        { text: 'Label Control', link: '/en/vbccr/label' },
        { text: 'LinkLabel Control', link: '/en/vbccr/linklabel' },
        { text: 'ListBox Control', link: '/en/vbccr/listbox' },
        { text: 'ListView Control', link: '/en/vbccr/listview' },
        { text: 'MCIWnd Control', link: '/en/vbccr/mciwnd' },
        { text: 'MonthView Control', link: '/en/vbccr/monthview' },
        { text: 'OptionButton Control', link: '/en/vbccr/optionbutton' },
        { text: 'Pager Control', link: '/en/vbccr/pager' },
        { text: 'ProgressBar Control', link: '/en/vbccr/progressbar' },
        { text: 'RichTextBox Control', link: '/en/vbccr/richtextbox' },
        { text: 'Slider Control', link: '/en/vbccr/slider' },
        { text: 'SpinBox Control', link: '/en/vbccr/spinbox' },
        { text: 'StatusBar Control', link: '/en/vbccr/statusbar' },
        { text: 'SysInfo Control', link: '/en/vbccr/sysinfo' },
        { text: 'TabStrip Control', link: '/en/vbccr/tabstrip' },
        { text: 'TextBox Control', link: '/en/vbccr/textbox' },
        { text: 'ToolBar Control', link: '/en/vbccr/toolbar' },
        { text: 'TreeView Control', link: '/en/vbccr/treeview' },
        { text: 'UpDown Control', link: '/en/vbccr/updown' },
        { text: 'VirtualCombo Control', link: '/en/vbccr/virtualcombo' },
        { text: 'VListBox Control', link: '/en/vbccr/vlistbox' },
        { text: 'WindowedLabel Control', link: '/en/vbccr/windowedlabel' },
        { text: 'Official Documentation', link: '/en/vbccr/readme' }
      ]
    }
  ],
  '/en/tbman/': [
    {
      text: 'TBMAN Developer',
      items: [
        { text: 'Introduction', link: '/en/tbman/' },
      ]
    },
  ],
  '/en/challenge/2026': [
    {
      text: 'Challenges',
      items: [
        { text: '2026.01', link: '/en/challenge/2026/202601' },
        { text: '2026.02', link: '/en/challenge/2026/202602' },
      ]
    },
  ]
}

export const enFooter = {
  message: 'twinBASIC and LOGO copyright of "WaynePhillipsEA" author',
  copyright: `twinBASIC Chinese Documentation copyright © 2023-${new Date().getFullYear()} Translated by this site`
}
