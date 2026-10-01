<script>
  import ArrowRight from "lucide-svelte/icons/arrow-right";
  let { data } = $props();
</script>
<svelte:head><title>{data.article.title} · 灯火群岛</title><meta name="description" content={data.article.description} /></svelte:head>
<div class="article-layout">
  <aside><p class="eyebrow">灯火群岛 / {data.article.group}</p><nav aria-label="阅读目录"><ul class="menu">{#each ['两封信','安家手记','使用指南'] as group}<li class="menu-title">{group}</li>{#each data.pages.filter(p => p.group === group) as item}<li><a href={'/' + item.path + '/'} class:menu-active={item.path === data.article.path} aria-current={item.path === data.article.path ? 'page' : undefined}>{item.title}</a></li>{/each}{/each}</ul></nav></aside>
  <div class="paper"><p class="eyebrow">LAMPLIT ISLES · {data.article.group}</p><article class="prose-content">{@html data.article.html}</article><div class="article-end"><span aria-hidden="true">✦</span><a href="/guide/">回到安家手记 <ArrowRight size={16} class="inline-block align-middle" aria-hidden="true" /></a></div></div>
</div>
