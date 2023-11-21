// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vincent Bowen',
  tagline: 'My Personal Website',
  favicon: 'img/vb_favicon.ico',

  // Set the production url of your site here
  url: 'https://www.vincentbowen.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vincedbowen', // Usually your GitHub org/user name.
  projectName: 'vincedbowen.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
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
      navbar: {
        title: 'About',
        items: [
          {to: '/resume', label: 'Resume', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Email',
            items: [
              {
                label: 'vincent.bowen@colorado.edu',
                to: "mailto:vincent.bowen@colorado.edu",
              },
              {
                label: 'vincent@vincentbowen.com',
                to: "mailto:vincent@vincentbowen.com",
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Linked In',
                href: 'https://www.linkedin.com/in/vincentbowen/',
              },
              {
                label: 'Github',
                href: 'https://github.com/vincedbowen',
              },
              {
                label: 'LeetCode',
                href: 'https://leetcode.com/vincentbowen/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Colophon',
                to: '/colophon',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vincent Bowen. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
