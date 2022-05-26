import axios from "axios";

const KEY = "AIzaSyDRZTdeK1Iu6IVqrj2cJ6uG9dfV78cOyys";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		type: "video",
		key: KEY,
	},
});
