/**
 * XYZ FURNITURES — CORE ENGINE
 * Crafted & Engineered by PipoZa Dev Studio (https://pipoza.s.gy/pipoza.in)
 * 3-Theme Switcher (Default, Dark, Light), Clean URLs (/home),
 * Web Audio Tactile Clicks, Quick View Modal, and Image Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileDrawer();
  initThemeToggle();
  initAudioSynthesizer();
  initLightboxModal();
  initCleanUrls();
});

/**
 * 1. Sticky Liquid Glass Navbar
 */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Mobile Drawer Navigation
 */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const closeBtn = document.querySelector('.mobile-drawer-close');

  if (!toggleBtn || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
    playAcousticChime();
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
  });

  drawer.querySelectorAll('.mobile-drawer-link').forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
      playWoodClick();
    });
  });
}

/**
 * 3. 3-Way Theme Switcher (Default -> Dark -> Light -> Default)
 */
function initThemeToggle() {
  const themeButtons = document.querySelectorAll('.theme-toggle-btn');
  if (!themeButtons.length) return;

  const savedTheme = localStorage.getItem('xyz-theme') || 'default';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeButtons.forEach(btn => updateThemeIcon(btn, savedTheme));

  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'default';
      let next = 'default';
      
      if (current === 'default') {
        next = 'dark';
      } else if (current === 'dark') {
        next = 'light';
      } else {
        next = 'default';
      }

      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('xyz-theme', next);
      themeButtons.forEach(b => updateThemeIcon(b, next));
      playWoodClick();

      let label = 'Warm Roasted Coffee Theme';
      if (next === 'dark') label = 'Deep Obsidian Espresso Theme';
      if (next === 'light') label = 'Toasted Almond Sand Theme';
      showToast(`${label} Activated`);
    });
  });
}

