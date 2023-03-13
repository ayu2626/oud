// Smooth scrolling effect for internal links
const links = document.querySelectorAll('a[href^="#"]');

for (const link of links) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href');
  const target = document.querySelector(targetId);
  const offsetTop = target.offsetTop;
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
}