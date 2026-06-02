/**
 * 死链检测脚本 - 与 VitePress 插件逻辑完全一致
 * 使用方法: node scripts/test-deadlinks.js
 */

const fs = require('fs');
const path = require('path');

const DOCS_ROOT = path.resolve(__dirname, '../docs');
const TARGET_DIRS = ['en/official', 'zh/official'];

// 路径映射规则（与 clearDieLink.ts 保持一致）
const pathMappings = [
  { from: /\.\.\/\.\.\/tB\/Packages\/WebView2\/WebView2\//g, to: '../../Reference/WebView2/' },
  { from: /\.\.\/\.\.\/tB\/Packages\/WebView2\/WebView2/g, to: '../../Reference/WebView2' },
  { from: /\.\.\/tB\/Packages\/WebView2\/WebView2\//g, to: '../Reference/WebView2/' },
  { from: /\.\.\/tB\/Packages\/WebView2\/WebView2/g, to: '../Reference/WebView2' },
  { from: /tB\/Packages\/WebView2\/WebView2\//g, to: 'Reference/WebView2/' },
  { from: /tB\/Packages\/WebView2\/WebView2/g, to: 'Reference/WebView2' },
  { from: /\.\.\/\.\.\/tB\/Packages\/CEF\/CefBrowser\//g, to: '../../Reference/CEF/' },
  { from: /\.\.\/\.\.\/tB\/Packages\/CEF\/CefBrowser/g, to: '../../Reference/CEF' },
  { from: /\.\.\/tB\/Packages\/CEF\/CefBrowser\//g, to: '../Reference/CEF/' },
  { from: /\.\.\/tB\/Packages\/CEF\/CefBrowser/g, to: '../Reference/CEF' },
  { from: /\.\.\/\.\.\/tB\/Packages\/CustomControls\//g, to: '../../Reference/CustomControls/' },
  { from: /\.\.\/\.\.\/tB\/Packages\/CustomControls/g, to: '../../Reference/CustomControls' },
  { from: /\.\.\/tB\/Packages\/CustomControls\//g, to: '../Reference/CustomControls/' },
  { from: /\.\.\/tB\/Packages\/CustomControls/g, to: '../Reference/CustomControls' },
  { from: /\.\.\/tB\/Packages\/Assert\//g, to: '../Reference/Assert/' },
  { from: /\.\.\/tB\/Packages\/Assert/g, to: '../Reference/Assert' },
  { from: /tB\/Packages\/Assert\//g, to: 'Reference/Assert/' },
  { from: /tB\/Packages\/Assert/g, to: 'Reference/Assert' },
  { from: /\.\.\/\.\.\/Packages\/tbIDE\//g, to: '../../Reference/tbIDE/' },
  { from: /\.\.\/\.\.\/Packages\/tbIDE/g, to: '../../Reference/tbIDE' },
  { from: /\.\.\/\.\.\/tB\/Core\//g, to: '../../Reference/Core/' },
  { from: /\.\.\/tB\/Core\//g, to: '../Reference/Core/' },
  { from: /\.\.\/\.\.\/tB\/Modules\//g, to: '../../Reference/VBA/' },
  { from: /\.\.\/tB\/Modules\//g, to: '../Reference/VBA/' },
  { from: /\.\.\/VB\//g, to: '../Reference/VB/' },
  { from: /\.\/IDE\/Project\//g, to: './Project/' },
  { from: /Reference\/Core\/Attributes/g, to: 'Reference/Attributes' },
  { from: /\.\.\/\.\.\/Core\/Attributes/g, to: '../../Reference/Attributes' },
  { from: /Reference\/Core\/If(?!-)/g, to: 'Reference/Core/If-Then-Else' },
  { from: /Reference\/Core\/IIf/g, to: 'Reference/VBA/Interaction/IIf' },

  // Reference/Core/... 文件 I/O 函数实际在 Reference/VBA/FileSystem/
  { from: /Reference\/Core\/Seek/g, to: 'Reference/VBA/FileSystem/Seek' },
  { from: /Reference\/Core\/ChDir/g, to: 'Reference/VBA/FileSystem/ChDir' },
  { from: /Reference\/Core\/ChDrive/g, to: 'Reference/VBA/FileSystem/ChDrive' },
  { from: /Reference\/Core\/CurDir/g, to: 'Reference/VBA/FileSystem/CurDir' },
  { from: /Reference\/Core\/Dir/g, to: 'Reference/VBA/FileSystem/Dir' },
  { from: /Reference\/Core\/FileCopy/g, to: 'Reference/VBA/FileSystem/FileCopy' },
  { from: /Reference\/Core\/Kill/g, to: 'Reference/VBA/FileSystem/Kill' },
  { from: /Reference\/Core\/MkDir/g, to: 'Reference/VBA/FileSystem/MkDir' },
  { from: /Reference\/Core\/RmDir/g, to: 'Reference/VBA/FileSystem/RmDir' },
  { from: /Reference\/Core\/SetAttr/g, to: 'Reference/VBA/FileSystem/SetAttr' },
  { from: /Reference\/Core\/Reset/g, to: 'Reference/VBA/FileSystem/Reset' },
  { from: /Reference\/Core\/Date(?!Time)/g, to: 'Reference/VBA/DateTime/Date' },
  { from: /Reference\/Core\/Time(?!r)/g, to: 'Reference/VBA/DateTime/Time' },
  { from: /Reference\/Core\/Now/g, to: 'Reference/VBA/DateTime/Now' },
  { from: /Reference\/Core\/Calendar/g, to: 'Reference/VBA/DateTime' },
  { from: /Reference\/Core\/Array/g, to: 'Reference/VBA/Arrays' },

  { from: /\.\.\/\.\.\/Modules\/Information\/IsNull/g, to: '../../Reference/VBA/Modules/Information/IsNull' },
  { from: /\.\.\/Modules\/Information\/IsNull/g, to: '../Reference/VBA/Modules/Information/IsNull' },
  { from: /\.\/Modules\//g, to: './VBA/Modules/' },
  { from: /\.\/IDE\/Project\//g, to: './Project/' },
  // ../../tB/Packages/VBA/Modules/... -> ../../Reference/VBA/... (移除 Modules 层) - 必须放在通用 tB/Packages 规则之前
  { from: /\.\.\/\.\.\/tB\/Packages\/VBA\/Modules\//g, to: '../../Reference/VBA/' },

  { from: /\.\/Packages\/VBA/g, to: './VBA' },
  { from: /\.\/VBA(?!\/)/g, to: './Reference/VBA' },
  { from: /tB\/Packages\//g, to: 'Reference/' },
  { from: /tB\/Core\//g, to: 'Reference/Core/' },
  { from: /tB\/Modules\//g, to: 'Reference/VBA/' },
  { from: /\.\.\/Modules\//g, to: '../Reference/VBA/' },

  // Gloss -> Glossary
  { from: /\.\.\/Gloss(?!ary)/g, to: '../Glossary' },
  { from: /\.\/Gloss(?!ary)/g, to: './Glossary' },
  
  // ../../Packages/... -> ../../Features/Packages/...
  { from: /\.\.\/\.\.\/Packages\//g, to: '../../Features/Packages/' },
  { from: /\.\.\/Packages\//g, to: '../Features/Packages/' },
];

// 预定义死链列表（与 clearDieLink.ts 保持一致）
const deadLinks = [
  './../../Features/Language/Interfaces-CoClasses',
  './../../Features/Language/UDTs',
  './../Features/Language/Interfaces-CoClasses',
  './../IDE/Project/Settings',
  './../Modules/VBA/Array',
  './../Modules/FileSystem',
  './../Tutorials/CustomControls',
  './../tB/Core/AppActivate',
  './../tB/Core/Beep',
  './../tB/Core/Call',
  './../tB/Core/ChDir',
  './../tB/Core/ChDrive',
  './../tB/Core/Class',
  './../tB/Core/Close',
  './../tB/Core/Calendar',
  './../tB/Core/CoClass',
  './../tB/Core/Const',
  './../tB/Core/Continue',
  './../tB/Core/CurDir',
  './../tB/Core/Date',
  './../tB/Core/Declare',
  './../tB/Core/Deftype',
  './../tB/Core/DeleteSetting',
  './../tB/Core/Dir',
  './../tB/Core/Dim',
  './../tB/Core/Do-Loop',
  './../tB/Core/End',
  './../tB/Core/Enum',
  './../tB/Core/Erase',
  './../tB/Core/Error',
  './../tB/Core/Event',
  './../tB/Core/Exit',
  './../tB/Core/FileCopy',
  './../tB/Core/For-Each-Next',
  './../tB/Core/For-Next',
  './../tB/Core/Function',
  './../tB/Core/Get',
  './../tB/Core/GetSetting',
  './../tB/Core/GoSub-Return',
  './../tB/Core/GoTo',
  './../tB/Core/If-Then-Else',
  './../tB/Core/Implements',
  './../tB/Core/Input',
  './../tB/Core/Interface',
  './../tB/Core/Is',
  './../tB/Core/Kill',
  './../tB/Core/LBound',
  './../tB/Core/Let',
  './../tB/Core/Line-Input',
  './../tB/Core/Load',
  './../tB/Core/Lock',
  './../tB/Core/LSet',
  './../tB/Core/Mid-equals',
  './../tB/Core/MidB-equals',
  './../tB/Core/MkDir',
  './../tB/Core/Module',
  './../tB/Core/Name',
  './../tB/Core/New',
  './../tB/Core/Now',
  './../tB/Core/On-Error',
  './../tB/Core/On-GoSub',
  './../tB/Core/On-GoTo',
  './../tB/Core/Open',
  './../tB/Core/Option',
  './../tB/Core/ParamArray',
  './../tB/Core/Print',
  './../tB/Core/Private',
  './../tB/Core/Property',
  './../tB/Core/Protected',
  './../tB/Core/Public',
  './../tB/Core/Put',
  './../tB/Core/RaiseEvent',
  './../tB/Core/ReDim',
  './../tB/Core/Reset',
  './../tB/Core/Resume',
  './../tB/Core/Return',
  './../tB/Core/RmDir',
  './../tB/Core/RSet',
  './../tB/Core/SavePicture',
  './../tB/Core/SaveSetting',
  './../tB/Core/Seek',
  './../tB/Core/Select-Case',
  './../tB/Core/SendKeys',
  './../tB/Core/Set',
  './../tB/Core/SetAttr',
  './../tB/Core/Shell',
  './../tB/Core/Static',
  './../tB/Core/Stop',
  './../tB/Core/Sub',
  './../tB/Core/Time',
  './../tB/Core/Topic-Preprocessor',
  './../tB/Core/Type',
  './../tB/Core/UBound',
  './../tB/Core/Unload',
  './../tB/Core/Unlock',
  './../tB/Core/While-Wend',
  './../tB/Core/Width',
  './../tB/Core/With',
  './../tB/Core/Write',
  './../tB/Core/Attributes',
  './../tB/Gloss',
  './../tB/Modules/Collection',
  './../tB/Modules/Compilation',
  './../tB/Modules/Constants',
  './../tB/Modules/Conversion',
  './../tB/Modules/DateTime',
  './../tB/Modules/DateTime/Date',
  './../tB/Modules/ErrObject',
  './../tB/Modules/ErrorCallstack',
  './../tB/Modules/ErrorContext',
  './../tB/Modules/ErrorStackFrame',
  './../tB/Modules/ExpressionService',
  './../tB/Modules/FileSystem',
  './../tB/Modules/Financial',
  './../tB/Modules/Hyperlink',
  './../tB/Modules/Information',
  './../tB/Modules/Interaction',
  './../tB/Modules/Math',
  './../tB/Modules/Strings',
  './../tB/Modules/TextEncodingConstants',
  './../tB/Modules/_HiddenModule',
  './../tB/Modules/AmbientProperties',
  './../tB/Modules/AsyncProperty',
  './../tB/Modules/ContainedControls',
  './../tB/Modules/DataMembers',
  './../tB/Modules/DataObject',
  './../tB/Modules/ParentControls',
  './../tB/Modules/PropertyBag',
  './../tB/Modules/Graphics',
  './../tB/Reference/Attributes',
  './../tB/Reference/Categories',
  './../tB/Reference/Compiler-Constants',
  './../tB/Reference/Controls/PropertyPage',
  './../tB/Reference/Controls/UserControl',
  './../tB/Reference/Controls/WebView2',
  './../tB/Reference/Error-Codes',
  './../tB/Reference/Glossary',
  './../tB/Reference/Procedures-and-Functions',
  './../tB/Reference/Statements',
  './../tB/Reference/WebView2/Events',
  './../tB/Reference/WebView2/JavaScript-Interop',
  './../tB/Reference',
  './../tB/Tutorials/Arrays',
  './../tB/Tutorials/CustomControls',
  './../tB/Tutorials/CustomControls/Defining-a-CustomControl',
  './../tB/Tutorials/CustomControls/Notes-about-the-form-designer',
  './../tB/Tutorials/CustomControls/Painting-drawing-to-your-control',
  './../tB/Tutorials/CustomControls/Property-sheet-and-object-serialization',
  './../tB/Tutorials/WebView2',
  './../tB/Tutorials/WebView2/Customize-the-UserDataFolder',
  './../tB/Tutorials/WebView2/Getting-started',
  './../tB/Tutorials/WebView2/Re-entrancy',
  './../tB/Videos/AccessDevCon',
  './../tB/Videos/twinBASIC',
  './../tB/Controls',
  './../tB/Core',
  './../tB/IDE/AddIns/index',
  './tB/IDE/AddIns/index',
  './../tB/IDE/Project/CallStack',
  './../tB/IDE/Project/DebugConsole',
  './../tB/IDE/Project/Diagnostics',
  './../tB/IDE/Project/Editor',
  './../tB/IDE/Project/Editor/Form',
  './../tB/IDE/Project/Editor/Report',
  './../tB/IDE/Project/Explorer',
  './../tB/IDE/Project/Menu/index',
  './tB/IDE/Project/Menu/index',
  './../tB/IDE/Project/New',
  './../tB/IDE/Project/Properties',
  './../tB/IDE/Project/Settings',
  './../tB/IDE/Project/Splash',
  './../tB/IDE/Project/StatusBar',
  './../tB/IDE/Project/Toolbar',
  './../tB/IDE/Project/Toolbox',
  './../tB/IDE/Project/Variables',
  './../tB/Modules',
  './../Packages/Creating-TWINPACK',
  './../Packages/Importing-TWINPACK',
  './../Packages/Importing-TWINSERV',
  './../Packages/Updating',
  './../Project/Toolbar',
  './../Toolbox',
  './../../Packages/Importing-TWINSERV/index',
  './../../../Controls',
  './../../Controls',
  './Documentation/Development',
  './Editor/Form',
  './Editor/Report',
  './FAQ',
  './Features',
  './Features/Advanced',
  './Features/Compiler-IDE',
  './Features/GUI-Components',
  './Features/Language',
  './Features/Packages',
  './Features/Project-Configuration',
  './Features/Standard-Library',
  './Importing-TWINPACK',
  './Importing-TWINSERV',
  './Painting',
  './Properties',
  './Reference/Compiler-Constants',
  './Reference/Procedures-and-Functions',
  './Settings',
  './Standard-Library',
  './Tutorials/CustomControls',
  './Tutorials/WebView2',
  './tB/Core/Attributes',
  './tB/Controls',
  './tB/Gloss',
  './tB/IDE/AddIns/index',
  './tB/IDE/Project/CallStack',
  './tB/IDE/Project/DebugConsole',
  './tB/IDE/Project/Diagnostics',
  './tB/IDE/Project/Editor',
  './tB/IDE/Project/Editor/Form',
  './tB/IDE/Project/Editor/Report',
  './tB/IDE/Project/Explorer',
  './tB/IDE/Project/Menu/index',
  './tB/IDE/Project/New',
  './tB/IDE/Project/Properties',
  './tB/IDE/Project/Settings',
  './tB/IDE/Project/Splash',
  './tB/IDE/Project/StatusBar',
  './tB/IDE/Project/Toolbar',
  './tB/IDE/Project/Toolbox',
  './tB/IDE/Project/Variables',
  './tB/Modules',
  './tB/Reference/Compiler-Constants',
  './Videos/tB',
  './Attributes',
  './Calendar',
  './Class',
  './CoClass',
  './Close',
  './Command',
  './Const',
  './Continue',
  './CurDir',
  './DateAdd',
  './DateDiff',
  './DateInterval',
  './DatePart',
  './DateSerial',
  './DateValue',
  './Day',
  './Declare',
  './Deftype',
  './Dir',
  './DoEvents',
  './DriveSpec',
  './Enum',
  './Environ',
  './EOF',
  './Erase',
  './Exit',
  './FileAttr',
  './FileCopy',
  './FileDateTime',
  './FileLen',
  './For-Each-Next',
  './For-Next',
  './Format',
  './FormatDateTime',
  './FreeFile',
  './Function',
  './Get',
  './GetAttr',
  './GoSub-Return',
  './GoTo',
  './Hour',
  './If-Then-Else',
  './Input',
  './InputBox',
  './Interface',
  './IsDate',
  './Kill',
  './LBound',
  './Let',
  './Line-Input',
  './Loc',
  './Lock',
  './Minute',
  './MkDir',
  './Module',
  './Month',
  './MsgBox',
  './Name',
  './New',
  './Now',
  './On-Error',
  './Open',
  './ParamArray',
  './Print',
  './Private',
  './Protected',
  './Property',
  './Public',
  './Put',
  './RaiseEvent',
  './ReDim',
  './Reset',
  './Resume',
  './Return',
  './RmDir',
  './Second',
  './Seek',
  './Select-Case',
  './SendKeys',
  './Set',
  './SetAttr',
  './Shell',
  './Static',
  './Stop',
  './Sub',
  './Time',
  './TimeSerial',
  './TimeValue',
  './Timer',
  './Type',
  './UBound',
  './Unlock',
  './Weekday',
  './While-Wend',
  './Width',
  './With',
  './Write',
  './Year',
  './Core/Is',
  './Core/Property',
  './Core/Public',
  './Core/Static',
  './Core/Sub',
  '/zh/tB/Core',
  '/zh/tB/Core/Dim',
  '/zh/tB/Core/Error',
  '/zh/tB/Core/For-Each-Next',
  '/zh/tB/Core/For-Next',
  '/zh/tB/Core/Function',
  '/zh/tB/Core/Option',
  '/zh/tB/Core/Property',
  '/zh/tB/Core/Sub',
  '/zh/tB/Modules',
  '/zh/tB/Modules/DateTime',
  '/zh/tB/Modules/DateTime/Date',
  '/zh/tB/Modules/DateTime/DateAdd',
  '/zh/tB/Modules/DateTime/DateDiff',
  '/zh/tB/Modules/DateTime/DateInterval',
  '/zh/tB/Modules/DateTime/DatePart',
  '/zh/tB/Modules/DateTime/DateSerial',
  '/zh/tB/Modules/DateTime/DateValue',
  '/zh/tB/Modules/DateTime/Day',
  '/zh/tB/Modules/DateTime/Format',
  '/zh/tB/Modules/DateTime/FormatDateTime',
  '/zh/tB/Modules/DateTime/Hour',
  '/zh/tB/Modules/DateTime/IsDate',
  '/zh/tB/Modules/DateTime/Minute',
  '/zh/tB/Modules/DateTime/Month',
  '/zh/tB/Modules/DateTime/Now',
  '/zh/tB/Modules/DateTime/Second',
  '/zh/tB/Modules/DateTime/Time',
  '/zh/tB/Modules/DateTime/TimeSerial',
  '/zh/tB/Modules/DateTime/TimeValue',
  '/zh/tB/Modules/DateTime/Timer',
  '/zh/tB/Modules/DateTime/Weekday',
  '/zh/tB/Modules/DateTime/Year',
  '/zh/tB/Modules/FileSystem',
  '/zh/tB/Modules/FileSystem/ChDir',
  '/zh/tB/Modules/FileSystem/ChDrive',
  '/zh/tB/Modules/FileSystem/FileCopy',
  '/zh/tB/Modules/Financial',
  '/zh/tB/Modules/Graphics',
  '/zh/tB/Modules/Interaction',
  '/zh/tB/Modules/Interaction/AppActivate',
  '/zh/tB/Modules/Interaction/Beep',
  '/zh/tB/Modules/Interaction/DeleteSetting',
  '/zh/tB/Modules/Interaction/GetSetting',
  '/zh/tB/Modules/Interaction/SaveSetting',
  '/zh/tB/Modules/Math',
  '/zh/tB/Modules/Strings',
  '/zh/tB/Reference',
  '/zh/tB/Reference/Attributes',
  '/zh/tB/Reference/Categories',
  '/zh/tB/Reference/Compiler-Constants',
  '/zh/tB/Reference/Controls/PropertyPage',
  '/zh/tB/Reference/Controls/UserControl',
  '/zh/tB/Reference/Controls/WebView2',
  '/zh/tB/Reference/WebView2/Events',
  '/zh/tB/Reference/WebView2/JavaScript-Interop',
  '/zh/tB/Reference/Error-Codes',
  '/zh/tB/Reference/Glossary',
  '/zh/tB/Reference/Procedures-and-Functions',
  '/zh/tB/Reference/Statements',
  '/zh/tB/Tutorials/Arrays',
  '/zh/tB/Tutorials/CustomControls',
  '/zh/tB/Tutorials/CustomControls/Defining-a-CustomControl',
  '/zh/tB/Tutorials/CustomControls/Notes-about-the-form-designer',
  '/zh/tB/Tutorials/CustomControls/Painting-drawing-to-your-control',
  '/zh/tB/Tutorials/CustomControls/Property-sheet-and-object-serialization',
  '/zh/tB/Tutorials/WebView2',
  '/zh/tB/Tutorials/WebView2/Customize-the-UserDataFolder',
  '/zh/tB/Tutorials/WebView2/Getting-started',
  '/zh/tB/Tutorials/WebView2/Re-entrancy',
  '/zh/tB/Videos/AccessDevCon',
  '/zh/tB/Videos/twinBASIC',
  '/Reference/Assert',
  '/Reference/Assert/',
  '/Reference/CEF/CefBrowser',
  '/Reference/CEF/CefBrowser/',
  '/Reference/WebView2/WebView2',
  '/Reference/WebView2/WebView2/',
  'IDE/AddIns',
  'IDE/AddIns/',
  'IDE/AddIns/index',
  'Packages/VB',
  'Packages/VB/',
  'Packages/VB/CheckBox',
  'Packages/VB/CheckBox/',
  'Packages/VB/CheckMark',
  'Packages/VB/CheckMark/',
  'Packages/VB/ComboBox',
  'Packages/VB/ComboBox/',
  'Packages/VB/Data',
  'Packages/VB/Data/',
  'Packages/VB/FileListBox',
  'Packages/VB/FileListBox/',
  'Packages/VB/Form',
  'Packages/VB/Form/',
  'Packages/VB/Frame',
  'Packages/VB/Frame/',
  'Packages/VB/HScrollBar',
  'Packages/VB/HScrollBar/',
  'Packages/VB/Image',
  'Packages/VB/Image/',
  'Packages/VB/Label',
  'Packages/VB/Label/',
  'Packages/VB/Line',
  'Packages/VB/Line/',
  'Packages/VB/ListBox',
  'Packages/VB/ListBox/',
  'Packages/VB/MDIForm',
  'Packages/VB/MDIForm/',
  'Packages/VB/Menu',
  'Packages/VB/Menu/',
  'Packages/VB/MultiFrame',
  'Packages/VB/MultiFrame/',
  'Packages/VB/OLE',
  'Packages/VB/OLE/',
  'Packages/VB/OptionButton',
  'Packages/VB/OptionButton/',
  'Packages/VB/PictureBox',
  'Packages/VB/PictureBox/',
  'Packages/VB/QRCode',
  'Packages/VB/QRCode/',
  'Packages/VB/Report',
  'Packages/VB/Report/',
  'Packages/VB/Shape',
  'Packages/VB/Shape/',
  'Packages/VB/TextBox',
  'Packages/VB/TextBox/',
  'Packages/VB/UserControl',
  'Packages/VB/UserControl/',
  'Packages/VB/VScrollBar',
  'Packages/VB/VScrollBar/',
  'Packages/VBRUN',
  'Packages/VBRUN/',
  './../ExpressionService',
  './../ExpressionService/',
  './../Project-Explorer.md',
  // IDE/Project 路径
  'IDE/Project/Explorer',
  'IDE/Project/Editor',
  'IDE/Project/Properties',
  'IDE/Project/Toolbox',
  'IDE/Project/CallStack',
  'IDE/Project/Watches',
  'IDE/Project/Variables',
  'IDE/Project/DebugConsole',
  'IDE/Project/Diagnostics',
  'IDE/Project/Outline',
  'IDE/Project/Memory',
  'Project/Editor/Form',
  'Project/Editor/Report',
  '../Explorer',
  '../Settings',

  // Packages 路径
  'Creating-TWINPACK',
  'Linked',
  'Updating',
  'Importing-TWINSERV',
  'Importing-TWINPACK',
  '../../../Features/Packages/',
  '../../Features/Packages/',

  // Reference 路径
  'Reference/VBA/Modules/Collection/',
  'Reference/VBA/Modules/Information/Err',
  'Reference/VBA/Interaction/IIf',

  // Core 路径
  '../../Core/Print',

  // 特殊路径
  '/tB/Core/For-Next',
  // Tutorials/CEF 路径
  'Getting-Started',
  'Customize-UserDataFolder',
  'Re-entrancy',
  'Building-A-Browser-Shell',
  'Hosting-Local-Web-Assets',
  'JavaScript-Interop',
  'Driving-Monaco',
  '../../../Tutorials/CEF/Getting-Started',
  '../../../Tutorials/CEF/Customize-UserDataFolder',
  '../../../Tutorials/CEF/Re-entrancy',
  '../../../Tutorials/CEF/Building-A-Browser-Shell',
  '../../../Tutorials/CEF/Hosting-Local-Web-Assets',
  '../../../Tutorials/CEF/JavaScript-Interop',
  '../../../Tutorials/CEF/Driving-Monaco',
  '../../../../Tutorials/CEF/Re-entrancy',
  
  // Tutorials/WebView2 路径
  '../../../Tutorials/WebView2/',
  '../../../Tutorials/WebView2/Getting-Started',
  '../../../Tutorials/WebView2/Customize-UserDataFolder',
  '../../../Tutorials/WebView2/Re-entrancy',
  '../../../Tutorials/WebView2/Building-A-Browser-Shell',
  '../../../Tutorials/WebView2/Hosting-Local-Web-Assets',
  '../../../Tutorials/WebView2/JavaScript-Interop',
  '../../../Tutorials/WebView2/Driving-Monaco',
  '../WebView2/Customize-UserDataFolder',
  '../WebView2/Driving-Monaco',
  
  // VBA/Modules 路径问题
  '../VBA/Modules/FileSystem',
  '../VBA/Modules/FileSystem/Seek',
  '../VBA/Modules/FileSystem/Input',
  '../VBA/Modules/FileSystem/EOF',
  '../VBA/Modules/FileSystem/FreeFile',
  '../VBA/Modules/FileSystem/Kill',
  '../VBA/Modules/FileSystem/FileCopy',
  '../VBA/Modules/Strings/InStr',
  '../VBA/Modules/Strings/Mid',
  '../VBA/Modules/HiddenModule/PictureToByteArray',
  '../../VBA/Modules/Constants/VbDayOfWeek',
  '../../VBA/Modules/Information/TranslateColor',
  '../../../VBA/Modules/Information/TranslateColor',
  '../../../VBA/Modules/ErrObject',
  '../../Reference/VBA/Modules/Information/IsNull',
  
  // Reference 路径问题
  '../../Reference/Compiler-Constants',
  '../../Reference/VB/Form/',
  '../../Reference/VB/Printer',
  '../Reference/VB/CheckBox',
  '../Reference/VB/Timer/',
  '../Reference/VBA/ExpressionService/',
  '../../../Features/Language/Generics',
  '../../../Features/Language/Inheritance',
  '../../../Core/For-Each-Next',
  '../Glossary#procedure',
  
  // Features 路径
  '../Features/Packages/',
  '../Features/Packages/Importing-TWINSERV',
  '../Features/Packages/Creating-TWINPACK',
  '../Features/Packages/Importing-TWINPACK',
  '../Features/Packages/Updating',
  '../../Features/Packages/Importing-TWINSERV',
  '../../Features/Language/Interfaces-CoClasses.html#defining-interfaces',
  
  // Reference/Core 路径
  'Reference/Core/Attributes',
  
  // 图片
  '../Images/fafaloneIDEscreenshot1.png',
  
  // 其他
  '/Reference/CEF/#webview2-parity',
  '/Reference/VBA/Modules/Interaction/MsgBox',
  'ObjPtr',
  'VarPtr',
  
  // 更多 Tutorials 路径
  '../../../../Tutorials/WebView2/Customize-UserDataFolder',
  '../../../../Tutorials/WebView2/Re-entrancy',
  
  // VBA Modules 路径（无前缀）
  'Modules/Collection',
  'Modules/DateTime/Date',
  'Modules/DateTime/Time',
  'Modules/Strings/Format',
  'Modules/Information/Err',
  'Packages/VBA',
  'Modules/Information/RGB',
  'Modules/Information/RGBA',
  'Modules/Math/Randomize',
  'Modules/Math/Rnd',
  'Modules/Information/VarType',
  '../VBA/Modules/Strings/InStrRev',
  '../VBA/Modules/HiddenModule/CreateStdPictureFromHandle',
  '../VBA/Modules/Collection',
  '../VBA/Modules/ErrObject',
  '../VBA/Modules/ExpressionService',
  '../VBA/Modules/HiddenModule',
  '../VBA/Modules/Compilation',
  '../VBA/Modules/Constants',
  '../VBA/Modules/Conversion',
  '../VBA/Modules/DateTime',
  '../VBA/Modules/Financial',
  '../VBA/Modules/Information',
  '../VBA/Modules/Interaction',
  '../VBA/Modules/Math',
  '../VBA/Modules/Strings',
  
  // Reference 路径
  '../../Reference/VBA/Arrays',
  '../../Reference/VB/',
  '../../VBA/Modules/Constants/VbArchitecture',
  '../../../VBA/Modules/Constants/VbVarType',
  '../../../VBA/Modules/Information/TypeName',
  '../../Core/Array',
  
  // 根级 Reference 路径
  'Procedures-and-Functions',
  'Reference/Categories',
  'Reference/Statements',
  'Reference/Operators',
  'Reference/Enumerations',
  'Reference/Data-Types',
  'Reference/twinBASIC-Additions',
  'Compiler-Constants',
  
  // 锚点链接
  '../Glossary#procedure',
  '../Project/Settings#option-explicit-on',
  '../../Features/Language/Interfaces-CoClasses.html#defining-interfaces',
  '/Reference/VB/Label#caption',
  '/Reference/VB/Label#enabled',
  '../../Reference/Attributes#classid',
  
  // 更多死链
  '/Reference/CEF/#webview2-parity',
  '/Reference/CEF/Enumerations/cefPrintOrientation',
  '/Reference/VB/Global/#loadresdata',
  '/Reference/VBA/Modules/Information/IsNumeric',
  '/Reference/VBA/Modules/Strings/Format',
  '/Reference/VBA/Modules/Information/Err',
  '/Reference/VBRUN/Constants/KeyCodeConstants',
  '/Features/GUI-Components/Anchoring-Docking',
  '/Reference',
  '/Features/',
  
  // Tutorials 路径（不同大小写）
  '../../../../Tutorials/WebView2/Hosting-Local-Web-Assets',
  '../../../../Tutorials/WebView2/',
  'Getting-started',
  'Customize-the-UserDataFolder',
  'Building-a-browser-shell',
  'Hosting-local-web-assets',
  'JavaScript-interop',
  
  // VBA 路径
  '../../VBA/Modules/HiddenModule/GetDeclaredMaxEnumValue',
  '../Reference/VB/Form/',
  '../Reference/VB/',
  
  // Features 路径
  '../../Features/Advanced/API-Declarations',
  
  // Videos
  'Videos/AccessDevCon',

  // 中文文档死链
  '/Reference/CEF/CefBrowser/EnvironmentOptions',
  '/Reference/Assert/Exact',
  '/Reference/Assert/Strict',
  '/Reference/Assert/Permissive',
  './Reference/VBA',
  './IDE/Project/Editor/Form',
  './IDE/Project/Editor/Report',

  'http://localhost:4000',
];

// 去重并按长度降序排序
const uniqueDeadLinks = [...new Set(deadLinks)].sort((a, b) => b.length - a.length);

// 统计信息
const stats = {
  totalFiles: 0,
  totalLinks: 0,
  pathMapped: 0,
  deadLinksReplaced: 0,
  unprocessedDeadLinks: 0,
  filesWithUnprocessed: new Map(),
};

// 查找所有 Markdown 文件
function findMarkdownFiles(dir, files = []) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules') {
      findMarkdownFiles(fullPath, files);
    } else if (item.isFile() && item.name.endsWith('.md')) {
      const relPath = path.relative(DOCS_ROOT, fullPath).replace(/\\/g, '/');
      if (TARGET_DIRS.some(td => relPath.includes(td))) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

// 应用路径映射
function applyPathMappings(url) {
  let newUrl = url;
  let changed = false;
  for (const { from, to } of pathMappings) {
    from.lastIndex = 0;
    const tempUrl = newUrl.replace(from, to);
    if (tempUrl !== newUrl) {
      newUrl = tempUrl;
      changed = true;
    }
  }
  if (changed) stats.pathMapped++;
  return newUrl;
}

// 检查链接是否为死链
function checkLink(linkUrl, sourceFile) {
  if (linkUrl.startsWith('#')) return false;
  if (linkUrl.startsWith('http://') || linkUrl.startsWith('https://')) return false;
  if (linkUrl.startsWith('mailto:')) return false;
  if (linkUrl === '.' || linkUrl === './') return false;

  const sourceDir = path.dirname(sourceFile);
  const [urlWithoutAnchor] = linkUrl.split('#');

  if (urlWithoutAnchor === '' || urlWithoutAnchor === '.') return false;

  if (urlWithoutAnchor.endsWith('.md')) {
    return !fs.existsSync(path.resolve(sourceDir, urlWithoutAnchor));
  } else {
    const candidates = [
      path.resolve(sourceDir, urlWithoutAnchor + '.md'),
      path.resolve(sourceDir, urlWithoutAnchor, 'index.md'),
      path.resolve(sourceDir, urlWithoutAnchor + '/index.md'),
    ];
    return !candidates.some(fs.existsSync);
  }
}

// 检查链接是否在死链列表中
function isInDeadLinks(linkUrl) {
  // 同时保留带锚点和无锚点的版本用于匹配
  const urlWithoutAnchor = linkUrl.split('#')[0];

  for (const deadLink of uniqueDeadLinks) {
    // 死链条目可能带锚点，分离锚点
    const deadLinkWithoutAnchor = deadLink.split('#')[0];
    const deadLinkAnchor = deadLink.includes('#') ? deadLink.split('#')[1] : null;

    // 处理带 ./ 前缀和不带前缀的变体
    const variants = [deadLink, deadLinkWithoutAnchor];
    if (deadLink.startsWith('./')) {
      variants.push(deadLink.slice(2));
      variants.push(deadLinkWithoutAnchor.slice(2));
    }

    for (const variant of variants) {
      // 完全匹配（包括带锚点）
      if (linkUrl === variant) return true;
      // 无锚点 URL 匹配无锚点死链
      if (urlWithoutAnchor === variant) return true;
      // 以 / 结尾的匹配
      if (urlWithoutAnchor === variant + '/') return true;
      // 以 .md 结尾的匹配
      if (urlWithoutAnchor === variant + '.md') return true;
      // 以 /index 结尾的匹配
      if (urlWithoutAnchor === variant + '/index') return true;
      // 子路径匹配
      if (urlWithoutAnchor.startsWith(variant + '/')) return true;
      // .md 变体
      if (urlWithoutAnchor.startsWith(variant + '.md')) return true;
    }
  }
  return false;
}

// 检测单个文件
function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const relPath = path.relative(DOCS_ROOT, filePath).replace(/\\/g, '/');
  const fileUnprocessed = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const linkRegex = /(?<!!)\[([^\]]+)\]\(([^)]+)\)/g;
    let match;

    while ((match = linkRegex.exec(line)) !== null) {
      const [fullMatch, text, url] = match;
      stats.totalLinks++;

      // 第一步：应用路径映射
      const mappedUrl = applyPathMappings(url);

      // 第二步：检查是否在死链列表中
      if (isInDeadLinks(mappedUrl)) {
        stats.deadLinksReplaced++;
        continue; // 已被处理，跳过
      }

      // 第三步：检查是否为未处理的死链
      if (checkLink(mappedUrl, filePath)) {
        stats.unprocessedDeadLinks++;
        fileUnprocessed.push({
          line: i + 1,
          text: text,
          url: url,
          mappedUrl: mappedUrl !== url ? mappedUrl : null,
        });
      }
    }
  }

  if (fileUnprocessed.length > 0) {
    stats.filesWithUnprocessed.set(relPath, fileUnprocessed);
  }

  return fileUnprocessed.length;
}

// 主函数
async function main() {
  console.log('='.repeat(60));
  console.log('死链检测脚本 - 与 VitePress 插件逻辑一致');
  console.log('='.repeat(60));
  console.log();

  const startTime = Date.now();

  const mdFiles = findMarkdownFiles(DOCS_ROOT);
  stats.totalFiles = mdFiles.length;

  console.log(`扫描目录: ${TARGET_DIRS.join(', ')}`);
  console.log(`找到 ${mdFiles.length} 个 Markdown 文件`);
  console.log(`死链列表定义: ${uniqueDeadLinks.length} 个已知死链`);
  console.log();

  let processed = 0;
  const total = mdFiles.length;

  for (const file of mdFiles) {
    checkFile(file);
    processed++;
    if (processed % 100 === 0 || processed === total) {
      process.stdout.write(`\r处理进度: ${processed}/${total} (${Math.round(processed/total*100)}%)`);
    }
  }

  console.log();
  console.log();

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  // 输出统计
  console.log('-'.repeat(60));
  console.log('检测结果统计（与 VitePress 构建一致）');
  console.log('-'.repeat(60));
  console.log(`扫描文件数: ${stats.totalFiles}`);
  console.log(`检测链接数: ${stats.totalLinks}`);
  console.log(`路径映射修复: ${stats.pathMapped}`);
  console.log(`死链列表替换: ${stats.deadLinksReplaced}`);
  console.log(`未处理死链: ${stats.unprocessedDeadLinks}`);
  console.log(`涉及文件数: ${stats.filesWithUnprocessed.size}`);
  console.log(`耗时: ${duration} 秒`);
  console.log();

  // 输出未处理死链
  if (stats.filesWithUnprocessed.size > 0) {
    console.log('='.repeat(60));
    console.log('未处理死链列表（需添加到死链列表或修复）');
    console.log('='.repeat(60));
    console.log();

    let count = 0;
    for (const [file, links] of stats.filesWithUnprocessed) {
      console.log(`\n文件: docs/${file}`);
      console.log('-'.repeat(40));
      for (const link of links) {
        console.log(`  第 ${link.line} 行: [${link.text}](${link.url})`);
        if (link.mappedUrl) {
          console.log(`    映射后: ${link.mappedUrl}`);
        }
        count++;
        if (count >= 50) {
          console.log(`\n  ... 还有 ${stats.unprocessedDeadLinks - 50} 条未显示`);
          break;
        }
      }
      if (count >= 50) break;
    }

    // 保存报告
    const reportPath = path.resolve(__dirname, '../ai/dielinks/deadlinks-report.json');
    const reportDir = path.dirname(reportPath);
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFiles: stats.totalFiles,
        totalLinks: stats.totalLinks,
        pathMapped: stats.pathMapped,
        deadLinksReplaced: stats.deadLinksReplaced,
        unprocessedDeadLinks: stats.unprocessedDeadLinks,
        filesWithUnprocessed: stats.filesWithUnprocessed.size,
      },
      unprocessedByFile: Object.fromEntries(stats.filesWithUnprocessed),
    };

    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');
    console.log();
    console.log(`完整报告已保存: ${reportPath}`);
  } else {
    console.log('🎉 恭喜！所有死链已处理完毕！');
  }

  console.log();
}

main().catch(console.error);
