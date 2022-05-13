const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api',{
            target :'http://localhost:8082/',
            changeOrigin: true,
            pathRewrite: { '^/api': '' },
        })
    );
};