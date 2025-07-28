// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LA2P.RU WIKI',
  tagline: 'Википедия проекта LA2P.RU игры Lineage 2',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // ИСПРАВЛЕНО: Правильный URL вашего сайта
  url: 'https://wiki.la2p.ru',
  
  // ИСПРАВЛЕНО: Базовый путь для сайта в корне домена
  baseUrl: '/',

  // ИСПРАВЛЕНО: Данные вашего GitHub репозитория
  organizationName: 'Nemilost', // Ваш логин на GitHub
  projectName: 'l2-wiki', // Название вашего репозитория

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru', // ИЗМЕНЕНО: Установлен русский язык по умолчанию
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // ИСПРАВЛЕНО: Ссылка для редактирования удалена, чтобы не вызывать ошибок
        },
        blog: {
          showReadingTime: true,
          // ИСПРАВЛЕНО: Ссылка для редактирования удалена
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'LA2P.RU WIKI',
        logo: {
          alt: 'LA2P.RU WIKI Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Документация', // ИЗМЕНЕНО: Название пункта меню
          },
          {to: '/blog', label: 'Блог', position: 'left'}, // ИЗМЕНЕНО: Название пункта меню
          {
            // ИСПРАВЛЕНО: Ссылка на ВАШ GitHub репозиторий
            href: 'https://github.com/Nemilost/l2-wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Разделы',
            items: [
              {
                label: 'Документация',
                to: '/docs/intro',
              },
              {
                label: 'Блог',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Сообщество',
            items: [
              // Вы можете добавить сюда ссылки на ваши соцсети или форум
            ],
          },
          {
            title: 'Еще',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Nemilost/l2-wiki', // ИСПРАВЛЕНО: Ссылка на ВАШ GitHub
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} la2p.ru.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;