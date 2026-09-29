export default {
  fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'guide.lamplit.run' && url.pathname === '/') {
      return Response.redirect(new URL('/guide/', url), 308);
    }
    return env.ASSETS.fetch(request);
  }
};
