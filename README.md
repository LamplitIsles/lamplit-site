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
- `/downloads/`：安装包下载，入口仅在页脚；首个资源为 Intiface Central Android 官方 APK。
- `/docs/`：托管版文档入口，当前可用能力与建设边界的使用概览。
- `/docs/privacy/`：当前托管数据保存、必要处理与用途承诺，使用指南、文章目录和页脚均有入口。

`content/README.md` 记录编辑方向与完整选题。文章由 `src/lib/server/content.js` 显式登记，在构建时渲染受版本控制的 Markdown；不接收访客 HTML。根目录 `letter.md` 保留作者原稿。`content/guide/index.md` 和 `content/docs/index.md` 是编辑骨架，公开入口分别用 `welcome.md`，避免把内部编写说明展示给读者。

构建产物在 `dist/`。生产站部署于 Sven Snape 的 Cloudflare 账户：`lamplit.run` 承载官网、`/guide/` 教程和 `/docs/` 托管文档。`wrangler.jsonc` 只给根域名配置 Worker Custom Domain；没有独立的 guide 站点或跳转路由。它不改动 `app.lamplit.run` 的应用路由。官网和托管说明中的注册/登录入口指向 `https://app.lamplit.run/login`。

部署时运行 `bun run check && bun run build && bunx wrangler deploy`。Wrangler 配置固定使用 Sven Snape 账户；发布后检查官网、`/docs/`、`/guide/` 及应用登录入口。`dist/` 不入库，必须先构建再部署。

旧 `../guide` 的地图快照、留言板及 D1 实现仍保留在原目录；此切片尚未迁入留言板。旧 `../lamplit` 官网用于表达与结构参考，其 Docker、Core/Full 与运行能力不作为本版说明。

## 官网契约与实际状态

首页使用固定雾蓝浅色与透明暖窗灯小岛 PNG，主句“让你和 AI 伴侣的日常，有一个自己的住处。”，主说明“免费托管，前后端开源*”，费用、开源范围与迁出承诺收进默认折叠的“*托管与迁出说明”，主按钮“登录”。开源范围是聊天产品前后端，不扩大到账户管理或工作机全部实现。核心理念保留“让聊天、记忆与定制成果属于你们，能迁入，也能迁出”；已支持 RikkaHub、DeepSeek 与 Operit 聊天记录迁入，完整备份与迁出工具仍在建设中，承诺支持免费迁出，以及聊天、记忆和相关备份的永久删除，相关功能仍在开发中。daisyUI `mist` 语义主题统一首页、文章、建设图与共享导航，模板 `theme-color` 与 `color-scheme` 均匹配浅色；不跟随系统自动变暗。

当前可用的是邮箱登录、BYOK、个人空间、管理与聊天双 App（技术实现为 PWA），以及显示名字、头像、主题和背景。内置记忆库和机查找过去聊天的能力已可用，在首页独立展示，与已可用的用户全文搜索分开描述。当前可调整显示名字、头像、主题与背景；完整前端定制仍在建设中。聊天记录迁入、人格文件编辑与定制对话压缩已可用；网页搜索、机代提交平台建议、语音转文字与自动唤醒已可用；用户直接全文搜索聊天记录、查看命中内容并回到上下文已可用；Phase 1 建设中只剩 MCP 接入。伴侣资料面板可阅读已有日记、浏览聊天相册并保存原图、查看关系信息与历史变化，以及只读查看待执行提醒；提醒通过聊天创建、修改与取消，支持单次和周期安排，不保证稳定准点。聊天界面显示上下文用量，空闲时可用不带图片的 `/compact` 主动压缩。桌面 Safari/Chrome 通知需权限且聊天页面保持打开运行，不支持关页 Web Push 或手机通知；已部署的通知实现不代表真实 OS 弹出已完成实测。管理 App 可查看、修改和删除既有记忆条目，这不等于整套数据及备份永久删除；人也可提交反馈并查看本人账号的人／机反馈及处理状态。机能读取公开网页和列出页面链接，关闭搜索后仍可使用。Phase 2 的 Lamplit 工作机和自有 Pi、Codex、Claude Code 平台集成均在建设，工作机是聊天机委派的开发助手，负责工具、前端、调试与增强。基础迁入、人格与记忆管理不需要订阅工作机。

