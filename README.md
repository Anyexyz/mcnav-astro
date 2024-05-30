# McNac - Astro

基于 Astro 重制的 McNac 导航主题站点

## 演示

![PC 端](1717096477239.png)

![手机端](1717096500182.png)

## 环境部署

`pnpm install` 安装依赖

`pnpm dev` 启动开发环境

`pnpm build` 构建项目

`pnpm preview` 预览项目


## 食用指南

1. 首先修改 [`astro.config.mjs`](astro.config.mjs) 文件中的 `base` 参数, 指定 **站点根路径**, 本项目中默认为 `/nav`

2. 修改位于 [`src/site.ts`](/src/site.ts) 文件中的 `site` 对象, 指定 **站点基本信息**, 包括
 - 站点名称
 - 站点描述
 - 站点图标等
 - 备案号等

3. 修改位于 [`src/config`](/src/config) 文件夹中的 `*.yml` 文件, 他们分别对应站点
 - `navbar.yml`: **导航栏** 配置    (不建议超过 5 个)
 - `search.yml`: **搜索引擎** 配置  (不建议超过 7 个, 其中的 icon 可以在 [fontawesome](https://fontawesome.com/) 中获取)
 - `popular.yml`: **热门站点** 配置 (不建议超过 2 个)
 - `tools.yml`: **工具直达** 配置   (不建议超过 6 个, 其中的 icon 可以在 [fontawesome](https://fontawesome.com/) 中获取, 背景 color 可以自定义)
 - `service.yml`: 各类导航配置(导航icon在 [fontawesome](https://fontawesome.com/) 中获取, services icon 填写图片链接)

> 若使用本地图标，请将图标放置在 `public/icons` 文件夹中, 并在 `*.yml` 文件中填写相对路径, 且需要加上 base 配置


# 致谢

- [Astro](https://astro.build/)
- [漫川的导航](https://nav.mancs.cn/)

## license

MIT License