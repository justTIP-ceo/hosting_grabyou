// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GrabYou — срочные предложения рядом',
  tagline: 'Выгодные предложения от местного бизнеса — прямо рядом с вами',
  favicon: 'img/brand/favicon.svg',

  url: 'https://grabyou.ru',
  baseUrl: '/',

  organizationName: 'justTIP-ceo',
  projectName: 'hosting_grabyou',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  // Якоря (#how-it-works, #how) стоят на <section id> внутри React-компонентов,
  // а проверка Docusaurus видит только заголовки MDX — отсюда ложные срабатывания.
  onBrokenAnchors: 'ignore',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {rel: 'apple-touch-icon', href: '/img/brand/apple-touch-icon.png'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'alternate icon', href: '/img/brand/favicon.ico'},
    },
    {
      tagName: 'meta',
      attributes: {name: 'theme-color', content: '#aef336'},
    },
  ],

  stylesheets: [
    {
      // Фирменные Cygre / Bulatov SP Demo — файлы кладутся в static/fonts/
      href: '/fonts/brand-fonts.css',
      type: 'text/css',
    },
    {
      // Свободные фолбэки фирменной пары Cygre / Bulatov SP Demo.
      // См. static/fonts/README.md
      href: 'https://fonts.googleapis.com/css2?family=Onest:wght@300..900&family=Unbounded:wght@300..900&family=JetBrains+Mono:wght@400;700&display=swap',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/brand/og-cover.png',
      metadata: [
        {
          name: 'description',
          content:
            'GrabYou — маркетплейс срочных предложений от локального бизнеса. Кофейни, пекарни, кафе и магазины рядом с вами: выгодная цена, оплата в приложении, самовывоз по QR.',
        },
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'GrabYou',
        logo: {
          alt: 'GrabYou',
          src: 'img/brand/logo-wordmark-ink.svg',
          srcDark: 'img/brand/logo-wordmark-lime.svg',
          height: 42,
        },
        items: [
          {
            to: '/partners',
            label: 'Партнёрам',
            position: 'right',
          },
          {
            to: '/download',
            label: 'Скачать',
            position: 'right',
            className: 'navbar-cta',
          },
          {
            href: 'https://t.me/GrabYouOfficial',
            position: 'right',
            className: 'navbar-telegram-link',
            'aria-label': 'Telegram-канал GrabYou',
            html: '<svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.1 3.5 19.6 20c-.3 1.2-1 1.5-2 .9l-5.5-4-2.7 2.6c-.3.3-.6.6-1.2.6l.4-5.5 10.2-9.2c.4-.4-.1-.6-.7-.2L5.6 12.1.2 10.4c-1.2-.4-1.2-1.2.2-1.7L21.6 2c1-.4 1.8.2 1.5 1.5Z"/></svg>',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Сервис',
            items: [
              {label: 'Как это работает', to: '/#how-it-works'},
              {label: 'Скачать приложение', to: '/download'},
              {label: 'Партнёрам', to: '/partners'},
            ],
          },
          {
            title: 'Связаться',
            items: [
              {
                label: 'Telegram-канал',
                href: 'https://t.me/GrabYouOfficial',
              },
              {
                label: 'grabyou@mail.ru',
                href: 'mailto:grabyou@mail.ru',
              },
            ],
          },
          {
            title: 'Где нас открыть',
            items: [
              {label: 'RuStore', href: 'https://www.rustore.ru/catalog/app/com.grabyou.app'},
              {label: 'Telegram-бот', href: 'https://t.me/GrabYou_bot'},
              {label: 'VK Mini App', href: 'https://vk.com/app54610417'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} GrabYou — маркетплейс срочных предложений от локального бизнеса`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
