import MatomoTracker from '@datapunt/matomo-tracker-js'
import type { UserOptions } from '@datapunt/matomo-tracker-js/lib/types'

// Matomo 配置接口（扩展 UserOptions 以便于使用）
export interface MatomoConfig {
    urlBase: string  // Matomo 服务器地址，例如: 'https://your-matomo-domain.com/'
    siteId: number   // Matomo 站点 ID
    userId?: string  // 可选的用户 ID
    trackerUrl?: string  // 可选的追踪数据接收 URL，默认是 urlBase + 'matomo.php'
    srcUrl?: string      // 可选的追踪脚本源 URL，默认是 urlBase + 'matomo.js'
    disabled?: boolean   // 是否禁用追踪（用于开发环境）
    heartBeat?: {
        active: boolean
        seconds?: number  // 心跳计时器（秒），默认 15
    }
    linkTracking?: boolean  // 是否启用链接追踪，默认 true
    configurations?: {
        [key: string]: any
    }
}

// Matomo tracker 实例
let matomoTracker: MatomoTracker | null = null

/**
 * 初始化 Matomo 追踪器
 * @param config Matomo 配置
 */
export function initMatomo(config: MatomoConfig): MatomoTracker | null {
    // 只在客户端运行
    if (typeof window === 'undefined') {
        return null
    }

    // 如果已初始化，返回现有实例
    if (matomoTracker) {
        return matomoTracker
    }

    // 如果禁用追踪，返回 null
    if (config.disabled) {
        return null
    }

    try {
        // 构建 UserOptions 配置
        const userOptions: UserOptions = {
            urlBase: config.urlBase,
            siteId: config.siteId,
            userId: config.userId,
            // trackerUrl 用于接收追踪数据，应该指向 matomo.php
            trackerUrl: config.trackerUrl || `${config.urlBase}matomo.php`,
            // srcUrl 用于加载追踪脚本，应该指向 matomo.js
            srcUrl: config.srcUrl || `${config.urlBase}matomo.js`,
            disabled: config.disabled,
            heartBeat: config.heartBeat || {
                active: true,
                seconds: 15,
            },
            linkTracking: config.linkTracking !== false,  // 默认启用
            configurations: config.configurations,
        }

        // 创建 Matomo tracker 实例
        matomoTracker = new MatomoTracker(userOptions)

        return matomoTracker
    } catch (error) {
        console.error('Matomo 初始化失败:', error)
        return null
    }
}

/**
 * 追踪页面视图
 * @param customTitle 自定义页面标题
 * @param customUrl 自定义页面 URL
 */
export function trackPageView(customTitle?: string, customUrl?: string): void {
    if (typeof window === 'undefined' || !matomoTracker) {
        return
    }

    try {
        matomoTracker.trackPageView({
            documentTitle: customTitle || document.title,
            href: customUrl || window.location.href,
        })
    } catch (error) {
        console.error('Matomo 页面追踪失败:', error)
    }
}

/**
 * 追踪自定义事件
 * @param category 事件类别
 * @param action 事件动作
 * @param name 事件名称（可选）
 * @param value 事件值（可选）
 */
export function trackEvent(
    category: string,
    action: string,
    name?: string,
    value?: number
): void {
    if (typeof window === 'undefined' || !matomoTracker) {
        return
    }

    try {
        matomoTracker.trackEvent({
            category,
            action,
            name,
            value,
        })
    } catch (error) {
        console.error('Matomo 事件追踪失败:', error)
    }
}

/**
 * 获取 Matomo tracker 实例
 */
export function getMatomoTracker(): MatomoTracker | null {
    return matomoTracker
}

