import axios from "axios";

const getGifs = (search) => {
  if (!search) {
    return axios
      .get(
        `https://api.giphy.com/v1/gifs/trending?api_key=0GG7FrA1I25WSUPI7ASxpxpFCU1bP6jq&limit=50&rating=g`
      )
      .then(({ data }) => {
        const gifs = data.data.map((gif) => gif);
        return gifs;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    return axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=0GG7FrA1I25WSUPI7ASxpxpFCU1bP6jq&q=${search}&limit=50&offset=0&rating=g&lang=en`
      )
      .then(({ data }) => {
        const gifs = data.data.map((gif) => gif);
        return gifs;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getGifs;