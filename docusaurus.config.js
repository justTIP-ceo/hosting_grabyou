// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GrabYou — срочные предложения рядом',
  tagline: 'Выгодные предложения от местного бизнеса — прямо рядом с вами',
  favicon: 'img/grabyouph.png',

  url: 'https://grabyou.ru',
  baseUrl: '/',

  organizationName: 'justTIP-ceo',
  projectName: 'hosting_grabyou',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Unbounded:wght@500;600;700;800&display=swap',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'GrabYou',
        logo: {
          alt: 'My Site Logo',
          src: 'img/grabyouph.png',
        },
        items: [
          {
            to: '/download',
            label: 'Скачать',
            position: 'right',
          },
          {
            href: 'https://t.me/GrabYouOfficial',
            position: 'right',
            className: 'navbar-telegram-link',
            'aria-label': 'Telegram канал GrabYou',
            html: '<img src="/img/telegram-navbar.png" alt="Telegram" class="navbar-telegram-icon" />',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
        ],
      },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} GrabYou — Маркетплейс срочных предложений от локального бизнеса`,
    },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
