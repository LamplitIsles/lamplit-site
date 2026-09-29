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
- `/roadmap/`：四阶段建设图，每阶段的能力、进度与费用。
- `/docs/`：托管版文档入口，面向 Phase 1B 发布版本的使用概览。

`content/README.md` 记录编辑方向与完整选题。文章由 `src/lib/server/content.js` 显式登记，在构建时渲染受版本控制的 Markdown；不接收访客 HTML。根目录 `letter.md` 保留作者原稿。`content/guide/index.md` 和 `content/docs/index.md` 是编辑骨架，公开入口分别用 `welcome.md`，避免把内部编写说明展示给读者。

构建产物在 `dist/`。生产站部署于 Sven Snape 的 Cloudflare 账户：`lamplit.run` 承载官网、`/guide/` 教程和 `/docs/` 托管文档。`guide.lamplit.run` 只兼容旧链接，永久跳转到 `lamplit.run/guide/` 或根域名上的对应路径，不再提供第二套站点。`wrangler.jsonc` 将根域名设为 Worker Custom Domain，并为旧教程域名保留精确跳转路由；它们不改动 `app.lamplit.run` 的应用路由。官网和托管说明中的注册/登录入口指向 `https://app.lamplit.run/login`。

部署时运行 `bun run check && bun run build && bunx wrangler deploy`。Wrangler 配置固定使用 Sven Snape 账户；发布后检查官网、`/docs/`、教程跳转及应用登录入口。`dist/` 不入库，必须先构建再部署。

旧 `../guide` 的地图快照、留言板及 D1 实现仍保留在原目录；此切片尚未迁入留言板。旧 `../lamplit` 官网用于表达与结构参考，其 Docker、Core/Full 与运行能力不作为本版说明。

公开路线图的数据统一维护在 `src/lib/roadmap.js`，首页摘要和详情页共用。对外费用表达为免费托管、Paid ¥45/季（标准价 ¥60/季，现阶段 75 折）用于平台维护、模型 BYOK 费用自付。

网站当前按用户指定的 Phase 1B 发布状态撰写；公开路线图不展示内部性能任务。实际实现验收与发布文案基准分开记录，见 `.scratch/site-release-baseline.md`。
