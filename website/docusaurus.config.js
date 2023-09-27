const path = require('path');

const getUrl = () => {
  const { NODE } = process.env;

  switch (NODE) {
    case 'development':
      return 'https://apollion.staging.captalysplatform.io/';
    case 'sandbox':
      return 'https://apollion.sandbox.captalysplatform.io/';
    default:
      return 'https://apollion.captalysplatform.io/';
  }
};

module.exports = {
  title: 'Apollion',
  tagline: 'Economize tempo usando componentes pré-construídos.',
  url: getUrl(),
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'captalys',
  projectName: 'apollion',
  themeConfig: {
    googleAnalytics: {
      trackingID: 'G-QZBGQM8YJ7',
    },
    algolia: {
      apiKey: 'f643e50e8216b057f67067eb495248bf',
      indexName: 'captalysplatform',
    },
    navbar: {
      logo: {
        alt: 'Apollion Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logoDark.svg',
      },
      items: [
        {
          to: 'docs/concept-foundations',
          label: 'Documentação',
          position: 'left',
        },
        {
          to: 'docs/changelog',
          label: 'Novidades',
          position: 'left',
        },
        {
          to: 'playground',
          label: 'Área de Testes',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links úteis',
          items: [
            {
              to: 'docs/concept-foundations',
              label: 'Documentação',
              position: 'left',
            },
            {
              to: 'docs/changelog',
              label: 'Novidades',
              position: 'left',
            },
            {
              to: 'playground',
              label: 'Área de Testes',
              position: 'left',
              target: '_blank',
            },
          ],
        },
      ],
      copyright: ` Todos os Direitos Reservados©  - ${new Date().getFullYear()} Captalys Companhia de Investimentos LTDA.`,
    },
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/index.css'),
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, 'src/docusaurus-replace-content-loader'),
    path.resolve(__dirname, 'src/monaco-editor'),
    path.resolve(__dirname, 'src/package-alias'),
  ],
};
