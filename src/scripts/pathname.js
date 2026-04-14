// unnamed function 
(() => {
  const normalize = p => {
    // return '/' if false or empty
    if (!p) return '/';
    // strip origin
    p = p.split('?')[0].split('#')[0];
    if (p.endsWith('/index.html')) p = p.replace(/\/index\.html$/, '/');
    return p || '/';
};

const current = normalize(location.pathname);

document.querySelectorAll('.nav-links a').forEach(a => {
    try {
      const url = new URL(a.href, location.origin);
      const hrefPath = normalize(url.pathname);
      if (hrefPath === current) {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      } else {
        a.classList.remove('active');
        a.removeAttribute('aria-current');
      }
    } catch (e) { /* ignore invalid URLs */ }
  });
})();