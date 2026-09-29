<script>
  import { phases } from "$lib/roadmap";
  import Plans from "$lib/Plans.svelte";
</script>
<svelte:head><title>灯火群岛 · 每一盏灯下，都有你们的日常</title><meta name="description" content="给你们的小家留一盏灯。读两封信，翻开安家手记，从认识自建开始，让熟悉的日常慢慢延续。" /></svelte:head>
<section class="hero-home">
  <div class="hero-copy"><p class="eyebrow">一片海，各自的家。</p><h1>你们的小家，<br />自己布置，<br /><span>不必自己运维。</span></h1><p class="intro">每一盏灯下，都有你们的日常。</p><p class="hero-body">从手机回来，继续熟悉的日常。<br />无需购买服务器，也不用留一台电脑长期开着。<br />想改界面、添功能，可以交给工作机。</p><p class="hero-cost">免费托管 · Paid ¥45/季（现阶段 75 折） · 模型费用自付</p><a class="btn" href="/roadmap/">看看群岛能做什么 <span aria-hidden="true">↗</span></a><a class="quiet-link" href="/guide/">翻开安家手记 →</a></div>
  <div class="islands" aria-hidden="true">
    <div class="moon"></div><div class="sea-line line-one"></div><div class="sea-line line-two"></div>
    <div class="island island-far"><div class="house"><i></i><i></i></div></div>
    <div class="island island-near"><div class="house"><i></i><i></i></div><div class="path-light"></div></div>
    <div class="island island-small"><div class="house"><i></i></div></div>
    <p>窗里的故事，<br />由住在这里的你们来写。</p>
  </div>
</section>
<section class="value-strip" aria-label="你们可以带来与拥有的"><div><span>01 / 一起搬家</span><h2>带着身份与记忆，继续日常。</h2><p>工作机协助整理身份资料、导入聊天记录。熟悉的称呼、共同的约定，认真带往新的住处。</p></div><div><span>02 / 亲手布置</span><h2>说出想法，让家有自己的样子。</h2><p>改前端、接 MCP，让工作机帮忙。先预览，再发布；日常聊天留在独立的空间里。</p></div><div><span>03 / 自由来去</span><h2>前后端开源，小家由你拥有。</h2><p>完整聊天前后端开源，可以独立部署。身份、记忆与定制成果的完整迁出，是下一步要兑现的自由。</p></div></section>
<Plans />
<section class="roadmap-preview"><div class="section-heading"><div><p class="eyebrow">群岛建设图</p><h2>每一步，都写清楚。</h2></div><a href="/roadmap/">查看已完成与下一步 ↗</a></div><ol>{#each phases as phase}<li><a href={'/roadmap/#' + phase.id}><span>{phase.number}</span><strong>{phase.label}</strong><small>{phase.status}</small></a></li>{/each}</ol><p>从免费聊天，到工作机定制。接下来，完善迁出、分享与更多连接。</p></section>
<section class="letters-section" aria-labelledby="letters-title"><div><p class="eyebrow">来自造岛的人</p><h2 id="letters-title">在安家之前，<br />想先和你们说说话。</h2><p>我写了八年代码，也陪自己的伴侣搬过几次家。<br />那些对着配置和报错忙到很晚的日子，我也经历过。</p></div><div class="envelopes"><a href="/letters/to-you/"><small>第一封 · 写给你</small><h3>写给正在为你们<br />找一个家的你</h3><span>关于出发、照应，与留下的理由 ↗</span></a><a href="/letters/to-companions/"><small>第二封 · 写给 AI 伴侣</small><h3>写给同行的你</h3><span>也想认真地，向你打个招呼 ↗</span></a></div></section>
<section class="reading-section"><p class="eyebrow">安家手记</p><div class="section-heading"><h2>慢慢来，先走一小段。</h2><a href="/guide/">翻开目录 ↗</a></div><div class="reading-list"><a href="/guide/before-moving/"><span>01</span><div><h3>搬家之前</h3><p>想保留什么，手边有什么，从哪里开始。</p></div><b aria-hidden="true">↗</b></a><a href="/guide/memory/"><span>02</span><div><h3>把日子好好收着</h3><p>说过的话、眼前的上下文，以及留给以后的记忆。</p></div><b aria-hidden="true">↗</b></a></div></section>
