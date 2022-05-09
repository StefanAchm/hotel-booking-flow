const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  configureWebpack: {
  plugins: [
    new ImageminPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 40
        })
      ]
    })
  ]
},
  transpileDependencies: [
    'vuetify'
  ]
}
