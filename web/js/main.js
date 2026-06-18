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

/* ===== SERVICES GRID + EXPANDABLE PANEL ===== */
function initServicesAccordion() {
  const container = document.getElementById('services-container');
  if (!container || typeof SERVICES_CONFIG === 'undefined') return;

  container.innerHTML = SERVICES_CONFIG.map(s => `
    <div class="service-card" id="svc-${s.id}">
      <div class="service-icon">${s.icon}</div>
      <div class="service-name">${s.name}</div>
      <div class="service-desc">${s.shortDesc}</div>
      <button class="service-detail-btn" aria-expanded="false" aria-controls="svc-panel-${s.id}">
        Ver detalle
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="service-detail-panel" id="svc-panel-${s.id}">
        <div class="service-detail-content">
          <p class="service-detail-intro">${s.intro}</p>
          <p class="service-detail-label">Proceso detallado</p>
          <ol class="service-detail-steps">
            ${s.steps.map((step, j) => `
              <li class="service-detail-step">
                <span class="service-step-num">${j + 1}</span>
                <span class="service-step-body">
                  <span class="service-step-title">${step.title}</span>
                  <span class="service-step-desc">${step.desc}</span>
                </span>
              </li>`).join('')}
          </ol>
          <div class="service-note">
            <strong>Nota Importante:</strong> ${s.note}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  container.addEventListener('click', e => {
    const btn = e.target.closest('.service-detail-btn');
    if (!btn) return;
    const card = btn.closest('.service-card');
    const isOpen = card.classList.contains('open');
    card.classList.toggle('open', !isOpen);
    btn.setAttribute('aria-expanded', String(!isOpen));
    btn.childNodes[0].textContent = isOpen ? 'Ver detalle' : 'Ocultar detalle';
  });
}
