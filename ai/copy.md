# 需求

帮我从 `D:\code\tb\docs.twinbasic.com\docs` 复制目录下的所有文档。

// 需要复制的子目录
'Challenges',
'Features',
'IDE',
'Miscellaneous',
'Reference',
'Tutorials',
'Videos'

到项目目录下的 `docs\en\official` 目录里，要求：
1，复制md文档和图片等相关资源
2，去除所有 jekyll 文档语法，得到干净的md语法
3，修正md文档中的所有超链接的路径为当前项目的相对路径

注意，源目录下的文档是个复杂的 jekyll 开发的文档，你应该真实的使用 大模型 自己去处理整个流程，而不是使用任何脚本语言去机械的完成，因为那样肯定会有错误。

这个头部，我认为应该保留，本项目使用 vitepress 生成的时候不会受到什么影响：

---

title: Self-Contained Diagnostic Tool
parent: Challenges
nav_order: 1
permalink: /Challenges/1

---

另外，文档开头不能出现“AIGC”和最后一行不能出现“> AI生成”水印，因为这源文档是官方人工制作的，我们要尊重他们

整个任务很大，你可以先处理一个小目录下的文档，然后让我来检验下质量，如果做的好，就启动多个子代理并行处理，按目录为单位去分配子任务。
