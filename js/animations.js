/* GSAP-owned animations. Rule: every element is animated by exactly ONE system —
   CSS `.reveal` (IntersectionObserver in main.js) for simple fade-ups,
   GSAP here for anything scrubbed, pinned, or sequenced. */
(function () {
  'use strict';

  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  /* Matches the site's CSS motion personality:
     --ease-out: cubic-bezier(0.22,1,0.36,1) ≈ power4.out, --dur-slower: 520ms */
  gsap.defaults({ ease: 'power4.out', duration: 0.55 });

  /* ── Class toggles (run for everyone — CSS owns the motion and already
        disables it under prefers-reduced-motion) ─────────────────────── */

  var solutionNav = document.getElementById('solution-nav');
  if (solutionNav) {
    var navItems = solutionNav.querySelectorAll('.solution-nav-item');
    gsap.utils.toArray('.solution-block').forEach(function (block, i) {
      ScrollTrigger.create({
        trigger: block,
        start: 'top 50%',
        end: 'bottom 50%',
        onToggle: function (self) {
          if (!self.isActive) return;
          navItems.forEach(function (item, j) {
            item.classList.toggle('active', j === i);
            item.classList.toggle('done', j < i);
            item.setAttribute('aria-current', j === i ? 'true' : 'false');
          });
        }
      });
    });
  }

  /* ── Motion (auto-reverted on breakpoint change, skipped for reduced motion) ── */

  var mm = gsap.matchMedia();
  mm.add(
    {
      isDesktop: '(min-width: 900px)',
      isMobile: '(max-width: 899px)',
      reduceMotion: '(prefers-reduced-motion: reduce)'
    },
    function (context) {
      if (context.conditions.reduceMotion) return;
      var isDesktop = context.conditions.isDesktop;

      /* Footer. Desktop: fixed behind the page edge, bounces up over the last
         section when scroll ends (reverses on scroll back). Mobile/short
         pages: classic in-flow slide-up. */
      var siteFooter = document.querySelector('.site-footer');
      var mainEl = document.querySelector('main');
      if (siteFooter && mainEl && isDesktop) {
        document.body.classList.add('footer-fixed');
        var footTween = gsap.fromTo(siteFooter,
          { y: 0, yPercent: 103 },
          { yPercent: 0, ease: 'back.out(1.1)', duration: 0.45, paused: true });
        ScrollTrigger.create({
          trigger: mainEl,
          start: 'bottom bottom+=2',
          animation: footTween,
          toggleActions: 'play none none reverse'
        });
        ScrollTrigger.refresh();
      } else if (siteFooter) {
        ScrollTrigger.create({
          trigger: siteFooter,
          start: 'top 92%',
          once: true,
          onEnter: function () { siteFooter.classList.add('footer--visible'); }
        });
      }

      /* Process rows (work page) — GSAP is the sole owner. One tween per row,
         card + content move together (sequenced children read as broken/empty cards).
         The row's CSS hover transition (transform) fights the tween and its leftover
         inline transform kills :hover — suppress during entrance, clearProps after. */
      gsap.utils.toArray('.process-row').forEach(function (row) {
        row.style.transition = 'none';
        gsap.from(row, {
          y: 32,
          autoAlpha: 0,
          clearProps: 'all',
          scrollTrigger: { trigger: row, start: 'top 90%', once: true }
        });
      });

      /* Homepage hero parallax — desktop only */
      var hero = document.querySelector('.hero--fullbleed');
      if (hero && isDesktop) {
        gsap.timeline({
          scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.8 }
        })
          .to('.hero-doctor-img',      { y: -20, ease: 'none' }, 0)
          .to('.hero-sticker--speed',  { y: -58, rotation:  1.5, ease: 'none' }, 0)
          .to('.hero-sticker--badges', { y: -36, x: -5,          ease: 'none' }, 0)
          .to('.hero-sticker--stars',  { y: -66, rotation: -1,   ease: 'none' }, 0)
          .to('.hero-sticker--link',   { y: -22, rotation:  0.5, ease: 'none' }, 0)
          .to('.hero-doodle--sparkle', { y: -28, rotation: 20,   ease: 'none' }, 0);
      }

      /* Testimonial drift — desktop only (cards stack vertically on mobile).
         GSAP preserves the rotateY set by CSS and drives y only.
         baseY must match the .testi-card:nth-child transforms in pages.css. */
      var testiStage = document.getElementById('testimonials-stage');
      if (testiStage && isDesktop) {
        var baseY  = [28, 0, -28];
        var drift  = [50, 0, -50];
        testiStage.querySelectorAll('.testi-card').forEach(function (card, i) {
          if (i >= baseY.length) return;
          gsap.fromTo(card,
            { y: baseY[i] + drift[i] / 2 },
            {
              y: baseY[i] - drift[i] / 2,
              ease: 'none',
              scrollTrigger: { trigger: testiStage, start: 'top bottom', end: 'bottom top', scrub: 0.8 }
            });
        });
      }

      return function () { document.body.classList.remove('footer-fixed'); };
    }
  );
})();
