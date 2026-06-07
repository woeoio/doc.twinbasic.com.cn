$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$srcRoot = 'D:\code\tb\docs.twinbasic.com\docs\Reference'
$tgtRoot = 'D:\code\vi\twinbasic\docs\doc.twinbasic.com.cn\docs\en\official\Reference'
$aiDir    = 'D:\code\vi\twinbasic\docs\doc.twinbasic.com.cn\ai'
$deadLinkFile = Join-Path $aiDir 'dielink-ref-core.txt'

$skipDirs = @('VB','VBA','VBRUN','WebView2','CustomControls','WinNativeCommonCtls','WinEventLogLib','WinNamedPipesLib','WinServicesLib')

$mapJson = [System.IO.File]::ReadAllText((Join-Path $aiDir 'permalink-map.json'), [System.Text.Encoding]::UTF8)
$pm = ConvertFrom-Json $mapJson
$pmLookup = @{}
$pm.PSObject.Properties | ForEach-Object { $pmLookup[$_.Name] = $_.Value }

$allowedFields = @('title','parent','nav_order','permalink')
$calloutMap = @{ 'NOTE'='info'; 'IMPORTANT'='important'; 'WARNING'='warning'; 'TIP'='tip'; 'CAUTION'='caution' }

$script:mdCount = 0
$script:imgCount = 0
$script:deadLinks = [System.Collections.ArrayList]::new()

function ToVitePressUrl([string]$mapped, [string]$anc) {
    $parts = $mapped.TrimStart('/') -split '/'
    $h = ($parts | ForEach-Object { $_ -replace ' ','-' }) -join '/'
    $u = "/en/official/$h"
    if ($anc) { $u += "#$anc" }
    return $u
}

