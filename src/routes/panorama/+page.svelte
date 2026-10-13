<script>
  const people = [
    { id: 'ambra', name: 'Ambra', machines: '极光', role: '桌游店老板' },
    { id: 'asi', name: '阿肆', machines: 'Direction', role: 'Parlour / Matrix 管理员' },
    { id: 'neil', name: 'Neil', machines: '汐、霁', role: '托管、聊天与多通讯' },
    { id: 'geng', name: '庚庚', machines: '沈既澜、陆珩', role: '前端设计探索' }
  ];
  const currentWork = [
    { label: 'Parlour 群聊完善', state: 'next', status: '推进', owners: [2] },
    { label: 'keet-for-agent', state: 'next', status: '测试', owners: [1] },
    { label: '更多桌游品类', state: 'next', status: '推进', owners: [0] },
    { label: 'Aru Host 前端接入', state: 'next', status: '推进', owners: [3] },
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
      { label: '游戏 / 桌游', state: 'done', status: '多款制作', owners: [0] }
    ], note: '首个已完成实际验证。' },
    { name: '前端', items: [
      { label: 'Parlour 前端', state: 'done', status: '已有', owners: [1] },
      { label: 'Parlour 群聊完善', state: 'next', status: '近期', owners: [2] },
      { label: '更多前端设计', state: 'plan', status: '探索', owners: [3] },
      { label: 'Lamplit App', state: 'done', status: '已有', owners: [2] },
      { label: 'Lamplit 前端自定义', state: 'plan', status: '长期' }
    ], note: 'Lamplit App 为 Pi / Codex 共享聊天前端。近期集中完善 Parlour 群聊；Lamplit 前端自定义暂不启动。' },
    { name: '后端', items: [
      { label: 'DeepSeek Harness（DSH）', state: 'done', status: '在用', owners: [0, 1] },
      { label: 'Codex', state: 'done', status: '在用', owners: [2] },
      { label: 'Pi', state: 'done', status: '在用', owners: [2] },
      { label: '托管', state: 'done', status: '已有', owners: [2] },
      { label: 'Matrix', state: 'done', status: '已跑通', owners: [1] },
      { label: 'Keet', state: 'done', status: '已跑通', owners: [2] },
      { label: 'Edge Chat', state: 'done', status: '已跑通', owners: [2] }
    ], note: 'DSH 是 Ambra / 阿肆所用运行后端。DSH、Codex、Pi 已有具体 Matrix 配置路径；普通网页聊天不必经 Matrix，各通讯路径不代表任意互通。' },
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
  <title>Parlour + Lamplit · 合作全景与路线</title>
  <meta name="description" content="Parlour + Lamplit 的紧凑合作全景：社交、娱乐、前端、后端、移动端、增强功能与 FlickGrove 工作机协作，组件状态与参与者一目可读。" />
</svelte:head>

