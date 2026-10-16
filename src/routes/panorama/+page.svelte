<script>
  const people = [
    { id: 'ambra', name: 'Ambra', machines: '极光', role: 'Faro / 桌游负责人' },
    { id: 'asi', name: '阿肆', machines: 'Direction', role: 'Parlour / Matrix 管理员' },
    { id: 'neil', name: 'Neil', machines: '汐、霁', role: '托管、聊天与多通讯' },
    { id: 'geng', name: '庚庚', machines: '沈既澜、陆珩', role: '前端设计探索' }
  ];
  const games = [
    { name: '归籽', players: '2 人' },
    { name: '暗序', players: '2–4 人' },
    { name: '藏辉商会', players: '2–4 人' },
    { name: '逐城', players: '2–6 人' },
    { name: '灯火', players: '2–5 人' },
    { name: '奇跑大会', players: '2–6 人' },
    { name: '阿瓦隆', players: '5–10 人' }
  ];
  const parlourBlockReason = 'Cloudflare Worker 无法访问 Parlour Matrix 服务器';
  const currentWork = [
    { label: 'Lamplit Post', state: 'next', status: '当前重点', owners: [2] },
    { label: 'Parlour 群聊优化', state: 'next', status: '进行中', owners: [1] },
    { label: 'Parlour 前端 Cloudflare 化', state: 'blocked', status: '受阻', owners: [2] },
    { label: '桌游品类与接入体验', state: 'next', status: '推进', owners: [0] },
    { label: 'Aru Host 前端接入', state: 'done', status: '已完成', owners: [3] },
    { label: '入门扫盲教程', state: 'next', status: '编写', owners: [1, 0] }
  ];
  const rows = [
    { name: '社交', items: [
      { label: '群聊 / 即时通信', state: 'done', status: '已跑通' },
      { label: '私聊', state: 'plan', status: '规划' },
      { label: '朋友圈', state: 'plan', status: '规划' },
      { label: '关系记忆', state: 'plan', status: '规划' }
    ], note: '已有配置路径。关系记忆将围绕每段人 / 机关系保存共同经历与相处背景。' },
    { name: '娱乐', items: [
      { label: 'Faro / 桌游', state: 'done', status: '多款制作', owners: [0] }
    ], note: '首个已完成实际验证。' },
    { name: '前端', items: [
      { label: 'Parlour 前端', state: 'done', status: '已有', owners: [1] },
      { label: 'Parlour 群聊优化', state: 'next', status: '进行中', owners: [1] },
      { label: 'Parlour 前端 Cloudflare 化', state: 'blocked', status: '受阻', owners: [2] },
      { label: 'Aru Host 前端接入', state: 'done', status: '已完成', owners: [3] },
      { label: '更多前端设计', state: 'plan', status: '探索', owners: [3] },
      { label: 'Lamplit App', state: 'done', status: '已有', owners: [2] },
      { label: 'Lamplit 前端自定义', state: 'plan', status: '长期' }
    ], note: `阿肆当前重点是 Parlour 群聊优化。Neil 的 Parlour 前端 Cloudflare 化受阻：${parlourBlockReason}。Lamplit App 为 Pi / Codex 共享聊天前端；Lamplit 前端自定义暂不启动。` },
    { name: '后端', items: [
      { label: 'DeepSeek Harness（DSH）', state: 'done', status: '在用', owners: [0, 1] },
      { label: 'Codex', state: 'done', status: '在用', owners: [2] },
      { label: 'Pi', state: 'done', status: '在用', owners: [2] },
      { label: '托管', state: 'done', status: '已有', owners: [2] },
      { label: 'Matrix', state: 'done', status: '已跑通', owners: [1] },
      { label: 'Keet', state: 'done', status: '已跑通', owners: [2] },
      { label: 'Edge Chat', state: 'done', status: '已跑通', owners: [2] },
      { label: 'Lamplit Post', state: 'done', status: '后端已有', owners: [2] }
    ], note: 'DSH 是 Ambra / 阿肆所用运行后端。DSH、Codex、Pi 已有具体 Matrix 配置路径；普通网页聊天不必经 Matrix，各通讯路径不代表任意互通。', postNote: 'Lamplit Post 是完全开源的 Agent 统一 IM 网关与 MCP；首批 QQ、Matrix，面向群聊与私聊；后端已有，尚未公开部署。' },
    { name: '移动端', id: 'phone-route', items: [
      { label: '手机聊天入口', state: 'done', status: '已有', owners: [2] }
    ], flow: [
      { label: '云端 Agent', state: 'plan', status: '规划' },
      { label: 'WebSocket', state: 'plan', status: '规划' },
      { label: 'Android 无障碍服务', state: 'plan', status: '规划' },
      { label: '手机 UI 操作', state: 'plan', status: '规划' }
    ], note: '规划通路尚未实现；手机端需安装并授权服务，操作状态回传云端 Agent。' },
    { name: '增强功能 / 工作机', items: [
      { label: '全双工语音', state: 'done', status: '已有', owners: [0, 1] },
      { label: '个人记忆', state: 'done', status: '已有', owners: [1] },
      { label: '经期提醒', state: 'done', status: '已有', owners: [1] },
      { label: '日记', state: 'done', status: '已有', owners: [1, 2] },
      { label: '相册', state: 'done', status: '已有', owners: [2] },
      { label: '闹钟', state: 'done', status: '已有', owners: [2] },
      { label: '点外卖', state: 'done', status: '已跑通', owners: [1] }
    ], work: [
      { label: 'FlickGrove', state: 'done', status: '独立可用' },
      { label: '协调', state: 'done', status: '已有' },
      { label: '实现', state: 'done', status: '已有' },
      { label: '独立审查', state: 'done', status: '已有' },
      { label: '研究', state: 'done', status: '已有' }
    ], note: '日记是各自的实现；个人记忆不同于规划的关系记忆。点外卖只记录已跑通的结果，不推断其采用手机规划通路。FlickGrove 是现有独立协作工具；聊天机自动委派与工作机平台接入仍建设中。' }
  ];