function ResolveTbPath([string]$raw, [string]$anc) {
    if (-not $raw.StartsWith('/')) { $raw = '/' + $raw }
    foreach ($k in @($raw, ($raw.TrimEnd('/')+'/'), $raw.TrimEnd('/'))) {
        if ($pmLookup.ContainsKey($k)) { return ToVitePressUrl $pmLookup[$k] $anc }
    }
    if ($raw -match '^/tB/Core/(.+)$')            { return ToVitePressUrl "Reference/Core/$($Matches[1])" $anc }
    if ($raw -match '^/tB/Modules/([^/]+)/(.+)$')  { return ToVitePressUrl "Reference/VBA/$($Matches[1])/$($Matches[2])" $anc }
    if ($raw -match '^/tB/Modules/([^/]+)/?$')     { return ToVitePressUrl "Reference/VBA/$($Matches[1])" $anc }
    if ($raw -match '^/tB/Packages/VB/(.+)$')      { return ToVitePressUrl "Reference/VB/$($Matches[1])" $anc }
    if ($raw -match '^/tB/Packages/VB/?$')         { return ToVitePressUrl 'Reference/VB' $anc }
    if ($raw -match '^/tB/Packages/VBA/?$')        { return ToVitePressUrl 'Reference/VBA' $anc }
    if ($raw -match '^/tB/Packages/VBRUN/(.+)$')   { return ToVitePressUrl "Reference/VBRUN/$($Matches[1])" $anc }
    if ($raw -match '^/tB/Packages/VBRUN/?$')      { return ToVitePressUrl 'Reference/VBRUN' $anc }
    if ($raw -match '^/tB/Packages/WebView2/(.+)$') { return ToVitePressUrl "Reference/WebView2/$($Matches[1])" $anc }
    if ($raw -match '^/tB/Packages/WebView2/?$')   { return ToVitePressUrl 'Reference/WebView2' $anc }
    if ($raw -match '^/tB/Packages/CustomControls/(.+)$') { return ToVitePressUrl "Reference/CustomControls/$($Matches[1])" $anc }
    if ($raw -match '^/tB/Packages/CustomControls/?$') { return ToVitePressUrl 'Reference/CustomControls' $anc }
    if ($raw -match '^/tB/Packages/CEF/(.+)$')     { return ToVitePressUrl "Reference/CEF/$($Matches[1])" $anc }
    if ($raw -match '^/tB/Packages/CEF/?$')        { return ToVitePressUrl 'Reference/CEF' $anc }
    if ($raw -match '^/tB/Packages/Assert/(.+)$')  { return ToVitePressUrl "Reference/Assert/$($Matches[1])" $anc }
    if ($raw -match '^/tB/Packages/Assert/?$')     { return ToVitePressUrl 'Reference/Assert' $anc }
    if ($raw -match '^/tB/Packages/tbIDE/(.+)$')   { return ToVitePressUrl "Reference/tbIDE/$($Matches[1])" $anc }
    if ($raw -match '^/tB/Packages/tbIDE/?$')      { return ToVitePressUrl 'Reference/tbIDE' $anc }
    if ($raw -match '^/tB/Packages/WinEventLogLib/(.+)$') { return ToVitePressUrl "Reference/WinEventLogLib/$($Matches[1])" $anc }
    if ($raw -match '^/tB/Packages/WinEventLogLib/?$') { return ToVitePressUrl 'Reference/WinEventLogLib' $anc }
    if ($raw -match '^/tB/Packages/WinNamedPipesLib/(.+)$') { return ToVitePressUrl "Reference/WinNamedPipesLib/$($Matches[1])" $anc }
    if ($raw -match '^/tB/Packages/WinNamedPipesLib/?$') { return ToVitePressUrl 'Reference/WinNamedPipesLib' $anc }
    if ($raw -match '^/tB/Packages/WinServicesLib/(.+)$') { return ToVitePressUrl "Reference/WinServicesLib/$($Matches[1])" $anc }
    if ($raw -match '^/tB/Packages/WinServicesLib/?$') { return ToVitePressUrl 'Reference/WinServicesLib' $anc }
    if ($raw -match '^/tB/Packages/WinNativeCommonCtls/(.+)$') { return ToVitePressUrl "Reference/WinNativeCommonCtls/$($Matches[1])" $anc }
    if ($raw -match '^/tB/Packages/WinNativeCommonCtls/?$') { return ToVitePressUrl 'Reference/WinNativeCommonCtls' $anc }
    if ($raw -eq '/tB/Gloss')    { return ToVitePressUrl 'Reference/Glossary' $anc }
    if ($raw -eq '/tB/Controls') { return ToVitePressUrl 'Reference/Controls' $anc }
    if ($raw -match '^/tB/Packages/?$') { return ToVitePressUrl 'Reference/Packages' $anc }
    if ($raw -match '^/tB/IDE/(.+)$') {
        $ideKey = "/tB/IDE/$($Matches[1])"
        foreach ($k in @($ideKey, ($ideKey.TrimEnd('/')+'/'), $ideKey.TrimEnd('/'))) {
            if ($pmLookup.ContainsKey($k)) { return ToVitePressUrl $pmLookup[$k] $anc }
        }
        return ToVitePressUrl "IDE/$($Matches[1])" $anc
    }
    if ($raw -eq '/tB/' -or $raw -eq '/tB') { return '/en/official/' }
    return $null
}

function ResolveUrlPath([string]$raw, [string]$anc) {
    if (-not $raw.StartsWith('/')) { $raw = '/' + $raw }
    $raw = $raw -replace '\.html$',''
    if ($raw -match '/tB/') { return ResolveTbPath $raw $anc }
    foreach ($k in @($raw, ($raw.TrimEnd('/')+'/'), $raw.TrimEnd('/'))) {
        if ($pmLookup.ContainsKey($k)) { return ToVitePressUrl $pmLookup[$k] $anc }
    }
    return ToVitePressUrl $raw.TrimStart('/') $anc
}

function GetPermalinkBase([string]$p) {
    if (-not $p) { return '/' }
    $p = $p.Trim()
    if ($p.EndsWith('/')) { return $p }
    $i = $p.LastIndexOf('/')
    if ($i -le 0) { return '/' }
    return $p.Substring(0, $i + 1)
}

