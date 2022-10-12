const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '/demo-pwa/',
  transpileDependencies: true,
  pwa: {
    name: 'Demo pwa app',
    themeColor: '#749F82',
    msTileColor: '#425F57',
    manifestOptions: {
      icons: [
        { "src": "./img/logo.png", "sizes": "192x192", "type": "image/png" },
        { "src": "./img/logo.png", "sizes": "512x512", "type": "image/png" },
        {
          "src": "./img/logo.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "./img/logo.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        }
      ],
    }
  },
})