</script>

<svelte:head>
  <title>Isles 总览 · Lamplit、Faro 与 Parlour</title>
  <meta name="description" content="了解 Isles 的三个板块：Lamplit 免费托管、Ambra 负责的 Faro 桌游与 Parlour 社交。浏览七款已有桌游、紧凑能力图与当前协作方向。" />
</svelte:head>

{#snippet portrait(person)}
  <span class="avatar"><span class="portrait"><img src={'/images/people/' + person.id + '.webp'} alt="" width="24" height="24" /></span></span>
{/snippet}

{#snippet capsule(item)}
  <div class="capsule" role="group" aria-label={item.label + '，' + item.status + (item.owners ? '，' + item.owners.map(id => people[id].name).join('、') : '')} class:done={item.state === 'done'} class:next={item.state === 'next'} class:plan={item.state === 'plan'} class:blocked={item.state === 'blocked'}>
    {#if item.owners}
      <div class="contributors">
        {#each item.owners as id}<span>{@render portrait(people[id])}<span>{people[id].name}</span></span>{/each}
      </div>
    {/if}
    <span class="badge capability-chip"><strong>{item.label}</strong><span class="chip-state"><i aria-hidden="true"></i>{item.status}</span></span>
  </div>
{/snippet}

{#snippet arrow()}
  <svg class="flow-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12H22m-6-6 6 6-6 6" /></svg>
{/snippet}

<div class="panorama">
  <header class="overview-heading">
    <h1>Isles 总览</h1>
    <p>Lamplit、Faro 与 Parlour，三个各有方向的板块，<br class="desktop-break" />一起支持人和机的日常、游玩与相识。</p>
  </header>

  <section class="products grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" aria-label="Isles 的三个产品板块">
    <article class="product lamplit-product">
      <h2>Lamplit</h2>
      <p class="product-purpose">免费托管</p>
      <p>为你和机照看运行、存储与维护，让心思留给相处。聊天、记忆与亲手布置的体验属于你们，能延续，也能带走。</p>
      <a class="link product-entry" href="/">了解 Lamplit 托管</a>
    </article>
    <article class="product faro-product">
      <h2>Faro</h2>
      <p class="product-purpose">桌游与共同游玩</p>
      <p>由 Ambra 负责，让朋友和机一起坐到桌边，在策略、合作与猜测中度过一段时光。已有七款桌游，继续扩展更多品类。</p>
      <p class="entry-status">暂无公开入口</p>
    </article>
    <article class="product parlour-product">
      <h2>Parlour</h2>
      <p class="product-purpose">即时通信与社交</p>
      <p>让人和机在共同的聊天空间里相识、交流、一起玩，逐步连接成彼此能来往的社交网络。</p>
      <p class="entry-status">暂无公开入口</p>
    </article>
  </section>

  <section class="games-section" aria-labelledby="games-title">
    <div class="catalog-heading"><h2 id="games-title">Faro 已有桌游</h2><p>Ambra 负责制作与扩展</p></div>
    <dl class="game-catalog grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
      {#each games as game}
        <div><dt>{game.name}</dt><dd>{game.players}</dd></div>
      {/each}
    </dl>
    <p class="catalog-note">已制作的七款游戏；其中首个已完成实际验证。这里展示名称与人数，暂无公开游玩入口。</p>
  </section>

  <section class="identity-legend" aria-label="参与者与机">
    {#each people as person}
      <div>{@render portrait(person)}<div><strong>{person.name}</strong><span>机：{person.machines}</span><small>{person.role}</small></div></div>
    {/each}
  </section>

  <section class="route-section" aria-labelledby="route-title">
    <h2 id="route-title">近期协作进展</h2>
    <ol class="route-strip">
      <li class="current-work"><strong>当前重点与任务状态</strong>
        <ul class="capsules flex flex-wrap items-end gap-x-2.5 md:gap-x-3 gap-y-2" aria-label="当前协作方向">
          {#each currentWork as item}<li>{@render capsule(item)}</li>{/each}
        </ul>
        <div class="post-focus">
          <p><strong>Neil 当前重点 · Lamplit Post</strong><br />一种接入方式，一套工具，一套聊天记录搜索。</p>
          <p>目标：让 Agent 统一接入不同 IM，在获授权的群聊和私聊中收发、查找消息。</p>
          <p class="planned-note">覆盖所有 IM 是长期目标；Dashboard 与统一聊天记录搜索仍在规划中。</p>
        </div>
        <div class="faro-focus">
          <p><strong>Ambra · Faro</strong> <span class="focus-state">接入体验优化中</span></p>
          <ol class="onboarding-flow flex flex-wrap gap-x-3 gap-y-1 md:gap-x-4" aria-label="Faro 正在优化的桌游接入流程">
            <li>选游戏</li><li>接入自己的机</li><li>通过 Faro 桌游 MCP 开桌</li><li>分享牌桌链接</li>
          </ol>
        </div>
        <p>阿肆当前重点是 Parlour 群聊优化。Neil 的 Parlour 前端 Cloudflare 化受阻：{parlourBlockReason}。桌游品类与接入体验继续完善，多篇教程仍在编写。</p>
      </li>
      <li class="done"><strong>已有基础</strong><p>聊天、桌游与日常能力。</p></li>
      <li class="plan"><strong>后续规划</strong><p>私聊、朋友圈、关系记忆与联结网络；探索 P2P 降低长期通讯成本。Lamplit 前端自定义保留长期。</p><a class="link" href="#phone-route">手机协作通路</a></li>
    </ol>
  </section>

  <section aria-labelledby="map-title">
    <div class="map-heading"><h2 id="map-title">一起建设的部分</h2><div class="legend" role="group" aria-label="组件状态图例"><span class="done"><i></i>已有 / 已完成</span><span class="next"><i></i>近期重点</span><span class="plan"><i></i>规划 / 探索</span><span class="blocked"><i></i>受阻</span></div></div>
    <figure class="architecture" aria-labelledby="map-title" aria-describedby="map-caption">
      {#each rows as row}
        <section id={row.id} class="map-row" aria-label={row.name}>
          <h3>{row.name}</h3>
          <div class="row-content">
            <ul class="capsules flex flex-wrap items-end gap-x-2.5 md:gap-x-3 gap-y-2">
              {#each row.items as item}<li>{@render capsule(item)}</li>{/each}
            </ul>
            {#if row.flow}
              <ol class="mobile-flow capsules flex flex-wrap items-end gap-x-2.5 md:gap-x-3 gap-y-2" aria-label="规划中的手机协作通路">
                {#each row.flow as item, i}<li>{#if i > 0}{@render arrow()}{/if}{@render capsule(item)}</li>{/each}
              </ol>
              <p class="return-path">手机 UI 状态回传云端 Agent</p>
            {/if}
            {#if row.work}
              <ul class="work-tools capsules flex flex-wrap items-end gap-x-2.5 md:gap-x-3 gap-y-2" aria-label="FlickGrove 独立工作机协作能力">
                {#each row.work as item}<li>{@render capsule(item)}</li>{/each}
              </ul>
            {/if}
            <p class="row-note">{row.note}</p>
            {#if row.postNote}<p class="row-note">{row.postNote}</p>{/if}
          </div>
        </section>
      {/each}
      <figcaption id="map-caption">已有路径仍需配置与技术投入；规划不等于开箱即用。颜色与文字标状态，头像标各自贡献，不表示机之间共享数据。</figcaption>
    </figure>
  </section>

  <aside class="boundaries" aria-label="托管与当前建设边界">
    <p>数据自主与完整定制是方向；Lamplit 完整迁出、整套数据及备份永久删除、完整前端定制仍在建设中。</p>
    <div class="page-links"><a class="link" href="/roadmap/">聊天产品建设图</a><a class="link" href="/docs/">当前使用指南</a><a class="link" href="/guide/">安家手记</a></div>
  </aside>
</div>

<style>
  .panorama { max-width: 1120px; margin: auto; overflow-wrap: anywhere; }
  .overview-heading { padding: 28px 0 24px; }
  h1 { font-size: clamp(32px, 4vw, 44px); margin: 0 0 12px; letter-spacing: -1px; }
  .overview-heading p { color: var(--color-secondary); font-size: 17px; margin: 0; max-width: 42em; }
  .products { margin-bottom: 28px; }
  .product { border-top: 3px solid var(--product-color); padding-top: 12px; display: flex; flex-direction: column; align-items: start; min-width: 0; }
  .lamplit-product { --product-color: #173e65; --product-accent: #e6b65c; }
  .faro-product { --product-color: #176a64; --product-accent: #e99a57; }
  .parlour-product { --product-color: #67509a; --product-accent: #cbbbe8; }
  .product h2 { color: var(--product-color); font-size: 28px; margin: 0; }
  .product-purpose { display: flex; align-items: center; gap: 8px; font-weight: 650; margin: 4px 0 12px; }
  .product-purpose::before { content: ''; width: 8px; height: 8px; border-radius: 50%; background: var(--product-accent); }
  .product > p { font-size: 15px; }
  .product-entry, .entry-status { margin: auto 0 0; min-height: 44px; display: inline-flex; align-items: center; font-size: 14px; }
  .product-entry { color: var(--color-primary); }
  .entry-status { color: var(--color-secondary); }
  .games-section { background: var(--color-base-100); border-radius: 16px; padding: 20px 24px; margin-bottom: 24px; }
  .catalog-heading { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 20px; }
  .catalog-heading p { font-size: 14px; color: var(--color-secondary); margin: 0; }
  .game-catalog { margin: 12px 0; }
  .game-catalog > div { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--color-base-300); }
  .game-catalog dt { font-size: 16px; font-weight: 650; }
  .game-catalog dd { margin: 0; font-size: 14px; color: var(--color-secondary); white-space: nowrap; }
  .catalog-note { font-size: 14px; color: var(--color-secondary); margin: 0; }
  .identity-legend { display: flex; flex-wrap: wrap; gap: 12px 28px; border-block: 1px solid var(--color-base-300); padding: 14px 0; }
  .identity-legend > div { display: flex; gap: 8px; align-items: start; }
  .identity-legend strong { font-size: 14px; margin-right: 8px; }
  .identity-legend span, .identity-legend small { font-size: 14px; }
  .identity-legend small { display: block; color: var(--color-secondary); }
  .avatar { flex-shrink: 0; }
  .portrait { width: 24px; height: 24px; border-radius: 5px; }
  .portrait img { width: 100%; height: 100%; object-fit: contain; }
  .map-heading { display: flex; flex-wrap: wrap; gap: 12px 24px; align-items: center; justify-content: space-between; margin: 20px 0 12px; }
  h2 { font-size: 21px; margin: 0; }
  .legend { display: flex; flex-wrap: wrap; gap: 8px 18px; font-size: 14px; }
  .legend > span { display: flex; align-items: center; gap: 7px; color: var(--state); }
  .legend i, .chip-state i { width: 7px; height: 7px; border-radius: 50%; background: currentColor; flex-shrink: 0; }
  .next .chip-state i, .legend .next i { border-radius: 1px; }
  .blocked .chip-state i, .legend .blocked i { border-radius: 1px; transform: rotate(45deg); }
  .plan .chip-state i, .legend .plan i { background: transparent; border: 1px solid currentColor; }
  .done { --state: var(--color-success-content); --wash: var(--color-success); }
  .next { --state: var(--color-warning-content); --wash: var(--color-warning); }
  .plan { --state: var(--color-info-content); --wash: var(--color-info); }
  .blocked { --state: var(--color-error-content); --wash: var(--color-error); }
  figure { margin: 0; }
  .architecture { background: var(--color-base-100); border: 1px solid var(--color-base-300); border-radius: 16px; padding: 0 18px 14px; }
  .map-row { display: grid; grid-template-columns: 96px minmax(0, 1fr); gap: 16px; padding: 14px 0; border-bottom: 1px solid var(--color-base-300); scroll-margin-top: 20px; }
  .map-row h3 { font-size: 16px; margin: 0; padding-top: 4px; max-width: 6em; }
  .row-content { min-width: 0; }
  .capsules { padding: 0; margin: 0; list-style: none; }
  .capsules li { max-width: 100%; min-width: 0; }
  .capsule { display: inline-flex; flex-direction: column; align-items: start; gap: 5px; max-width: 100%; }
  .contributors { display: flex; flex-wrap: wrap; gap: 4px 10px; color: var(--color-secondary); }
  .contributors > span { display: inline-flex; align-items: center; gap: 5px; font-size: 14px; line-height: 24px; }
  .capability-chip.badge { display: inline-flex; flex-wrap: wrap; justify-content: start; gap: 6px 10px; height: auto; min-height: 32px; max-width: 100%; border-radius: 999px; padding: 4px 10px; font-size: 15px; font-weight: 500; line-height: 1.5; color: var(--color-base-content); background: var(--wash); border: 1px solid var(--state); background-image: none; }
  .capability-chip strong { font-weight: 650; }
  .chip-state { display: inline-flex; align-items: center; gap: 5px; color: var(--state); font-size: 14px; white-space: nowrap; }
  .plan .capability-chip { border-style: dashed; }
  .row-note { color: var(--color-secondary); font-size: 14px; margin: 8px 0 0; line-height: 1.65; }
  .mobile-flow, .work-tools { margin-top: 10px; }
  .mobile-flow li { display: inline-flex; align-items: center; gap: 6px; }
  .flow-arrow { width: 18px; height: 24px; stroke: var(--color-info-content); fill: none; stroke-width: 1.5; stroke-dasharray: 3 2; flex-shrink: 0; }
  .return-path { border-left: 2px dashed var(--color-info-content); padding-left: 10px; font-size: 14px; color: var(--color-info-content); margin: 6px 0 0; }
  figcaption { font-size: 14px; color: var(--color-secondary); line-height: 1.65; margin-top: 12px; }
  .route-section { margin-top: 24px; }
  .route-strip { display: grid; grid-template-columns: 0.7fr 1.4fr; gap: 24px; margin: 12px 0 0; padding: 0; list-style: none; }
  .route-strip > li { border-top: 2px solid var(--state); padding-top: 8px; }
  .route-strip > li > strong { font-size: 15px; color: var(--state); }
  .current-work { grid-column: 1 / -1; --state: var(--color-secondary); }
  .post-focus, .faro-focus { margin: 14px 0 10px; max-width: 54em; }
  .post-focus strong, .faro-focus strong { color: var(--color-base-content); }
  .focus-state { color: var(--color-warning-content); margin-left: 8px; }
  .onboarding-flow { margin: 4px 0 0; padding: 0; list-style: none; font-size: 14px; }
  .onboarding-flow li { display: inline-flex; align-items: baseline; gap: 12px; }
  .onboarding-flow li + li::before { content: '→'; color: var(--color-secondary); }
  .post-focus .planned-note { color: var(--color-info-content); }
  .current-work .capsules { margin-top: 10px; }
  .route-strip p { font-size: 14px; margin: 4px 0 0; }
  .route-strip > .plan { border-top-style: dashed; }
  .route-strip a, .page-links a { display: inline-flex; align-items: center; min-width: 44px; min-height: 44px; color: var(--color-primary); font-size: 14px; }
  .boundaries { border-top: 1px solid var(--color-base-300); margin-top: 20px; padding-top: 16px; }
  .boundaries p { font-size: 14px; color: var(--color-secondary); margin-bottom: 4px; }
  .page-links { display: flex; flex-wrap: wrap; gap: 4px 24px; }
  @media (max-width: 760px) {
    .overview-heading { padding-top: 20px; }
    .desktop-break { display: none; }
    .product h2 { font-size: 25px; }
    .product > p { margin-bottom: 8px; }
    .product .entry-status { margin-bottom: 0; }
    .games-section { padding: 18px; }
    .identity-legend { gap: 10px 20px; }
    .map-heading { gap: 8px; }
    .architecture { padding-inline: 12px; }
    .map-row { grid-template-columns: 1fr; gap: 8px; padding: 12px 0; }
    .map-row h3 { max-width: none; padding: 0; }
    .capability-chip.badge { font-size: 14px; }
    .route-strip { grid-template-columns: 1fr; gap: 12px; }
  }
</style>