聊天机托管免费，模型费用自付。可选开发能力仍规划中：计划优惠价 ¥45 / 3个月（75折），计划常规价 ¥60 / 3个月，尚未开放购买；试用、额度与续费规则尚未确定。首页保留开源短句、所有权原句与自托管链接，详细限定说明由“*托管与迁出说明”展开。托管与费用区始终横向排列自托管、免费托管、可选开发能力三项，窄屏可横向滚动。完整迁出工具仍在建设中，分享尚在规划。公开建设图数据维护在 `src/lib/roadmap.js`，费用说明在 `src/lib/Plans.svelte`，内容编辑边界见 `content/README.md`；不再使用人为 Phase 1B 完成基准。

公开开源入口使用“开源仓库”，指向 https://github.com/LamplitIsles/lamplit-chat 。官网源码公开于 https://github.com/LamplitIsles/lamplit-site 。origin 保持 Forgejo，供开发、PR 与合并；github remote 指向公开 GitHub 仓库，额外发布已合并的 main。两者不会自动同步，部署也不会自动推送 GitHub。

产品插图为 `static/images/home-island.png`（960×640 RGBA，约 604 KB），由用户选定的透明生成图通过现有 ImageMagick 等比缩小并保留 alpha；原始素材不改动、不重复提交。旧 SVG 实现已删除。浏览器 favicon 使用雾蓝底色与暖金星灯，SVG 为主，16/32px ICO 为兼容格式。

## 本地验证与交付

`bun run check` 检查 Svelte，`bun run build` 生成静态站点。随后运行 `bun run preview --port 4174`，用隔离浏览器检查 390/1440/320px 的首页顺序、登录目的地、导航对齐和换行、文章链接与焦点、建设图展开；审阅所有已登记文章。验证只使用本地静态预览，不写账号或聊天数据，不为营销文案增加源码形状测试。

临时截图与报告留在 `.scratch/`，不提交。仓库及父级没有 `AGENTS.md`；本次代理工作流未改变，因此不新增。部署命令与运行配置保持原样，因为本次只更新官网与文档；部署需要另行指示，完成 PR 不表示部署。

## 下载资源与 R2 维护

