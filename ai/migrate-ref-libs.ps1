$ErrorActionPreference = "Stop"

$sourceBase = "D:\code\tb\docs.twinbasic.com\docs\Reference"
$targetBase = "D:\code\vi\twinbasic\docs\doc.twinbasic.com.cn\docs\en\official\Reference"
$deadLinkFile = "D:\code\vi\twinbasic\docs\doc.twinbasic.com.cn\ai\dielink-ref-libs.txt"
$sourceDocsRoot = "D:\code\tb\docs.twinbasic.com\docs"

$packages = @("CustomControls", "WebView2", "WinEventLogLib", "WinNamedPipesLib", "WinNativeCommonCtls", "WinServicesLib")

$mapJson = Get-Content "D:\code\vi\twinbasic\docs\doc.twinbasic.com.cn\ai\permalink-map.json" -Raw -Encoding UTF8
$mapObj = $mapJson | ConvertFrom-Json
$permalinkMap = @{}
$mapObj.PSObject.Properties | ForEach-Object { $permalinkMap[$_.Name] = $_.Value }

$permalinkMap['/Tutorials/WebView2/Getting-Started'] = 'Tutorials/WebView2/Getting started'
$permalinkMap['/Tutorials/WebView2/Customize-UserDataFolder'] = 'Tutorials/WebView2/Customize the UserDataFolder'
$permalinkMap['/Tutorials/WebView2/Re-entrancy'] = 'Tutorials/WebView2/Re-entrancy'
$permalinkMap['/Tutorials/WebView2/'] = 'Tutorials/WebView2/'
$permalinkMap['/tB/Tutorials/WebView2/Getting-Started'] = 'Tutorials/WebView2/Getting started'
$permalinkMap['/tB/Tutorials/WebView2/Customize-UserDataFolder'] = 'Tutorials/WebView2/Customize the UserDataFolder'

$renameMap = @{
    "Features/Packages/Creating a TWINPACK package" = "Features/Packages/Creating-a-TWINPACK-package"
    "Features/Packages/Importing a package from a TWINPACK file" = "Features/Packages/Importing-a-package-from-a-TWINPACK-file"
    "Features/Packages/Importing a package from TWINSERV" = "Features/Packages/Importing-a-package-from-TWINSERV"
    "Features/Packages/Linked Packages" = "Features/Packages/Linked-Packages"
    "Features/Packages/Updating a package" = "Features/Packages/Updating-a-package"
    "IDE/Call Stack" = "IDE/Call-Stack"
    "IDE/Debug Console" = "IDE/Debug-Console"
    "IDE/New Project" = "IDE/New-Project"
    "IDE/Open Editors" = "IDE/Open-Editors"
    "IDE/Package Publishing" = "IDE/Package-Publishing"
    "IDE/Project Explorer" = "IDE/Project-Explorer"
    "IDE/Project Settings" = "IDE/Project-Settings"
    "IDE/Splash Screen" = "IDE/Splash-Screen"
    "IDE/Status Bar" = "IDE/Status-Bar"
    "Reference/Compiler Constants" = "Reference/Compiler-Constants"
    "Reference/Procedures and Functions" = "Reference/Procedures-and-Functions"
    "Tutorials/CEF/Building a browser shell" = "Tutorials/CEF/Building-a-browser-shell"
    "Tutorials/CEF/Customize the UserDataFolder" = "Tutorials/CEF/Customize-the-UserDataFolder"
    "Tutorials/CEF/Driving Monaco" = "Tutorials/CEF/Driving-Monaco"
    "Tutorials/CEF/Getting started" = "Tutorials/CEF/Getting-started"
    "Tutorials/CEF/Hosting local web assets" = "Tutorials/CEF/Hosting-local-web-assets"
    "Tutorials/CEF/JavaScript interop" = "Tutorials/CEF/JavaScript-interop"
    "Tutorials/CustomControls/Defining a CustomControl" = "Tutorials/CustomControls/Defining-a-CustomControl"
    "Tutorials/CustomControls/Notes about the form designer" = "Tutorials/CustomControls/Notes-about-the-form-designer"
    "Tutorials/CustomControls/Painting-drawing to your control" = "Tutorials/CustomControls/Painting-drawing-to-your-control"
    "Tutorials/CustomControls/Property sheet and object serialization" = "Tutorials/CustomControls/Property-sheet-and-object-serialization"
    "Tutorials/WebView2/Building a browser shell" = "Tutorials/WebView2/Building-a-browser-shell"
    "Tutorials/WebView2/Customize the UserDataFolder" = "Tutorials/WebView2/Customize-the-UserDataFolder"
    "Tutorials/WebView2/Driving Monaco" = "Tutorials/WebView2/Driving-Monaco"
    "Tutorials/WebView2/Getting started" = "Tutorials/WebView2/Getting-started"
    "Tutorials/WebView2/Hosting local web assets" = "Tutorials/WebView2/Hosting-local-web-assets"
    "Tutorials/WebView2/JavaScript interop" = "Tutorials/WebView2/JavaScript-interop"
}

