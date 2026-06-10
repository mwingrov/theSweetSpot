// Bakery site interactions
const WHATSAPP_NUMBER = "+27738845264"; // replace with real number (international format, no +)

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger?.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Back to top
  const topBtn = document.querySelector('.fab-top');
  window.addEventListener('scroll', () => {
    topBtn?.classList.toggle('show', window.scrollY > 400);
  });
  topBtn?.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // WhatsApp links
  document.querySelectorAll('[data-wa]').forEach(el => {
    const msg = el.getAttribute('data-wa') || "Hi! I'd like to place an order.";
    el.setAttribute('href', `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
    el.setAttribute('target','_blank');
    el.setAttribute('rel','noopener');
  });

  // Contact form (client-only)
  const form = document.querySelector('#contact-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const msg = form.message.value.trim();
    const text = `Hi! My name is ${name}. ${msg}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,'_blank');
    form.reset();
    alert("Thanks! Opening WhatsApp to send your message.");
  });

  // Newsletter
  const nl = document.querySelector('#newsletter-form');
  nl?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thanks for subscribing! 🥐");
    nl.reset();
  });

  // Active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if(a.getAttribute('href') === path) a.classList.add('active');
  });
});
