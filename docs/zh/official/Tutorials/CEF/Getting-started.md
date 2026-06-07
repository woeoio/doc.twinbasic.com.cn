---
title: Getting Started
parent: CEF
nav_order: 1
permalink: /Tutorials/CEF/Getting-Started
---


# Getting Started

## Package requirements

To create a project that uses the CEF package, add the right compiler-package reference to your project. The package ships in three flavours --- one per supported Chromium version --- and you pick exactly one:

| Reference                                                       | Chromium baseline | Supported OS  |
|-----------------------------------------------------------------|-------------------|---------------|
| **twinBASIC - Chromium Embedded Framework Package v49**         | Chromium 49       | Windows XP+   |
| **twinBASIC - Chromium Embedded Framework Package v109**        | Chromium 109      | Windows 7+    |
| **twinBASIC - Chromium Embedded Framework Package v145**        | Chromium 145      | Windows 10+   |

Use **v145** unless you specifically need to support older operating systems. The package source compiles against all three --- picking the reference sets the `CEF_VERSION` compiler constant, which selects the matching API.

Add the reference through **Project** → **References** (Ctrl-T) → **TWINPACK PACKAGES**. Tick the desired CEF package, close the dialog, and restart the compiler. Once added, **CefBrowser** appears in the form-designer toolbox.

::: warning
Older Chromium versions should not be used for browsing untrusted content from the public Internet --- they carry unpatched security vulnerabilities. v49 and v109 remain appropriate for tightly controlled environments where the browser loads only trusted local or internal content; for general web browsing, use v145.
:::

## Downloading the runtime

Unlike [**WebView2**](/official/Reference/WebView2/WebView2/), CEF does not rely on a system-installed runtime. The Chromium binaries (`libcef.dll` and friends) ship as a separate download and must be installed alongside the application --- both during development and at deploy time.

Download the runtime ZIP that matches both the CEF version and the application bitness:

| Version | Win32                                                        | Win64                                                        |
| ------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| v49     | [cefRuntime49_win32.zip](https://github.com/twinbasic/cef-runtimes/releases/download/v1.0.0/cefRuntime49_win32.zip) | [cefRuntime49_win64.zip](https://github.com/twinbasic/cef-runtimes/releases/download/v1.0.0/cefRuntime49_win64.zip) |
| v109    | [cefRuntime109_win32.zip](https://github.com/twinbasic/cef-runtimes/releases/download/v1.0.0/cefRuntime109_win32.zip) | [cefRuntime109_win64.zip](https://github.com/twinbasic/cef-runtimes/releases/download/v1.0.0/cefRuntime109_win64.zip) |
| v145    | [cefRuntime145_win32.zip](https://github.com/twinbasic/cef-runtimes/releases/download/v1.0.0/cefRuntime145_win32.zip) | [cefRuntime145_win64.zip](https://github.com/twinbasic/cef-runtimes/releases/download/v1.0.0/cefRuntime145_win64.zip) |

See [CEF Runtime Releases](https://github.com/twinbasic/cef-runtimes/releases/) for the full version list and release notes.

Extract the ZIP into `%LocalAppData%\twinBASIC_CEF_Runtime\`. The version-stamped folder inside the ZIP --- for example `145_0_7632_160_Win64` --- must be placed directly under that path, containing `libcef.dll` and its sibling files:

```text
%LocalAppData%\twinBASIC_CEF_Runtime\145_0_7632_160_Win64\libcef.dll
%LocalAppData%\twinBASIC_CEF_Runtime\145_0_7632_160_Win64\chrome_elf.dll
%LocalAppData%\twinBASIC_CEF_Runtime\145_0_7632_160_Win64\…
```

At startup, [**CefBrowser**](/official/Reference/CEF/CefBrowser/) searches this default location automatically. If `libcef.dll` cannot be found, the [**Error**](/official/Reference/CEF/CefBrowser/#error) event fires with the exact path that was searched.

To point at a different folder --- for example a portable side-by-side deployment shipped with your installer --- assign [**EnvironmentOptions.BrowserExecutableFolder**](/official/Reference/CEF/CefBrowser/EnvironmentOptions#browserexecutablefolder) during the [**Create**](/official/Reference/CEF/CefBrowser/#create) event:

```vb
Private Sub CefBrowser1_Create()
    CefBrowser1.EnvironmentOptions.BrowserExecutableFolder = _
        App.Path & "\cef145_win64"
End Sub
```

## Bitness must match

The runtime bitness must match the application bitness --- a 32-bit twinBASIC build needs the Win32 runtime, a 64-bit build needs the Win64 runtime. Mixing them produces a `libcef.dll` load failure reported through the [**Error**](/official/Reference/CEF/CefBrowser/#error) event.

## Create a CefBrowser control on a form

With the package reference and runtime in place, **CefBrowser** is available in the form-designer toolbox. Drop it onto a form like any other control:

```vb
Private Sub Form_Load()
    CefBrowser1.Navigate "https://www.twinbasic.com"
End Sub
```

The control starts up asynchronously --- the first user-visible event is [**Ready**](/official/Reference/CEF/CefBrowser/#ready), which fires once the helper browser process has launched and IPC has connected. Navigation, scripting, and most property accessors raise *"CefBrowser control is not ready"* (run-time error 5) before then.

## CefBrowser control properties

Toggle the **Properties** pane to see the design-time-visible properties: [**DocumentURL**](/official/Reference/CEF/CefBrowser/#documenturl) (the initial URL the control auto-navigates to once **Ready** fires), [**ZoomFactor**](/official/Reference/CEF/CefBrowser/#zoomfactor), [**UserAgent**](/official/Reference/CEF/CefBrowser/#useragent), and the standard rect-dockable properties (size, **Anchors**, **Dock**).

For the full reference, see the [**CefBrowser** class reference](/official/Reference/CEF/CefBrowser/); for what the underlying Chromium runtime supports, consult the [Chromium Embedded Framework documentation](https://bitbucket.org/chromiumembedded/cef/wiki/Home).

## Samples

If you prefer to start with a sample, **Sample 1b --- Chromium Embedded Framework Examples** is available in the new-project dialog. It mirrors **Sample 1a --- WebView2 Examples** almost feature-for-feature, with the differences called out where the CEF package doesn't yet expose a WebView2 equivalent.

## Where next

- [Customize the UserDataFolder](/official/Tutorials/CEF/Customize-the-UserDataFolder) -- relocate the user-profile folder for Office add-ins, kiosks, or portable installs.
- [Building a browser shell](/official/Tutorials/CEF/Building-a-browser-shell) -- back / forward / reload / zoom / PDF.
- [Re-entrancy](/official/Tutorials/CEF/Re-entrancy) -- what the package protects you from and the one place you still have to think about.
