<script>
  import '../app.css';
  import { page } from '$app/state';
  let { children } = $props();
</script>
<a class="skip" href="#main">跳到正文</a>
<div class="shell">
  <header class="navbar masthead">
    <a class="brand" href="/" aria-label="灯火群岛首页"><span>灯火群岛</span><span class="lamp" aria-hidden="true">✦</span></a>
    <nav aria-label="主导航">
      <a href="/letters/to-you/" aria-current={page.url.pathname.startsWith('/letters') ? 'page' : undefined}>两封信</a>
      <a href="/guide/" aria-current={page.url.pathname.startsWith('/guide') ? 'page' : undefined}>安家手记</a>
      <a href="/roadmap/" aria-current={page.url.pathname.startsWith('/roadmap') ? 'page' : undefined}>建设图</a>
      <a href="/docs/" aria-current={page.url.pathname.startsWith('/docs') ? 'page' : undefined}>使用指南</a>
      <a href="https://github.com/LamplitIsles/lamplit-chat">开源仓库</a>
      <a class="nav-entry" href="https://app.lamplit.run/login">登录</a>
    </nav>
  </header>
  <main id="main">{@render children()}</main>
  <footer class="footer sm:footer-horizontal site-footer">
    <div><a class="brand" href="/">灯火群岛 <span aria-hidden="true">✦</span></a><p>愿每一次回来，都有光。</p></div>
    <nav aria-label="页脚导航"><a href="/guide/">安家手记</a><a href="/docs/">使用指南</a><a href="/roadmap/">建设图</a><a href="https://github.com/LamplitIsles/lamplit-chat">开源仓库</a><a href="/guide/#self-hosting">自托管说明</a></nav>
  </footer>
</div>
