$ErrorActionPreference = 'Stop'

$srcBase = 'D:\code\tb\docs.twinbasic.com\docs\Reference'
$tgtBase = 'D:\code\vi\twinbasic\docs\doc.twinbasic.com.cn\docs\en\official\Reference'
$aiDir   = 'D:\code\vi\twinbasic\docs\doc.twinbasic.com.cn\ai'

$deadLinkFile = Join-Path $aiDir 'dielink-ref-vb.txt'

$mapRaw = Get-Content (Join-Path $aiDir 'permalink-map.json') -Raw -Encoding UTF8
$permalinkMap = $mapRaw | ConvertFrom-Json

$mapLookup = @{}
$permalinkMap.PSObject.Properties | ForEach-Object {
    $mapLookup[$_.Name] = $_.Value
}

$subdirs = @('VB','VBA','VBRUN')

$allowedFmFields = @('title','parent','nav_order','permalink')

$deadLinks = [System.Collections.ArrayList]::new()
$fileCount = 0
$imgCount = 0

function Resolve-Link {
    param(
        [string]$linkUrl,
        [string]$currentRelPath,
        [bool]$isImage
    )

    if ($isImage) {
        if ($linkUrl -match '^\.\./_Images/') {
            return $linkUrl -replace '^\.\./_Images/','../Images/'
        }
        return $null
    }

    if ($linkUrl -match '^https?://') { return $null }
    if ($linkUrl -match '^#') { return $null }
    if ($linkUrl -match '^mailto:') { return $null }

    $anchor = ''
    $path = $linkUrl
    if ($linkUrl -match '^(.+?)(#[^#]*)$') {
        $path = $Matches[1]
        $anchor = $Matches[2]
    }

    if ($path -match '\.(png|jpg|jpeg|gif|svg|bmp)$') {
        if ($path -match '^\.\./_Images/') {
            $newPath = $path -replace '^\.\./_Images/','../Images/'
            return $newPath
        }
        return $null
    }

    $resolved = $null

    if ($path -match 'tB/') {
        $tbPath = $path
        if ($path -match '(?:\.\./)+tB/(.*)') {
            $tbPath = '/tB/' + $Matches[1]
        } elseif ($path -match '^\./tB/(.*)') {
            $tbPath = '/tB/' + $Matches[1]
        } elseif ($path -match '^tB/(.*)') {
            $tbPath = '/tB/' + $Matches[1]
        } elseif ($path -match '^/tB/(.*)') {
            $tbPath = '/tB/' + $Matches[1]
        }
        $tbPath = $tbPath.TrimEnd('/')

        if ($mapLookup.ContainsKey($tbPath)) {
            $resolved = $mapLookup[$tbPath]
        } elseif ($mapLookup.ContainsKey($tbPath + '/')) {
            $resolved = $mapLookup[$tbPath + '/']
        } else {
            if ($tbPath -match '^/tB/Core/(.+)$') {
                $resolved = 'Reference/Core/' + $Matches[1]
            } elseif ($tbPath -match '^/tB/Modules/(.+)$') {
                $resolved = 'Reference/VBA/' + $Matches[1]
            } elseif ($tbPath -match '^/tB/Packages/VB/(.+)$') {
                $resolved = 'Reference/VB/' + $Matches[1]
            } elseif ($tbPath -match '^/tB/Packages/VBRUN/(.+)$') {
                $resolved = 'Reference/VBRUN/' + $Matches[1]
            } elseif ($tbPath -match '^/tB/Packages/WebView2/(.+)$') {
                $resolved = 'Reference/WebView2/' + $Matches[1]
            } elseif ($tbPath -match '^/tB/Packages/CustomControls/(.+)$') {
                $resolved = 'Reference/CustomControls/' + $Matches[1]
            } elseif ($tbPath -match '^/tB/Packages/CEF/(.+)$') {
                $resolved = 'Reference/CEF/' + $Matches[1]
            } elseif ($tbPath -match '^/tB/Packages/Assert/(.+)$') {
                $resolved = 'Reference/Assert/' + $Matches[1]
            } elseif ($tbPath -match '^/tB/Packages/tbIDE/(.+)$') {
                $resolved = 'Reference/tbIDE/' + $Matches[1]
            } elseif ($tbPath -match '^/tB/Packages/WinEventLogLib/(.+)$') {
                $resolved = 'Reference/WinEventLogLib/' + $Matches[1]
            } elseif ($tbPath -match '^/tB/Packages/WinNamedPipesLib/(.+)$') {
                $resolved = 'Reference/WinNamedPipesLib/' + $Matches[1]
            } elseif ($tbPath -match '^/tB/Packages/WinServicesLib/(.+)$') {
                $resolved = 'Reference/WinServicesLib/' + $Matches[1]
            } elseif ($tbPath -match '^/tB/Packages/WinNativeCommonCtls/(.+)$') {
                $resolved = 'Reference/WinNativeCommonCtls/' + $Matches[1]
            } elseif ($tbPath -match '^/tB/IDE/(.+)$') {
                $ideSegment = $Matches[1]
                $ideMap = @{
                    'Project/Editor' = 'IDE/Editor'
                    'Project/Editor/Form' = 'IDE/tbForm'
                    'Project/Editor/Report' = 'IDE/tbReport'
                    'Project/CallStack' = 'IDE/Call-Stack'
                    'Project/DebugConsole' = 'IDE/Debug-Console'
                    'Project/Explorer' = 'IDE/Project-Explorer'
                    'Project/FindReplace' = 'IDE/FindReplace'
                    'Project/History' = 'IDE/History'
                    'Project/Memory' = 'IDE/Memory'
                    'Project/Menu' = 'IDE/Menu/'
                    'Project/Menu/AddIns' = 'IDE/Menu/Add-Ins'
                    'Project/Menu/Debug' = 'IDE/Menu/Debug'
                    'Project/Menu/Edit' = 'IDE/Menu/Edit'
                    'Project/Menu/File' = 'IDE/Menu/File'
                    'Project/Menu/Format' = 'IDE/Menu/Format'
                    'Project/Menu/Help' = 'IDE/Menu/Help'
                    'Project/Menu/Project' = 'IDE/Menu/Project'
                    'Project/Menu/Run' = 'IDE/Menu/Run'
                    'Project/Menu/Tools' = 'IDE/Menu/Tools'
                    'Project/Menu/View' = 'IDE/Menu/View'
                    'Project/Menu/Window' = 'IDE/Menu/Window'
                    'Project/New' = 'IDE/New-Project'
                    'Project/OpenEditors' = 'IDE/Open-Editors'
                    'Project/Outline' = 'IDE/Outline'
                    'Project/PackagePublishing' = 'IDE/Package-Publishing'
                    'Project/Properties' = 'IDE/Properties'
                    'Project/Settings' = 'IDE/Project-Settings'
                    'Project/Splash' = 'IDE/Splash-Screen'
                    'Project/StatusBar' = 'IDE/Status-Bar'
                    'Project/Toolbar' = 'IDE/Toolbar'
                    'Project/Toolbox' = 'IDE/Toolbox'
                    'Project/Variables' = 'IDE/Variables'
                    'Project/Watches' = 'IDE/Watches'
                    'Project/Webpage' = 'IDE/Webpage'
                    'Project/Diagnostics' = 'IDE/Diagnostics'
                }
                if ($ideMap.ContainsKey($ideSegment)) {
                    $resolved = $ideMap[$ideSegment]
                } else {
                    $resolved = 'IDE/' + $ideSegment
                }
            } elseif ($tbPath -eq '/tB/Gloss') {
                $resolved = 'Reference/Glossary'
            } elseif ($tbPath -eq '/tB/Controls') {
                $resolved = 'Reference/Controls'
            } elseif ($tbPath -eq '/tB/IDE') {
                $resolved = 'IDE/'
            } elseif ($tbPath -match '^/tB/Packages$') {
                $resolved = 'Reference/Packages'
            }
        }

        if ($resolved) {
            if ($resolved -notmatch '^\.$') {
                $resolved = $resolved -replace '_HiddenModule','HiddenModule'
                $resolved = $resolved -replace '(?<!Tb)ExpressionService','TbExpressionService'
                $resolved = $resolved -replace '/Modules/','/VBA/'
                $resolved = $resolved -replace ' ','-'
                return '/en/official/' + $resolved + $anchor
            }
        }
        return $null
    }

    if ($path -match '^\.\.') {
        $curParts = $currentRelPath -split '/'
        $relParts = $path -split '/'
        $upCount = ($relParts | Where-Object { $_ -eq '..' }).Count
        $remaining = [System.Collections.ArrayList]::new()
        $relParts | Where-Object { $_ -ne '..' -and $_ -ne '' } | ForEach-Object { $remaining.Add($_) | Out-Null }

        $absParts = [System.Collections.ArrayList]::new()
        for ($i = 0; $i -lt ($curParts.Count - $upCount); $i++) {
            $absParts.Add($curParts[$i]) | Out-Null
        }
        $remaining | ForEach-Object { $absParts.Add($_) | Out-Null }
        $jekyllAbsPath = '/' + ($absParts -join '/')

        $jekyllAbsPathClean = $jekyllAbsPath.TrimEnd('/')

        if ($mapLookup.ContainsKey($jekyllAbsPathClean)) {
            $resolved = $mapLookup[$jekyllAbsPathClean]
        } elseif ($mapLookup.ContainsKey($jekyllAbsPathClean + '/')) {
            $resolved = $mapLookup[$jekyllAbsPathClean + '/']
        } else {
            # Try to resolve based on known directory structure
            # Reference/VBA/... paths can be matched directly
            if ($jekyllAbsPathClean -match '^/Reference/VBA/(.+)$') {
                $resolved = 'Reference/VBA/' + ($Matches[1] -replace '_HiddenModule','HiddenModule')
            } elseif ($jekyllAbsPathClean -match '^/Reference/VB/(.+)$') {
                $resolved = 'Reference/VB/' + ($Matches[1] -replace ' ','-')
            } elseif ($jekyllAbsPathClean -match '^/Reference/VBRUN/(.+)$') {
                $resolved = 'Reference/VBRUN/' + ($Matches[1] -replace ' ','-')
            } elseif ($jekyllAbsPathClean -match '^/Reference/(.+)$') {
                $resolved = 'Reference/' + ($Matches[1] -replace ' ','-')
            } elseif ($jekyllAbsPathClean -match '^/Modules/(.+)$') {
                $resolved = 'Reference/VBA/' + ($Matches[1] -replace '_HiddenModule','HiddenModule')
            } elseif ($jekyllAbsPathClean -match '^/Core/(.+)$') {
                $resolved = 'Reference/Core/' + ($Matches[1] -replace ' ','-')
            } elseif ($jekyllAbsPathClean -match '^/Features/(.+)$') {
                $resolved = 'Features/' + ($Matches[1] -replace ' ','-')
            } elseif ($jekyllAbsPathClean -match '^/IDE/(.+)$') {
                $resolved = 'IDE/' + ($Matches[1] -replace ' ','-')
            } elseif ($jekyllAbsPathClean -match '^/Tutorials/(.+)$') {
                $resolved = 'Tutorials/' + ($Matches[1] -replace ' ','-')
            } elseif ($jekyllAbsPathClean -match '^/Miscellaneous/(.+)$') {
                $resolved = 'Miscellaneous/' + ($Matches[1] -replace ' ','-')
            } elseif ($jekyllAbsPathClean -match '^/Challenges/(.+)$') {
                $resolved = 'Challenges/' + ($Matches[1] -replace ' ','-')
            } elseif ($jekyllAbsPathClean -match '^/Documentation/(.+)$') {
                $resolved = 'Documentation/' + ($Matches[1] -replace ' ','-')
            } else {
                $resolved = $jekyllAbsPathClean.TrimStart('/')
            }
        }

        if ($resolved) {
            $resolved = $resolved -replace '_HiddenModule','HiddenModule'
            $resolved = $resolved -replace '(?<!Tb)ExpressionService','TbExpressionService'
            $resolved = $resolved -replace '/Modules/','/VBA/'
            $resolved = $resolved -replace ' ','-'
            return '/en/official/' + $resolved + $anchor
        }
        return $null
    }

    if ($path -match '^\./') {
        $path = $path.Substring(2)
    }

    if ($path -and $path -ne '') {
        $curDir = $currentRelPath
        $resolved = $curDir + '/' + $path
        $resolved = $resolved -replace '/+','/'
        $resolved = $resolved.TrimEnd('/')
        $resolved = $resolved -replace '_HiddenModule','HiddenModule'
        $resolved = $resolved -replace '(?<!Tb)ExpressionService','TbExpressionService'
        $resolved = $resolved -replace '/Modules/','/VBA/'

        # Handle spaces in file names
        $resolvedParts = $resolved -split '/'
        $lastIdx = $resolvedParts.Count - 1
        if ($lastIdx -ge 0 -and $resolvedParts[$lastIdx] -match ' ') {
            # Only replace spaces in the filename part if it's not a directory index
            $resolvedParts[$lastIdx] = $resolvedParts[$lastIdx] -replace ' ','-'
        }
        $resolved = $resolvedParts -join '/'

        return '/en/official/' + $resolved + $anchor
    }

    return $null
}

