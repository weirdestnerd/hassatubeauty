const { createProxyMiddleware } = require('http-proxy-middleware');
console.log(process.env.REACT_ENV)
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: process.env.NODE_ENV === 'production' ? 'https://hassatubeauty.onrender.com' : 'http://localhost:4000',
            changeOrigin: true,
            secure: process.env.NODE_ENV === 'production',
        })
    );
};