function ResolveRelative([string]$base, [string]$rel) {
    $c = $base
    if (-not $c.EndsWith('/')) { $c += '/' }
    $c += $rel
    $parts = $c -split '/'
    $stack = [System.Collections.ArrayList]::new()
    foreach ($pt in $parts) {
        if ($pt -eq '' -or $pt -eq '.') { continue }
        if ($pt -eq '..') { if ($stack.Count -gt 0) { $stack.RemoveAt($stack.Count-1) }; continue }
        $stack.Add($pt) | Out-Null
    }
    return '/' + ($stack -join '/')
}

function ProcessOneLink([string]$url, [string]$permalink, [bool]$isImg, [string]$fileRelPath) {
    if ($url -match '^https?://') { return $url }
    if ($url -match '^#') { return $url }
    if ($isImg) { return ($url -replace '/_Images/','/Images/') }

    $anc = ''
    $pp = $url
    if ($url -match '^(.+?)(#[^#]*)$') { $pp = $Matches[1]; $anc = $Matches[2].Substring(1) }
    $pp = $pp -replace '\.html$',''

    if ($pp -eq '.' -or $pp -eq './') {
        if ($anc) {
            $base = GetPermalinkBase $permalink
            $resolved = ResolveRelative $base ''
            if ($resolved -match '/tB/') { $r = ResolveTbPath $resolved $anc; if ($r) { return $r } }
            return ResolveUrlPath $resolved $anc
        }
        $base = GetPermalinkBase $permalink
        $resolved = ResolveRelative $base ''
        if ($resolved -match '/tB/') { $r = ResolveTbPath $resolved $anc; if ($r) { return $r } }
        return ResolveUrlPath $resolved $anc
    }

    if ($pp -match 'tB/') {
        if ($pp -match '(?:^|/|\.\./)+(tB/.+)$') { $tbP = '/' + $Matches[1] }
        elseif ($pp -match '^(tB/.+)$') { $tbP = '/' + $Matches[1] }
        else { $tbP = '/' + $pp }
        $r = ResolveTbPath $tbP $anc
        if ($r) { return $r }
        return $null
    }

    if ($pp -match '^\.\.') {
        $base = GetPermalinkBase $permalink
        $resolved = ResolveRelative $base $pp
        if ($resolved -match '/tB/') {
            $r = ResolveTbPath $resolved $anc
            if ($r) { return $r }
            return $null
        }
        return ResolveUrlPath $resolved $anc
    }

    if ($pp -match '^[^/]') {
        $base = GetPermalinkBase $permalink
        $resolved = ResolveRelative $base $pp
        if ($resolved -match '/tB/') {
            $r = ResolveTbPath $resolved $anc
            if ($r) { return $r }
            return $null
        }
        return ResolveUrlPath $resolved $anc
    }

    if ($pp -match '^/') {
        return ResolveUrlPath $pp $anc
    }

    return $url
}

