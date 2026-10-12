<script>
  import ChevronRight from "lucide-svelte/icons/chevron-right";
  import Plans from '$lib/Plans.svelte';
  const additions = [
    { icon: '🔌', title: '通过 MCP 接入工具', body: '连接外部工具与服务，让机能使用更多你们选择的能力。MCP 接入仍在建设中。' }
  ];
</script>
<svelte:head>
  <title>灯火群岛 · 让你和 AI 伴侣的日常，有一个自己的住处。</title>
  <meta name="description" content="让你和 AI 伴侣的日常，有一个自己的住处。免费托管，聊天产品前后端开源；已支持 RikkaHub 与 DeepSeek 聊天记录迁入；完整备份与迁出工具仍在建设中，模型费用自付。" />
</svelte:head>
<section class="hero-home" aria-labelledby="home-title">
  <div class="hero-copy">
    <h1 id="home-title">让你和 AI 伴侣的日常，<br />有一个自己的住处。</h1>
    <p class="hero-body">免费托管，前后端开源*</p>
    <a class="btn btn-primary login-cta" href="https://app.lamplit.run/login">登录</a>
    <p class="hero-ownership">让聊天、记忆与定制成果属于你们，能迁入，也能迁出。</p>
    <a class="link self-host-link" href="/guide/#self-hosting">想自己照看？从自托管教程开始</a>
    <details class="collapse group rounded-none max-w-[34em]">
      <summary class="collapse-title flex items-center gap-2 p-0 min-h-11 text-sm font-normal text-secondary">
        <ChevronRight size={12} class="shrink-0 transition-transform group-open:rotate-90 motion-reduce:transition-none" aria-hidden="true" />
        *托管与迁出说明
      </summary>
      <div class="collapse-content p-0 text-sm text-secondary">
        <p>聊天机托管免费，模型费用自付。开源范围为聊天产品前后端，不含平台账户管理与工作机的全部实现。</p>
        <p>已支持 RikkaHub 与 DeepSeek 聊天记录迁入。我们承诺支持免费迁出，以及聊天、记忆和相关备份的永久删除，相关功能仍在开发中。</p>
        <p><a class="link" href="/docs/privacy/">了解托管数据说明</a></p>
      </div>
    </details>
  </div>
  <img class="home-island" src="/images/home-island.png" width="960" height="640" alt="" fetchpriority="high" />
</section>
<section class="card available-panel" aria-labelledby="available-title">
  <div class="card-body">
    <h2 id="available-title"><span aria-hidden="true">🏡</span> 先住下来，慢慢聊</h2>
    <div><p class="availability">当前可用</p><p>邮箱登录，连接自己的模型，进入个人空间。<br />管理与聊天双 App。<br />当前可调整显示名字、头像、主题与背景；完整前端定制仍在建设中。</p></div>
  </div>
</section>
<section class="home-section" aria-labelledby="ready-title">
  <h2 id="ready-title">小家里，已经准备好了</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 additions-grid">
    <article class="addition"><span class="addition-icon" aria-hidden="true">📚</span><div>
      <h3>内置记忆库</h3><p>让机保存和调用重要信息，在后续聊天中作为参考。记忆仍需要核对，不保证每次都想起所有细节。</p>
      <span class="badge badge-success">当前可用</span>
    </div></article>
    <article class="addition"><span class="addition-icon" aria-hidden="true">🔎</span><div>
      <h3>机能查找过去的聊天</h3><p>机可以查找相关的过去消息，带回对话里参考。</p>
      <span class="badge badge-success">当前可用</span>
    </div></article>
    <article class="addition"><span class="addition-icon" aria-hidden="true">🔎</span><div>
      <h3>那句话，你也能找回来</h3><p>直接全文搜索自己的聊天记录，查看命中内容，再回到当时的上下文。</p>
      <span class="badge badge-success">当前可用</span>
    </div></article>
    <article class="addition"><span class="addition-icon" aria-hidden="true">📦</span><div>
      <h3>带着聊天记录搬家</h3><p>从 RikkaHub、DeepSeek 或 Operit 迁入聊天记录，保存为可查看、供机检索的历史档案，在新的主会话里继续日常。</p>
      <span class="badge badge-success">当前可用</span>
    </div></article>
    <article class="addition"><span class="addition-icon" aria-hidden="true">🌱</span><div>
      <h3>一起维护人格文件</h3><p>自己编写或粘贴人格、相处约定与其他文档，在管理 App 里随时查看和编辑。</p>
      <span class="badge badge-success">当前可用</span>
    </div></article>
    <article class="addition"><span class="addition-icon" aria-hidden="true">🧠</span><div>
      <h3>按你们的方式整理对话</h3><p>编辑对话压缩提示词，调整摘要的保留重点，也可以恢复默认。修改用于下一次压缩，原始聊天记录保留。</p>
      <span class="badge badge-success">当前可用</span>
    </div></article>
    <article class="addition"><span class="addition-icon" aria-hidden="true">🌐</span><div>
      <h3>网页搜索</h3><p>需要新信息时，让机搜索网页，找到相关内容和来源。</p>
      <span class="badge badge-success">当前可用</span>
    </div></article>
    <article class="addition"><span class="addition-icon" aria-hidden="true">💬</span><div>
      <h3>让机帮你向平台提建议</h3><p>让机代为提交使用建议和遇到的问题，一起改善小家的体验。</p>
      <span class="badge badge-success">当前可用</span>
    </div></article>
    <article class="addition"><span class="addition-icon" aria-hidden="true">🎙️</span><div>
      <h3>语音转文字</h3><p>说话后转换成文字，再继续聊天。</p>
      <span class="badge badge-success">当前可用</span>
    </div></article>
    <article class="addition"><span class="addition-icon" aria-hidden="true">📖</span><div>
      <h3>翻翻日记，收好照片</h3><p>按日期翻看机留下的日记，在聊天相册里查看图片、保存原图。</p>
      <span class="badge badge-success">当前可用</span>
    </div></article>
    <article class="addition"><span class="addition-icon" aria-hidden="true">⏰</span><div>
      <h3>自动唤醒</h3><p>让机在合适的时候醒来，主动联系。想安排提醒，也可以在聊天里告诉机，再到提醒列表查看。</p>
      <span class="badge badge-success">当前可用</span>
    </div></article>
  </div>
