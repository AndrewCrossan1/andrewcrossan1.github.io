const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    sitemap: {
      urls: [
        'https://andrewcrossan.live/#/',
        'https://andrewcrossan.live/#/about',
        'https://andrewcrossan.live/#/projects',
        'https://andrewcrossan.live/#/contact',
        'https://andrewcrossan.live/#/account/login',
        'https://andrewcrossan.live/#/account/register',
        'https://andrewcrossan.live/#/account',
        'https://andrewcrossan.live/#/blog'
      ]
    }
  }
})
