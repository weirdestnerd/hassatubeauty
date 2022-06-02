const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  let BASE_API_URL = "http://localhost:4000";
  if (
    "REACT_APP_IN_PREVIEW" in process.env &&
    "REACT_APP_RENDER_BASE_API_URL" in process.env
  ) {
    BASE_API_URL = process.env.REACT_APP_RENDER_BASE_API_URL;
  }
  if (process.env.NODE_ENV === "production") {
    BASE_API_URL = "https://hassatubeauty.onrender.com/api";
  }

  app.use(
    "/api",
    createProxyMiddleware({
      target: BASE_API_URL,
      changeOrigin: true,
      secure: process.env.NODE_ENV === "production",
    })
  );
};
