(function () {
  const TOTAL = 14;
  let cur = 1;

  const slides = document.querySelectorAll('.slide');
  const dotsEl = document.getElementById('dots');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const counter = document.getElementById('counter');
  const progress = document.getElementById('progress');

  for (let i = 1; i <= TOTAL; i++) {
    const d = document.createElement('button');
    d.className = 'dot';
    d.setAttribute('aria-label', 'Go to slide ' + i);
    d.dataset.n = i;
    d.addEventListener('click', () => goTo(parseInt(d.dataset.n)));
    dotsEl.appendChild(d);
  }

  function goTo(n) {
    n = Math.max(1, Math.min(TOTAL, n));
    slides.forEach((s, i) => s.classList.toggle('active', i + 1 === n));
    Array.from(dotsEl.children).forEach((d, i) => d.classList.toggle('active', i + 1 === n));
    counter.textContent = n + ' / ' + TOTAL;
    progress.style.width = (n / TOTAL * 100) + '%';
    prevBtn.disabled = n === 1;
    nextBtn.disabled = n === TOTAL;
    history.replaceState(null, '', '#' + n);
    cur = n;
  }

  const hash = parseInt(location.hash.slice(1), 10);
  goTo(!isNaN(hash) && hash >= 1 && hash <= TOTAL ? hash : 1);

  prevBtn.addEventListener('click', () => goTo(cur - 1));
  nextBtn.addEventListener('click', () => goTo(cur + 1));

  document.addEventListener('keydown', e => {
    if (['ArrowLeft', 'ArrowUp'].includes(e.key)) { e.preventDefault(); goTo(cur - 1); }
    if (['ArrowRight', 'ArrowDown', ' '].includes(e.key)) { e.preventDefault(); goTo(cur + 1); }
    if (e.key === 'Home') { e.preventDefault(); goTo(1); }
    if (e.key === 'End') { e.preventDefault(); goTo(TOTAL); }
  });

  let tx = 0;
  document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 48) goTo(dx < 0 ? cur + 1 : cur - 1);
  }, { passive: true });
})();

// Click-to-copy email
(function () {
  var btn = document.getElementById('copy-email-btn');
  var toast = document.getElementById('copy-toast');
  if (!btn || !toast) return;
  var toastTimer;
  function showToast() {
    clearTimeout(toastTimer);
    toast.classList.add('show');
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2000);
  }
  btn.addEventListener('click', function () {
    navigator.clipboard.writeText('hello@goodwebsites.ca').then(showToast);
  });
  btn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigator.clipboard.writeText('hello@goodwebsites.ca').then(showToast); }
  });
})();

// OAND pricing toggle
(function () {
  var toggle = document.getElementById('oand-toggle-switch');
  var container = document.getElementById('oand-billing-toggle');
  if (!toggle || !container) return;
  var isYearly = false;

  function update() {
    var period = isYearly ? 'yearly' : 'monthly';
    document.querySelectorAll('.price-oand-amount').forEach(function (el) {
      var price = el.getAttribute('data-' + period);
      if (price) el.innerHTML = '$' + price + '<span>/mo</span>';
    });
    document.querySelectorAll('.price-was').forEach(function (el) {
      var was = el.getAttribute('data-was-' + period);
      if (was) el.textContent = was;
    });
    document.querySelectorAll('.price-oand-note').forEach(function (el) {
      var note = el.getAttribute('data-' + period);
      if (note) el.textContent = note;
    });
    container.querySelectorAll('span[data-period]').forEach(function (s) {
      s.classList.toggle('active', s.dataset.period === period);
    });
    toggle.classList.toggle('on', isYearly);
    toggle.setAttribute('aria-checked', isYearly);
  }

  toggle.addEventListener('click', function () { isYearly = !isYearly; update(); });
  toggle.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); isYearly = !isYearly; update(); }
  });
})();
