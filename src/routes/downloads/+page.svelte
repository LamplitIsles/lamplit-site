<script>
  import Download from 'lucide-svelte/icons/download';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import { androidDownloads } from '$lib/downloads';
</script>

<svelte:head>
  <title>下载 · Lamplit</title>
  <meta name="description" content="下载 Intiface Central、Cromite 和 Element Classic 官方安卓安装包，查看版本、文件大小、发布来源与 SHA-256 校验信息。" />
</svelte:head>

<section class="pt-9 pb-8 md:pt-15 md:pb-10" aria-labelledby="downloads-title">
  <p class="eyebrow">Lamplit / 下载</p>
  <h1 id="downloads-title" class="mb-4 text-4xl md:text-5xl">下载</h1>
  <p class="mb-0 text-secondary">一些安装包，放在这里方便取用。</p>
</section>

<ul class="list border-y border-base-300">
  {#each androidDownloads as resource (resource.name)}
    <li class="list-row grid-cols-1 gap-6 rounded-none px-0 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-10 md:py-10">
      <div class="list-col-grow col-start-1 row-start-1 min-w-0">
        <div class="flex flex-wrap items-center gap-3">
          <h2 class="m-0 text-2xl">{resource.name}</h2>
          <span class="badge badge-outline text-secondary">Android</span>
          <span class="badge badge-outline text-secondary">{resource.architecture}</span>
        </div>
        <p class="mt-3 mb-5 text-secondary">{resource.description}</p>
        <dl class="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <div><dt class="text-secondary">版本</dt><dd class="mt-1 font-semibold break-all">{resource.version}</dd></div>
          <div><dt class="text-secondary">下载大小</dt><dd class="mt-1 font-semibold">{(resource.sizeBytes / 1024 / 1024).toFixed(2)} MiB</dd></div>
          <div><dt class="text-secondary">发布日期</dt><dd class="mt-1 font-semibold"><time datetime={resource.publishedAt}>{resource.publishedAt.slice(0, 10)}</time></dd></div>
        </dl>
      </div>
      <div class="col-start-1 row-start-2 flex min-w-0 flex-col gap-2 md:col-start-2 md:row-start-1 md:w-64 md:pt-1">
        <a class="btn btn-primary" href={resource.downloadUrl} aria-label={`下载 ${resource.name} ${resource.format}`}><Download size={18} aria-hidden="true" />下载 {resource.format}</a>
        {#if resource.containedApk}
          <p class="m-0 text-center text-sm font-semibold">解压后安装 APK</p>
        {/if}
        <p class="m-0 text-center text-sm text-secondary">官方原版 · Lamplit 镜像</p>
        {#if resource.tutorialUrl}
          <a class="btn btn-outline mt-2" href={resource.tutorialUrl}>中文图文教程 <ChevronRight size={16} aria-hidden="true" /></a>
        {/if}
        <div class="flex flex-wrap justify-center gap-x-5 text-sm text-secondary">
          <a class="link inline-flex min-h-11 items-center" href={resource.websiteUrl}>官方网站</a>
          <a class="link inline-flex min-h-11 items-center" href={resource.releaseUrl}>发布来源</a>
          <a class="link inline-flex min-h-11 items-center" href={resource.sourceArchiveUrl}>{resource.sourceArchiveLabel}</a>
          {#if resource.upstreamSourceUrl}
            <a class="link inline-flex min-h-11 items-center" href={resource.upstreamSourceUrl}>Chromium 基础源码</a>
          {/if}
          {#if !resource.tutorialUrl}
            <a class="link inline-flex min-h-11 items-center" href={resource.releaseUrl}>其他架构</a>
          {/if}
        </div>
      </div>
      <details class="collapse group list-col-wrap col-span-full row-start-3 rounded-none border-t border-base-300 pt-2 md:row-start-2">
        <summary aria-label={`${resource.name} 来源与文件校验`} class="collapse-title flex min-h-11 items-center gap-2 px-0 py-2 text-sm font-normal text-secondary">
          <ChevronRight size={14} class="shrink-0 transition-transform group-open:rotate-90 motion-reduce:transition-none" aria-hidden="true" />
          来源与文件校验
        </summary>
        <div class="collapse-content px-0 text-sm">
          <dl class="grid grid-cols-1 gap-4 pt-2 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-x-6 md:gap-y-3">
            <dt class="text-secondary">下载文件名</dt><dd class="break-all">{resource.filename}</dd>
            <dt class="text-secondary">下载字节数</dt><dd>{resource.sizeBytes.toLocaleString('en-US')} 字节</dd>
            <dt class="text-secondary">发布时间</dt><dd>{resource.publishedAt.replace('T', ' ').replace('Z', ' UTC')}</dd>
            <dt class="text-secondary">{resource.format} SHA-256</dt><dd><code class="break-all">{resource.sha256}</code><p class="mt-2 mb-0 text-secondary">{resource.containedApk ? '这是下载 ZIP 的校验值；内部 APK 的官方校验值见下方。' : '镜像文件与官方原包及 GitHub 发布校验值一致。'}</p></dd>
            {#if resource.containedApk}
              <dt class="text-secondary">内部 APK 文件名</dt><dd class="break-all">{resource.containedApk.filename}</dd>
              <dt class="text-secondary">内部 APK 大小</dt><dd>{resource.containedApk.sizeBytes.toLocaleString('en-US')} 字节</dd>
              <dt class="text-secondary">内部 APK SHA-256</dt><dd><code class="break-all">{resource.containedApk.sha256}</code><p class="mt-2 mb-0 text-secondary">ZIP 内仅含此官方原版 APK。解压后的大小与 SHA-256 已核对，与 GitHub 发布校验值一致。</p></dd>
            {/if}
            <dt class="text-secondary">适用架构</dt><dd>{resource.architecture}</dd>
            <dt class="text-secondary">源码与许可</dt>
            <dd class="flex flex-wrap gap-x-5">
              <a class="link inline-flex min-h-11 items-center" href={resource.sourceUrl}>官方源码仓库</a>
              <a class="link inline-flex min-h-11 items-center" href={resource.licenseUrl}>{resource.licenseLabel}</a>
              <a class="link inline-flex min-h-11 items-center" href={resource.mirroredLicenseUrl}>许可文件镜像</a>
              {#if resource.buildUrl}
                <a class="link inline-flex min-h-11 items-center" href={resource.buildUrl}>版本构建说明</a>
              {/if}
              {#if resource.sourceNote}
                <p class="w-full mt-2 mb-0 text-secondary">{resource.sourceNote}</p>
              {/if}
            </dd>
          </dl>
        </div>
      </details>
    </li>
  {/each}
</ul>
