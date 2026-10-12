# 灯火群岛 · Lamplit Site

官网、全景与路线、两封信、安家手记与托管使用文档。SvelteKit + Tailwind CSS + daisyUI，使用 Bun。

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
- `/panorama/`：全景与路线，已有 AI／通讯／网页手机路径、桌游原型、配置门槛、近期方向与长期愿景；导航、页脚与首页阅读区可进入，与建设图互链。
- `/roadmap/`：建设图：开源自托管、Phase 1 迁入与托管体验、Phase 2 可选开发助手和后续规划。
- `/downloads/`：安装包下载，入口仅在页脚；首个资源为 Intiface Central Android 官方 APK，教程入口指向本站中文图文指南。
- `/guide/intiface-central/`：Intiface Central 中文入门，包含官方界面截图、蓝牙扫描与测试、状态解释和排错；不表示灯火群岛已接入设备控制。
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

## 全景内容维护

Spec FlickNote #3807，证据与讨论 #3805。公开成果正文统一在 `src/routes/panorama/+page.svelte`，不另维护一份能力列表。`content/README.md` 记录编辑边界，`CONTEXT.md` 仅记录领域术语。全景讲跨路径成果与方向，建设图讲当前聊天产品的具体进度。

“已跑通”来自本轮用户确认及本地项目文档核对，仍需配置和技术投入；共享 App 仅 Pi/Codex，不推导所有后端与通讯任意互通。首个桌游原型按用户实际体验确认，不编名字、玩法或公开地址。上游引擎与通讯系统不称团队原创；Parlour 仅介绍为朋友的 Matrix 前端与合作入口。

当前免费托管、模型费用自付，无免费模型额度。P2P 是长期方向，无零成本承诺。完整前端定制、完整迁出和整套永久删除仍在建设中。修改页面时核对现有建设图与使用指南，近期方向不添加未经确认的日期或负责人。

生产本地预览需检查 `/panorama/` 320/390/1440px 全页、导航 active、互链、键盘焦点、44px 目标和无横向溢出，并最小回归首页与建设图。内容人工逐项核对，不增加文案或源码形状测试。截图和实现报告留在 `.scratch/panorama/`。

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

### 2026-10-10 Android 下载维护

Spec FlickNote #3624 在现有列表新增两个固定版本，仍手动更新，无新增依赖。Intiface 及中文教程保持原入口。

| 软件 / 官方文件 | 固定发布 | 日期（UTC） | 字节数 / SHA-256 |
| --- | --- | --- | --- |
| Cromite 浏览器 ARM64 / `arm64_ChromePublic.apk` | `v153.0.8010.37-11507ac1061b5ea227806f5e84db5a57df6ccf6a` | 2026-09-15 | 323809949 / `9db12af1af021f42b4371e76d0e9fe476a7085bbbbc76bc410a538d028bf6071` |
| Element Classic GPlay ARM64 / `vector-gplay-arm64-v8a-release-signed.apk` | `v1.6.66` | 2026-09-25 | 73983375 / `9c605d17b3f2517119ea95bb0b55f5e2d582bbe7b2b1c72934e0fe9a0675d66d` |

