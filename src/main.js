const normalizePagesAssets = () => { document.querySelectorAll('img[src^="/images/"], source[src^="/images/"]').forEach((el) => { el.src = '/novo-borodino-review' + el.getAttribute('src'); }); };
normalizePagesAssets();
new MutationObserver(normalizePagesAssets).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] });


import './styles/main.css';
import './styles/lot-landing.css';
import './styles/lot-link-overrides.css';
import { initAnalyticsConsent, reachMetrikaGoal } from './analytics.js';
import { landingMarkup } from './lot-landing.js';




const app = document.querySelector('#app');




if (app && !app.innerHTML.trim()) app.innerHTML = landingMarkup();




const header = document.querySelector('[data-lot-header]');
const hero = document.querySelector('.lot-hero');
const stickyCta = document.querySelector('[data-sticky-cta]');
const updateHeader = () => header?.classList.toggle('is-solid', window.scrollY > 32);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
if (hero && stickyCta && 'IntersectionObserver' in window) {
  const stickyObserver = new IntersectionObserver(([entry]) => stickyCta.classList.toggle('is-visible', !entry.isIntersecting), { threshold: 0.02 });
  stickyObserver.observe(hero);
}




const menuButton = document.querySelector('[data-lot-menu]');
const mobileMenu = document.querySelector('[data-lot-mobile-menu]');
let menuRestoreFocus;
const setMobileMenu = (opened) => {
  if (!menuButton || !mobileMenu) return;
  menuButton.setAttribute('aria-expanded', String(opened));
  mobileMenu.hidden = !opened;
