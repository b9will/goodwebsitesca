/* About page — horizontal timeline: single scrubbed timeline per era */
window.addEventListener('load', function () {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isDesktop      = window.matchMedia('(min-width: 801px)').matches;

  if (!isDesktop || prefersReduced) return;

  var outer = document.querySelector('.tl-outer');
  var track = document.querySelector('.tl-track');
  if (!outer || !track) return;

  /* ── Master horizontal scroll ── */
  var scrollTween = gsap.to(track, {
    x: function () { return -(track.scrollWidth - outer.clientWidth); },
    ease: 'none',
    scrollTrigger: {
      trigger: outer,
      start: 'top top',
      end: function () { return '+=' + (track.scrollWidth - outer.clientWidth); },
      pin: true,
      scrub: true,
      invalidateOnRefresh: true
    }
  });

  /* ── Per-era: single scrubbed timeline (enter → hold → exit) ── */
  gsap.utils.toArray('.tl-era').forEach(function (era) {
    var inner = era.querySelector('.tl-era-inner');
    var year  = era.querySelector('.tl-year');

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: era,
        containerAnimation: scrollTween,
        start: 'left right',
        end: 'right left',
        scrub: true
      }
    });

    /* Scale in + rack-focus blur (35% of journey) */
    tl.fromTo(inner,
      { scale: 0.45, autoAlpha: 0.4, filter: 'blur(3px)' },
      { scale: 1,    autoAlpha: 1,    filter: 'blur(0px)', ease: 'none', duration: 0.35 }
    );
    /* Hold at centre (30% of journey) */
    tl.to(inner, { duration: 0.3 });
    /* Scale out + blur returns (35% of journey) */
    tl.to(inner,
      { scale: 0.45, autoAlpha: 0.4, filter: 'blur(3px)', ease: 'none', duration: 0.35 }
    );

  });

  /* ── Depth doodles: move at 30% of track speed → parallax background layer ── */
  gsap.utils.toArray('.tl-depth-doodle').forEach(function (el) {
    gsap.to(el, {
      x: function () { return (track.scrollWidth - outer.clientWidth) * 0.3; },
      ease: 'none',
      scrollTrigger: {
        trigger: outer,
        start: 'top top',
        end: function () { return '+=' + (track.scrollWidth - outer.clientWidth); },
        scrub: true,
        invalidateOnRefresh: true
      }
    });
  });

  /* Ensure footer trigger recalculates after pin spacer is added */
  requestAnimationFrame(function () { ScrollTrigger.refresh(); });
});
