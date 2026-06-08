---
title: wv2HostResourceAccessKind
parent: Enumerations
permalink: /tB/Packages/WebView2/Enumerations/wv2HostResourceAccessKind
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3a9ae2ab-a3d1-46fd-871a-e1279ae9f47f'
  PropagateID: '3a9ae2ab-a3d1-46fd-871a-e1279ae9f47f'
  ReservedCode1: '869fed7c-2881-4e6c-af1c-28d8bf2b83ba'
  ReservedCode2: '869fed7c-2881-4e6c-af1c-28d8bf2b83ba'
---

# wv2HostResourceAccessKind
WebView2 运行时应如何对待通过 [**SetVirtualHostNameToFolderMapping**](/official/Reference/WebView2/WebView2/#setvirtualhostnametofoldermapping) 映射到本地文件夹的虚拟主机名——其他源的页面是否允许从其获取资源。镜像 `COREWEBVIEW2_HOST_RESOURCE_ACCESS_KIND` 枚举。

| 常量 | 值 | 描述 |
|------|-----|------|
| **wv2ResourceDeny** | 0 | 仅从同一虚拟主机名提供的页面可加载映射文件夹中的资源。 |
| **wv2ResourceAllow** | 1 | 默认——任何页面均可加载映射文件夹中的资源。 |
| **wv2ResourceDenyCors** | 2 | 与 **wv2ResourceAllow** 相同，但跨源请求须通过常规 CORS 检查。 |