$ideMap = @{
    'Project/CallStack' = 'Call-Stack'; 'Project/DebugConsole' = 'Debug-Console'
    'Project/Editor' = 'Editor'; 'Project/Editor/Form' = 'tbForm'
    'Project/Editor/Report' = 'tbReport'; 'Project/Explorer' = 'Project-Explorer'
    'Project/FindReplace' = 'FindReplace'; 'Project/History' = 'History'
    'Project/Memory' = 'Memory'; 'Project/Menu' = 'Menu'
    'Project/New' = 'New-Project'; 'Project/OpenEditors' = 'Open-Editors'
    'Project/Outline' = 'Outline'; 'Project/PackagePublishing' = 'Package-Publishing'
    'Project/Properties' = 'Properties'; 'Project/Settings' = 'Project-Settings'
    'Project/Splash' = 'Splash-Screen'; 'Project/StatusBar' = 'Status-Bar'
    'Project/Toolbar' = 'Toolbar'; 'Project/Toolbox' = 'Toolbox'
    'Project/Variables' = 'Variables'; 'Project/Watches' = 'Watches'
    'Project/Webpage' = 'Webpage'; 'Project/Diagnostics' = 'Diagnostics'
    'AddIns/GlobalSearch' = 'AddIns/GlobalSearch'; 'AddIns/Community' = 'AddIns/Community'
}

$mdCount = 0
$imgCount = 0
$deadLinksList = [System.Collections.ArrayList]::new()

function Get-PermalinkDir {
    param([string]$fileRelPath)
    $parts = $fileRelPath -replace '\\', '/' -split '/'
    $dirParts = $parts[0..($parts.Length - 2)]
    $dirPath = $dirParts -join '/'
    $fileName = $parts[-1] -replace '\.md$', ''
    $key = "/$dirPath/$fileName"
    if ($permalinkMap.ContainsKey($key)) {
        $mapped = $permalinkMap[$key]
        $mp = $mapped -split '/'
        if ($mp.Count -gt 1) { return ($mp[0..($mp.Count - 2)] -join '/') }
        return ''
    }
    $key2 = "$key/"
    if ($permalinkMap.ContainsKey($key2)) {
        $mapped = $permalinkMap[$key2]
        $mp = $mapped -split '/'
        return $mapped
    }
    return $dirPath
}

function Resolve-PathNormalize {
    param([string[]]$parts)
    $resolved = [System.Collections.ArrayList]::new()
    foreach ($p in $parts) {
        $p = $p.Trim()
        if ($p -eq '..') {
            if ($resolved.Count -gt 0) { $resolved.RemoveAt($resolved.Count - 1) }
        } elseif ($p -ne '.' -and $p -ne '') {
            $resolved.Add($p) | Out-Null
        }
    }
    return ($resolved -join '/')
}

