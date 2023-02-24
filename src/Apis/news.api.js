import axios from "axios";

const API_KEY = "22dc567e19404291889edcf1b4e95934";

// api: newsapi.org
const instance = axios.create({
  baseURL: "https://newsapi.org/v2",
});

const getTopHeadlines = () => {
  return new Promise((resolve, reject) => {
    instance
      .get(`/top-headlines?apiKey=${API_KEY}&country=in&category=general`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getNewsByCategory = (category) => {
  return new Promise((resolve, reject) => {
    instance
      .get(`/top-headlines?apiKey=${API_KEY}&country=in&category=${category}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getTopHeadlines, getNewsByCategory };
