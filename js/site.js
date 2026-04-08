document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.site-nav');
  const panel = document.querySelector('.site-nav-panel');
  const toggleLabel = document.querySelector('.menu-toggle-label');

  if (!toggle || !menu || !header) return;

  const setOpen = (open) => {
    menu.classList.toggle('open', open);
    toggle.classList.toggle('open', open);
    body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    if (toggleLabel) toggleLabel.textContent = open ? 'Close' : 'Menu';
  };

  toggle.addEventListener('click', () => {
    setOpen(!menu.classList.contains('open'));
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  menu.addEventListener('click', (event) => {
    if (event.target === menu) setOpen(false);
  });

  if (panel) {
    panel.addEventListener('click', (event) => event.stopPropagation());
  }

  const onScroll = () => {
    header.classList.toggle('compact', window.scrollY > 24);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});
