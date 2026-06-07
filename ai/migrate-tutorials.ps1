$ErrorActionPreference = "Stop"
$srcBase = "D:\code\tb\docs.twinbasic.com\docs\Tutorials"
$tgtBase = "D:\code\vi\twinbasic\docs\doc.twinbasic.com.cn\docs\en\official\Tutorials"
$deadLinkFile = "D:\code\vi\twinbasic\docs\doc.twinbasic.com.cn\ai\dielink-tutorials.txt"
$mapFile = "D:\code\vi\twinbasic\docs\doc.twinbasic.com.cn\ai\permalink-map.json"

$mapJson = [System.IO.File]::ReadAllText($mapFile, [System.Text.Encoding]::UTF8)
$mapObj = $mapJson | ConvertFrom-Json
$lookup = @{}
$mapObj.PSObject.Properties | ForEach-Object { $lookup[$_.Name] = $_.Value }

$tutorialsExtra = @{
    "/Tutorials/" = "Tutorials/"
    "/Tutorials/WebView2/" = "Tutorials/WebView2/"
    "/Tutorials/CustomControls/" = "Tutorials/CustomControls/"
    "/Tutorials/WebView2/Re-entrancy" = "Tutorials/WebView2/Re-entrancy"
    "/Tutorials/CustomControls/Defining" = "Tutorials/CustomControls/Defining-a-CustomControl"
    "/Tutorials/CustomControls/Form Designer" = "Tutorials/CustomControls/Notes-about-the-form-designer"
    "/Tutorials/CustomControls/Painting" = "Tutorials/CustomControls/Painting-drawing-to-your-control"
    "/Tutorials/CustomControls/Properties" = "Tutorials/CustomControls/Property-sheet-and-object-serialization"
}
foreach ($k in $tutorialsExtra.Keys) {
    if (-not $lookup.ContainsKey($k)) { $lookup[$k] = $tutorialsExtra[$k] }
}

$filenameRenames = @(
    ,@("Property sheet and object serialization", "Property-sheet-and-object-serialization")
    ,@("Painting-drawing to your control", "Painting-drawing-to-your-control")
    ,@("Notes about the form designer", "Notes-about-the-form-designer")
    ,@("Defining a CustomControl", "Defining-a-CustomControl")
    ,@("Getting started", "Getting-started")
    ,@("Building a browser shell", "Building-a-browser-shell")
    ,@("Customize the UserDataFolder", "Customize-the-UserDataFolder")
    ,@("Driving Monaco", "Driving-Monaco")
    ,@("Hosting local web assets", "Hosting-local-web-assets")
    ,@("JavaScript interop", "JavaScript-interop")
    ,@("Call Stack", "Call-Stack")
    ,@("Debug Console", "Debug-Console")
    ,@("New Project", "New-Project")
    ,@("Open Editors", "Open-Editors")
    ,@("Package Publishing", "Package-Publishing")
    ,@("Project Explorer", "Project-Explorer")
    ,@("Project Settings", "Project-Settings")
    ,@("Splash Screen", "Splash-Screen")
    ,@("Status Bar", "Status-Bar")
    ,@("Compiler Constants", "Compiler-Constants")
    ,@("Procedures and Functions", "Procedures-and-Functions")
)

function Apply-Renaming([string]$path) {
    foreach ($pair in $filenameRenames) {
        $path = $path.Replace($pair[0], $pair[1])
    }
    return $path
}

function Resolve-JekyllPath([string]$jekyllPath, [string]$anchor) {
    if ($lookup.ContainsKey($jekyllPath)) {
        $resolved = Apply-Renaming $lookup[$jekyllPath]
        $result = "/en/official/$resolved"
        if ($anchor) { $result += "#$anchor" }
        return $result
    }
    $trySlash = $jekyllPath.TrimEnd("/") + "/"
    if ($lookup.ContainsKey($trySlash)) {
        $resolved = Apply-Renaming $lookup[$trySlash]
        $result = "/en/official/$resolved"
        if ($anchor) { $result += "#$anchor" }
        return $result
    }
    $tryNoSlash = $jekyllPath.TrimEnd("/")
    if ($lookup.ContainsKey($tryNoSlash)) {
        $resolved = Apply-Renaming $lookup[$tryNoSlash]
        $result = "/en/official/$resolved"
        if ($anchor) { $result += "#$anchor" }
        return $result
    }
    return $null
}

