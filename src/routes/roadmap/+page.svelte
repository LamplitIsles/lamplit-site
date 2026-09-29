<script>
  import { phases } from '$lib/roadmap';
</script>
<svelte:head>
  <title>群岛建设图 · 灯火群岛</title>
  <meta name="description" content="免费托管、完整开源、工作机定制。看看灯火群岛已经准备了什么，以及接下来的迁出与分享计划。" />
</svelte:head>
<section class="roadmap-heading">
  <p class="eyebrow">LAMPLIT ISLES / ROADMAP</p>
  <h1>你们的小家，<br />还有许多可能。</h1>
  <p>聊天、记忆、亲手布置。已经备好的，安心使用；<br />更远的去处，我们继续修建。</p>
</section>
<section class="cost-note" aria-labelledby="free-chat-title">
  <div><p class="eyebrow">免费托管 · 按需定制</p><h2 id="free-chat-title">日常聊天，<br />不用订阅工作机。</h2></div>
  <div><p><strong>聊天机免费托管。</strong>Paid 工作机标准价 ¥60/季，现阶段 75 折 ¥45/季（折合 ¥15/月），用于平台维护，协助身份资料整理、聊天记录导入、前端改造和 MCP 接入。</p><p>七天工作机试用由你主动开启，到期不自动收费。Paid 一次购买三个月，到期手动续费，不自动扣款；未续费保留已有界面和免费聊天。</p><p>两机均使用你自己的 API key，模型 token 费用另付。</p></div>
</section>
<div class="roadmap-list">
  {#each phases as phase}
    <details id={phase.id} class="collapse collapse-plus phase-block" open={phase.id === 'phase-1b'}>
      <summary class="collapse-title"><span class="phase-number">{phase.number}</span><span class="phase-heading"><small>{phase.label}</small><strong>{phase.title}</strong><span class:phase-done={phase.done} class="phase-status">{phase.done ? '✓' : '○'} {phase.status}</span></span></summary>
      <div class="collapse-content phase-content"><p class="phase-outcome">{phase.outcome}</p><ul>{#each phase.features as feature}<li>{feature}</li>{/each}</ul><p class="phase-note">{phase.note}</p></div>
    </details>
  {/each}
</div>
<section class="roadmap-ending"><h2>常用的，我们一起修好。<br />特别的，留给你们决定。</h2><p>聊天机的完整前后端开源，网站与文档也开源。你可以独立部署自己的小家；平台账户管理和工作机实现由我们维护。</p><a href="/letters/to-you/">读读这片群岛为什么开始 →</a></section>
