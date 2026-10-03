<script>
  import Download from 'lucide-svelte/icons/download';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import { intifaceAndroid as resource } from '$lib/downloads';

  const sizeMiB = (resource.sizeBytes / 1024 / 1024).toFixed(2);
</script>

<svelte:head>
  <title>下载 · 灯火群岛</title>
  <meta name="description" content="下载 Intiface Central Android 官方 APK，查看版本、文件大小、发布来源与 SHA-256 校验信息。" />
</svelte:head>

<section class="pt-9 pb-8 md:pt-15 md:pb-10" aria-labelledby="downloads-title">
  <p class="eyebrow">LAMPLIT ISLES / DOWNLOADS</p>
  <h1 id="downloads-title" class="mb-4 text-4xl md:text-5xl">下载</h1>
  <p class="mb-0 text-secondary">一些安装包，放在这里方便取用。</p>
</section>

<ul class="list border-y border-base-300">
  <li class="list-row grid-cols-1 gap-6 rounded-none px-0 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-10 md:py-10">
    <div class="list-col-grow col-start-1 row-start-1 min-w-0">
      <div class="flex flex-wrap items-center gap-3">
        <h2 class="m-0 text-2xl">{resource.name}</h2>
        <span class="badge badge-outline text-secondary">Android</span>
      </div>
      <p class="mt-3 mb-5 text-secondary">连接和管理兼容的设备，供支持 Buttplug 的应用使用。</p>
      <dl class="flex flex-wrap gap-x-8 gap-y-3 text-sm">
        <div><dt class="text-secondary">版本</dt><dd class="mt-1 font-semibold">{resource.version}</dd></div>
        <div><dt class="text-secondary">文件大小</dt><dd class="mt-1 font-semibold">{sizeMiB} MiB</dd></div>
        <div><dt class="text-secondary">发布日期</dt><dd class="mt-1 font-semibold"><time datetime={resource.publishedAt}>{resource.publishedAt.slice(0, 10)}</time></dd></div>
      </dl>
    </div>
    <div class="col-start-1 row-start-2 flex flex-col gap-2 md:col-start-2 md:row-start-1 md:min-w-52 md:pt-1">
      <a class="btn btn-primary" href={resource.downloadUrl}><Download size={18} aria-hidden="true" />下载 APK</a>
      <p class="m-0 text-center text-xs text-secondary">官方原版 · 灯火群岛镜像</p>
      <a class="btn btn-outline mt-2" href="/guide/intiface-central/">中文图文教程 <ChevronRight size={16} aria-hidden="true" /></a>
      <div class="flex flex-wrap justify-center gap-x-5 text-sm text-secondary">
        <a class="link inline-flex min-h-11 items-center" href={resource.websiteUrl}>官方网站</a>
        <a class="link inline-flex min-h-11 items-center" href={resource.releaseUrl}>发布来源</a>
        <a class="link inline-flex min-h-11 items-center" href={resource.sourceArchiveUrl}>版本源码 ZIP</a>
      </div>
    </div>
    <details class="collapse group list-col-wrap col-span-full row-start-3 rounded-none border-t border-base-300 pt-2 md:row-start-2">
      <summary class="collapse-title flex min-h-11 items-center gap-2 px-0 py-2 text-sm font-normal text-secondary">
        <ChevronRight size={14} class="shrink-0 transition-transform group-open:rotate-90 motion-reduce:transition-none" aria-hidden="true" />
        来源与文件校验
      </summary>
      <div class="collapse-content px-0 text-sm">
        <dl class="grid grid-cols-1 gap-4 pt-2 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-x-6 md:gap-y-3">
          <dt class="text-secondary">官方文件名</dt><dd class="break-all">{resource.filename}</dd>
          <dt class="text-secondary">准确大小</dt><dd>{resource.sizeBytes.toLocaleString('en-US')} 字节</dd>
          <dt class="text-secondary">发布时间</dt><dd>{resource.publishedAt.replace('T', ' ').replace('Z', ' UTC')}</dd>
          <dt class="text-secondary">SHA-256</dt><dd><code class="break-all">{resource.sha256}</code><p class="mt-2 mb-0 text-secondary">镜像文件与官方原包及 GitHub 发布校验值一致。</p></dd>
          <dt class="text-secondary">源码与许可</dt><dd class="flex flex-wrap gap-x-5"><a class="link inline-flex min-h-11 items-center" href={resource.sourceUrl}>官方版本源码</a><a class="link inline-flex min-h-11 items-center" href={resource.licenseUrl}>GPLv3 / 商业双许可</a><a class="link inline-flex min-h-11 items-center" href={resource.mirroredLicenseUrl}>许可文件镜像</a></dd>
        </dl>
      </div>
    </details>
  </li>
</ul>