function Apply-Rename {
    param([string]$path)
    $path = $path -replace '/+$', ''
    if ($renameMap.ContainsKey($path)) { return $renameMap[$path] }
    return $path
}

function Test-TargetExists {
    param([string]$relPath)
    $relPath = $relPath -replace '/+$', ''
    $full = Join-Path $sourceDocsRoot ($relPath -replace '/', '\')
    if (Test-Path ($full + '.md') -PathType Leaf) { return $true }
    if (Test-Path (Join-Path $full 'index.md') -PathType Leaf) { return $true }
    if ((Test-Path $full -PathType Container) -and (Test-Path (Join-Path $full 'index.md'))) { return $true }
    return $false
}

function Resolve-LinkInner {
    param(
        [string]$url,
        [string]$fileRelPath
    )

    if ($url -match '^https?://') { return $url }
    if ($url -eq '#') { return $url }
    if ($url -match '^#[A-Za-z]') { return $url }

    $anchor = ''
    $pathPart = $url
    if ($url -match '^(.*?)(#[^#]*)$') {
        $pathPart = $Matches[1]
        $anchor = $Matches[2]
    }
    if ([string]::IsNullOrEmpty($pathPart)) { return $url }

    $fileRelNorm = $fileRelPath -replace '\\', '/'
    $lslash = $fileRelNorm.LastIndexOf('/')
    $fileDir = if ($lslash -ge 0) { $fileRelNorm.Substring(0, $lslash) } else { '' }
    $permDir = Get-PermalinkDir $fileRelPath

    if ($pathPart -match '(^|/)tB/') {
        $tbPath = $pathPart -replace '^.*?tB/', '/tB/'
        $tbPath = $tbPath -replace '/+$', ''
        if ($permalinkMap.ContainsKey($tbPath)) {
            $mapped = $permalinkMap[$tbPath]
            $mapped = Apply-Rename $mapped
            return "/en/official/$mapped$anchor"
        }
        if ($tbPath -match '^/tB/Packages/([^/]+)(/(.*))?$') {
            $pkg = $Matches[1]; $rest = if ($Matches[3]) { $Matches[3] } else { '' }
            if ($rest) { return "/en/official/Reference/$pkg/$rest$anchor" }
            else { return "/en/official/Reference/$pkg$anchor" }
        }
        if ($tbPath -match '^/tB/Core/(.*)') { return "/en/official/Reference/Core/$($Matches[1])$anchor" }
        if ($tbPath -match '^/tB/Modules/([^/]+)/(.*)') { return "/en/official/Reference/VBA/$($Matches[1])/$($Matches[2])$anchor" }
        if ($tbPath -match '^/tB/IDE/(.*)') {
            $ideRest = $Matches[1]
            if ($ideMap.ContainsKey($ideRest)) { return "/en/official/IDE/$($ideMap[$ideRest])$anchor" }
            return "/en/official/IDE/$ideRest$anchor"
        }
        if ($tbPath -eq '/tB/Gloss') { return "/en/official/Reference/Glossary$anchor" }
        if ($tbPath -eq '/tB/Controls') { return "/en/official/Reference/Controls$anchor" }
        return $null
    }

    if ($pathPart -match '^\.\.' -or $pathPart -match '^\./') {
        $allParts = @($fileDir -split '/') + @($pathPart -split '/')
        $resolved = Resolve-PathNormalize $allParts

        if (Test-TargetExists $resolved) {
            $resolved = Apply-Rename $resolved
            return "/en/official/$resolved$anchor"
        }

        $permParts = @($permDir -split '/') + @($pathPart -split '/')
        $permResolved = Resolve-PathNormalize $permParts
        $lookupKey = "/$permResolved"
        if ($permalinkMap.ContainsKey($lookupKey)) {
            $mapped = $permalinkMap[$lookupKey]
            $mapped = Apply-Rename $mapped
            return "/en/official/$mapped$anchor"
        }
        $tbKey = "/tB/$permResolved"
        if ($permalinkMap.ContainsKey($tbKey)) {
            $mapped = $permalinkMap[$tbKey]
            $mapped = Apply-Rename $mapped
            return "/en/official/$mapped$anchor"
        }

        if (Test-TargetExists $permResolved) {
            $permResolved = Apply-Rename $permResolved
            return "/en/official/$permResolved$anchor"
        }

        if ($resolved -match '^Modules/(.*)') {
            $vbPath = "Reference/VBA/$($Matches[1])"
            if (Test-TargetExists $vbPath) {
                $vbPath = Apply-Rename $vbPath
                return "/en/official/$vbPath$anchor"
            }
        }

        return $null
    }

    if ($pathPart -eq '.') {
        $resolved = $fileDir
        if (Test-TargetExists $resolved) {
            return "/en/official/$resolved$anchor"
        }
        $resolved = $permDir
        if (Test-TargetExists $resolved) {
            return "/en/official/$resolved$anchor"
        }
        return $null
    }

    $combined = if ($fileDir) { "$fileDir/$pathPart" } else { $pathPart }
    $allParts = $combined -split '/'
    $resolved = Resolve-PathNormalize $allParts

    if (Test-TargetExists $resolved) {
        $resolved = Apply-Rename $resolved
        return "/en/official/$resolved$anchor"
    }

    $permParts = @($permDir -split '/') + @($pathPart -split '/')
    $permResolved = Resolve-PathNormalize $permParts
    $lookupKey = "/$permResolved"
    if ($permalinkMap.ContainsKey($lookupKey)) {
        $mapped = $permalinkMap[$lookupKey]
        $mapped = Apply-Rename $mapped
        return "/en/official/$mapped$anchor"
    }

    if (Test-TargetExists $permResolved) {
        $permResolved = Apply-Rename $permResolved
        return "/en/official/$permResolved$anchor"
    }

    if ($resolved -match '^Modules/(.*)') {
        $vbPath = "Reference/VBA/$($Matches[1])"
        if (Test-TargetExists $vbPath) {
            $vbPath = Apply-Rename $vbPath
            return "/en/official/$vbPath$anchor"
        }
    }

    return $null
}

function Process-FrontMatter {
    param([string]$content, [ref]$permalinkOut)
    $permalinkOut.Value = ''
    if ($content -notmatch '(?s)^---\s*?\r?\n(.*?)\r?\n---\s*?\r?\n(.*)$') { return $content }
    $fm = $Matches[1]; $body = $Matches[2]
    $keepFields = @('title', 'parent', 'nav_order', 'permalink')
    $fmLines = $fm -split "`n"
    $newFmLines = [System.Collections.ArrayList]::new()
    foreach ($line in $fmLines) {
        $trimmed = $line.Trim()
        if ($trimmed -match '^[A-Za-z_]\w*\s*:') {
            $key = ($trimmed -split ':', 2)[0].Trim()
            if ($keepFields -contains $key) {
                $newFmLines.Add($line.TrimEnd()) | Out-Null
                if ($key -eq 'permalink') { $permalinkOut.Value = (($trimmed -split ':', 2)[1]).Trim() }
            }
        }
    }
    if ($newFmLines.Count -eq 0) { return $body }
    $fmText = $newFmLines -join "`n"
    return "---`n$fmText`n---`n$body"
}

function Process-Content {
    param([string]$content, [string]$fileRelPath)

    $content = [regex]::Replace($content, '(?s)---\s*?\r?\nAIGC:.*?\r?\n---\s*?(?:\r?\n)*', '')
    $content = $content.TrimStart()
    $content = [regex]::Replace($content, '(?m)^> AI生成\s*\r?\n', '')
    $content = $content -replace '(?m)^> AI生成\s*$', ''

    $permalink = ''
    $content = Process-FrontMatter $content ([ref]$permalink)

    $content = $content -replace '(?m)^\*\s+TOC\s*\r?\n\{:toc\}\s*\r?\n', ''
    $content = $content -replace '(?m)^(\#\s+.+)\s*\r?\n\{\:\s*\.no_toc\s*\}\s*$', '$1'
    $content = $content -replace '(?m)^\{\:\s*\.no_toc\s*\}\s*$', ''
    $content = $content -replace '(?m)^\{\:\s*#[^}]*\}\s*$', ''
    $content = $content -replace '(?m)^\{\:\s*\.fs-6\s+\.fw-300\s*\}\s*$', ''
    $content = $content -replace '(?m)^\{\:\s*\.[^}]*\}\s*$', ''
    $content = $content -replace '\{\:\s*#[^}]*\}', ''
    $content = $content -replace '\{:style="([^"]+)"\}', '{style="$1"}'

    $calloutTypes = @('NOTE', 'IMPORTANT', 'WARNING', 'TIP', 'CAUTION')
    $calloutVpMap = @{ 'NOTE' = 'info'; 'IMPORTANT' = 'important'; 'WARNING' = 'warning'; 'TIP' = 'tip'; 'CAUTION' = 'caution' }

    $lines = $content -split "`n"
    $newLines = [System.Collections.ArrayList]::new()
    $i = 0
    while ($i -lt $lines.Count) {
        $line = $lines[$i] -replace '\r$', ''
        $matchedCallout = $false
        foreach ($ct in $calloutTypes) {
            if ($line -match "^> \[\!$ct\]\s*$") {
                $newLines.Add("::: $($calloutVpMap[$ct])") | Out-Null
                $i++
                while ($i -lt $lines.Count) {
                    $cline = $lines[$i] -replace '\r$', ''
                    if ($cline -match '^> (.*)$') {
                        $newLines.Add($Matches[1]) | Out-Null
                        $i++
                    } elseif ($cline -match '^>\s*$') {
                        $newLines.Add('') | Out-Null
                        $i++
                    } else {
                        $newLines.Add(':::') | Out-Null
                        break
                    }
                }
                if ($i -ge $lines.Count) { $newLines.Add(':::') | Out-Null }
                $matchedCallout = $true
                break
            }
        }
        if (-not $matchedCallout) {
            $newLines.Add($line) | Out-Null
            $i++
        }
    }
    $content = $newLines -join "`n"

    $content = $content -replace '\{%\s*raw\s*%\}(.*?)\{%\s*endraw\s*%\}', '$1'
    $content = $content -replace '(?m)^\{%\s*include[^%]*%\}\s*$', ''
    $content = $content -replace '```tb\b', '```vb'
    $content = $content -replace '```twinbasic\b', '```vb'

    $content = Convert-Links $content $fileRelPath

    $content = [regex]::Replace($content, '(?s)---\s*?\r?\nAIGC:.*?\r?\n---\s*?(?:\r?\n)*', '')
    $content = [regex]::Replace($content, '(?m)^> AI生成\s*\r?\n', '')
    $content = $content -replace '(?m)^> AI生成\s*$', ''

    return $content
}

function Convert-Links {
    param([string]$content, [string]$fileRelPath)

    $result = [System.Text.StringBuilder]::new()
    $regex = [regex]'(!?)\[(?:[^\[\]]|\[[^\[\]]*\])*\]\(([^)]+)\)'
    $lastEnd = 0
    $ms = $regex.Matches($content)

    foreach ($m in $ms) {
        [void]$result.Append($content.Substring($lastEnd, $m.Index - $lastEnd))
        $isImage = ($m.Groups[1].Value -eq '!')
        $fullText = $m.Value
        $url = $m.Groups[2].Value
        $textEnd = $fullText.LastIndexOf('](')
        $text = $fullText.Substring(1, $textEnd - 1)
        $originalMd = "[$text]($url)"

        if ($isImage) {
            $url = $url -replace '\.\./_Images/', '../Images/'
            [void]$result.Append("![$text]($url)")
        } else {
            $newUrl = Resolve-LinkInner -url $url -fileRelPath $fileRelPath
            if ($null -eq $newUrl) {
                $lineNum = ($content.Substring(0, $m.Index) -split "`n").Count
                $targetRel = "en/official/$($fileRelPath -replace '\\', '/')"
                $deadLinksList.Add("$targetRel|$lineNum|$originalMd") | Out-Null
                [void]$result.Append($text)
            } else {
                [void]$result.Append("[$text]($newUrl)")
            }
        }
        $lastEnd = $m.Index + $m.Length
    }
    [void]$result.Append($content.Substring($lastEnd))
    return $result.ToString()
}

foreach ($pkg in $packages) {
    $srcDir = Join-Path $sourceBase $pkg
    $tgtDir = Join-Path $targetBase $pkg
    if (-not (Test-Path $tgtDir)) { New-Item -ItemType Directory -Path $tgtDir -Force | Out-Null }

    $files = Get-ChildItem -Recurse -File $srcDir -Include *.md
    foreach ($f in $files) {
        $relInRef = $f.FullName.Substring($sourceBase.Length + 1) -replace '\\', '/'
        $relPath = "Reference/$relInRef"
        $tgtPath = Join-Path $targetBase ($relInRef -replace '/', '\')
        $tgtDirF = Split-Path $tgtPath -Parent
        if (-not (Test-Path $tgtDirF)) { New-Item -ItemType Directory -Path $tgtDirF -Force | Out-Null }

        $rawContent = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
        $processed = Process-Content $rawContent $relPath
        $processed = $processed.TrimEnd() + "`n"
        [System.IO.File]::WriteAllText($tgtPath, $processed, (New-Object System.Text.UTF8Encoding($false)))
        $mdCount++
        Write-Host "  [$mdCount] $relPath"
    }

    $imgs = Get-ChildItem -Recurse -File $srcDir -Include *.png,*.jpg,*.jpeg,*.gif,*.svg,*.bmp
    foreach ($img in $imgs) {
        $relInRef = $img.FullName.Substring($sourceBase.Length + 1) -replace '\\', '/'
        $tgtPath = Join-Path $targetBase ($relInRef -replace '/', '\')
        $tgtDirI = Split-Path $tgtPath -Parent
        if (-not (Test-Path $tgtDirI)) { New-Item -ItemType Directory -Path $tgtDirI -Force | Out-Null }
        Copy-Item $img.FullName $tgtPath -Force
        $imgCount++
        Write-Host "  Image: $relPath"
    }
}

Write-Host "  Post-processing: stripping AIGC watermarks..."
foreach ($pkg in $packages) {
    $tgtDir = Join-Path $targetBase $pkg
    Get-ChildItem -Recurse -File $tgtDir -Include *.md | ForEach-Object {
        $c = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
        $cleaned = [regex]::Replace($c, '(?s)---\s*?\r?\nAIGC:.*?\r?\n---\s*?(?:\r?\n)*', '')
        $cleaned = [regex]::Replace($cleaned, '(?m)^> AI生成\s*\r?\n', '')
        $cleaned = $cleaned -replace '(?m)^> AI生成\s*$', ''
        $cleaned = $cleaned.TrimEnd() + "`n"
        if ($cleaned -ne $c) {
            [System.IO.File]::WriteAllText($_.FullName, $cleaned, (New-Object System.Text.UTF8Encoding($false)))
        }
    }
}

if ($deadLinksList.Count -gt 0) {
    $deadLinkContent = ($deadLinksList -join "`r`n") + "`r`n"
} else {
    $deadLinkContent = ""
}
[System.IO.File]::WriteAllText($deadLinkFile, $deadLinkContent, (New-Object System.Text.UTF8Encoding($false)))

Write-Host ""
Write-Host "=== SUMMARY ==="
Write-Host "MD files processed: $mdCount"
Write-Host "Images copied: $imgCount"
Write-Host "Dead links found: $($deadLinksList.Count)"
