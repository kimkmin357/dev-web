const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api',{
            target :'http://localhost:8085/',
            changeOrigin: true,
            pathRewrite: { '^/api': '' },
        })
    );

};