function Resolve-TBLink([string]$url) {
    $anchor = ""
    $path = $url
    $hashIdx = $url.IndexOf("#")
    if ($hashIdx -ge 0) {
        $anchor = $url.Substring($hashIdx + 1)
        $path = $url.Substring(0, $hashIdx)
    }

    $tbIdx = $path.IndexOf("tB/")
    if ($tbIdx -lt 0) { return $null }
    $tbPath = "/" + $path.Substring($tbIdx)

    $result = Resolve-JekyllPath $tbPath $anchor
    if ($result) { return $result }

    if ($tbPath -match '^/tB/Modules/([^/]+)(/.*)?$') {
        $mod = $matches[1]; $rest = if ($matches[2]) { $matches[2] } else { "" }
        $r = "/en/official/Reference/VBA/$mod$rest"
        if ($anchor) { $r += "#$anchor" }
        return $r
    }
    if ($tbPath -match '^/tB/Core/(.+)$') {
        $r = "/en/official/Reference/Core/$($matches[1])"
        if ($anchor) { $r += "#$anchor" }
        return $r
    }
    if ($tbPath -match '^/tB/Packages/VB/(.+)$') {
        $r = "/en/official/Reference/VB/$($matches[1])"
        if ($anchor) { $r += "#$anchor" }
        return $r
    }
    if ($tbPath -match '^/tB/Packages/VBRUN/(.+)$') {
        $r = "/en/official/Reference/VBRUN/$($matches[1])"
        if ($anchor) { $r += "#$anchor" }
        return $r
    }
    if ($tbPath -match '^/tB/Packages/WebView2/(.*)$') {
        $r = "/en/official/Reference/WebView2/$($matches[1])"
        if ($anchor) { $r += "#$anchor" }
        return $r
    }
    if ($tbPath -match '^/tB/Packages/CustomControls/(.*)$') {
        $r = "/en/official/Reference/CustomControls/$($matches[1])"
        if ($anchor) { $r += "#$anchor" }
        return $r
    }
    if ($tbPath -match '^/tB/Packages/CEF/(.*)$') {
        $r = "/en/official/Reference/CEF/$($matches[1])"
        if ($anchor) { $r += "#$anchor" }
        return $r
    }
    if ($tbPath -match '^/tB/Packages/Assert/(.*)$') {
        $r = "/en/official/Reference/Assert/$($matches[1])"
        if ($anchor) { $r += "#$anchor" }
        return $r
    }
    if ($tbPath -match '^/tB/Packages/tbIDE/(.*)$') {
        $r = "/en/official/Reference/tbIDE/$($matches[1])"
        if ($anchor) { $r += "#$anchor" }
        return $r
    }
    if ($tbPath -match '^/tB/Packages/WinEventLogLib/(.*)$') {
        $r = "/en/official/Reference/WinEventLogLib/$($matches[1])"
        if ($anchor) { $r += "#$anchor" }
        return $r
    }
    if ($tbPath -match '^/tB/Packages/WinNamedPipesLib/(.*)$') {
        $r = "/en/official/Reference/WinNamedPipesLib/$($matches[1])"
        if ($anchor) { $r += "#$anchor" }
        return $r
    }
    if ($tbPath -match '^/tB/Packages/WinServicesLib/(.*)$') {
        $r = "/en/official/Reference/WinServicesLib/$($matches[1])"
        if ($anchor) { $r += "#$anchor" }
        return $r
    }
    if ($tbPath -match '^/tB/Packages/WinNativeCommonCtls/(.*)$') {
        $r = "/en/official/Reference/WinNativeCommonCtls/$($matches[1])"
        if ($anchor) { $r += "#$anchor" }
        return $r
    }
    if ($tbPath -match '^/tB/IDE/(.+)$') {
        $idePath = $matches[1]
        $ideMap = @{
            "Project/CallStack" = "Call-Stack"
            "Project/DebugConsole" = "Debug-Console"
            "Project/Editor" = "Editor"
            "Project/Editor/Form" = "tbForm"
            "Project/Editor/Report" = "tbReport"
            "Project/Explorer" = "Project-Explorer"
            "Project/FindReplace" = "FindReplace"
            "Project/History" = "History"
            "Project/Memory" = "Memory"
            "Project/Menu" = "Menu/"
            "Project/New" = "New-Project"
            "Project/OpenEditors" = "Open-Editors"
            "Project/Outline" = "Outline"
            "Project/PackagePublishing" = "Package-Publishing"
            "Project/Properties" = "Properties"
            "Project/Settings" = "Project-Settings"
            "Project/Splash" = "Splash-Screen"
            "Project/StatusBar" = "Status-Bar"
            "Project/Toolbar" = "Toolbar"
            "Project/Toolbox" = "Toolbox"
            "Project/Variables" = "Variables"
            "Project/Watches" = "Watches"
            "Project/Webpage" = "Webpage"
            "Project/Diagnostics" = "Diagnostics"
            "AddIns/GlobalSearch" = "AddIns/GlobalSearch"
            "AddIns/Community/" = "AddIns/Community/"
        }
        if ($ideMap.ContainsKey($idePath)) {
            $r = "/en/official/IDE/$($ideMap[$idePath])"
        } else {
            $r = "/en/official/IDE/$idePath"
        }
        if ($anchor) { $r += "#$anchor" }
        return $r
    }
    if ($tbPath -eq '/tB/IDE' -or $tbPath -eq '/tB/IDE/') {
        return "/en/official/IDE/"
    }
    if ($tbPath -eq '/tB/Controls') {
        $r = "/en/official/Reference/Controls"
        if ($anchor) { $r += "#$anchor" }
        return $r
    }
    if ($tbPath -eq '/tB/Gloss') {
        $r = "/en/official/Reference/Glossary"
        if ($anchor) { $r += "#$anchor" }
        return $r
    }
    if ($tbPath -eq '/tB/Packages/') {
        $r = "/en/official/Reference/Packages/"
        if ($anchor) { $r += "#$anchor" }
        return $r
    }

    $resolved = Apply-Renaming (Resolve-JekyllPath $tbPath $anchor)
    if ($resolved) { return $resolved }

    return $null
}

