const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    const target = process.env.NODE_ENV === 'production' ? 'https://hassatubeauty.onrender.com' : 'http://localhost:4000'
    
    app.use(
        '/api',
        createProxyMiddleware({
            target,
            changeOrigin: true,
            secure: process.env.NODE_ENV === 'production',
        })
    );
};

