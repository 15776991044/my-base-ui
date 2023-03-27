const { name } = require('./package')
const publicPath = '/child/manageweb'
const targetProxy = '/'

let path = require('path')

// const targetProxy = 'http://face.dev.laningtech.net/'
module.exports = {
  lintOnSave: false,
  publicPath,
  devServer: {
    proxy: {
      '/api': {
        target: targetProxy,
        changeOrigin: true,
        ws: true
      },
      '/manageapi': {
        target: targetProxy,
        changeOrigin: true,
        ws: true
      },
      '/dictionaryapi': {
        target: targetProxy,
        changeOrigin: true,
        ws: true
      },
      '/systemapi': {
        target: targetProxy,
        changeOrigin: true,
        ws: true
      }
    },
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `${name}`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    },
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'element-ui': 'ELEMENT'
    },
  },
  chainWebpack(config) {
    config.module.rule('fonts')
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 4096, // С��4kb���ᱻ����� base64
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[hash:8].[ext]',
            publicPath
          }
        }
      })
      .end()
    config.module.rule('images')
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 4096, // С��4kb���ᱻ����� base64
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:8].[ext]',
            publicPath
          }
        }
      })

    config.module.rule('leaderLine')
      .test(path.resolve(__dirname, 'node_modules/leader-line'))
      .use('skeleton-loader')
      .loader('skeleton-loader')
      .options({procedure: content => `${content}export default LeaderLine`})
  }
}
