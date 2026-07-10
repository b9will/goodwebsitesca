(function () {
  "use strict";

  // Scroll reveal
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // Sticky nav — background on scroll + hide/show on scroll direction
  var header = document.getElementById("site-header");
  if (header) {
    var lastScrollY = window.scrollY;
    var navTicking = false;
    var onScroll = function () {
      if (navTicking) return;
      navTicking = true;
      requestAnimationFrame(function () {
        var scrollY = window.scrollY;
        header.classList.toggle("scrolled", scrollY > 60);
        if (scrollY > lastScrollY && scrollY > 120) {
          header.classList.add("nav-hidden");
        } else if (scrollY < lastScrollY) {
          header.classList.remove("nav-hidden");
        }
        lastScrollY = scrollY;
        navTicking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // FAQ accordion
  document.querySelectorAll(".faq-question").forEach(function (q) {
    q.addEventListener("click", function () {
      var item = q.closest(".faq-item");
      var wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (i) {
        i.classList.remove("open");
        i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("open");
        q.setAttribute("aria-expanded", "true");
      }
    });
    q.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        q.click();
      }
    });
  });

  // Pricing toggle (monthly / yearly)
  var toggle = document.getElementById("toggle-switch");
  var toggleContainer = document.getElementById("billing-toggle");
  if (toggle && toggleContainer) {
    var isYearly = false;

    function updatePrices() {
      var period = isYearly ? "yearly" : "monthly";
      document.querySelectorAll(".price-amount").forEach(function (el) {
        var price = el.getAttribute("data-" + period);
        if (price) el.innerHTML = "$" + price + "<span>/mo</span>";
      });
      toggleContainer.querySelectorAll("span[data-period]").forEach(function (s) {
        s.classList.toggle("active", s.dataset.period === period);
      });
      toggle.classList.toggle("on", isYearly);
      toggle.setAttribute("aria-checked", isYearly);
      document.body.classList.toggle("is-yearly", isYearly);
    }

    toggle.addEventListener("click", function () {
      isYearly = !isYearly;
      updatePrices();
    });
    toggle.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        isYearly = !isYearly;
        updatePrices();
      }
    });
  }

  // Problem section — hover-driven color change + floating image card
  var problemSection = document.getElementById("problems");
  var problemCard = document.getElementById("problem-card");
  var problemCardPhoto = document.getElementById("problem-card-photo");
  var problemInfoTip = document.getElementById("problem-info-tip");

  if (problemSection && problemCard) {
    var rows = problemSection.querySelectorAll(".problem-row");

    // Cursor-following card
    var cardCurX = 0, cardCurY = 0, cardTgtX = 0, cardTgtY = 0, cardRaf = null;
    var CARD_W = 390, CARD_H = Math.round(390 * 3 / 4);
    var activeRowIdx = 0;
    var photoSwapTimer = null;

    function tickCard() {
      cardCurX += (cardTgtX - cardCurX) * 0.1;
      cardCurY += (cardTgtY - cardCurY) * 0.1;
      var x = Math.min(Math.max(8, cardCurX), window.innerWidth - CARD_W - 8);
      // top 2: top-left at cursor; middle: centred; bottom 2: bottom-left at cursor
      var offset = activeRowIdx <= 1 ? 0 : activeRowIdx === 2 ? CARD_H / 2 : CARD_H;
      var y = Math.min(Math.max(8, cardCurY - offset), window.innerHeight - CARD_H - 8);
      // Transform-only positioning (compositor); CSS composes translate(--card-x, --card-y)
      problemCard.style.setProperty("--card-x", x + "px");
      problemCard.style.setProperty("--card-y", y + "px");
      cardRaf = requestAnimationFrame(tickCard);
    }

    problemSection.addEventListener("mousemove", function (e) {
      cardTgtX = e.clientX + 28;
      cardTgtY = e.clientY;
      if (!cardRaf) cardRaf = requestAnimationFrame(tickCard);
    });

    rows.forEach(function (row, idx) {
      row.addEventListener("mouseenter", function () {
        activeRowIdx = idx;
        problemSection.classList.add("has-hover");
        rows.forEach(function (r) {
          r.classList.remove("active");
          r.style.borderColor = "";
          r.style.boxShadow = "";
          r.style.background = "";
          r.style.color = "";
        });
        row.classList.add("active");
        row.style.borderColor = "var(--ink-900)";
        row.style.boxShadow = "4px 4px 0 0 var(--ink-900)";
        row.style.background = row.dataset.color;
        var darkFills = ["var(--sky-500)", "var(--grass-500)"];
        row.style.color = darkFills.indexOf(row.dataset.color) !== -1 ? "#FFFFFF" : "var(--ink-900)";
        if (problemCardPhoto && row.dataset.img) {
          clearTimeout(photoSwapTimer);
          var newSrc = row.dataset.img;
          if (problemCard.classList.contains("visible")) {
            problemCardPhoto.style.opacity = '0';
            photoSwapTimer = setTimeout(function () {
              problemCardPhoto.src = newSrc;
              problemCardPhoto.style.opacity = '1';
            }, 120);
          } else {
            var _preload = new Image();
            _preload.onload = function () {
              problemCardPhoto.src = newSrc;
              problemCardPhoto.style.opacity = '1';
              problemCard.classList.add("visible");
            };
            problemCardPhoto.style.opacity = '0';
            _preload.src = newSrc;
          }
        } else {
          problemCard.classList.add("visible");
        }
      });
    });

    problemSection.addEventListener("mouseleave", function () {
      problemSection.classList.remove("has-hover");
      rows.forEach(function (r) {
        r.classList.remove("active");
        r.style.borderColor = "";
        r.style.boxShadow = "";
        r.style.background = "";
        r.style.color = "";
      });
      problemCard.classList.remove("visible");
      if (cardRaf) { cancelAnimationFrame(cardRaf); cardRaf = null; }
    });

    // Info icon tooltip
    if (problemInfoTip) {
      var infoButtons = problemSection.querySelectorAll(".problem-row-info");
      infoButtons.forEach(function (btn) {
        function showTip(e) {
          if (e) e.stopPropagation();
          var row = btn.closest(".problem-row");
          problemInfoTip.textContent = row ? row.dataset.desc : "";
          var rect = btn.getBoundingClientRect();
          var tipW = 260;
          var left = Math.min(Math.max(8, rect.left + rect.width / 2 - tipW / 2), window.innerWidth - tipW - 8);
          var top = rect.top - problemInfoTip.offsetHeight - 10;
          if (top < 8) top = rect.bottom + 10;
          problemInfoTip.style.left = left + "px";
          problemInfoTip.style.top = top + "px";
          problemInfoTip.classList.add("open");
        }
        function hideTip() { problemInfoTip.classList.remove("open"); }
        btn.addEventListener("mouseenter", showTip);
        btn.addEventListener("mouseleave", hideTip);
        btn.addEventListener("focus", showTip);
        btn.addEventListener("blur", hideTip);
      });
    }
  }

  // Solution section — click to jump (scroll-driven active state lives in animations.js)
  var solutionNav = document.getElementById("solution-nav");
  if (solutionNav) {
    solutionNav.querySelectorAll(".solution-nav-item").forEach(function (item) {
      item.addEventListener("click", function () {
        var target = document.querySelector(".solution-block[data-index='" + item.dataset.index + "']");
        if (target) {
          var top = target.getBoundingClientRect().top + window.scrollY - 120;
          window.scrollTo({ top: top, behavior: "smooth" });
        }
      });
    });
  }

  // Proof showcase — hover swaps preview panel
  var proofShowcase = document.querySelector('.proof-showcase');
  if (proofShowcase) {
    var proofItems = proofShowcase.querySelectorAll('.proof-item');
    var proofCards = proofShowcase.querySelectorAll('.proof-panel-card');

    function activateProofItem(item) {
      var idx = item.dataset.project;
      proofItems.forEach(function (i) { i.classList.remove('active'); });
      proofCards.forEach(function (c) { c.classList.remove('active'); });
      item.classList.add('active');
      var card = proofShowcase.querySelector('.proof-panel-card[data-project="' + idx + '"]');
      if (card) card.classList.add('active');
    }

    proofItems.forEach(function (item) {
      item.addEventListener('mouseenter', function () { activateProofItem(item); });
      item.addEventListener('focus', function () { activateProofItem(item); });
    });

    proofShowcase.addEventListener('mouseleave', function () {
      proofItems.forEach(function (i) { i.classList.remove('active'); });
      proofCards.forEach(function (c) { c.classList.remove('active'); });
      if (proofItems[0]) proofItems[0].classList.add('active');
      if (proofCards[0]) proofCards[0].classList.add('active');
    });
  }

  // Nav tab slider
  var navTabsEl = document.getElementById("nav-tabs");
  var navSliderEl = document.getElementById("nav-slider");
  if (navTabsEl && navSliderEl) {
    var tabAnchors = navTabsEl.querySelectorAll("a");
    function moveNavSlider(link) {
      var containerRect = navTabsEl.getBoundingClientRect();
      var linkRect = link.getBoundingClientRect();
      navSliderEl.style.left = (linkRect.left - containerRect.left) + "px";
      navSliderEl.style.width = linkRect.width + "px";
      navSliderEl.style.opacity = "1";
    }
    tabAnchors.forEach(function (link) {
      link.addEventListener("mouseenter", function () { moveNavSlider(link); });
    });
    navTabsEl.addEventListener("mouseleave", function () {
      navSliderEl.style.opacity = "0";
    });
  }

  // Toast utility (used by book.html CTA)
  function showToast(msg) {
    var t = document.createElement('div');
    t.className = 'toast';
    t.setAttribute('role', 'status');
    t.setAttribute('aria-live', 'polite');
    t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { t.classList.add('toast--visible'); });
    });
    setTimeout(function () {
      t.classList.remove('toast--visible');
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 400);
    }, 3500);
  }

  var bookCta = document.getElementById('book-cta');
  if (bookCta) {
    bookCta.addEventListener('click', function () {
      showToast('Opening Calendly in a new tab ↗');
    });
  }

  // Cookie consent (once per browser, stored in localStorage)
  try {
    if (!localStorage.getItem("gw-cookie-ok")) {
      var cc = document.createElement("div");
      cc.className = "cookie-consent";
      cc.setAttribute("role", "dialog");
      cc.setAttribute("aria-label", "Cookie notice");
      cc.innerHTML = '<p>We use a few cookies for booking and analytics — nothing creepy. <a href="/privacy.html">Privacy</a></p>' +
                     '<button class="btn btn--dark btn--sm" type="button">Got it</button>';
      cc.querySelector("button").addEventListener("click", function () {
        localStorage.setItem("gw-cookie-ok", "1");
        cc.remove();
      });
      document.body.appendChild(cc);
    }
  } catch (e) { /* localStorage unavailable (private mode) — skip banner */ }

  // Mobile nav toggle
  var navToggle = document.getElementById("nav-toggle");
  var navLinks = document.getElementById("nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
  }

})();
