import axios, { AxiosResponse } from "axios";
import { ResponseProp } from "../@types/index.d";
const API_KEY = "22dc567e19404291889edcf1b4e95934";

// api: newsapi.org
const instance = axios.create({
  baseURL: "https://newsapi.org/v2",
});

// type guard
const isDataComing = (apiData: ResponseProp): apiData is ResponseProp => {
  return (
    !!apiData &&
    typeof apiData === "object" &&
    apiData.status === "ok" &&
    apiData.totalResults > 0 &&
    apiData.articles.length > 0
  );
};

const getTopHeadlines = (): Promise<ResponseProp> => {
  return new Promise((resolve, reject) => {
    instance
      .get(`/top-headlines?apiKey=${API_KEY}&country=in&category=general`)
      .then((response) => {
        if (isDataComing(response.data)) {
          resolve(response.data as ResponseProp);
        }
      })
      .catch((error) => {
        if (error instanceof Error) {
          reject(error);
        }
      });
  });
};

const getNewsByCategory = (category: string): Promise<ResponseProp> => {
  return new Promise((resolve, reject) => {
    instance
      .get(`/top-headlines?apiKey=${API_KEY}&country=in&category=${category}`)

      .then((response) => {
        if (isDataComing(response.data)) {
          resolve(response.data as ResponseProp);
        }
      })
      .catch((error) => {
        if (error instanceof Error) {
          reject(error);
        }
      });
  });
};

export { getTopHeadlines, getNewsByCategory };
