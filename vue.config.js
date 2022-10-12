const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '/demo-pwa/',
  transpileDependencies: true,
  pwa: {
    name: 'app cua khanh',
    themeColor: '#749F82',
    msTileColor: '#425F57',
    manifestOptions: {
      icons: [
        {
            "src": "./img/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "./img/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
        },
        {
            "src": "./img/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
        },
        {
            "src": "./img/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
      ],
    }
  },
})
