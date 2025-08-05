// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],
  css: ['~/assets/css/main.css'],
  router: {
    options: {
      hashMode: false
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        }
      ]
    }
  }
})