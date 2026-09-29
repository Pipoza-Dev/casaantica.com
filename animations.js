/**
 * XYZ FURNITURES — INTERACTIVE VISUAL ENGINE
 * Crafted & Engineered by PipoZa Dev Studio (https://pipoza.s.gy/pipoza.in)
 * Scroll Reveals, Counters, 3D Tilt, Swatches, and Room Visualizer (No Prices)
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveals();
  initStatCounters();
  initTiltCards();
  initInteractiveSwatches();
  initRoomVisualizer();
});

/**
 * 1. IntersectionObserver Scroll Reveals
 */
function initScrollReveals() {
  const elements = document.querySelectorAll('.reveal-init');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
}

/**
 * 2. Animated Numerical Counters
 */
function initStatCounters() {
  const counters = document.querySelectorAll('[data-counter-target]');
  if (!counters.length) return;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-counter-target'));
        const prefix = el.getAttribute('data-counter-prefix') || '';
        const suffix = el.getAttribute('data-counter-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-counter-decimals') || '0', 10);
        const duration = 1800;
        const startTime = performance.now();

        const updateNumber = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentVal = target * easeProgress;

          if (decimals > 0) {
            el.textContent = `${prefix}${currentVal.toFixed(decimals)}${suffix}`;
          } else {
            el.textContent = `${prefix}${Math.floor(currentVal).toLocaleString('en-IN')}${suffix}`;
          }

          if (progress < 1) {
            requestAnimationFrame(updateNumber);
          } else {
            if (decimals > 0) {
              el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
            } else {
              el.textContent = `${prefix}${target.toLocaleString('en-IN')}${suffix}`;
            }
          }
        };

        requestAnimationFrame(updateNumber);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(c => counterObserver.observe(c));
}

/**
 * 3. 3D Card Tilt with Mouse Hover (Desktop Only)
 */
function initTiltCards() {
  if (window.matchMedia('(hover: none)').matches) return;

  const cards = document.querySelectorAll('.tilt-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    });
  });
}

/**
 * 4. Interactive Material Finish Swatches (Mobile Touch-Friendly)
 */
function initInteractiveSwatches() {
  document.querySelectorAll('.swatch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.swatch-group') || btn.parentElement;
      if (!group) return;

      group.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const finishName = btn.getAttribute('data-finish-name');
      const targetLabel = document.querySelector('.active-finish-display') || document.getElementById('active-finish-label');
      if (targetLabel && finishName) {
        targetLabel.textContent = finishName;
      }

      const finishImg = btn.getAttribute('data-finish-img');
      const targetImg = document.querySelector('.product-main-visual') || document.getElementById('main-product-img');
      if (targetImg && finishImg) {
        targetImg.style.opacity = '0.35';
        setTimeout(() => {
          targetImg.src = finishImg;
          targetImg.style.opacity = '1';
        }, 140);
      }
    });
  });
}

/**
 * 5. Interactive Room Visualizer (Designs & Pictures Only — Zero Prices)
 */
function initRoomVisualizer() {
  const tabs = document.querySelectorAll('.room-visualizer-tab');
  const mainImage = document.querySelector('.room-visualizer-image');
  const roomTitle = document.querySelector('.room-visualizer-title');
  const roomDesc = document.querySelector('.room-visualizer-desc');
  const hotspotsContainer = document.querySelector('.room-hotspots');

  if (!tabs.length || !mainImage) return;

  const roomData = {
    living: {
      title: "The Solis Modern Living Suite",
      desc: "Curved Monaco bouclé sectional paired with the Aurelia travertine table and ambient Solis floor luminaire.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
      hotspots: [
        { x: '45%', y: '68%', name: 'Monaco Bouclé Sectional', detail: 'French Bouclé Blanc' },
        { x: '68%', y: '78%', name: 'Aurelia Travertine Table', detail: 'Honed Roman Marble' },
        { x: '18%', y: '52%', name: 'Solis Amber Floor Lamp', detail: 'Hand-Blown Glass' }
      ]
    },
    dining: {
      title: "The Kyoto Architectural Dining Suite",
      desc: "Single-slab live-edge American walnut table accompanied by steam-bent Bauhaus dining chairs.",
      image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1400&q=80",
      hotspots: [
        { x: '50%', y: '65%', name: 'Kyoto Live-Edge Dining Table', detail: 'Solid American Walnut' },
        { x: '35%', y: '70%', name: 'Bauhaus Dining Chairs', detail: 'Steam-Bent Ash & Danish Cord' }
      ]
    },
    bedroom: {
      title: "The Elysium Ryokan Bedroom Suite",
      desc: "Floating solid oak platform bed with concealed sunset ambient LEDs and matching Zenith bedside stands.",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      hotspots: [
        { x: '52%', y: '60%', name: 'Elysium Platform Bed', detail: 'Solid Oak & Ambient LED' },
        { x: '22%', y: '68%', name: 'Zenith Floating Nightstand', detail: 'Plantation Solid Teak' }
      ]
    },
    office: {
      title: "The Oberoi Executive Studio Suite",
      desc: "Designed for focused visionary leadership with book-matched walnut desk and Arcos smoked glass shelving.",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1400&q=80",
      hotspots: [
        { x: '50%', y: '62%', name: 'Oberoi Executive Desk', detail: 'Smoked Walnut & Brass' },
        { x: '78%', y: '45%', name: 'Arcos Architectural Bookshelf', detail: 'Smoked Glass & Walnut' }
      ]
    }
  };

  const renderHotspots = (roomKey) => {
    if (!hotspotsContainer) return;
    const room = roomData[roomKey];
    if (!room || !room.hotspots) return;

    hotspotsContainer.innerHTML = room.hotspots.map(h => `
      <div class="room-hotspot-pin" style="top: ${h.y}; left: ${h.x};">
        <div class="hotspot-pulse"></div>
        <div class="hotspot-tooltip">
          <strong>${h.name}</strong>
          <span style="color:var(--amber-light);">${h.detail}</span>
        </div>
      </div>
    `).join('');
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const roomKey = tab.getAttribute('data-room');
      const data = roomData[roomKey];
      if (!data) return;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      mainImage.style.opacity = '0.3';
      setTimeout(() => {
        mainImage.src = data.image;
        if (roomTitle) roomTitle.textContent = data.title;
        if (roomDesc) roomDesc.textContent = data.desc;
        renderHotspots(roomKey);
        mainImage.style.opacity = '1';
      }, 160);
    });
  });

  renderHotspots('living');
}
