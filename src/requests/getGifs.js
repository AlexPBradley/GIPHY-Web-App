import axios from "axios";

const getGifs = () => {
  return axios
    .get(
      "https://api.giphy.com/v1/gifs/trending?api_key=0GG7FrA1I25WSUPI7ASxpxpFCU1bP6jq&limit=25&rating=g"
    )
    .then((response) => {
      console.log(response);
    });
};

export default getGifs;
