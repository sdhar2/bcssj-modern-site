document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("compact", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
