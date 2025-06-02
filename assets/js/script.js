// assets/js/script.js
document.querySelectorAll('[data-nav-link]').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('[data-nav-link]').forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const target = link.textContent.trim().toLowerCase();
    document.querySelectorAll('[data-page]').forEach(page => {
      page.classList.remove('active');
      if (page.dataset.page === target) {
        page.classList.add('active');
      }
    });
  });
});