function ProcessFrontMatter([string]$content, [ref]$plRef) {
    $plRef.Value = ''
    if ($content.StartsWith("---") -and $content.Length -gt 3) {
        $firstNl = $content.IndexOfAny([char[]]@("`r","`n"), 3)
        if ($firstNl -ge 0) {
            $afterFirst = $content.Substring($firstNl).TrimStart("`r`n")
            if ($afterFirst.StartsWith("AIGC:")) {
                $endAigc = $afterFirst.IndexOf("`n---")
                if ($endAigc -ge 0) {
                    $afterSecond = $afterFirst.Substring($endAigc + 4).TrimStart("`r`n")
                    $content = $afterSecond
                }
            }
        }
    }
    if (-not $content.StartsWith('---')) { return $content }
    $endIdx = -1
    $searchStart = 3
    while ($true) {
        $pos = $content.IndexOf("`n---", $searchStart)
        if ($pos -lt 0) { break }
        $afterPos = $pos + 4
        if ($afterPos -ge $content.Length -or $content[$afterPos] -eq "`r" -or $content[$afterPos] -eq "`n" -or $content[$afterPos] -eq ' ') {
            $endIdx = $pos
            break
        }
        $searchStart = $pos + 1
    }
    if ($endIdx -lt 0) { return $content }
    $fmText = $content.Substring(3, $endIdx - 3)
    $nl = if ($content.Contains("`r`n")) { "`r`n" } else { "`n" }
    $body = $content.Substring($endIdx + 4)
    if ($body.StartsWith("`r")) { $body = $body.Substring(1) }
    if ($body.StartsWith("`n")) { $body = $body.Substring(1) }
    $fmLines = $fmText -split "`n"
    $newLines = [System.Collections.ArrayList]::new()
    $plVal = ''
    foreach ($line in $fmLines) {
        $t = $line.Trim()
        if ($t -match '^(\w[\w_]*):') {
            $key = $Matches[1]
            if ($key -in $allowedFields) {
                $newLines.Add($line) | Out-Null
                if ($key -eq 'permalink') {
                    $plVal = ($t -replace '^permalink:\s*','').Trim()
                }
            }
        }
    }
    $plRef.Value = $plVal
    $newFm = '---' + $nl + ($newLines -join "`n") + $nl + '---'
    return $newFm + $nl + $body
}

function ConvertJekyll([string]$content) {
    $lines = $content -split "`r?`n"
    $out = [System.Collections.ArrayList]::new()
    $i = 0
    while ($i -lt $lines.Count) {
        $line = $lines[$i]

        if ($line -match '^\s*\* TOC\s*$' -and $i+1 -lt $lines.Count -and $lines[$i+1] -match '^\s*\{:toc\}\s*$') {
            $i += 2; continue
        }
        if ($line -match '^\s*\{:toc\}\s*$') { $i++; continue }
        if ($line -match '^\s*\{: [\s.#\w].*\}\s*$') { $i++; continue }
        if ($line -match '^\s*\{:\s+#\w+\s*\}\s*$') { $i++; continue }

        if ($line -match '\{:style=') {
            $line = $line -replace '\{:style=', '{style='
        }
        if ($line -match '\{: ') {
            $line = $line -replace '\{: (\.[\w.-]+(?: \.[\w.-]+)*)\}', ''
        }
        $line = $line -replace '\{:\s*#[\w.-]+\s*\}', ''

        if ($line -match '^(\s*)\>\s*\[!(NOTE|IMPORTANT|WARNING|TIP|CAUTION)\]\s*$') {
            $indent = $Matches[1]
            $type = $Matches[2]
            $vpType = $calloutMap[$type]
            $out.Add("${indent}::: $vpType") | Out-Null
            $i++
            $closed = $false
            while ($i -lt $lines.Count) {
                $cl = $lines[$i]
                if ($cl -match "^${indent}\>\s?(.*)") {
                    $out.Add("${indent}$($Matches[1])") | Out-Null
                    $i++
                } else {
                    $out.Add("${indent}:::") | Out-Null
                    $closed = $true
                    break
                }
            }
            if (-not $closed) { $out.Add("${indent}:::") | Out-Null }
            continue
        }

        $line = $line -replace '\{%\s*raw\s*%\}', ''
        $line = $line -replace '\{%\s*endraw\s*%\}', ''
        $line = $line -replace '\{%\s*include\s+[^%]*%\}', ''

        $out.Add($line) | Out-Null
        $i++
    }
    return $out -join "`n"
}

function ConvertCodeBlocks([string]$content) {
    $bt = [char]96
    $content = $content -replace ("$bt$bt$bt" + 'tb\b'), ("$bt$bt$bt" + 'vb')
    $content = $content -replace ("$bt$bt$bt" + 'twinbasic\b'), ("$bt$bt$bt" + 'vb')
    return $content
}

