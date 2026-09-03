import { contacts, phoneHref, withOfferMessage } from './data/contacts.js';


const arrow = '<span aria-hidden="true">↗</span>';
const offer = 'земельный актив 6,2 га в «Новом Бородино»';
const whatsapp = contacts.whatsappUrl;
const telegram = contacts.telegramUrl;
const max = contacts.maxUrl;
const presentationContact = withOfferMessage(whatsapp, `инвестиционная презентация по объекту ${offer}`);
const materialsContact = withOfferMessage(whatsapp, `материалы для проверки по объекту ${offer}`);
const viewingContact = withOfferMessage(whatsapp, `просмотр массива ${offer}`);


export const landingMarkup = () => `
  <a class="skip-link" href="#content">Перейти к содержимому</a>
  <header class="lot-header" data-lot-header>
    <div class="lot-container lot-header__inner">
      <a class="lot-brand" href="#top" aria-label="Новое Бородино — к началу страницы"><span>НБ</span><b>Новое<br>Бородино</b></a>
      <nav class="lot-nav" aria-label="Навигация по странице">
        <a href="#territory">Об объекте</a><a href="#concept">Возможности</a><a href="#actual">Территория</a><a href="#location">Локация</a>
      </nav>
      <a class="lot-header__phone" href="${phoneHref}">${contacts.phone}<small>ежедневно 09:00–20:00</small></a>
      <a class="lot-button lot-button--dark lot-header__cta" href="${viewingContact}" target="_blank" rel="noreferrer" data-contact-channel="whatsapp" data-event="viewing_request">Назначить просмотр</a>
      <button class="lot-menu" type="button" data-lot-menu aria-expanded="false" aria-controls="lot-mobile-menu"><i></i><i></i><span class="visually-hidden">Открыть меню</span></button>
    </div>
    <nav class="lot-mobile-nav" id="lot-mobile-menu" data-lot-mobile-menu hidden aria-label="Мобильная навигация">
      <div class="lot-mobile-nav__top"><span>Меню</span><button type="button" data-lot-menu-close aria-label="Закрыть меню">×</button></div>
      <a href="#territory">Об объекте</a><a href="#concept">Возможности</a><a href="#actual">Территория</a><a href="#location">Локация</a>
      <a class="lot-button lot-button--accent" href="${viewingContact}" target="_blank" rel="noreferrer" data-contact-channel="whatsapp">Назначить просмотр ${arrow}</a>
      <a class="lot-mobile-nav__phone" href="${phoneHref}">${contacts.phone}<small>ежедневно 09:00–20:00</small></a>
    </nav>
  </header>
  <a class="lot-sticky-cta" href="${materialsContact}" target="_blank" rel="noreferrer" data-sticky-cta data-contact-channel="whatsapp" data-event="materials_request" data-before-label="Запросить материалы" data-before-href="${materialsContact}" data-location-label="Назначить просмотр" data-location-href="${viewingContact}"><span data-sticky-label>Запросить материалы</span> <span aria-hidden="true">↗</span></a>


  <main id="content">
    <section class="lot-hero" id="top" aria-labelledby="page-title">
      <img src="images/hero-novoe-borodino.webp" alt="Аэрофотография территории Нового Бородино" fetchpriority="high" width="1536" height="1024">
      <div class="lot-hero__shade"></div>
