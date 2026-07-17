/* About page — vertical timeline parallax */
window.addEventListener('load', function () {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  var isDesktop = window.matchMedia('(min-width: 801px)').matches;

  /* ── GIF parallax: each gif drifts upward at ~50% scroll speed ── */
  gsap.utils.toArray('.tl-gif-wrap').forEach(function (wrap, i) {
    /* alternate rotation: odd left, even right */
    var rot = (i % 2 === 0) ? -2.5 : 2.5;
    gsap.set(wrap, { rotation: rot });

    if (isDesktop) {
      gsap.to(wrap, {
        y: -70,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  });

  /* ── Depth doodles: slower parallax for floating atmosphere ── */
  if (isDesktop) {
    gsap.utils.toArray('.tl-depth-doodle').forEach(function (el, i) {
      var speed = (i % 2 === 0) ? -90 : -60;
      gsap.to(el, {
        y: speed,
        ease: 'none',
        scrollTrigger: {
          trigger: '#tl-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  }
});