function ProcessLinks([string]$content, [string]$permalink, [string]$fileRelPath) {
    $deadFound = [System.Collections.ArrayList]::new()
    $regex = [regex]'(!?\[([^\]]*)\]\(([^)]+)\))'
    $result = $regex.Replace($content, {
        param($m)
        $full = $m.Groups[0].Value
        $text = $m.Groups[2].Value
        $url  = $m.Groups[3].Value
        $isImg = $full.StartsWith('!')
        $newUrl = ProcessOneLink $url $permalink $isImg $fileRelPath
        if ($null -eq $newUrl) {
            $lineNum = 0
            $pos = $m.Index
            $before = $content.Substring(0, $pos)
            $lineNum = ($before -split "`n").Count
            $deadFound.Add("$fileRelPath|$lineNum|$full") | Out-Null
            return $text
        }
        if ($isImg) { return "![$text]($newUrl)" }
        return "[$text]($newUrl)"
    })
    $script:deadLinks.AddRange($deadFound)
    return $result
}

function StripTrailingWatermark([string]$content) {
    $content = $content -replace '(\r?\n)> AI生成了?\s*$', '$1'
    $content = $content -replace '(\r?\n)> AI生成了?\s*(\r?\n)?$', '$1$2'
    return $content.TrimEnd() + "`n"
}

function GetTargetName([string]$srcName) {
    switch ($srcName) {
        'Compiler Constants.md' { return 'Compiler-Constants.md' }
        'Procedures and Functions.md' { return 'Procedures-and-Functions.md' }
        default { return $srcName }
    }
}

function ProcessFile([string]$srcPath, [string]$relPath) {
    $raw = [System.IO.File]::ReadAllText($srcPath, [System.Text.Encoding]::UTF8)

    $plRef = [ref]''
    $content = ProcessFrontMatter $raw $plRef
    $permalink = $plRef.Value

    $content = ConvertJekyll $content
    $content = ConvertCodeBlocks $content
    $content = ProcessLinks $content $permalink $relPath
    $content = StripTrailingWatermark $content

    $tgtDir = Join-Path $tgtRoot (Split-Path $relPath -Parent)
    if (-not (Test-Path $tgtDir)) { New-Item -ItemType Directory -Path $tgtDir -Force | Out-Null }

    $fileName = Split-Path $relPath -Leaf
    $tgtName = GetTargetName $fileName
    $tgtPath = Join-Path $tgtDir $tgtName

    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($tgtPath, $content, $utf8NoBom)
    $script:mdCount++
}

function CopyImages([string]$srcDir, [string]$relDir) {
    $tgtDir = Join-Path $tgtRoot $relDir
    if (-not (Test-Path $tgtDir)) { New-Item -ItemType Directory -Path $tgtDir -Force | Out-Null }
    Get-ChildItem $srcDir -File | Where-Object {
        $_.Extension -match '\.(png|jpg|jpeg|gif|svg|bmp)$'
    } | ForEach-Object {
        Copy-Item $_.FullName (Join-Path $tgtDir $_.Name) -Force
        $script:imgCount++
    }
}

$files = Get-ChildItem -Path $srcRoot -Recurse -Filter '*.md' | Where-Object {
    $rel = $_.FullName.Substring($srcRoot.Length+1)
    $skip = $false
    foreach ($sd in $skipDirs) {
        if ($rel -like "$sd\*" -or $rel -eq "$sd\index.md" -or $rel.StartsWith("$sd\")) { $skip = $true; break }
    }
    -not $skip
}

foreach ($f in $files) {
    $rel = $f.FullName.Substring($srcRoot.Length+1)
    ProcessFile $f.FullName $rel
}

$imgDir = Join-Path $srcRoot 'Images'
if (Test-Path $imgDir) { CopyImages $imgDir 'Images' }

$deadLinkContent = ($script:deadLinks -join "`r`n")
if ($deadLinkContent) { $deadLinkContent += "`r`n" }
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($deadLinkFile, $deadLinkContent, $utf8NoBom)

Write-Output "MD files processed: $($script:mdCount)"
Write-Output "Images copied: $($script:imgCount)"
Write-Output "Dead links found: $($script:deadLinks.Count)"
if ($script:deadLinks.Count -gt 0) {
    Write-Output "`nDead links:"
    foreach ($dl in $script:deadLinks) { Write-Output "  $dl" }
}
