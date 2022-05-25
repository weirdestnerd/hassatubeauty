const getBaseApiUrl = () => {
    switch (process.env.NODE_ENV) {
        case ("production") return "https://hassatubeauty.onrender.com/api";
        case ("preview") return process.env.RENDER_BASE_API_URL
        default return "http://localhost:4000/api"
    }
}
const BASE_API_URL = getBaseApiUrl()
export default BASE_API_URL;
