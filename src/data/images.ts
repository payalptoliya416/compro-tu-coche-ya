// ALL images in one place. Put your real photos in /public/images and
// change EXT (or individual names) here.
const EXT = 'svg'; // <- change to 'jpg' / 'webp' after replacing the placeholders
const p = (name: string) => `/images/${name}.${EXT}`;

export const images = {
  heroHome: p('hero-home'),
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
  avatar1: p('avatar-1'),
  avatar2: p('avatar-2'),
  avatar3: p('avatar-3'),
  carGolf: p('car-golf'),
  carAudi: p('car-audi'),
  carMercedes: p('car-mercedes'),
  carCitroen: p('car-citroen'),
  typeGasoline: p('type-gasoline'),
  typeDiesel: p('type-diesel'),
  typeHybrid: p('type-hybrid'),
  typeElectric: p('type-electric'),
};