$deadLinks = [System.Collections.ArrayList]::new()

function Resolve-Link([string]$url, [string]$relDir, [bool]$isImage) {
    if ($url.StartsWith("http://") -or $url.StartsWith("https://") -or $url.StartsWith("mailto:")) {
        return $url
    }
    if ($url.StartsWith("#")) {
        return $url
    }

    if ($isImage) {
        $newUrl = $url.Replace("_Images/", "Images/")
        return $newUrl
    }

    if ($url.Contains("tB/")) {
        $result = Resolve-TBLink $url
        if ($result) { return $result }
        return $null
    }

    $anchor = ""
    $pathPart = $url
    $hashIdx = $url.IndexOf("#")
    if ($hashIdx -ge 0) {
        $anchor = $url.Substring($hashIdx + 1)
        $pathPart = $url.Substring(0, $hashIdx)
    }

    $jekyllDir = "/Tutorials/"
    if ($relDir -ne "") {
        $jekyllDir = "/Tutorials/$relDir/"
    }

    if ($pathPart.StartsWith("../")) {
        $segments = $jekyllDir.Trim("/").Split("/")
        $linkParts = $pathPart -split "/"
        $upCount = 0
        foreach ($lp in $linkParts) {
            if ($lp -eq "..") { $upCount++ } else { break }
        }
        $remaining = ($linkParts | Select-Object -Skip $upCount) -join "/"
        $segCount = [Math]::Max(0, $segments.Count - $upCount)
        $baseSegments = @()
        if ($segCount -gt 0) { $baseSegments = $segments[0..($segCount-1)] }
        $resolved = "/" + (($baseSegments + $remaining) -join "/")

        $result = Resolve-JekyllPath $resolved $anchor
        if ($result) { return $result }

        $resolvedRenamed = Apply-Renaming $resolved
        $result2 = "/en/official$resolvedRenamed"
        if ($anchor) { $result2 += "#$anchor" }
        return $result2
    }

    if ($pathPart -ne "") {
        $fullJekyll = $jekyllDir + $pathPart
        $result = Resolve-JekyllPath $fullJekyll $anchor
        if ($result) { return $result }

        $fullRenamed = Apply-Renaming $fullJekyll
        $result2 = "/en/official$fullRenamed"
        if ($anchor) { $result2 += "#$anchor" }
        return $result2
    }

    if ($anchor) { return "#$anchor" }
    return $url
}

