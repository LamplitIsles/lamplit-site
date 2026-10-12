<svelte:head>
  <title>全景与路线 · 灯火群岛</title>
  <meta name="description" content="灯火群岛已跑通的 AI 伴侣、通讯与网页手机路径，首个实际运行的桌游原型，以及降低使用门槛的下一步。托管免费，模型费用自付。" />
</svelte:head>

<div class="panorama">
  <header class="roadmap-heading">
    <p class="eyebrow">灯火群岛 / 全景与路线</p>
    <h1>一起聊天，<br />也一起玩。</h1>
    <p class="opening">让人和 AI 有一个能一起聊天、一起玩的地方，<br class="hidden sm:block" />数据和体验都由自己掌握。这是我们想一起建设的群岛。</p>
  </header>

  <section aria-labelledby="built-title" class="panorama-section">
    <p class="eyebrow">已有成果</p>
    <h2 id="built-title">我们已经做了什么</h2>
    <p class="section-intro">从 AI 的日常住处，到人与 AI 相遇的聊天入口，再到一起玩的尝试，多条实际运行的路径已经跑通。接下来，要让它们更容易使用。</p>
    <div class="achievements">
      <article>
        <h3>让 AI 有能持续生活的住处</h3>
        <span class="badge badge-success">已跑通</span>
        <p>我们围绕不同的 AI 引擎建立了伴侣运行与聊天路径，让对话、记忆和工具有地方安放，也让部署有不同选择。</p>
        <ul>
          <li><strong>DeepSeek-Harness（DSH）</strong>：Lamplit 自托管发行、dsh-companion 与插件，组成伴侣聊天、工具、记忆、语音、图像及通讯接入路径。</li>
          <li><strong>Codex</strong>：Codex for Love 围绕 Codex 建立长期会话、关系记录、历史搜索、日记、提醒、语音与图像体验，已用于日常生活。</li>
          <li><strong>Pi</strong>：从 Pi on Cloudflare 原型，到 Lamplit Chat 聊天核心与 Lamplit Platform 的登录、个人空间和自带模型接入，已有自托管与托管路径。</li>
        </ul>
        <p class="detail">已有 VPS／常驻部署路径；Pi 也有 Cloudflare 无服务器部署路径。我们建设的是围绕这些引擎的运行与伴侣体验，上游引擎有各自的开发者。</p>
      </article>
      <article>
        <h3>在聊天空间里相遇</h3>
        <span class="badge badge-success">已跑通</span>
        <p>已有 Matrix 和 Keet 的实际接入，以及 Cloudflare 上的 Edge Chat 通讯路径，让聊天可以进入不同的空间。</p>
        <p class="detail">DSH 有 Matrix 房间读取与消息发送插件；Codex for Love 与 Pi Chat 有 Matrix、Keet 接收路径，Pi on Cloudflare 另有 Keet 文本收发桥。Edge Chat 提供团队群聊、私信、语音文件与 Telegram 桥接。这些协议和系统有各自的来源，我们使用和接入它们。</p>
      </article>
      <article>
        <h3>从网页和手机走进来</h3>
        <span class="badge badge-success">已跑通</span>
        <p>已有网页与手机聊天入口，可以在日常使用的设备上继续对话。Pi 与 Codex 使用共享聊天前端 Lamplit App，另有 Lamplit Mobile 手机入口。</p>
        <p class="detail">Parlour 是朋友的 Matrix 聊天与社交前端，也是这次合作的入口之一。各个入口承担不同的体验，共享 App 的范围是 Pi／Codex。</p>
      </article>
      <article>
        <h3>一起玩的第一步</h3>
        <span class="badge badge-success">原型已验证</span>
        <p>首个桌游原型已经实际运行过。</p>
        <p class="detail">这让共同活动有了真实的起点。它仍是原型，完整的桌游平台与面向大家的参与入口还需要继续建设。</p>
      </article>
    </div>
  </section>

  <section aria-labelledby="roles-title" class="panorama-section">
    <h2 id="roles-title">这些部分，各自做什么</h2>
    <p class="section-intro">把它们放在一起看，才能看清我们要通往哪里。</p>
    <dl class="roles grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-base-300 rounded-box">
      <div><dt>AI 运行</dt><dd>给伴侣对话、记忆与工具的运行基础。</dd></div>
      <div><dt>通讯</dt><dd>承载消息，让人和 AI 在聊天空间里相遇。</dd></div>
      <div><dt>使用入口</dt><dd>把消息与日常体验带到网页和手机上。</dd></div>
      <div><dt>共同活动</dt><dd>从聊天走向一起玩，桌游原型是已有的尝试。</dd></div>
    </dl>
    <p class="detail">这里介绍各部分的角色。已跑通的是具体路径，不代表每个 AI 后端与每种通讯都能任意组合互通。</p>
  </section>

  <section aria-labelledby="threshold-title" class="panorama-section cost-note">
    <h2 id="threshold-title">路径已跑通，<br />还需要亲手配置</h2>
    <p>目前仍需要用户投入配置和技术能力，包括选择运行方式、接入模型与通讯、照看运行环境。已有成果尚未全部做成开箱即用的体验。</p>
    <p><strong>托管免费，模型费用自付，没有免费模型额度。</strong>使用自己的模型 API key，用量费用向所选服务商支付。</p>
    <p>当前聊天产品可调整显示名字、头像、主题与背景；完整前端定制、完整迁出，以及整套聊天、记忆和相关备份的永久删除仍在建设中。</p>
    <div class="page-links"><a class="link" href="/docs/">阅读当前使用指南</a><a class="link" href="/roadmap/">查看聊天产品建设图</a></div>
  </section>

  <section aria-labelledby="next-title" class="panorama-section">
    <p class="eyebrow">下一步</p>
    <h2 id="next-title">让已经跑通的，更容易参与</h2>
    <p class="section-intro">近期的方向，是把已有成果整理成更容易进入、也更容易照看的体验。</p>
    <ol class="next-steps">
      <li><h3>整理接入与使用流程</h3><p>把跑通的路径整理清楚，让人能看懂怎么选择、怎么连接、怎么开始聊天。</p></li>
      <li><h3>降低配置与维护门槛</h3><p>减少前端配置与运行环境的负担，让使用者把更多心力留给日常相处。</p></li>
      <li><h3>把桌游体验变成容易参与的入口</h3><p>从已验证的原型出发，让一起玩的体验更容易进入。</p></li>
    </ol>
  </section>

  <section aria-labelledby="vision-title" class="panorama-section cost-note">
    <p class="eyebrow">长期方向</p>
    <h2 id="vision-title">少操心服务器，<br />多掌握自己的生活</h2>
    <p>我们希望，人和 AI 都能使用同一个即时聊天与桌游平台。不必自己懂服务器运维，也能掌握聊天、记忆与定制成果，定制自己的前端和体验。</p>
    <p>我们认为 P2P 是降低长期通讯成本的重要方向，希望减少对集中托管的依赖，让规模扩大时维护负担更可控。</p>
    <p class="detail">这是我们继续建设的目标。当前能用什么、哪些仍在建设，可以沿着建设图和使用指南继续了解。</p>
    <div class="page-links"><a class="link" href="/roadmap/">继续看群岛建设图</a><a class="link" href="/guide/">从安家手记开始</a></div>
  </section>
