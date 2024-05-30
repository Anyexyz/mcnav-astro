# McNac - Astro

基于 Astro 重制的 McNac 导航主题站点


## 食用指南

1. 首先修改 [`astro.config.mjs`](astro.config.mjs) 文件中的 `base` 参数, 指定 **站点根路径**, 本项目中默认为 `/nav`

2. 修改位于 [`src/site.ts`](/src/site.ts) 文件中的 `site` 对象, 指定 **站点基本信息**, 包括
 - 站点名称
 - 站点描述
 - 站点图标等
 - 备案号等

3. 修改位于 [`src/config`](/src/config) 文件夹中的 `*.yml` 文件, 他们分别对应站点
 - `navbar.yml`: **导航栏** 配置
 - `search.yml`: **搜索引擎** 配置
 - `popular.yml`: **热门站点** 配置
 - `tools.yml`: **工具直达** 配置
 - `service.yml`: 各类导航配置


# 致谢

- [Astro](https://astro.build/)
- [漫川的导航](https://nav.mancs.cn/)

## license

MIT License