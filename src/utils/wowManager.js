import { useEffect } from 'react';
export function initWowEngine() {
  if (typeof window === 'undefined') return () => {};

  if (window.WOW) {
    try {
      const wow = new window.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 60,
        mobile: true,
        live: true,
        scrollContainer: null,
        resetAnimation: true
      });
      wow.init();
    } catch (e) {
      console.warn('WOW.js init error, falling back to native WOW engine', e);
    }
  }

  if (!('IntersectionObserver' in window)) {

    document.querySelectorAll('.wow').forEach((el) => {
      el.classList.add('animated');
      el.style.visibility = 'visible';
    });
    return () => {};
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.12
  };

  const wowObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.getAttribute('data-wow-delay') || '0s';
        const duration = el.getAttribute('data-wow-duration') || '0.7s';
        const iteration = el.getAttribute('data-wow-iteration') || '1';

        el.style.animationDelay = delay;
        el.style.animationDuration = duration;
        el.style.animationIterationCount = iteration;
        el.style.visibility = 'visible';
        el.classList.add('animated');

        observer.unobserve(el);
      }
    });
  }, observerOptions);

  const observeElements = () => {
    const wowElements = document.querySelectorAll('.wow:not(.animated)');
    wowElements.forEach((el) => {
      if (!el.classList.contains('animated')) {
        el.style.visibility = 'hidden';
      }
      wowObserver.observe(el);
    });
  };

  observeElements();

 
  const mutationObserver = new MutationObserver(() => {
    observeElements();
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
  });

  return () => {
    wowObserver.disconnect();
    mutationObserver.disconnect();
  };
}

export function useWowAnimation(deps = []) {
  useEffect(() => {
    const cleanup = initWowEngine();
    return () => {
      if (cleanup) cleanup();
    };
  }, deps);
}
