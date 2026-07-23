// Central site configuration for Patuxai (Victory Gate, Vientiane, Laos).
import { languagesList, htmlLang, type Lang } from './i18n/ui';

export const siteConfig = {
  // Replace with the real production domain before deploying.
  domain: 'https://patuxai.com',

  // Display name per language (default = lo / Lao).
  name: {
    lo: 'ປະຕູໄຊ',
    en: 'Patuxai',
    zh: '万象凯旋门',
  } as Record<Lang, string>,
  nameShort: {
    lo: 'ປະຕູໄຊ',
    en: 'Patuxai',
    zh: '凯旋门',
  } as Record<Lang, string>,
  nameLocal: 'Patuxai · ປະຕູໄຊ · 万象凯旋门',

  // Actual Patuxai coordinates (Lane Xang Ave, Vientiane).
  coords: {
    lat: 17.9705363,
    lng: 102.6139707,
  },

  mapsUrl: 'https://maps.app.goo.gl/MU46frN67mD9RdgAA',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.176226531386!2d102.61397069678955!3d17.970536300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3124687ed455e1df%3A0x24af4d39ae4445b0!2z5Liw6LGh5Yev5peL6Zeo!5e0!3m2!1szh-CN!2sus!4v1784771502551!5m2!1szh-CN!2sus',

  address: 'Ave Lane Xang, Vientiane 01000, Laos',
  plusCode: 'XJC9+6F Vientiane, Laos',

  openingHours: {
    opens: '07:30',
    closes: '19:30',
    time: '07:30–19:30',
  },
  rating: '4.4',
  reviewCount: '12,528',

  // Patuxai is a public monument with no dedicated contact line; leave blank.
  phone: '',
  phoneDisplay: '',

  galleryPrefix: 'patuxai-',
  galleryCount: 18,
  ogImage: '/gallery/patuxai-1.jpg',

  sources: [
    {
      name: {
        lo: 'ກະຊວງການທ່ອງທ່ຽວລາວ',
        en: 'Tourism Laos',
        zh: '老挝国家旅游局',
      } as Record<Lang, string>,
      url: 'https://www.tourismlaos.org',
    },
    {
      name: {
        lo: 'ວິກິພີເດຍ: ປະຕູໄຊ',
        en: 'Wikipedia: Patuxai',
        zh: '维基百科：凯旋门（万象）',
      } as Record<Lang, string>,
      url: 'https://en.wikipedia.org/wiki/Patuxai',
    },
    {
      name: {
        lo: 'ນະຄອນຫຼວງວຽງຈັນ',
        en: 'Vientiane Capital',
        zh: '万象市政府',
      } as Record<Lang, string>,
      url: 'https://vientianecapital.gov.la',
    },
  ],

  sameAs: [
    'https://maps.app.goo.gl/MU46frN67mD9RdgAA',
    'https://en.wikipedia.org/wiki/Patuxai',
    'https://www.tourismlaos.org',
  ],
};

export type Languages = (typeof languagesList)[number];
export { htmlLang };
