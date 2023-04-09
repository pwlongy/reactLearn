const proxy = require("http-proxy-middleware")

module.exports = function(app) {
  // app.use(
  //   proxy('/api1', {    // 遇见/api1前缀的请求，就会触发该代理
  //     target: 'http://loaclhost:5000',  // 请求转发给谁
  //     changeOrigin: true, // 控制服务请请求头中host字段的值
  //     pathRewrite: {
  //       "^/api1": ""
  //     }
  //   }),
  //   proxy('/api2', {
  //     target: 'http://loaclhost:5000',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       "^/api2": ""
  //     }
  //   })
  // )
}