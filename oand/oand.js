(function () {
  const TOTAL = 13;
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