来源分别为 [Cromite 固定发布](https://github.com/uazo/cromite/releases/tag/v153.0.8010.37-11507ac1061b5ea227806f5e84db5a57df6ccf6a) 与 [Element Android 固定发布](https://github.com/element-hq/element-android/releases/tag/v1.6.66)。两个官方 APK 已完整下载，size / SHA-256 与 GitHub asset digest 一致。Element 固定版本 [README](https://github.com/element-hq/element-android/blob/v1.6.66/README.md) 明确 GitHub APK 为 GPlay 变体，依赖部分 Google 服务；这是 Classic 仓库，不是 Element X。

源码与许可核对范围：

- Cromite 官方 tag ZIP 原样镜像为 `cromite-patches-and-build.zip`，包含补丁、补丁顺序、GN 参数与构建脚本；它不是完整 Chromium 源码。固定版本 [build/RELEASE](https://github.com/uazo/cromite/blob/v153.0.8010.37-11507ac1061b5ea227806f5e84db5a57df6ccf6a/build/RELEASE) 为 `153.0.8010.37`。[对应 Chromium tag](https://chromium.googlesource.com/chromium/src/+/refs/tags/153.0.8010.37) 指向 `b75a5a95ea1a1b55bdbfd6d9f42d47be7507fb8b`，tag metadata 与 DEPS 已读取；[官方基础源码 tar.xz](https://commondatastorage.googleapis.com/chromium-browser-official/chromium-153.0.8010.37.tar.xz) HEAD 为 200、4121949812 字节，范围 GET 为 206、XZ 文件。此 4.12 GB 归档未完整下载或镜像。页面在主下载旁分别提供补丁 ZIP、基础源码和[固定构建说明](https://github.com/uazo/cromite/blob/v153.0.8010.37-11507ac1061b5ea227806f5e84db5a57df6ccf6a/docs/HOW_TO_BUILD.md)；构建脚本按该 tag fetch，再用 gclient 同步 DEPS。没有在本次重建 APK 或验证全部依赖，不宣称补丁 ZIP 独自满足完整源码分发。固定 README 声明 GPLv3，Bromite 补丁 GPLv3-only，Cromite 特有补丁 GPL-2+，以各补丁文件为准；镜像 `LICENSE` 从该 ZIP 原样提取。
- Element `element-classic-v1.6.66-source.zip` 来自官方 `https://codeload.github.com/element-hq/element-android/zip/refs/tags/v1.6.66`，包含应用、Matrix SDK、Gradle 构建配置和依赖声明；`LICENSE` 原样提取。固定 README 声明 AGPLv3 或更高版本／商业双许可，ZIP 也保留 `LICENSE-COMMERCIAL`，没有按旧 Apache 许可描述此版本。未修改官方 APK、源码或许可，也没有声称已重现官方签名构建。

新对象只写入现有 `lamplit-assets` 的版本路径：

- `downloads/cromite/v153.0.8010.37-11507ac1061b5ea227806f5e84db5a57df6ccf6a/`：`cromite-arm64-apk.zip`、`cromite-patches-and-build.zip`、`LICENSE`；不提供未上传的原始 APK 镜像 URL。
- `downloads/element-classic/1.6.66/`：`vector-gplay-arm64-v8a-release-signed.apk`、`element-classic-v1.6.66-source.zip`、`LICENSE`。

上传前用 `wrangler r2 object get --remote --file <临时目标> -c wrangler.jsonc` 确认具体 key 不存在；其他错误必须停止，已有对象不可覆盖。不要对未上传路径做公开 HEAD 预检：此次 Cromite 补丁路径的 HEAD 产生 404 负缓存，页面使用独立验证的 `?download=1` URL，未清缓存或改变规则。上传沿用上述 Content-Type / Content-Disposition / immutable 元数据；完整公开 GET 必须比对原文件字节、size 和 SHA-256，保存响应头，不把 ETag 当校验值。Cromite 官方 APK 超过 Wrangler 300 MiB（314572800 字节）上限，因此按用户确认以单一原 APK 的 ZIP 分发；未改 APK 内部内容或签名，不需要新凭据或上传服务。

Cromite 主下载为 `cromite-arm64-apk.zip`：136605705 字节（130.28 MiB），SHA-256 `8c116cabddbf60973554fc1480f4de8a64eb937045cec590c693a5a7a92a7100`。该 ZIP 校验值与 GitHub 官方 APK digest 是两个不同值；表中仍记录内部官方 APK。页面按钮“下载 ZIP”，紧邻“解压后安装 APK”，列表展示 ZIP 大小，详情分别列出 ZIP 和内部 APK 的文件名、字节数与完整 SHA-256。Element 与 Intiface 继续直接下载 APK。

打包使用现有 Python 标准库，ZIP DEFLATE level 9，只收一个官方 APK；每次重新打包后都须重新记录 ZIP 的大小与校验值（ZIP 元数据会影响其校验值），不能复用旧 ZIP digest：

```python
from pathlib import Path
import hashlib, zipfile

# 所有文件都在本次工作目录中，保留已核对的官方原包。
apk = Path(".scratch/android-downloads/arm64_ChromePublic.apk")
archive = Path(".scratch/android-downloads/cromite-arm64-apk.zip")
with zipfile.ZipFile(archive, "x", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as z:
    z.write(apk, arcname=apk.name)
assert archive.stat().st_size < 314572800
print(archive.stat().st_size, hashlib.sha256(archive.read_bytes()).hexdigest())
# 上传后先完整公开回下载 ZIP，并与此 archive 逐字节核对。
# public_zip 是已回下载的本地文件；完整读取会同时校验 ZIP CRC。
public_zip = Path(".scratch/android-downloads/cromite-public.zip")
with zipfile.ZipFile(public_zip) as z:
    assert z.namelist() == [apk.name]
    h = hashlib.sha256()
    size = 0
    with z.open(apk.name) as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            size += len(chunk)
            h.update(chunk)
    assert size == 323809949
    assert h.hexdigest() == "9db12af1af021f42b4371e76d0e9fe476a7085bbbbc76bc410a538d028bf6071"
```

ZIP 上传仍使用上述新 key 预检与 Wrangler 命令，`--content-type application/zip`、`--content-disposition 'attachment; filename="cromite-arm64-apk.zip"'`、现有 immutable 缓存。公开完整 GET 验证为 200、136605705 字节、正确 MIME/下载文件名/缓存头；解压流的大小/SHA-256/CRC 均通过。Element APK、两个源码 ZIP 和两个许可对象亦完整公开回下载并与各自原文件逐字节核对。

校验、来源快照、本地 320/390/1440px 折叠与展开截图、键盘焦点和教程检查保存在 `.scratch/android-downloads/`，维护交付报告为 `implementation-report.md`；这些文件不入 Git。官网尚未部署，DNS、routes、bucket settings 保持原配置。

## 许可证

官网源码采用 [Apache-2.0](LICENSE)，与 lamplit-chat 一致。第三方依赖保留各自许可证。

## Intiface 中文入门维护

`content/guide/intiface-central.md` 为按官方流程重新组织的中文操作指南，不是逐字翻译或官方中文文档。下载页的教程入口只链接本站页面，原英文文档放在教程末尾作来源。截图原样保存在 `static/images/intiface-central/`，通过文章图片链接查看原图；布局保持等比缩放，移动端不横向溢出。更新正文时同时核对当前设置和品牌文档，不复用旧教程已停止支持的 Lovense Connect / HID Dongle 路径。来源、固定上游版本和文件校验记录见 `docs/IMPORTS.md`。
