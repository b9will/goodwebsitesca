/* About page — neo-brutalist horizontal timeline */
window.addEventListener('load', function () {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobile = window.innerWidth <= 800;

  /* ── Horizontal scroll (desktop + motion OK) ───────────────────────── */
  if (!isMobile && !prefersReduced) {
    var track = document.querySelector('.tl-track');
    if (!track) return;

    var getScrollDist = function () {
      return track.scrollWidth - window.innerWidth;
    };

    /* Master timeline: translate track + progress bar */
    var masterTL = gsap.timeline({
      scrollTrigger: {
        trigger: '#tl-section',
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        end: function () { return '+=' + getScrollDist(); },
      }
    });

    masterTL
      .to(track, { x: function () { return -getScrollDist(); }, ease: 'none' }, 0)
      .to('#tl-progress', { scaleX: 1, ease: 'none' }, 0);

    var mainST = masterTL.scrollTrigger;

    /* Velocity-based skewX — gives the track inertia feel */
    var proxy    = { skewX: 0 };
    var setter   = gsap.quickSetter(track, 'skewX', 'deg');
    var clampVal = gsap.utils.clamp(-5, 5);

    mainST.vars.onUpdate = function () {
      var v = clampVal(mainST.getVelocity() / 600);
      if (Math.abs(v - proxy.skewX) > 0.002) {
        proxy.skewX = v;
        setter(v);
        gsap.to(proxy, {
          skewX: 0,
          duration: 0.9,
          ease: 'power3',
          overwrite: true,
          onUpdate: function () { setter(proxy.skewX); }
        });
      }
    };

    /* Era cards float up as they enter view */
    gsap.utils.toArray('.tl-era').forEach(function (era) {
      gsap.from(era, {
        opacity: 0,
        y: 48,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: era,
          containerAnimation: mainST,
          start: 'left 95%',
          toggleActions: 'play none none none',
        }
      });
    });

    ScrollTrigger.refresh();

  } else {
    /* ── Mobile / reduced-motion: vertical stacked fallback ─────────── */
    document.getElementById('tl-progress').style.transform = 'scaleX(1)';

    if (!prefersReduced) {
      gsap.utils.toArray('.tl-era').forEach(function (el) {
        gsap.from(el, {
          opacity: 0,
          y: 32,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' }
        });
      });
    }
  }

  /* ── Below-timeline reveals ─────────────────────────────────────────── */
  gsap.utils.toArray('.reveal').forEach(function (el) {
    if (el.closest('#tl-section')) return;
    gsap.from(el, {
      opacity: 0,
      y: prefersReduced ? 0 : 28,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' }
    });
  });

  ScrollTrigger.refresh();
});