function Process-FrontMatter([string[]]$fmLines) {
    $allowed = @("title", "parent", "nav_order", "permalink")
    $result = [System.Text.StringBuilder]::new()
    [void]$result.AppendLine("---")
    foreach ($line in $fmLines) {
        $trimmed = $line.Trim()
        if ($trimmed -eq "") { continue }
        $key = ($trimmed -split ":")[0].Trim()
        $skip = $false
        foreach ($a in $allowed) {
            if ($key -eq $a) { $skip = $false; break }
            $skip = $true
        }
        if (-not $skip) {
            [void]$result.AppendLine($line)
        }
    }
    [void]$result.AppendLine("---")
    return $result.ToString()
}

function Process-Content([string]$content, [string]$relDir, [string]$tgtRelPath) {
    $lines = $content -split "`r?\n"
    $inFM = $false
    $fmDone = $false
    $fmLines = [System.Collections.ArrayList]::new()
    $bodyLines = [System.Collections.ArrayList]::new()
    $inCodeBlock = $false
    $codeBlockLang = ""

    for ($i = 0; $i -lt $lines.Count; $i++) {
        $line = $lines[$i]
        if (-not $fmDone -and $line.Trim() -eq "---") {
            if (-not $inFM) {
                $inFM = $true
                continue
            } else {
                $fmDone = $true
                $inFM = $false
                continue
            }
        }
        if ($inFM) {
            [void]$fmLines.Add($line)
        } else {
            [void]$bodyLines.Add($line)
        }
    }

    $fm = Process-FrontMatter $fmLines

    $processed = [System.Collections.ArrayList]::new()
    $inCodeBlock = $false
    $skipNextToc = $false
    $bodyLineNum = 0

    for ($i = 0; $i -lt $bodyLines.Count; $i++) {
        $line = $bodyLines[$i]
        $bodyLineNum++

        if ($skipNextToc) {
            if ($line -match '^\s*\{:toc\}') {
                $skipNextToc = $false
                continue
            }
            $skipNextToc = $false
        }

        if ($line -match '^\s*```') {
            $inCodeBlock = -not $inCodeBlock
            if ($inCodeBlock) {
                $line = $line -replace '```\s*tb\s*$', '```vb'
                $line = $line -replace '```\s*twinbasic\s*$', '```vb'
            }
            [void]$processed.Add($line)
            continue
        }

        if ($inCodeBlock) {
            [void]$processed.Add($line)
            continue
        }

        if ($line -match '^\s*\{\:\s*\.no_toc\s*\}') { continue }
        if ($line -match '^\s*\{\:\s*#') { continue }
        if ($line -match '^\s*\{\:\s*\.fs-') { continue }
        if ($line -match '^\s*\{\:\s*\.fw-') { continue }

        if ($line -match '^\s*- TOC\s*$') {
            $skipNextToc = $true
            continue
        }

        $line = $line -replace '\{\:style="([^"]+)"\}', '{style="$1"}'

        if ($line -match '\{%\s*raw\s*%\}') {
            $line = $line -replace '\{%\s*raw\s*%\}', ''
            $line = $line -replace '\{%\s*endraw\s*%\}', ''
        }
        if ($line -match '\{%\s*include\s+') {
            continue
        }

        $line = Process-LinksInLine $line $relDir $bodyLineNum $tgtRelPath

        [void]$processed.Add($line)
    }

    $body = $processed -join "`n"

    $body = Convert-CalloutsSimple $body

    $result = $fm + "`n" + $body
    $result = $result.TrimEnd() + "`n"

    return $result
}

