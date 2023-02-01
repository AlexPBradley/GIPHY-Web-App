import axios from "axios";

const getGifs = (query) => {
  if (query) {
    return axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=0GG7FrA1I25WSUPI7ASxpxpFCU1bP6jq&q=${query}&limit=25&offset=0&rating=g&lang=en`
      )
      .then(({ data }) => {
        const gifs = data.data.map((gif) => gif);
        return gifs;
      });
  } else {
    return axios
      .get(
        "https://api.giphy.com/v1/gifs/trending?api_key=0GG7FrA1I25WSUPI7ASxpxpFCU1bP6jq&limit=25&rating=g"
      )
      .then(({ data }) => {
        const gifs = data.data.map((gif) => gif);
        return gifs;
      });
  }
};

export default getGifs;