function updateThemeIcon(btn, theme) {
  if (theme === 'dark') {
    // Moon Icon
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    btn.setAttribute('title', 'Theme: Deep Espresso (Click for Toasted Almond Sand)');
  } else if (theme === 'light') {
    // Sun/Caramel Icon
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
    btn.setAttribute('title', 'Theme: Toasted Almond Sand (Click for Warm Roasted Coffee)');
  } else {
    // Default Warm Coffee Icon
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`;
    btn.setAttribute('title', 'Theme: Warm Roasted Coffee (Click for Deep Espresso)');
  }
}

/**
 * 4. Web Audio API Tactile Sound Engine (Wood Click & Amber Chime)
 */
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playWoodClick() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.045);
  } catch (e) {}
}

function playAcousticChime() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.10, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.22);
  } catch (e) {}
}

function initAudioSynthesizer() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('button, .btn, .nav-link, .action-icon-btn, .swatch-btn');
    if (target) {
      playWoodClick();
    }
  });
}

/**
 * 5. Lightbox Modal
 */
function initLightboxModal() {
  const modal = document.querySelector('.lightbox-modal');
  const closeBtn = document.querySelector('.lightbox-close-btn');
  const modalImg = document.querySelector('.lightbox-img');
  const modalTitle = document.querySelector('.lightbox-caption');

  if (!modal || !modalImg) return;

  const openLightbox = (src, title) => {
    modalImg.src = src;
    if (modalTitle) modalTitle.textContent = title || '';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    playAcousticChime();
  };

  const closeLightbox = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.addEventListener('click', () => {
      const src = el.getAttribute('data-lightbox-src') || el.src;
      const title = el.getAttribute('data-lightbox-title') || el.alt || '';
      openLightbox(src, title);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeLightbox();
    }
  });
}

/**
 * 6. Quick View Product Modal (NO PRICES — Direct Inquiry)
 */
function openQuickView(productId) {
  const product = XYZ_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.querySelector('.lightbox-modal');
  const modalContent = document.querySelector('.lightbox-container');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <button class="lightbox-close-btn" onclick="closeQuickViewModal()">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <div style="display:grid; grid-template-columns: 1.1fr 1fr; gap: 24px; padding: 24px;" class="quick-view-grid">
      <div>
        <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius:12px; object-fit:cover; aspect-ratio:4/3;" />
        <div style="display:flex; gap:8px; margin-top:10px;">
          ${(product.gallery || []).map(g => `<img src="${g}" style="width:60px; height:60px; border-radius:8px; object-fit:cover; cursor:pointer;" onclick="this.parentElement.previousElementSibling.src='${g}'"/>`).join('')}
        </div>
      </div>
      <div style="display:flex; flex-direction:column;">
        <span class="badge-pill badge-amber" style="margin-bottom:8px; width:fit-content;">${product.categoryLabel}</span>
        <h3 style="margin-bottom:8px; font-size:1.45rem;">${product.name}</h3>
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:14px;">
          <span style="color:#f59e0b; font-weight:bold;">★ ${product.rating}</span>
          <span style="color:var(--text-muted); font-size:0.85rem;">(${product.reviewsCount} verified reviews)</span>
        </div>
        <p style="font-size:0.9rem; line-height:1.6; margin-bottom:16px;">${product.description}</p>
        <div style="margin-bottom:16px; font-size:0.85rem; color:var(--text-sand); line-height:1.6;">
          <strong>Materials:</strong> ${product.materials}<br/>
          <strong>Dimensions:</strong> ${product.dimensions}
        </div>
        <div style="margin-top:auto; padding-top:16px; border-top:1px solid rgba(255,255,255,0.1); display:flex; gap:10px;">
          <a href="https://wa.me/919876543210?text=Hi%20XYZ%20Furnitures!%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.%20Please%20share%20lead%20times%20and%20finish%20options." target="_blank" rel="noopener" class="btn btn-whatsapp" style="flex:1;">
            💬 Inquire on WhatsApp
          </a>
          <a href="product-detail.html?id=${product.id}" class="btn btn-secondary">
            Full Specs
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  playAcousticChime();
}

function closeQuickViewModal() {
  const modal = document.querySelector('.lightbox-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/**
 * 7. Clean URLs Router & Fallback Handling
 * Ensures /home, /experience-studios and extensionless links work in all environments
 */
function initCleanUrls() {
  const isFileProtocol = location.protocol === 'file:';

  document.querySelectorAll('a[href]').forEach(link => {
    let href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('#')) return;

    // Separate clean path from query and hash
    const hashIndex = href.indexOf('#');
    let hash = '';
    let cleanHref = href;
    if (hashIndex !== -1) {
      hash = href.substring(hashIndex);
      cleanHref = href.substring(0, hashIndex);
    }

    const queryIndex = cleanHref.indexOf('?');
    let query = '';
    if (queryIndex !== -1) {
      query = cleanHref.substring(queryIndex);
      cleanHref = cleanHref.substring(0, queryIndex);
    }

    if (isFileProtocol) {
      // Map clean paths to corresponding .html files when viewed locally via file://
      let target = cleanHref;
      if (target === '/home' || target === 'home' || target === '/') {
        target = 'home.html';
      } else if (target === '/experience-studios' || target === 'experience-studios') {
        target = 'experience-studios.html';
      } else if (target.startsWith('/')) {
        target = target.substring(1) + '.html';
      } else if (!target.endsWith('.html')) {
        target = target + '.html';
      }
      link.setAttribute('href', target + query + hash);
    } else {
      // On live web servers, remove .html if present
      if (cleanHref.endsWith('.html')) {
        const clean = cleanHref.replace(/\.html$/, '');
        const target = clean === 'index' ? '/home' : (clean.startsWith('/') ? clean : '/' + clean);
        link.setAttribute('href', target + query + hash);
      }
    }
  });
}

let activeToastTimer = null;

/**
 * 8. Compact Liquid Glass Toast Notification (Glitch-Free & Fast Auto-Dismiss)
 */
function showToast(message, duration = 1800) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  // Clear previous timer and toasts to prevent stacking or glitching
  if (activeToastTimer) {
    clearTimeout(activeToastTimer);
  }
  container.innerHTML = '';

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="beacon-dot"></span>
    <span class="toast-text">${message}</span>
  `;

  container.appendChild(toast);

  // Trigger smooth GPU enter transition
  requestAnimationFrame(() => {
    toast.classList.add('toast-show');
  });

  // Quick auto-dismiss to keep mobile visibility clear
  activeToastTimer = setTimeout(() => {
    toast.classList.remove('toast-show');
    toast.classList.add('toast-hide');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.remove();
      }
    }, 250);
  }, duration);
}

