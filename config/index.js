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
    port: 9528,
    autoOpenBrowser: true,
    autoOpenPage: '/login',
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/': {
        // target: 'http://192.168.1.214:8181',
        target: 'http://121.43.114.209:8181',
        // logLevel:'debug',
        pathRewrite: {
          '^/': '/'
        }
      }
    },
    // cacheBusting: false,
    cssSourceMap: false
  }
}
