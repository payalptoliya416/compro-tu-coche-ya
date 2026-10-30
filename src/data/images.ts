// ALL images in one place. Put your real photos in /public/images and
// change EXT (or individual names) here.
const EXT = 'svg'; // <- change to 'jpg' / 'webp' after replacing the placeholders
const p = (name: string) => `/images/${name}.${EXT}`;

export const images = {
  // Real PNG images (user-provided)
  heroHome: '/images/home-hero.png',
  logo: '/images/logo.png',
  sellBg: '/images/sell-bg.png',
  typeGasoline: '/images/slide01.png',
  typeDiesel: '/images/slide02.png',
  typeHybrid: '/images/slide03.png',
  typeElectric: '/images/slide04.png',

  // Car make logos
  make01: '/images/make01.png',
  make02: '/images/make02.png',
  make03: '/images/make03.png',
  make04: '/images/make04.png',
  make05: '/images/make05.png',
  make06: '/images/make06.png',
  make07: '/images/make07.png',
  make08: '/images/make08.png',
  make09: '/images/make09.png',
  make10: '/images/make10.png',

  // Placeholder SVGs (replace later)
  heroSell: p('hero-sell'),
  heroAbout: p('hero-about'),
  heroHow: p('hero-how'),
  heroPickup: p('hero-pickup'),
  heroContact: p('hero-contact'),
  team1: p('team-1'),
  team2: p('team-2'),
  handshake: p('handshake'),
  keys: p('keys'),
  benefits: p('benefits'),
  builtLarge: p('built-large'),
  builtSmall1: p('built-small-1'),
  builtSmall2: p('built-small-2'),
  pickupCity: p('pickup-city'),
  pickupHome: p('pickup-home'),
  pickupWork: p('pickup-work'),
  pickupWoman: p('pickup-woman'),
  contactSide: p('contact-side'),
  statsBg: p('stats-bg'),
  ctaBg: p('cta-bg'),
  avatar1: '/images/client01.png',
  avatar2: '/images/client02.png',
  avatar3: '/images/client03.png',
  carGolf: p('car-golf'),
  carAudi: p('car-audi'),
  carMercedes: p('car-mercedes'),
  carCitroen: p('car-citroen'),
};
