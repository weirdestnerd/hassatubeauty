const getBaseUrl = () => {
  if (
    "REACT_APP_IN_PREVIEW" in process.env &&
    "REACT_APP_RENDER_BASE_API_URL" in process.env
  ) {
    return process.env.REACT_APP_RENDER_BASE_API_URL;
  }
  if (process.env.NODE_ENV === "production") {
    return "https://hassatubeauty.onrender.com";
  }
  return "http://localhost:4000";
};

export default getBaseUrl;
