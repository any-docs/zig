import {defineConfig, loadEnv} from 'vitepress'
import {items as sidebarItems} from "./sidebars";

// https://vitepress.dev/reference/site-config
export default ({mode}) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    srcDir: "content",

    title: "AnyDocs Zig",
    description: "Zig is a general-purpose programming language and toolchain for maintaining robust, optimal, and reusable software.",
    head: [
      ['link', {rel: 'icon', href: '/images/icon-512.png'}]
    ],
    lastUpdated: true,
    themeConfig: {
      logo: '/images/icon-512.png',
      logoLink: env.VITE_MAIN_URL,
      search: {
        provider: 'local'
      },
      editLink: {
        pattern: 'https://github.com/any-docs/css/edit/main/content/:path',
        text: 'Edit this page on GitHub'
      },
      nav: [
        {
          text: 'Docs',
          items: [
            {
              text: 'CSS',
              link: env.VITE_CSS_URL,
            },
            {
              text: 'Javascript',
              link: '/javascript/index',
            },
            {
              text: 'HTML',
              link: '/html/index',
            },
            {
              text: 'PHP',
              link: '/php/introduction',
            },
            {
              text: 'Rust',
              link: '/rust'
            },
          ]
        },
      ],
      sidebar: {
        '/': sidebarItems,
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/any-docs/anydocs' }
      ],
      outline: {
        level: [2, 3]
      },
      footer: {
        copyright: 'Copyright © 2025'
      }
    },
    ignoreDeadLinks: true,
    vite: {
      server: {
        port: env.VITE_ZIG_PORT as unknown as number,
        strictPort: true
      }
    },
    cleanUrls: false
  })
}
