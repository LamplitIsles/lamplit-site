<script>
  import ArrowRight from "lucide-svelte/icons/arrow-right";
  import Check from "lucide-svelte/icons/check";
  import Circle from "lucide-svelte/icons/circle";
  import { phases } from '$lib/roadmap';
</script>
<svelte:head>
  <title>Lamplit 建设图 · Lamplit</title>
  <meta name="description" content="免费托管与开源自托管当前可用。聊天记录迁入、用户全文搜索、人格文件编辑与定制对话压缩已可用；Phase 1 仅 MCP 接入仍在建设，可选开发助手也仍在建设。" />
</svelte:head>
<section class="roadmap-heading">
  <p class="eyebrow">Lamplit / 建设图</p>
  <h1>你们的小家，<br />还有许多可能。</h1>
  <p>聊天、记忆、亲手布置。已经备好的，安心使用；<br />更远的去处，我们继续修建。</p>
  <a class="link inline-flex min-h-11 items-center text-primary" href="/panorama/">了解 Isles 总览</a>
</section>
<section class="cost-note" aria-labelledby="free-chat-title">
  <h2 id="free-chat-title">日常聊天，<br />不用订阅工作机。</h2>
  <div><p><strong>免费托管，模型费用自付。</strong>使用你自己的 API key，模型用量向所选服务商支付。</p><p>迁入、人格与基础记忆管理不需要订阅工作机。工作机是可选的开发助手，两条开发集成路径都在建设，服务与收费方案仍在设计中。</p><a class="link" href="/docs/">阅读当前使用说明</a></div>
</section>
<div class="roadmap-list">
  {#each phases as phase}
    <details id={phase.id} class="collapse collapse-plus phase-block" open={phase.id === 'phase-1'}>
      <summary class="collapse-title"><span class="phase-number">{phase.number}</span><span class="phase-heading"><small>{phase.label}</small><strong>{phase.title}</strong><span class="badge phase-status" class:badge-success={phase.done} class:badge-warning={!phase.done}><svelte:component this={phase.done ? Check : Circle} size={14} aria-hidden="true" /> {phase.status}</span></span></summary>
      <div class="collapse-content phase-content"><p class="phase-outcome">{phase.outcome}</p><ul>{#each phase.features as feature}<li>{feature}</li>{/each}</ul><p class="phase-note">{phase.note}</p></div>
    </details>
  {/each}
</div>
<section class="roadmap-ending"><h2>常用的，我们一起修好。<br />特别的，留给你们决定。</h2><p>聊天机的完整前后端开源，网站与文档也开源。你可以独立部署自己的小家；平台账户管理和工作机实现由我们维护。</p><a href="/letters/to-you/">读读 Lamplit 为什么开始 <ArrowRight size={16} class="inline-block align-middle" aria-hidden="true" /></a></section>
