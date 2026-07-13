document.documentElement.classList.add('js');

// Mobile nav toggle
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });
  // close menu after tapping a link
  header.querySelectorAll('.nav-links a').forEach(a =>
    a.addEventListener('click', () => {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', false);
    }));
}

// Scroll reveal (skipped when reduced motion is preferred)
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const els = document.querySelectorAll('.rv');
if (reduce || !('IntersectionObserver' in window)) {
  els.forEach(el => el.classList.add('in'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

const STRIPE_CHECKOUT = "https://buy.stripe.com/3cI6oH3Fv3Pqe4a25bd7q00";
document.querySelectorAll('[data-buy]').forEach(b => { b.href = STRIPE_CHECKOUT; b.target = '_blank'; b.rel = 'noopener'; });

// Early-access signup
const form = document.getElementById('signup');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email');
    if (!email.value || !email.checkValidity()) { email.focus(); return; }
    const button = form.querySelector('button[type="submit"]');
    if (button) button.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (!res.ok) throw new Error('submit failed');
      form.style.display = 'none';
      const ok = document.getElementById('signup-ok');
      if (ok) ok.style.display = 'block';
    } catch {
      if (button) button.disabled = false;
      email.setCustomValidity('Something went wrong — please try again.');
      email.reportValidity();
      email.oninput = () => email.setCustomValidity('');
    }
  });
}
