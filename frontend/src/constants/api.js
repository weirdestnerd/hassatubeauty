// TODO: update this to include Render's PR preview
const BASE_API_URL =
  process.env.NODE_ENV === "production"
    ? "https://hassatubeauty.onrender.com/api"
    : "http://localhost:4000/api";

export default BASE_API_URL;
