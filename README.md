# 灯火群岛 · Lamplit Site

官网、两封信、安家手记与托管使用文档。SvelteKit + Tailwind CSS + daisyUI，使用 Bun。

```sh
bun install
bun run dev --port 5174
bun run check
bun run build
```

## 内容与页面

- `/`：群岛首页。
- `/letters/to-you/`、`/letters/to-companions/`：分别写给人和 AI 伴侣的信。
- `/guide/`：安家手记，已接入搬家准备与记忆入门。
- `/roadmap/`：建设图：开源自托管、Phase 1 迁入与托管体验、Phase 2 可选开发助手和后续规划。
- `/docs/`：托管版文档入口，当前可用能力与建设边界的使用概览。
- `/docs/privacy/`：当前托管数据保存、必要处理与用途承诺，使用指南、文章目录和页脚均有入口。

`content/README.md` 记录编辑方向与完整选题。文章由 `src/lib/server/content.js` 显式登记，在构建时渲染受版本控制的 Markdown；不接收访客 HTML。根目录 `letter.md` 保留作者原稿。`content/guide/index.md` 和 `content/docs/index.md` 是编辑骨架，公开入口分别用 `welcome.md`，避免把内部编写说明展示给读者。

构建产物在 `dist/`。生产站部署于 Sven Snape 的 Cloudflare 账户：`lamplit.run` 承载官网、`/guide/` 教程和 `/docs/` 托管文档。`wrangler.jsonc` 只给根域名配置 Worker Custom Domain；没有独立的 guide 站点或跳转路由。它不改动 `app.lamplit.run` 的应用路由。官网和托管说明中的注册/登录入口指向 `https://app.lamplit.run/login`。

部署时运行 `bun run check && bun run build && bunx wrangler deploy`。Wrangler 配置固定使用 Sven Snape 账户；发布后检查官网、`/docs/`、`/guide/` 及应用登录入口。`dist/` 不入库，必须先构建再部署。

旧 `../guide` 的地图快照、留言板及 D1 实现仍保留在原目录；此切片尚未迁入留言板。旧 `../lamplit` 官网用于表达与结构参考，其 Docker、Core/Full 与运行能力不作为本版说明。

## 官网契约与实际状态

首页使用固定雾蓝浅色与透明暖窗灯小岛 PNG，主句“让你和 AI 伴侣的日常，有一个自己的住处。”，主说明“免费托管，前后端开源*”，费用、开源范围与迁出承诺收进默认折叠的“*托管与迁出说明”，主按钮“登录”。开源范围是聊天产品前后端，不扩大到账户管理或工作机全部实现。核心理念保留“让聊天、记忆与定制成果属于你们，能迁入，也能迁出”；已支持 RikkaHub 与 DeepSeek 聊天记录迁入，完整备份与迁出工具仍在建设中，承诺支持免费迁出，以及聊天、记忆和相关备份的永久删除，相关功能仍在开发中。daisyUI `mist` 语义主题统一首页、文章、建设图与共享导航，模板 `theme-color` 与 `color-scheme` 均匹配浅色；不跟随系统自动变暗。

当前可用的是邮箱登录、BYOK、个人空间、管理与聊天双 App（技术实现为 PWA），以及显示名字、头像、主题和背景。内置记忆库和机查找过去聊天的能力已可用，在首页独立展示，与建设中的用户全文搜索分开。当前可调整显示名字、头像、主题与背景；完整前端定制仍在建设中。聊天记录迁入、人格文件编辑与定制对话压缩已可用；网页搜索、机代提交平台建议、语音转文字与自动唤醒已可用；Phase 1 用户全文搜索与 MCP 接入两项仍在建设；机的历史检索不代表用户全文搜索界面已经交付。Phase 2 的 Lamplit 工作机和自有 Pi、Codex、Claude Code 平台集成均在建设，工作机是聊天机委派的开发助手，负责工具、前端、调试与增强。基础迁入、人格与记忆管理不需要订阅工作机。

聊天机托管免费，模型费用自付。可选开发能力仍规划中：计划优惠价 ¥45 / 3个月（75折），计划常规价 ¥60 / 3个月，尚未开放购买；试用、额度与续费规则尚未确定。首页保留开源短句、所有权原句与自托管链接，详细限定说明由“*托管与迁出说明”展开。托管与费用区始终横向排列自托管、免费托管、可选开发能力三项，窄屏可横向滚动。完整迁出工具仍在建设中，分享尚在规划。公开建设图数据维护在 `src/lib/roadmap.js`，费用说明在 `src/lib/Plans.svelte`，内容编辑边界见 `content/README.md`；不再使用人为 Phase 1B 完成基准。

公开开源入口使用“开源仓库”，指向 https://github.com/LamplitIsles/lamplit-chat 。官网源码公开于 https://github.com/LamplitIsles/lamplit-site 。origin 保持 Forgejo，供开发、PR 与合并；github remote 指向公开 GitHub 仓库，额外发布已合并的 main。两者不会自动同步，部署也不会自动推送 GitHub。

产品插图为 `static/images/home-island.png`（960×640 RGBA，约 604 KB），由用户选定的透明生成图通过现有 ImageMagick 等比缩小并保留 alpha；原始素材不改动、不重复提交。旧 SVG 实现已删除。浏览器 favicon 使用雾蓝底色与暖金星灯，SVG 为主，16/32px ICO 为兼容格式。

## 本地验证与交付

`bun run check` 检查 Svelte，`bun run build` 生成静态站点。随后运行 `bun run preview --port 4174`，用隔离浏览器检查 390/1440/320px 的首页顺序、登录目的地、导航对齐和换行、文章链接与焦点、建设图展开；审阅所有已登记文章。验证只使用本地静态预览，不写账号或聊天数据，不为营销文案增加源码形状测试。

临时截图与报告留在 `.scratch/`，不提交。仓库及父级没有 `AGENTS.md`；本次代理工作流未改变，因此不新增。部署命令与运行配置保持原样，因为本次只更新官网与文档；部署需要另行指示，完成 PR 不表示部署。

## 许可证

官网源码采用 [Apache-2.0](LICENSE)，与 lamplit-chat 一致。第三方依赖保留各自许可证。
