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
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    about: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'about.html',
      chunks: ['chunk-vendors', 'chunk-common', 'about']
    }
  },
  filenameHashing: false,
  publicPath: process.env.NODE_ENV === 'production' ? 'https://portfolio-cdn.nyc3.cdn.digitaloceanspaces.com' : '/'
})