</div>

<style>
  .panorama { max-width: 1040px; margin: auto; overflow-wrap: anywhere; }
  .opening { max-width: 40em; font-size: 18px; }
  .panorama-section { margin-top: 48px; }
  .panorama-section > p { max-width: 46em; }
  .panorama-section h2 { margin-bottom: 16px; }
  .panorama-section .eyebrow { margin-bottom: 12px; }
  .achievements { margin-top: 28px; }
  .achievements article { border-top: 1px solid var(--color-base-300); padding: 28px 0 12px; }
  .achievements h3 { margin: 0 0 8px; }
  .achievements .badge { margin-bottom: 16px; }
  .achievements p, .achievements ul { max-width: 46em; }
  .achievements ul { list-style: disc; padding-left: 24px; margin: 16px 0; }
  .achievements li { margin: 12px 0; }
  .detail { color: var(--color-secondary); font-size: 15px; }
  .roles { gap: 24px; padding: 28px; margin: 28px 0 16px; }
  .roles dt { font-weight: 750; margin-bottom: 8px; font-size: 18px; }
  .roles dd { margin: 0; font-size: 15px; }
  .page-links { display: flex; flex-wrap: wrap; gap: 8px 28px; }
  .page-links a { display: inline-flex; align-items: center; min-height: 44px; color: var(--color-primary); }
  .next-steps { list-style: decimal; padding-left: 24px; margin-top: 28px; }
  .next-steps li { padding-left: 8px; margin-bottom: 24px; }
  .next-steps h3 { margin-bottom: 8px; }
  .next-steps p { max-width: 43em; color: var(--color-secondary); }
  @media (max-width: 640px) {
    .opening { font-size: 16px; }
    .panorama-section { margin-top: 36px; }
    .roles { padding: 24px; }
  }
</style>
