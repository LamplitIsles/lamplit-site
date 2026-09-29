export default {
  fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'guide.lamplit.run') {
      const destination = new URL(url.pathname === '/' ? '/guide/' : url.pathname, 'https://lamplit.run');
      destination.search = url.search;
      return Response.redirect(destination, 308);
    }
    return env.ASSETS.fetch(request);
  }
};
