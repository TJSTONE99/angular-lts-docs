import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AngularJS LTS',
  tagline: 'Self-maintained security patches and verification notes for AngularJS 1.x',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://TJSTONE99.github.io/',
  baseUrl: '/angular-lts-docs',

  organizationName: 'angular-lts-docs',
  projectName: 'angular-lts-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/TJSTONE99/angular-lts-docs',
        },
        blog: false,
        theme: {
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AngularJS LTS',
      logo: {
        alt: 'AngularJS LTS',
        src: 'img/logo.svg',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'CVES' },
        { href: 'https://github.com/TJSTONE99/angular.js-lts', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'CVES', to: '/docs/CVE-2025-4690' }],
        },
        {
          title: 'Repository',
          items: [{ label: 'GitHub', href: 'https://github.com/TJSTONE99/angular.js-lts' }],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
