// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Scrapper Jobs',
  tagline: 'Powerful scrapper job',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://scrapper-job-ms.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'MathieuSchaff', // Usually your GitHub org/user name.
  // projectName: 'scrapper-job', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en',
      },
      fr: {
        label: 'Français',
        htmlLang: 'fr',
      }
    },
  },
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        language: ["en", "fr"],
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // 
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MathieuSchaff/scrapper-doc/tree/main/'
        },
        // blog: {
        //   // set blog to false
        //
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //
        //     'https://github.com/MathieuSchaff/scrapper-doc/tree/main/'
        //
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      algolia: {
        appId: 'YOUR_APP_ID',
        apiKey: '2',
        indexName: 'scrapper-job',
      },

      // Replace with your search engine ID

      navbar: {
        title: 'Scrapper Jobs',
        logo: {
          alt: 'Scrapper Jobs Logo',
          src: 'img/scrapper.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/contribute', label: 'Contribute', position: 'left' },
          {
            href: 'https://github.com/MathieuSchaff/scrapper-doc/tree/main/',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right',
          //   dropdownActiveClassDisabled: true,
          //   dropdownItemsAfter: [
          //     {
          //       to: '/versions',
          //       label: 'All versions',
          //     },
          //   ],
          //
          // }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: "https://twitter.com/MathSchaff",
                logo: {
                  color: "#1c71d8",
                  label: "Twitter",
                },
              },
              {
                label: 'Linkedin',
                href: "https://www.linkedin.com/in/mathieu-schaff-frontend/",
                logo: {
                  color: "#1c71d8",
                  label: "Linkedin",
                },
              },
              {
                label: 'Other projects',
                href: "https://www.mathieu-schaff.com/",
                logo: {
                  color: "#1c71d8",
                  label: "GalleryThumbnails",
                },
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: "https://github.com/MathieuSchaff/scrapper-doc/tree/main/",
                logo: {
                  color: "#1c71d8",
                  label: "Github",
                },
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Scrapper Jobs. Built with Docusaurus and with heart.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
