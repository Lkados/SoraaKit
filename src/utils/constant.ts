import Home from '@/components/icons/home';

export const clients = [...new Array(10)].map((_, index) => ({
  href: `/assets/infiniteCard/${index + 1}.png`,
}));

export const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: '/assets/p1.png',
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail: '/assets/p2.png',
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail: '/assets/p3.png',
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail: '/assets/p4.png',
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: '/assets/p5.png',
  },
  {
    title: 'Pixel Perfect',
    link: 'https://app.pixelperfect.quest',
    thumbnail: '/assets/p6.png',
  },

  {
    title: 'Algochurn',
    link: 'https://algochurn.com',
    thumbnail: '/assets/p1.png',
  },
  {
    title: 'Aceternity UI',
    link: 'https://ui.aceternity.com',
    thumbnail: '/assets/p2.png',
  },
  {
    title: 'Tailwind Master Kit',
    link: 'https://tailwindmasterkit.com',
    thumbnail: '/assets/p3.png',
  },
  {
    title: 'SmartBridge',
    link: 'https://smartbridgetech.com',
    thumbnail: '/assets/p4.png',
  },
  {
    title: 'Renderwork Studio',
    link: 'https://renderwork.studio',
    thumbnail: '/assets/p5.png',
  },

  {
    title: 'Creme Digital',
    link: 'https://cremedigital.com',
    thumbnail: '/assets/p6.png',
  },
  {
    title: 'Golden Bells Academy',
    link: 'https://goldenbellsacademy.com',
    thumbnail: '/assets/p1.png',
  },
  {
    title: 'Invoker Labs',
    link: 'https://invoker.lol',
    thumbnail: '/assets/p2.png',
  },
  {
    title: 'E Free Invoice',
    link: 'https://efreeinvoice.com',
    thumbnail: '/assets/p3.png',
  },
];

export const menuOptions = [
  { name: 'Dashboard', Component: Home, href: '/dashboard' },
];

export const plans = [
  {
    id: 1,
    title: 'Starter',
    price: 0,
    description:
      "Get a glimpse of what our software is capable of. Just a heads up you'll never leave us after this!",
    features: [
      '1000 free requests',
      '1000 free requests',
      '1000 free requests',
      '1000 free requests',
    ],
  },
  {
    id: 2,
    title: 'Pro',
    price: 10,
    description:
      "Get a glimpse of what our software is capable of. Just a heads up you'll never leave us after this!",
    features: [
      '1000 free requests',
      '1000 free requests',
      '1000 free requests',
      '1000 free requests',
    ],
  },
  {
    id: 3,
    title: 'Enterprise',
    price: 100,
    description:
      "Get a glimpse of what our software is capable of. Just a heads up you'll never leave us after this!",
    features: [
      '1000 free requests',
      '1000 free requests',
      '1000 free requests',
      '1000 free requests',
    ],
  },
];
