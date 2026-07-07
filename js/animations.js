(function () {
  'use strict';

  // ── Page transition overlay ────────────────────────────────────────────────
  // Entrance: CSS handles the hero animation (@keyframes in pages.css).
  // This script handles cross-page fade via the .page-transition overlay.
  var pt = document.getElementById('page-transition');
  if (pt) {
    // Reveal page — double rAF ensures initial opacity:1 is painted before we fade
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        pt.classList.add('is-hidden');
      });
    });

    // Fade out before navigating to internal pages
    document.querySelectorAll('a[href]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href || href.charAt(0) === '#' ||
          href.indexOf('://') > -1 ||
          href.indexOf('mailto:') === 0 ||
          href.indexOf('tel:') === 0) return;
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var dest = href;
        pt.classList.remove('is-hidden');
        setTimeout(function () { window.location.href = dest; }, 430);
      });
    });
  }

  // ── Scroll parallax (GSAP + ScrollTrigger, deferred — fine for scroll effects) ──
  if (typeof gsap === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);

  var hero = document.querySelector('.hero--fullbleed');
  if (!hero) return;

  var ht = {
    trigger: hero,
    start: 'top top',
    end: 'bottom top',
    scrub: 1.4,
  };

  gsap.to('.hero-doctor-img',      { y: -20, ease: 'none', scrollTrigger: ht });
  gsap.to('.hero-sticker--speed',  { y: -58, rotation:  1.5, ease: 'none', scrollTrigger: ht });
  gsap.to('.hero-sticker--badges', { y: -36, x: -5,          ease: 'none', scrollTrigger: ht });
  gsap.to('.hero-sticker--stars',  { y: -66, rotation: -1,   ease: 'none', scrollTrigger: ht });
  gsap.to('.hero-sticker--link',   { y: -22, rotation:  0.5, ease: 'none', scrollTrigger: ht });
  gsap.to('.hero-doodle--sparkle', { y: -28, rotation: 20,   ease: 'none', scrollTrigger: ht });
  gsap.to('.hero-doodle--balloon', { y: -44, rotation: 10,   ease: 'none', scrollTrigger: ht });
  gsap.to('.hero-doodle--flower',  { y: -18, rotation: -14,  ease: 'none', scrollTrigger: ht });

})();