function Convert-CalloutsSimple([string]$content) {
    $lines = $content -split "`r?\n"
    $result = [System.Collections.ArrayList]::new()
    $inCallout = $false
    $calloutType = ""
    $i = 0
    while ($i -lt $lines.Count) {
        $line = $lines[$i]
        if (-not $inCallout) {
            $calloutMatch = $null
            if ($line -match '^\s*>\s*\[!NOTE\]\s*$') { $calloutMatch = "info" }
            elseif ($line -match '^\s*>\s*\[!IMPORTANT\]\s*$') { $calloutMatch = "important" }
            elseif ($line -match '^\s*>\s*\[!WARNING\]\s*$') { $calloutMatch = "warning" }
            elseif ($line -match '^\s*>\s*\[!TIP\]\s*$') { $calloutMatch = "tip" }
            elseif ($line -match '^\s*>\s*\[!CAUTION\]\s*$') { $calloutMatch = "caution" }

            if ($calloutMatch) {
                $inCallout = $true
                $calloutType = $calloutMatch
                [void]$result.Add("::: $calloutType")
                $i++
                continue
            }
            [void]$result.Add($line)
            $i++
        } else {
            if ($line -match '^\s*>\s?(.*)') {
                $content_ = $matches[1]
                [void]$result.Add($content_)
                $i++
            } elseif ($line.Trim() -eq ">") {
                [void]$result.Add("")
                $i++
            } else {
                [void]$result.Add(":::")
                [void]$result.Add($line)
                $inCallout = $false
                $i++
            }
        }
    }
    if ($inCallout) {
        [void]$result.Add(":::")
    }
    return $result -join "`n"
}

function Process-LinksInLine([string]$line, [string]$relDir, [int]$lineNum, [string]$tgtRelPath) {
    $pattern = '(!?)\[([^\]]*)\]\(([^)]+)\)'
    $sb = [System.Text.StringBuilder]::new()
    $lastEnd = 0

    $regex = [regex]::new($pattern)
    $m = $regex.Match($line)

    while ($m.Success) {
        [void]$sb.Append($line.Substring($lastEnd, $m.Index - $lastEnd))

        $isImage = ($m.Groups[1].Value -eq "!")
        $text = $m.Groups[2].Value
        $url = $m.Groups[3].Value

        $newUrl = Resolve-Link $url $relDir $isImage

        if ($null -eq $newUrl) {
            [void]$sb.Append($text)
            $deadLinkInfo = "$tgtRelPath|$lineNum|[$text]($url)"
            [void]$deadLinks.Add($deadLinkInfo)
        } else {
            [void]$sb.Append("$($m.Groups[1].Value)[$text]($newUrl)")
        }

        $lastEnd = $m.Index + $m.Length
        $m = $m.NextMatch()
    }

    [void]$sb.Append($line.Substring($lastEnd))
    return $sb.ToString()
}

