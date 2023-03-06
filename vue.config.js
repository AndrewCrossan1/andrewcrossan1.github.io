const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    sitemap: {
      urls: [
        'https://andrewcrossan1.github.io/#/',
        'https://andrewcrossan1.github.io/#/about'
      ]
    }
  }
})