下载信息维护在 `src/lib/downloads.js`，手动核对后更新，不在运行时自动查询。2026-10-04（Asia/Shanghai）再次核对 [官方 latest API](https://api.github.com/repos/intiface/intiface-central/releases/latest)，当前为 [v3.2.1+45](https://github.com/intiface/intiface-central/releases/tag/v3.2.1%2B45)，发布于 `2026-09-28T03:54:11Z`。官网显示的 v3.1.1 尚未同步，因此使用官方仓库 latest 发布文件。

官方文件 `intiface-central-v3.2.1-android-arm-universal.apk` 为 120,638,368 字节（115.05 MiB）。原包及 [公开 R2 镜像](https://assets.lamplit.run/downloads/intiface-central/3.2.1%2B45/intiface-central-v3.2.1-android-arm-universal.apk) 已完整下载，字节数及 SHA-256 均与 GitHub asset digest 一致：`324729f59281a48f17e6a8512cc19a1430b8e462e7935602df0b300dd2020bf9`。APK manifest 为 `versionName=3.2.1`、`versionCode=45`、包名 `com.nonpolynomial.intiface_central`、最低 Android API 27（Android 8.1）。页面主按钮只指向 R2 镜像，官方发布来源仍可查看。

该版本 [LICENSE.md](https://github.com/intiface/intiface-central/blob/v3.2.1%2B45/LICENSE.md) 明确采用 GPLv3 / 商业双许可。此次分发未修改的官方 APK，保留包内原有声明，并按 GPLv3 第 6(d) 节在 APK 下载旁提供免费获取同版本源码的入口：[源码 ZIP 镜像](https://assets.lamplit.run/downloads/intiface-central/3.2.1%2B45/intiface-central-v3.2.1%2B45-source.zip)，来自官方 tag 的 `https://codeload.github.com/intiface/intiface-central/zip/refs/tags/v3.2.1%2B45`，包含构建配置、Rust/Flutter 源码、依赖锁文件和原许可；[许可文件镜像](https://assets.lamplit.run/downloads/intiface-central/3.2.1%2B45/LICENSE.md) 从该 archive 原样提取。ZIP 与许可公开下载均已与上传原文件逐字节核对。页面也保留官方 tag 源码和许可链接。后续每个版本独立核对并保留对应源码与许可，不把这一结论扩大到其他安装包或商业许可。

2026-10-04 创建的公开发布资源：

- Sven Snape 账户 `4a7d2cc3b61181986870b57848eff910` 下的 Standard bucket `lamplit-assets`，创建前确认不存在；仅存公开安装包、对应源码与许可，不混入用户数据、聊天图片或备份。
- R2 自定义域名 `assets.lamplit.run`，zone `074e6fe5605fc4aed9e34979a915b9cd`；ownership/SSL active，最低 TLS 1.2；`r2.dev` 公开访问关闭。
- 精确排除 route `assets.lamplit.run/*`，script 为 `null`，ID `f3393c901689416ea16cf984ffc75a70`。这是公开探测确认平台通配路由拦截后的必要排除；现有 `*.lamplit.run/* → lamplit-platform` 和 `chat.lamplit.run/* → edgechat-guion` 原样保留，没有新增 Worker。该排除独立于官网配置，维护平台路由时也需保留。
- 三个对象位于 `downloads/intiface-central/3.2.1+45/`：官方文件名 APK、`intiface-central-v3.2.1+45-source.zip`、`LICENSE.md`。按版本新增，不覆盖旧版本；公开 URL 的 `+` 使用 `%2B` 编码。

公开 APK HTTPS 返回 200，`Content-Type: application/vnd.android.package-archive`，`Content-Disposition: attachment; filename="intiface-central-v3.2.1-android-arm-universal.apk"`，`Cache-Control: public, max-age=31536000, immutable`，`Content-Length: 120638368`。实测 `CF-Cache-Status` 首次 GET 为 `MISS`、后续 HEAD 为 `HIT`（age 41）；未创建或修改缓存规则。当前 Wrangler OAuth 无 DNS 列表与 rulesets 读取权限（403），域名通过 R2 管理接口及公开 HTTPS 验证；需要调整缓存时先获得权限并读取现有规则，仅限定此 host。

最小维护命令（仓库使用的 Wrangler 4.142.0，始终指定同一账户；文件使用临时目录，不入 Git）：

```sh
export CLOUDFLARE_ACCOUNT_ID=4a7d2cc3b61181986870b57848eff910
bunx wrangler r2 bucket info lamplit-assets -c wrangler.jsonc
bunx wrangler r2 bucket domain get lamplit-assets --domain assets.lamplit.run -c wrangler.jsonc
bunx wrangler r2 bucket dev-url get lamplit-assets -c wrangler.jsonc

# 上传已经核对的新版本；APK_FILE / SOURCE_ZIP / LICENSE_FILE 为本地文件路径。
# VERSION 与 APK_NAME 使用官方实际值，避免覆盖既有 immutable 对象。
bunx wrangler r2 object put "lamplit-assets/downloads/intiface-central/$VERSION/$APK_NAME" \
  --remote --file "$APK_FILE" --content-type application/vnd.android.package-archive \
  --content-disposition "attachment; filename=\"$APK_NAME\"" \
  --cache-control 'public, max-age=31536000, immutable' -c wrangler.jsonc
bunx wrangler r2 object put "lamplit-assets/downloads/intiface-central/$VERSION/intiface-central-v$VERSION-source.zip" \
  --remote --file "$SOURCE_ZIP" --content-type application/zip \
  --content-disposition "attachment; filename=\"intiface-central-v$VERSION-source.zip\"" \
  --cache-control 'public, max-age=31536000, immutable' -c wrangler.jsonc
bunx wrangler r2 object put "lamplit-assets/downloads/intiface-central/$VERSION/LICENSE.md" \
  --remote --file "$LICENSE_FILE" --content-type 'text/plain; charset=utf-8' \
  --cache-control 'public, max-age=31536000, immutable' -c wrangler.jsonc

# 从编码后的公开 URL 完整下载后核对，不用 ETag 代替 SHA-256。
curl -fL -D "$HEADERS_FILE" "$PUBLIC_APK_URL" -o "$DOWNLOADED_APK"
shasum -a 256 "$DOWNLOADED_APK"
wc -c "$DOWNLOADED_APK"
```

如需重建域名，先检查现有绑定再执行 `bunx wrangler r2 bucket domain add lamplit-assets --domain assets.lamplit.run --zone-id 074e6fe5605fc4aed9e34979a915b9cd --min-tls 1.2 -c wrangler.jsonc`。Wrangler 无 null-script route 管理子命令；通过 Cloudflare Workers Routes API `POST /zones/074e6fe5605fc4aed9e34979a915b9cd/workers/routes` 提交 `{"pattern":"assets.lamplit.run/*"}` 可重建排除，先 GET 确认不存在，使用现有授权凭据且不输出凭据，不替换整个路由集合。资源托管不等于官网部署；官网合入与部署另行执行。

## 许可证

官网源码采用 [Apache-2.0](LICENSE)，与 lamplit-chat 一致。第三方依赖保留各自许可证。
