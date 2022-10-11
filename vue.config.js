const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/' + process.env.CI_PROJECT_NAME + '/'
    : '/',
  transpileDependencies: true,
  pwa: {
    name: 'Demo pwa app',
    themeColor: '#749F82',
    msTileColor: '#425F57',
    iconPaths: {
      faviconSVG: 'img/logo.svg',
      favicon32: 'img/logo.png',
      favicon16: 'img/logo.png',
      appleTouchIcon: 'img/logo.png',
      maskIcon: 'img/logo.svg',
      msTileImage: 'img/logo.png'
    }
  },
})