function Convert-Callouts {
    param([string[]]$lines)

    $result = [System.Collections.ArrayList]::new()
    $i = 0
    while ($i -lt $lines.Count) {
        if ($lines[$i] -match '^\>\s*\[!(NOTE|IMPORTANT|WARNING|TIP|CAUTION)\]') {
            $calloutType = $Matches[1]
            $vpType = switch ($calloutType) {
                'NOTE' { 'info' }
                'IMPORTANT' { 'important' }
                'WARNING' { 'warning' }
                'TIP' { 'tip' }
                'CAUTION' { 'caution' }
            }
            $result.Add("::: $vpType") | Out-Null
            $i++
            while ($i -lt $lines.Count -and $lines[$i] -match '^\>\s?(.*)') {
                $result.Add($Matches[1]) | Out-Null
                $i++
            }
            $result.Add(':::') | Out-Null
        } else {
            $result.Add($lines[$i]) | Out-Null
            $i++
        }
    }
    return $result
}

function Process-File {
    param(
        [string]$srcFile,
        [string]$relPath
    )

    $content = [System.IO.File]::ReadAllText($srcFile, [System.Text.Encoding]::UTF8)

    $lines = $content -split "`n"

    $inFrontMatter = $false
    $fmStart = -1
    $fmEnd = -1
    for ($i = 0; $i -lt $lines.Count; $i++) {
        if ($lines[$i].Trim() -eq '---') {
            if ($fmStart -eq -1) {
                $fmStart = $i
                $inFrontMatter = $true
            } elseif ($inFrontMatter) {
                $fmEnd = $i
                break
            }
        }
    }

    $newFmLines = [System.Collections.ArrayList]::new()
    $newFmLines.Add('---') | Out-Null
    if ($fmStart -ne -1 -and $fmEnd -ne -1) {
        for ($i = $fmStart + 1; $i -lt $fmEnd; $i++) {
            $line = $lines[$i]
            if ($line -match '^\s*(title|parent|nav_order|permalink)\s*:') {
                $newFmLines.Add($line) | Out-Null
            }
        }
    }
    $newFmLines.Add('---') | Out-Null

    $bodyStart = 0
    if ($fmEnd -ne -1) {
        $bodyStart = $fmEnd + 1
    }

    $bodyLines = [System.Collections.ArrayList]::new()
    for ($i = $bodyStart; $i -lt $lines.Count; $i++) {
        $bodyLines.Add($lines[$i]) | Out-Null
    }

    $dirPath = $relPath

    # Process body lines - Kramdown, Liquid, code blocks, etc.
    $processedBody = [System.Collections.ArrayList]::new()
    $inCodeBlock = $false
    for ($i = 0; $i -lt $bodyLines.Count; $i++) {
        $line = $bodyLines[$i]

        # Track code blocks
        if ($line -match '^\s*```') {
            $inCodeBlock = -not $inCodeBlock
            if ($inCodeBlock) {
                $line = $line -replace '```tb\s*','```vb'
                $line = $line -replace '```twinbasic\s*','```vb'
            }
            $processedBody.Add($line) | Out-Null
            continue
        }

        if ($inCodeBlock) {
            $processedBody.Add($line) | Out-Null
            continue
        }

        # Remove Kramdown attribute lines {: ...}
        if ($line -match '^\s*\{:\s*') {
            if ($line -match '\{:toc\}' -or $line -match '\{: \.no_toc') {
                # Remove TOC/no_toc lines
                if ($i -gt 0 -and $bodyLines[$i-1] -match '^\s*\*\s*TOC') {
                    # Already removed the * TOC line? check previous processed line
                }
                continue
            }
            if ($line -match '\{: \.fs-') { continue }
            if ($line -match '\{: \#') { continue }
            if ($line -match '\{: \.') { continue }
            # Inline image attribute: ![img](x.png){:style="..."} → ![img](x.png){style="..."}
            $line = $line -replace '\{:\s*','{'
        }

        # Remove * TOC line (if followed by {:toc})
        if ($line -match '^\s*\*\s*TOC\s*$') {
            if ($i + 1 -lt $bodyLines.Count -and $bodyLines[$i+1] -match '\{:toc\}') {
                continue
            }
        }

        # Liquid tags
        $line = $line -replace '\{%\s*raw\s*%\}', ''
        $line = $line -replace '\{%\s*endraw\s*%\}', ''
        if ($line -match '\{%\s*include') {
            continue
        }

        # Remove > AI生成 line
        if ($line -match '^\>\s*AI\u751F\u6210') {
            continue
        }

        # Inline image attribute fix (standalone)
        $line = $line -replace '\{:style="([^"]*)"\}','{style="$1"}'

        $processedBody.Add($line) | Out-Null
    }

    # Convert callouts
    $processedBody = Convert-Callouts $processedBody

    # Now fix links - line by line, outside code blocks
    $finalBody = [System.Collections.ArrayList]::new()
    $inCodeBlock = $false
    for ($i = 0; $i -lt $processedBody.Count; $i++) {
        $line = $processedBody[$i]

        if ($line -match '^\s*```') {
            $inCodeBlock = -not $inCodeBlock
            $finalBody.Add($line) | Out-Null
            continue
        }
        if ($inCodeBlock) {
            $finalBody.Add($line) | Out-Null
            continue
        }

        $lineNum = $fmEnd + 1 + $i + 1

        # Process all markdown links [text](url)
        $newLine = ''
        $pos = 0
        while ($pos -lt $line.Length) {
            $linkMatch = [regex]::Match($line.Substring($pos), '\[(.+?)\]\(([^)]+)\)')
            if ($linkMatch.Success) {
                $before = $line.Substring($pos, $linkMatch.Index)
                $newLine += $before

                $linkText = $linkMatch.Groups[1].Value
                $linkUrl = $linkMatch.Groups[2].Value

                # Check if this is an image link
                $isImage = $false
                if ($pos + $linkMatch.Index -gt 0 -and $line[$pos + $linkMatch.Index - 1] -eq '!') {
                    $isImage = $true
                    # Also check the character before [
                    # The ! is part of ![alt](url)
                }

                $resolvedUrl = Resolve-Link -linkUrl $linkUrl -currentRelPath $dirPath -isImage $isImage

                if ($null -ne $resolvedUrl) {
                    $newLine += "[$linkText]($resolvedUrl)"
                } else {
                    # Keep original if we can't resolve (external, anchor, images kept relative)
                    $newLine += $linkMatch.Value
                }

                $pos += $linkMatch.Index + $linkMatch.Length
            } else {
                $newLine += $line.Substring($pos)
                break
            }
        }

        $finalBody.Add($newLine) | Out-Null
    }

    # Combine front matter and body
    $allLines = [System.Collections.ArrayList]::new()
    $newFmLines | ForEach-Object { $allLines.Add($_) | Out-Null }
    $finalBody | ForEach-Object { $allLines.Add($_) | Out-Null }

    # Clean any leading empty lines after front matter
    while ($allLines.Count -gt 3 -and $allLines[2].Trim() -eq '' -and $allLines[3].Trim() -eq '') {
        $allLines.RemoveAt(3)
    }

    $result = $allLines -join "`n"

    # Global code block language fix (handles code blocks inside callouts)
    $result = $result -replace '```tb\s','```vb '
    $result = $result -replace '```tb$','```vb'
    $result = $result -replace '```twinbasic\s','```vb '
    $result = $result -replace '```twinbasic$','```vb'

    # Remove trailing > AI生成
    $result = $result -replace "`n>\s*AI\u751F\u6210\s*$",""
    $result = $result -replace "\r",""

    return $result
}

