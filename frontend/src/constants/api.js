const getBaseApiUrl = () => {
  if (process.env.REACT_APP_IN_PREVIEW)
    return process.env.REACT_APP_RENDER_BASE_API_URL;
  if (process.env.NODE_ENV === "production")
    return "https://hassatubeauty.onrender.com/api";
  return "http://localhost:4000/api";
};
const BASE_API_URL = getBaseApiUrl();
export default BASE_API_URL;
