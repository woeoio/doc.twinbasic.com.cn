import llmstxt from 'vitepress-plugin-llms'

/**
 * 静默模式的 llmstxt 插件
 * 只输出开始和结束日志，隐藏中间的详细处理日志
 */
export function llmstxtQuiet(...args: Parameters<typeof llmstxt>): ReturnType<typeof llmstxt> {
  const originalLog = console.log
  const originalWarn = console.warn

  // 过滤包含 llmstxt 的详细日志（全局拦截）
  const filterLog = (fn: typeof console.log) => {
    return (...args: any[]) => {
      const message = args[0]?.toString() || ''
      // 过滤所有 llmstxt 前缀的日志，除了我们自定义的简洁日志
      if (message.includes('llmstxt') && 
          !message.includes('llms.txt files') && 
          !message.includes('✓ llms.txt') &&
          !message.includes('✗ llms.txt')) {
        return // 静默过滤
      }
      fn.apply(console, args)
    }
  }

  // 劫持 console（必须在调用 llmstxt 之前）
  console.log = filterLog(originalLog)
  console.warn = filterLog(originalWarn)

  const [plugin1, plugin2] = llmstxt(...args)

  // 包装钩子
  const wrapPlugin = (plugin: any): any => {
    const wrappedPlugin = { ...plugin }

    // 包装 generateBundle，添加简洁的开始/结束日志
    const originalGenerateBundle = plugin.generateBundle
    if (typeof originalGenerateBundle === 'function') {
      wrappedPlugin.generateBundle = async function(this: any, ...generateArgs: any[]) {
        originalLog('[llmstxt] Generating llms.txt files...')
        const startTime = Date.now()
        try {
          await originalGenerateBundle.apply(this, generateArgs)
          const duration = ((Date.now() - startTime) / 1000).toFixed(1)
          originalLog(`[llmstxt] ✓ Generated (${duration}s)`)
        } catch (err) {
          originalLog('[llmstxt] ✗ Failed')
          throw err
        }
      }
    }

    return wrappedPlugin
  }

  return [wrapPlugin(plugin1), wrapPlugin(plugin2)] as ReturnType<typeof llmstxt>
}

export default llmstxtQuiet
