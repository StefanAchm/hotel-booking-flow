const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const zlib = require("zlib");
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new ImageminPlugin({
        plugins: [
          ImageminMozjpeg({
            quality: 40
          })
        ]
      }),
      new CompressionPlugin({
        filename: '[path].br[query]',
        algorithm: 'brotliCompress',
        test: /\.(js|css|html|svg)$/,
        compressionOptions: {
          // zlib’s `level` option matches Brotli’s `BROTLI_PARAM_QUALITY` option.
          level: 11,
        },
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false,
      })
    ]
  },

pluginOptions: {
  compression:{
    brotli: {
      filename: '[file].br[query]',
      algorithm: 'brotliCompress',
      include: /\.(js|css|html|svg|json)(\?.*)?$/i,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      minRatio: 0.8,
    },
    gzip: {
      filename: '[file].gz[query]',
      algorithm: 'gzip',
      include: /\.(js|css|html|svg|json)(\?.*)?$/i,
      minRatio: 0.8,
    }
  }
},

// Uncomment if you want to have brotli files in dev-server (npm run serve)
// devServer: {
//   before(app) {
//     app.use('*.js', (req, res, next) => {
//       if (req.get('Accept-Encoding')?.includes('br')) {
        
//         req.url += '.br'

//         res.set('Content-Encoding', 'br')
//         res.set('Content-Type', 'application/javascript; charset=utf-8')
//       }
//       next()
//     })
//   }
// },

  transpileDependencies: [
    'vuetify'
  ]
}
