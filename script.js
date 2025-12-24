// Xkanz — Modern interactions with animations and modals
document.addEventListener('DOMContentLoaded', () => {
  // ===== Loading Screen =====
  const loaderScreen = document.getElementById('loaderScreen');
  const loaderProgress = document.getElementById('loaderProgress');
  
  // Simulate loading
  let progress = 0;
  const loadInterval = setInterval(() => {
    progress += Math.random() * 30;
    if (progress >= 100) {
      progress = 100;
      clearInterval(loadInterval);
      setTimeout(() => {
        loaderScreen.classList.add('hidden');
        document.body.style.overflow = 'auto';
        initScrollAnimations();
      }, 300);
    }
    loaderProgress.style.width = progress + '%';
  }, 200);

  // ===== Scroll Animations =====
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Add animation classes to elements
    document.querySelectorAll('.cat-card, .card, .trust-card, .testimonial-card, .step').forEach((el, index) => {
      el.classList.add('fade-in');
      el.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(el);
    });

    document.querySelectorAll('.section-head, .hero-content').forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }

  // ===== Mobile Menu =====
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
    });
    
    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // ===== Modals =====
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  const loginBtn = document.getElementById('loginBtn');
  const loginClose = document.getElementById('loginClose');
  const loginOverlay = document.getElementById('loginOverlay');
  const signupClose = document.getElementById('signupClose');
  const signupOverlay = document.getElementById('signupOverlay');
  const switchToSignup = document.getElementById('switchToSignup');
  const switchToLogin = document.getElementById('switchToLogin');

  function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(loginModal);
    });
  }

  if (loginClose) loginClose.addEventListener('click', () => closeModal(loginModal));
  if (loginOverlay) loginOverlay.addEventListener('click', () => closeModal(loginModal));
  if (signupClose) signupClose.addEventListener('click', () => closeModal(signupModal));
  if (signupOverlay) signupOverlay.addEventListener('click', () => closeModal(signupModal));

  if (switchToSignup) {
    switchToSignup.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal(loginModal);
      setTimeout(() => openModal(signupModal), 300);
    });
  }

  if (switchToLogin) {
    switchToLogin.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal(signupModal);
      setTimeout(() => openModal(loginModal), 300);
    });
  }

  // Close modals with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(loginModal);
      closeModal(signupModal);
    }
  });

  // Form submissions
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Login functionality will be connected to backend!');
      closeModal(loginModal);
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Signup functionality will be connected to backend!');
      closeModal(signupModal);
    });
  }

  // ===== Floating Action Button =====
  const fabBtn = document.getElementById('fabBtn');
  if (fabBtn) {
    fabBtn.addEventListener('click', () => {
      openModal(loginModal);
    });
  }

  // ===== Post Ad Buttons - Open Login Modal =====
  document.querySelectorAll('a[href="#post"], .cta[href="#post"], .btn-gold').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(loginModal);
    });
  });

  // ===== Search & Listings =====

  // ===== Search & Listings =====
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const categorySelect = document.getElementById('categorySelect');
  const listingsGrid = document.getElementById('listingsGrid');

  // Sample listings data with real Unsplash images
  const listings = [
    {
      title: 'iPhone 14 Pro 256GB',
      price: 2850,
      location: 'Dubai Marina',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&q=80&auto=format&fit=crop'
    },
    {
      title: 'Modern 3-Seater Sofa',
      price: 1200,
      location: 'JLT',
      category: 'Furniture',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&auto=format&fit=crop'
    },
    {
      title: 'Mountain Bike - Trek',
      price: 1650,
      location: 'Al Barsha',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=600&q=80&auto=format&fit=crop'
    },
    {
      title: 'Toyota Corolla 2018',
      price: 32500,
      location: 'Deira',
      category: 'Cars',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80&auto=format&fit=crop'
    },
    {
      title: 'Designer Handbag',
      price: 450,
      location: 'Business Bay',
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80&auto=format&fit=crop'
    },
    {
      title: 'Samsung 55" Smart TV',
      price: 1400,
      location: 'Silicon Oasis',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80&auto=format&fit=crop'
    },
    {
      title: 'Baby Stroller - Bugaboo',
      price: 680,
      location: 'Dubai Hills',
      category: 'Kids',
      image: 'https://images.unsplash.com/photo-1596461200419-a87c62a75e08?w=600&q=80&auto=format&fit=crop'
    },
    {
      title: 'Persian Cat (Male)',
      price: 850,
      location: 'Mirdif',
      category: 'Pets',
      image: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=600&q=80&auto=format&fit=crop'
    },
    {
      title: 'MacBook Air M2',
      price: 3200,
      location: 'Downtown Dubai',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80&auto=format&fit=crop'
    },
    {
      title: 'Dining Table Set (6 Chairs)',
      price: 2100,
      location: 'Arabian Ranches',
      category: 'Furniture',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80&auto=format&fit=crop'
    },
    {
      title: 'Nike Air Jordan Sneakers',
      price: 320,
      location: 'Jumeirah',
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop'
    },
    {
      title: 'Garden Tool Set',
      price: 180,
      location: 'Al Ain',
      category: 'Home & Garden',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop'
    }
  ];

  const formatAED = (n) => `AED ${Number(n).toLocaleString('en-AE')}`;

  function renderListings(items) {
    if (!listingsGrid) return;
    listingsGrid.innerHTML = '';
    
    if (items.length === 0) {
      listingsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-500); padding: 40px;">No listings found. Try adjusting your search.</p>';
      return;
    }

    items.forEach((it) => {
      const card = document.createElement('article');
      card.className = 'card';
      
      const img = document.createElement('div');
      img.className = 'card-img';
      img.style.backgroundImage = `url(${it.image})`;
      
      const badge = document.createElement('span');
      badge.className = 'card-badge';
      badge.textContent = it.category;
      img.appendChild(badge);
      
      const body = document.createElement('div');
      body.className = 'card-body';
      
      const h3 = document.createElement('h3');
      h3.textContent = it.title;
      
      const meta = document.createElement('div');
      meta.className = 'meta';
      meta.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <span>${it.location}</span>
      `;
      
      const price = document.createElement('div');
      price.className = 'price';
      price.textContent = formatAED(it.price);
      
      body.appendChild(h3);
      body.appendChild(meta);
      body.appendChild(price);
      
      card.appendChild(img);
      card.appendChild(body);
      listingsGrid.appendChild(card);
    });
  }

  function filterListings() {
    const q = (searchInput?.value || '').trim().toLowerCase();
    const cat = categorySelect?.value || '';
    const filtered = listings.filter((l) => {
      const matchesQ = !q || l.title.toLowerCase().includes(q) || l.location.toLowerCase().includes(q) || l.category.toLowerCase().includes(q);
      const matchesC = !cat || l.category === cat;
      return matchesQ && matchesC;
    });
    renderListings(filtered);
  }

  // Attach search handlers
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      filterListings();
    });
  }
  if (categorySelect) {
    categorySelect.addEventListener('change', filterListings);
  }
  if (searchInput) {
    // Real-time search as user types (debounced)
    let debounceTimer;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(filterListings, 300);
    });
  }

  // Category quick filter
  document.querySelectorAll('.cat-card').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const c = el.getAttribute('data-category') || '';
      if (categorySelect) categorySelect.value = c;
      if (searchInput) searchInput.value = '';
      filterListings();
      document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Initial render
  renderListings(listings);

  // ===== Smooth Scroll Enhancement =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          navLinks?.classList.remove('open');
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // ===== Parallax Effect on Hero =====
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImg = document.querySelector('.hero-img');
    if (heroImg) {
      heroImg.style.transform = `scale(1.05) translateY(${scrolled * 0.5}px)`;
    }
  });

  // ===== Header Shadow on Scroll =====
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  });
});