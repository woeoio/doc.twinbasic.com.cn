# Matomo 追踪配置说明

本文档说明如何在 VitePress 项目中配置 Matomo 页面追踪统计。

## 包管理

确保您的项目已经安装了 `@datapunt/matomo-tracker-js` 包：

```bash
pnpm add @datapunt/matomo-tracker-js
```


## 环境变量配置

在项目根目录创建 `.env` 文件（如果不存在），并添加以下环境变量：

```env
# Matomo 服务器地址（必须以 / 结尾）
VITE_MATOMO_URL_BASE=https://your-matomo-domain.com/

# Matomo 站点 ID（数字）
VITE_MATOMO_SITE_ID=1

# 是否禁用追踪（开发环境可以设置为 true）
VITE_MATOMO_DISABLED=false
```

## 配置说明

### VITE_MATOMO_URL_BASE
- **必需**: 是
- **说明**: 您的 Matomo 服务器地址，必须以斜杠 `/` 结尾
- **示例**: `https://analytics.example.com/` 或 `https://matomo.example.com/`

### VITE_MATOMO_SITE_ID
- **必需**: 是
- **说明**: 在 Matomo 中为您的网站分配的站点 ID（数字）
- **如何查找**: 登录 Matomo 后台，在"管理" > "网站"中查看站点 ID

### VITE_MATOMO_DISABLED
- **必需**: 否
- **默认值**: `false`
- **说明**: 设置为 `true` 可以禁用追踪（用于开发环境）
- **示例**: `VITE_MATOMO_DISABLED=true`

## 功能特性

集成后的 Matomo 追踪功能包括：

1. **自动页面追踪**: 自动追踪所有页面视图
2. **SPA 路由追踪**: 支持单页应用（SPA）的路由变化追踪
3. **链接追踪**: 自动追踪链接点击（可配置）
4. **心跳追踪**: 追踪用户在页面上的停留时间（默认 15 秒）

## 高级配置

如果需要更高级的配置，可以编辑 `docs/.vitepress/theme/index.ts` 文件中的 `matomoConfig` 对象：

```typescript
const matomoConfig = {
  urlBase: import.meta.env.VITE_MATOMO_URL_BASE || '',
  siteId: Number(import.meta.env.VITE_MATOMO_SITE_ID) || 0,
  disabled: import.meta.env.VITE_MATOMO_DISABLED === 'true',
  heartBeat: {
    active: true,
    seconds: 15,  // 心跳间隔（秒）
  },
  linkTracking: true,  // 是否追踪链接点击
  userId: 'optional-user-id',  // 可选的用户 ID
}
```

## 手动追踪事件

如果需要手动追踪自定义事件，可以使用 `trackEvent` 函数：

```typescript
import { trackEvent } from '../utils/matomo'

// 追踪事件
trackEvent('按钮', '点击', '下载按钮', 1)
```

## 验证配置

1. 启动开发服务器：`pnpm dev`
2. 打开浏览器控制台，查看是否有 Matomo 相关的警告或错误
3. 访问几个页面，然后在 Matomo 后台查看是否有数据记录

## 故障排除

### 405 Method Not Allowed 错误
如果看到 405 错误，通常是因为追踪端点配置不正确：
- **trackerUrl** 应该指向 `matomo.php`（接收追踪数据）
- **srcUrl** 应该指向 `matomo.js`（加载追踪脚本）
- 默认配置已正确处理，但如果您自定义了这些 URL，请确保使用正确的端点

### 没有数据记录
- 检查环境变量是否正确设置
- 确认 Matomo 服务器地址和站点 ID 是否正确
- 检查浏览器控制台是否有错误信息
- 确认 Matomo 服务器可以正常访问
- 检查网络请求是否成功发送到 `matomo.php`

### 开发环境不想追踪
设置环境变量 `VITE_MATOMO_DISABLED=true` 即可禁用追踪。

## 参考文档

- [Matomo SPA 追踪文档](https://developer.matomo.org/guides/spa-tracking)
- [@datapunt/matomo-tracker-js 文档](https://github.com/Amsterdam/matomo-tracker)

