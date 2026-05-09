/* ===== HARPENDEN BADMINTON CLUB — main.js ===== */

(function () {
  'use strict';

  /* --------------------------------------------------
     1. NAVBAR SCROLL EFFECT
  -------------------------------------------------- */
  const navbar = document.getElementById('navbar');

  function handleScroll() {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();


  /* --------------------------------------------------
     2. MOBILE NAV TOGGLE
  -------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }


  /* --------------------------------------------------
     3. DROPDOWN MENU (mobile click / desktop hover)
  -------------------------------------------------- */
  const dropdowns = document.querySelectorAll('.nav-dropdown');

  dropdowns.forEach(function (dropdown) {
    const trigger = dropdown.querySelector('.nav-link');
    if (!trigger) return;

    trigger.addEventListener('click', function (e) {
      // Only intercept on mobile
      if (navToggle && window.getComputedStyle(navToggle).display !== 'none') {
        e.preventDefault();
        dropdowns.forEach(function (other) {
          if (other !== dropdown) other.classList.remove('open');
        });
        dropdown.classList.toggle('open');
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dropdown')) {
      dropdowns.forEach(function (d) { d.classList.remove('open'); });
    }
  });


  /* --------------------------------------------------
     4. SMOOTH SCROLL FOR ANCHOR LINKS
  -------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 70;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });


  /* --------------------------------------------------
     5. ACTIVE NAV LINK HIGHLIGHTING
  -------------------------------------------------- */
  function setActiveNavLink() {
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-link, .dropdown-item').forEach(function (link) {
      const href = link.getAttribute('href');
      if (!href) return;

      const linkFile = href.split('/').pop();
      const isHome = currentFile === '' || currentFile === 'index.html';
      const linkIsHome = linkFile === '' || linkFile === 'index.html' || href === '/';

      const isActive = linkFile === currentFile || (isHome && linkIsHome);
      link.classList.toggle('active', isActive);

      if (isActive) {
        const parentDropdown = link.closest('.nav-dropdown');
        if (parentDropdown) {
          const parentLink = parentDropdown.querySelector(':scope > .nav-link');
          if (parentLink) parentLink.classList.add('active');
        }
      }
    });
  }

  setActiveNavLink();


  /* --------------------------------------------------
     6. INTERSECTION OBSERVER — FADE-IN ANIMATIONS
  -------------------------------------------------- */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.fade-in').forEach(function (el) {
      el.classList.add('visible');
    });
  }


  /* --------------------------------------------------
     7. CLOSE MOBILE MENU ON LINK CLICK
  -------------------------------------------------- */
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        const isDropdownTrigger = this.classList.contains('dropdown-toggle');
        if (!isDropdownTrigger) {
          navLinks.classList.remove('open');
          if (navToggle) navToggle.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    });
  }


  /* --------------------------------------------------
     UTILITY: Debounce
  -------------------------------------------------- */
  function debounce(fn, delay) {
    var timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    };
  }

  // Reset mobile menu on resize to desktop
  window.addEventListener('resize', debounce(function () {
    if (window.innerWidth > 768) {
      if (navLinks) navLinks.classList.remove('open');
      if (navToggle) navToggle.classList.remove('open');
      document.body.style.overflow = '';
      dropdowns.forEach(function (d) { d.classList.remove('open'); });
    }
  }, 150));

  window.addEventListener('hashchange', setActiveNavLink);

})();
