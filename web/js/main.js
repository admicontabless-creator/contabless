/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  initNavbar();
  initMobileMenu();
  initPricing();
  initTestimonios();
  initSiteConfig();
});

/* ===== AOS INIT ===== */
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });
  }
}

/* ===== NAVBAR SCROLL ===== */
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ===== MOBILE MENU ===== */
function initMobileMenu() {
  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  const close = document.getElementById('mobile-close');
  if (!ham || !menu) return;

  const open = () => { menu.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const shut = () => { menu.classList.remove('open'); document.body.style.overflow = ''; };

  ham.addEventListener('click', open);
  close?.addEventListener('click', shut);
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', shut));
}

/* ===== PRICING ===== */
function initPricing() {
  if (typeof PRICING_CONFIG === 'undefined' || typeof SITE_CONFIG === 'undefined') return;

  const grid = document.getElementById('pricing-grid');
  if (!grid) return;

  let isAnnual = false;

  const toggle = document.getElementById('pricing-toggle');
  toggle?.addEventListener('click', () => {
    isAnnual = !isAnnual;
    toggle.classList.toggle('active', isAnnual);
    renderPricing();
  });

  function renderPricing() {
    grid.innerHTML = PRICING_CONFIG.plans.map(plan => {
      const price = isAnnual ? plan.price_annual : plan.price_monthly;
      const note = isAnnual && plan.price_monthly !== 'Consultar' && plan.price_monthly !== 'A medida'
        ? 'por mes + IVA (anual)'
        : plan.price_note;

      return `
      <div class="price-card ${plan.featured ? 'featured' : ''}" data-aos="fade-up">
        ${plan.badge ? `<div class="price-badge">${plan.badge}</div>` : ''}
        <div class="price-plan-name">${plan.name}</div>
        <div class="price-value">${price}</div>
        <div class="price-note">${note}</div>
        <div class="price-desc">${plan.description}</div>
        <hr class="price-divider">
        <ul class="price-features">
          ${plan.features.map(f => `
            <li class="price-feature">
              <span class="price-feature-check">✓</span>
              <span>${f}</span>
            </li>`).join('')}
        </ul>
        <a href="${plan.cta_link}" target="_blank" class="btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}">${plan.cta_text}</a>
      </div>`;
    }).join('');

    if (typeof AOS !== 'undefined') AOS.refresh();
  }

  renderPricing();
}

/* ===== SITE CONFIG (CTAs) ===== */
function initSiteConfig() {
  if (typeof SITE_CONFIG === 'undefined') return;

  document.querySelectorAll('[data-cta="primary"]').forEach(el => {
    el.href = SITE_CONFIG.PRIMARY_CTA_LINK;
    el.textContent = el.dataset.text || SITE_CONFIG.PRIMARY_CTA_TEXT;
  });
  document.querySelectorAll('[data-cta="whatsapp"]').forEach(el => {
    el.href = `${SITE_CONFIG.WHATSAPP_LINK}?text=${encodeURIComponent(SITE_CONFIG.WHATSAPP_MESSAGE)}`;
  });
  document.querySelectorAll('[data-cta="email"]').forEach(el => {
    el.href = `mailto:${SITE_CONFIG.EMAIL}`;
    if (!el.textContent.trim() || el.dataset.showText) el.textContent = SITE_CONFIG.EMAIL;
  });
}

/* ===== TESTIMONIOS CAROUSEL ===== */
function initTestimonios() {
  const inner = document.querySelector('.testimonios-inner');
  const dots = document.querySelectorAll('.testi-dot');
  if (!inner || !dots.length) return;

  const cards = inner.querySelectorAll('.testi-card');
  let current = 0;
  let perView = window.innerWidth > 900 ? 3 : window.innerWidth > 600 ? 2 : 1;
  let maxIndex = Math.max(0, cards.length - perView);
  let timer;

  function go(idx) {
    current = Math.max(0, Math.min(idx, maxIndex));
    const cardW = cards[0]?.offsetWidth || 300;
    const gap = 24;
    inner.style.transform = `translateX(-${current * (cardW + gap)}px)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => { go(i); resetTimer(); }));

  function autoPlay() { go(current < maxIndex ? current + 1 : 0); }
  function resetTimer() { clearInterval(timer); timer = setInterval(autoPlay, 4000); }
  resetTimer();

  window.addEventListener('resize', () => {
    perView = window.innerWidth > 900 ? 3 : window.innerWidth > 600 ? 2 : 1;
    maxIndex = Math.max(0, cards.length - perView);
    go(0);
  });
}