function Get-TargetRelPath {
    param([string]$srcRelPath)

    $parts = $srcRelPath -split '/'
    $lastPart = $parts[-1]

    # Handle directory indices
    if ($lastPart -eq 'index.md') {
        return ($parts[0..($parts.Count-2)] -join '/') + '/index.md'
    }

    # Handle spaces in filename
    $lastPart = $lastPart -replace ' ','-'
    $parts[-1] = $lastPart

    return $parts -join '/'
}

# Main execution
foreach ($subdir in $subdirs) {
    $srcDir = Join-Path $srcBase $subdir
    $files = Get-ChildItem -Path $srcDir -Recurse -Filter '*.md'

    foreach ($file in $files) {
        $srcRelPath = $file.FullName.Substring($srcBase.Length + 1).Replace('\','/')

        # Skip directories we don't process
        if ($srcRelPath -match '^VB/(Core|tbIDE|CEF|Assert|CustomControls|WebView2|WinNativeCommonCtls|WinEventLogLib|WinNamedPipesLib|WinServicesLib)/') {
            continue
        }

        $tgtRelPath = Get-TargetRelPath $srcRelPath

        # Process the file
        try {
        $dirForLinks = 'Reference/' + ($srcRelPath -replace '/[^/]+$','')
        $processed = Process-File -srcFile $file.FullName -relPath $dirForLinks
        } catch {
            Write-Host "ERROR processing $srcRelPath : $_"
            continue
        }

        $tgtFile = Join-Path $tgtBase $tgtRelPath
        $tgtDir = Split-Path $tgtFile -Parent
        if (-not (Test-Path $tgtDir)) {
            New-Item -ItemType Directory -Path $tgtDir -Force | Out-Null
        }

        [System.IO.File]::WriteAllText($tgtFile, $processed, (New-Object System.Text.UTF8Encoding $false))
        $fileCount++
    }

    # Copy images
    $imgDir = Join-Path $srcDir 'Images'
    if (Test-Path $imgDir) {
        $tgtImgDir = Join-Path $tgtBase $subdir 'Images'
        if (-not (Test-Path $tgtImgDir)) {
            New-Item -ItemType Directory -Path $tgtImgDir -Force | Out-Null
        }
        $imgs = Get-ChildItem -Path $imgDir -Recurse -Include '*.png','*.jpg','*.jpeg','*.gif','*.svg','*.bmp'
        foreach ($img in $imgs) {
            $imgRel = $img.FullName.Substring($imgDir.Length + 1)
            $tgtImg = Join-Path $tgtImgDir $imgRel
            $tgtImgParent = Split-Path $tgtImg -Parent
            if (-not (Test-Path $tgtImgParent)) {
                New-Item -ItemType Directory -Path $tgtImgParent -Force | Out-Null
            }
            Copy-Item $img.FullName $tgtImg -Force
            $imgCount++
        }
    }
}

# Write dead links file
$deadLinkContent = ($deadLinks -join "`r`n")
if ($deadLinkContent) {
    $deadLinkContent += "`r`n"
}
[System.IO.File]::WriteAllText($deadLinkFile, $deadLinkContent, (New-Object System.Text.UTF8Encoding $false))

Write-Host "=== MIGRATION COMPLETE ==="
Write-Host "Files processed: $fileCount"
Write-Host "Images copied: $imgCount"
Write-Host "Dead links found: $($deadLinks.Count)"
