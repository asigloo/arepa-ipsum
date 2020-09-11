const OPEN_GRAPH = [
  {
    hid: 'og:site_name',
    property: 'og:site_name',
    content: 'Arepa Ipsum | Generador Ipsum inspirado en comida venezolana',
  },
  {
    hid: 'og:description',
    property: 'og:description',
    content:
      'Generador Lorem Ipsum inspirado en la gastronomía y cultura venezolana',
  },
  {
    hid: 'og:title',
    property: 'og:title',
    content: 'Arepa Ipsum | Generador Ipsum inspirado en comida venezolana',
  },
  {
    hid: 'og:url',
    property: 'og:url',
    content: 'http://arepaipsum.com',
  },
  {
    hid: 'og:image',
    property: 'og:image',
    content:
      'https://res.cloudinary.com/alvarosaburido/image/upload/v1599822222/Arepa%20Ipsum/og-es_hvexug.png',
  },
  { property: 'og:updated_time', content: new Date().toISOString() },
];

const TWITTER = [
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:site', content: '@alvarosaburido1' },
  {
    hid: 'twitter:title',
    name: 'twitter:title',
    content: 'Arepa Ipsum | Generador Ipsum inspirado en comida venezolana',
  },
  {
    hid: 'twitter:description',
    name: 'twitter:description',
    content:
      'Generador Lorem Ipsum inspirado en la gastronomía y cultura venezolana',
  },
  {
    hid: 'twitter:image',
    name: 'twitter:image',
    content:
      'https://res.cloudinary.com/alvarosaburido/image/upload/v1599822222/Arepa%20Ipsum/og-es_hvexug.png',
  },
  {
    hid: 'twitter:image:alt',
    name: 'twitter:image:alt',
    content: 'Arepa Ipsum | Generador Ipsum inspirado en comida venezolana',
  },
];

export default {
  title: 'Arepa Ipsum | Generador Ipsum inspirado en comida venezolana',
  meta: [
    {
      charset: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        process.env.npm_package_description ||
        'Generador Lorem Ipsum inspirado en la gastronomía y cultura venezolana',
    },
    { hid: 'author', name: 'author', content: 'Alvaro Saburido' },
    ...OPEN_GRAPH,
    ...TWITTER,
    {
      hid: 'keywords',
      property: 'keywords',
      keywords:
        'lorem, ipsum, lorem ipsum, arepa, arepaipsum, venezuela, lorem ipsum generator, venezuelan street food, comida venezolana',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
};
