const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: "http://kimkmin357.synology.me:8082",
      changeOrigin: true,
    })
  );
}