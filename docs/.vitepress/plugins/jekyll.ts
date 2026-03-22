/**
 * Jekyll 语法转换插件
 * 将 Jekyll 的特定语法转换为 VitePress 兼容的格式
 */

export const jekyllPlugin = () => ({
  name: 'jekyll-transform',
  enforce: 'pre',
  transform(code: string, id: string) {
    // 只处理 markdown 文件
    if (!id.endsWith('.md')) return null

    let transformed = code

    // 1. 处理图片的 {:style="..."} -> 改为 VitePress 支持的 {style="..."}
    transformed = transformed.replace(
      /!\[([^\]]*)\]\(([^)]+)\)\{:style="([^"]+)"\}/g,
      '![$1]($2){style="$3"}'
    )

    // 2. 移除其他所有 Jekyll Attribute Lists ({: ... })
    // 包括 {: #id }, {: .class }, {: .no_toc } 等
    transformed = transformed.replace(/\s*\{:[^}]+\}/g, '')

    // 3. 移除 Jekyll 的 {% include %} 语法
    transformed = transformed.replace(/\{%\s*include\s+[^%]+%\}/g, '')

    return transformed === code ? null : transformed
  }
})

export default jekyllPlugin
