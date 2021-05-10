var path = require('path')
module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    autoOpenBrowser: true,
    autoOpenPage: '/login',
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    host: '192.168.1.73',
    port: 9520,
    autoOpenBrowser: true,
    autoOpenPage: '/login',
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        // target: 'https://m.robooot.com:1443/seedling-merchant',
        // target: 'https://test.robooot.com:1443/seedling-merchant',
        // target: 'http://192.168.0.2:8182/seedling-merchant',
        // target: 'http://192.168.1.204:8182/seedling-merchant',
        target: 'http://192.168.2.69:8182/seedling-merchant',
        pathRewrite: {
          '^/api': '/'
        }
      }
    },
    // devtool:"eval-source-map",//断点调试
    // cacheBusting: false,
    cssSourceMap: false
  }
}