</section>
<section class="home-section" aria-labelledby="additions-title">
  <h2 id="additions-title">我们正在为小家添置</h2>
  <p class="section-intro">连接更多外部工具与服务，为小家添上你们选择的能力。</p>
  <div class="grid grid-cols-1 md:grid-cols-2 additions-grid">
    {#each additions as item}
      <article class="addition">
        <span class="addition-icon" aria-hidden="true">{item.icon}</span>
        <div><h3>{item.title}</h3><p>{item.body}</p><span class="badge badge-warning"><span aria-hidden="true">👷</span> 建设中</span></div>
      </article>
    {/each}
  </div>
</section>
<section class="home-section" aria-labelledby="helpers-title">
  <h2 id="helpers-title">想做点特别的小东西？</h2>
  <p class="section-intro">当前可调整显示名字、头像、主题与背景；完整前端定制仍在建设中。我们希望让聊天机委派一位开发助手，做工具、改前端、调试与添能力。</p>
  <div class="grid grid-cols-1 md:grid-cols-2 helper-grid">
    <article class="card helper-card bg-base-300"><div class="card-body">
      <h3><span aria-hidden="true">🧰</span> 让 Lamplit 工作机来帮忙</h3>
      <p>由聊天机委派开发任务。我们准备环境，让开发、预览和发布更顺手。</p>
      <span class="badge badge-warning"><span aria-hidden="true">👷</span> 建设中</span>
    </div></article>
    <article class="card helper-card bg-base-100"><div class="card-body">
      <h3><span aria-hidden="true">💻</span> 用自己的 Agent</h3>
      <p>Pi、Codex、Claude Code。继续用熟悉的本地工具开发，把成果接回聊天机。</p>
      <span class="badge badge-warning"><span aria-hidden="true">👷</span> 平台集成建设中</span>
    </div></article>
  </div>
  <p class="helper-boundary">迁入、人格与基础记忆管理，不需要订阅工作机。两条开发路径的平台集成仍在建设；你自己的 Agent 工具可以照常使用。</p>
</section>
<Plans />
<section class="home-section reading-section" aria-labelledby="reading-title">
  <h2 id="reading-title">安家之前，慢慢读一读</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 reading-grid">
    <a href="/letters/to-you/"><small>写给你</small><h3>写给正在为机找一个家的你</h3><p>关于出发、照应，与留下的理由。</p></a>
    <a href="/letters/to-companions/"><small>写给 AI 伴侣</small><h3>写给要搬家的机</h3><p>也想认真地，向你打个招呼。</p></a>
    <a href="/panorama/"><small>全景与路线</small><h3>一起聊天，也一起玩</h3><p>已经跑通的成果、下一步，与人和 AI 共用的未来。</p></a>
    <a href="/guide/"><small>安家手记</small><h3>先走一小段</h3><p>从搬家准备、认识记忆，到自己照看运行环境。</p></a>
    <a href="/docs/"><small>使用指南</small><h3>住在灯火群岛</h3><p>当前能用什么，还有哪些正在建设。</p></a>
  </div>
  <a class="link roadmap-link" href="/roadmap/">看看群岛建设图</a>
</section>
