// https://nuxt.com/docs/api/configuration/nuxt-config
const { API_URL, APP_URL, APP_ENV } = process.env
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: 'https://api.map.baidu.com/api?type=webgl&v=1.0&ak=sMRzMt7GPkOFhtf79yC4CgTaqzjeLtMq' }
      ],
      meta: [
        {
          name: 'renderer',
          content: 'webkit'
        }
      ]
    }
  },
  
  plugins: [
    '~/plugins/element-ui.js',
  ],
  modules: ['@element-plus/nuxt'],
  runtimeConfig: {
    // 只在服务器端可用的私有键
    apiSecret: '123',
    // public中的键也可以在客户端使用
    public: {
      API_URL,
      APP_URL,
      APP_ENV
    }
  }
})