$fileList = @(
    ,@("", "index.md", "index.md")
    ,@("", "Arrays.md", "Arrays.md")
    ,@("", "Forms.md", "Forms.md")
    ,@("", "Hello-World.md", "Hello-World.md")
    ,@("", "Testing-with-Assert.md", "Testing-with-Assert.md")
    ,@("", "Windows-API.md", "Windows-API.md")
    ,@("CEF", "index.md", "index.md")
    ,@("CEF", "Getting started.md", "Getting-started.md")
    ,@("CEF", "Building a browser shell.md", "Building-a-browser-shell.md")
    ,@("CEF", "Customize the UserDataFolder.md", "Customize-the-UserDataFolder.md")
    ,@("CEF", "Driving Monaco.md", "Driving-Monaco.md")
    ,@("CEF", "Hosting local web assets.md", "Hosting-local-web-assets.md")
    ,@("CEF", "JavaScript interop.md", "JavaScript-interop.md")
    ,@("CEF", "Re-entrancy.md", "Re-entrancy.md")
    ,@("CustomControls", "index.md", "index.md")
    ,@("CustomControls", "Defining a CustomControl.md", "Defining-a-CustomControl.md")
    ,@("CustomControls", "Notes about the form designer.md", "Notes-about-the-form-designer.md")
    ,@("CustomControls", "Painting-drawing to your control.md", "Painting-drawing-to-your-control.md")
    ,@("CustomControls", "Property sheet and object serialization.md", "Property-sheet-and-object-serialization.md")
    ,@("WebView2", "index.md", "index.md")
    ,@("WebView2", "Getting started.md", "Getting-started.md")
    ,@("WebView2", "Building a browser shell.md", "Building-a-browser-shell.md")
    ,@("WebView2", "Customize the UserDataFolder.md", "Customize-the-UserDataFolder.md")
    ,@("WebView2", "Driving Monaco.md", "Driving-Monaco.md")
    ,@("WebView2", "Hosting local web assets.md", "Hosting-local-web-assets.md")
    ,@("WebView2", "JavaScript interop.md", "JavaScript-interop.md")
    ,@("WebView2", "Re-entrancy.md", "Re-entrancy.md")
)

$processedCount = 0

foreach ($fileEntry in $fileList) {
    $relDir = $fileEntry[0]
    $srcName = $fileEntry[1]
    $tgtName = $fileEntry[2]

    $srcPath = Join-Path $srcBase $(if ($relDir) { "$relDir\$srcName" } else { $srcName })
    $tgtDir = Join-Path $tgtBase $(if ($relDir) { $relDir } else { "" })
    $tgtPath = Join-Path $tgtDir $tgtName

    if (-not (Test-Path $srcPath)) {
        Write-Warning "Source not found: $srcPath"
        continue
    }

    $raw = [System.IO.File]::ReadAllText($srcPath, [System.Text.Encoding]::UTF8)
    $dirPrefix = if ($relDir) { "$relDir/" } else { "" }
    $tgtRelPath = "en/official/Tutorials/${dirPrefix}${tgtName}"
    $processed = Process-Content $raw $relDir $tgtRelPath

    if (-not (Test-Path $tgtDir)) {
        New-Item -ItemType Directory -Force -Path $tgtDir | Out-Null
    }

    [System.IO.File]::WriteAllText($tgtPath, $processed, (New-Object System.Text.UTF8Encoding $false))
    $processedCount++
    $label = if ($relDir) { "$relDir/$srcName" } else { $srcName }
    Write-Output "Processed: $label -> $tgtName"
}

Write-Output ""
Write-Output "Total files processed: $processedCount"
Write-Output "Dead links found: $($deadLinks.Count)"

if ($deadLinks.Count -gt 0) {
    $dlLines = @()
    foreach ($dl in $deadLinks) {
        $dlLines += $dl
    }
    $dlContent = $dlLines -join "`n"
    [System.IO.File]::WriteAllText($deadLinkFile, $dlContent, (New-Object System.Text.UTF8Encoding $false))
    Write-Output "Dead links written to: $deadLinkFile"
} else {
    [System.IO.File]::WriteAllText($deadLinkFile, "", (New-Object System.Text.UTF8Encoding $false))
    Write-Output "No dead links found."
}