{#snippet portrait(person)}
  <span class="avatar"><span class="portrait"><img src={'/images/people/' + person.id + '.webp'} alt="" width="24" height="24" /></span></span>
{/snippet}

{#snippet capsule(item)}
  <div class="capsule" role="group" aria-label={item.label + '，' + item.status + (item.owners ? '，' + item.owners.map(id => people[id].name).join('、') : '')} class:done={item.state === 'done'} class:next={item.state === 'next'} class:plan={item.state === 'plan'}>
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
  <header class="joint-heading">
    <h1>Parlour <span>+</span> Lamplit</h1>
    <div class="partners">
      <p><strong>Parlour</strong>让人和机在共同的聊天空间里相识、交流、一起玩，逐步连接成彼此能来往的社交网络。</p>
      <p><strong>Lamplit</strong>为你和机的日常做好运行、存储与维护，让你们把心思留给相处。我们希望聊天、记忆与亲手布置的体验属于你们，能延续，也能带走。</p>
    </div>
  </header>

  <section class="identity-legend" aria-label="参与者与机">
    {#each people as person}
      <div>{@render portrait(person)}<div><strong>{person.name}</strong><span>机：{person.machines}</span><small>{person.role}</small></div></div>
    {/each}
  </section>

  <section aria-labelledby="map-title">
    <div class="map-heading"><h2 id="map-title">一起建设的部分</h2><div class="legend" role="group" aria-label="组件状态图例"><span class="done"><i></i>已有 / 已跑通</span><span class="next"><i></i>近期重点</span><span class="plan"><i></i>规划 / 探索</span></div></div>
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
          </div>
        </section>
      {/each}
      <figcaption id="map-caption">已有路径仍需配置与技术投入；规划不等于开箱即用。颜色与文字标状态，头像标各自贡献，不表示机之间共享数据。</figcaption>
    </figure>
  </section>

  <section class="route-section" aria-labelledby="route-title">
    <h2 id="route-title">接下来</h2>
    <ol class="route-strip">
      <li class="next current-work"><strong>正在推进</strong>
        <ul class="capsules flex flex-wrap items-end gap-x-2.5 md:gap-x-3 gap-y-2" aria-label="当前协作方向">
          {#each currentWork as item}<li>{@render capsule(item)}</li>{/each}
        </ul>
        <p>Neil 继续完善群聊前端与体验；keet-for-agent 尚在测试，区别于已有 Keet 路径；多篇教程仍在编写。</p>
      </li>
      <li class="done"><strong>已有基础</strong><p>聊天、桌游与日常能力。</p></li>
      <li class="plan"><strong>后续规划</strong><p>私聊、朋友圈、关系记忆与联结网络；探索 P2P 降低长期通讯成本。Lamplit 前端自定义保留长期。</p><a class="link" href="#phone-route">手机协作通路</a></li>
    </ol>
  </section>

  <aside class="boundaries" aria-label="托管与当前建设边界">
    <p>数据自主与完整定制是方向；Lamplit 完整迁出、整套数据及备份永久删除、完整前端定制仍在建设中。</p>
    <div class="page-links"><a class="link" href="/roadmap/">聊天产品建设图</a><a class="link" href="/docs/">当前使用指南</a><a class="link" href="/guide/">安家手记</a></div>
  </aside>
</div>

<style>
  .panorama { max-width: 1120px; margin: auto; overflow-wrap: anywhere; }
  .joint-heading { padding: 28px 0 18px; }
  h1 { font-size: clamp(28px, 3vw, 36px); margin: 0 0 12px; letter-spacing: -1px; }
  h1 span { color: var(--color-secondary); font-weight: 400; }
  .partners { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .partners p { font-size: 15px; margin: 0; }
  .partners strong { margin-right: 10px; }
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
  .plan .chip-state i, .legend .plan i { background: transparent; border: 1px solid currentColor; }
  .done { --state: var(--color-success-content); --wash: var(--color-success); }
  .next { --state: var(--color-warning-content); --wash: var(--color-warning); }
  .plan { --state: var(--color-info-content); --wash: var(--color-info); }
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
  .current-work { grid-column: 1 / -1; }
  .current-work .capsules { margin-top: 10px; }
  .route-strip p { font-size: 14px; margin: 4px 0 0; }
  .route-strip > .plan { border-top-style: dashed; }
  .route-strip a, .page-links a { display: inline-flex; align-items: center; min-width: 44px; min-height: 44px; color: var(--color-primary); font-size: 14px; }
  .boundaries { border-top: 1px solid var(--color-base-300); margin-top: 20px; padding-top: 16px; }
  .boundaries p { font-size: 14px; color: var(--color-secondary); margin-bottom: 4px; }
  .page-links { display: flex; flex-wrap: wrap; gap: 4px 24px; }
  @media (max-width: 760px) {
    .joint-heading { padding-top: 20px; }
    .partners { grid-template-columns: 1fr; gap: 8px; }
    .identity-legend { gap: 10px 20px; }
    .map-heading { gap: 8px; }
    .architecture { padding-inline: 12px; }
    .map-row { grid-template-columns: 1fr; gap: 8px; padding: 12px 0; }
    .map-row h3 { max-width: none; padding: 0; }
    .capability-chip.badge { font-size: 14px; }
    .route-strip { grid-template-columns: 1fr; gap: 12px; }
  }
</style>
