---
layout: Post
title: md-front matter | 格式
subtitle: front matter
author: a xi
date: 2022-04-19
useHeaderImage: true
headerImage: /images/home-bg/home-bg-3.jpg
headerMask: rgb(14, 21, 5, .1)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - md
---

md-front matter | 格式
--|:--:
layout | Post  # 必须
title | 时间简史  # 博客标题（必须）
subtitle | 从大爆炸到黑洞  # 博客副标题（可选）
date | 2020-03-31  # 博客发表日期（可选）
author | 斯蒂芬·霍金  # 博客作者（可选，不填的话会使用 `themeConfig.personalInfo.name`）
useHeaderImage | true  # 是否在博客中显示封面图（可选，默认：false）
headerImage | /img/test.jpg  # 博客封面图（必须，即使上一项选了 false，因为图片也需要在首页显示）
headerMask | rgba(40, 57, 101, .4)  # 封面图遮罩（可选）
headerImageCredit | Jeremy Fenske  # 图片来源，比如图片作者的名字（可选，只在 "useHeaderImage: true" 时有效）
headerImageCreditLink | https://www.artstation.com/artwork/nLY0K  # 图片来源的链接（可选，只在 "useHeaderImage: true" 时有效）
catalog | true  # 是否启用右侧目录，会覆写 `themeConfig.catalog`（可选，默认：false）
hide | true  # 是否在首页和标签页博客列表中隐藏这篇博客（可选，默认：false）
tags | # 博客标签（可选）