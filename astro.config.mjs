// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://astro-for-react-developers.avetavos.com',
  base: '/',
  output: 'static',
  integrations: [starlight({
      title: 'Astro for React Developers',
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/enhance.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/manifest.webmanifest' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#BC52EE' } },
        { tag: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: "Astro for React Developers" } },
        { tag: 'script', content: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js',{scope:'/'}).catch(function(){})})}" },
      ],
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/astro-for-react-developers' }],
      sidebar: [
        { label: 'Introduction & Setup', items: [{ autogenerate: { directory: 'intro' } }] },
        { label: '.astro Components', items: [{ autogenerate: { directory: 'components' } }] },
        { label: 'Islands & Using React', items: [{ autogenerate: { directory: 'islands' } }] },
        { label: 'Routing & Layouts', items: [{ autogenerate: { directory: 'routing' } }] },
        { label: 'Content & Data', items: [{ autogenerate: { directory: 'content' } }] },
        { label: 'Styling', items: [{ autogenerate: { directory: 'styling' } }] },
        { label: 'Tooling, Testing & Deployment', items: [{ autogenerate: { directory: 'tooling' } }] },
        { label: 'Micro-Frontends with Astro', items: [{ autogenerate: { directory: 'microfrontends' } }] },
      ],
      }), preact()],
});