/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  initNavbar();
  initMobileMenu();
  initPricing();
  initServicesAccordion();
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

  function renderPricing() {
    grid.innerHTML = PRICING_CONFIG.plans.map(plan => {
      const price = plan.price_monthly;
      const note = plan.price_note;

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

/* ===== SERVICES ACCORDION ===== */
function initServicesAccordion() {
  const container = document.getElementById('services-accordion');
  if (!container || typeof SERVICES_CONFIG === 'undefined') return;

  container.innerHTML = SERVICES_CONFIG.map(s => `
    <div class="accordion-item" id="accordion-${s.id}">
      <button class="accordion-header" aria-expanded="false" aria-controls="body-${s.id}">
        <div class="accordion-header-left">
          <span class="accordion-icon-wrap">${s.icon}</span>
          <span class="accordion-title">${s.name}</span>
        </div>
        <span class="accordion-chevron">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </span>
      </button>
      <div class="accordion-body" id="body-${s.id}" role="region">
        <div class="accordion-content">
          <p class="accordion-intro">${s.intro}</p>
          <p class="accordion-process-label">Proceso detallado</p>
          <ol class="accordion-steps">
            ${s.steps.map((step, j) => `
              <li class="accordion-step">
                <span class="accordion-step-num">${j + 1}</span>
                <span class="accordion-step-body">
                  <span class="accordion-step-title">${step.title}</span>
                  <span class="accordion-step-desc">${step.desc}</span>
                </span>
              </li>`).join('')}
          </ol>
          <div class="accordion-note">
            <strong>Nota Importante:</strong> ${s.note}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  container.addEventListener('click', e => {
    const header = e.target.closest('.accordion-header');
    if (!header) return;
    const item = header.closest('.accordion-item');
    const isOpen = item.classList.contains('open');
    container.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      header.setAttribute('aria-expanded', 'true');
    }
  });
}
