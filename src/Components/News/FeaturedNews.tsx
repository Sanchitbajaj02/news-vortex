import React, { useEffect, useState, lazy, Suspense } from "react";
import { Grid } from "@mui/material";
import { getTopHeadlines } from "../../Apis/news.api";
import { NewsType } from "../../@types/index.d";
import Loader from "../Loader/Loader";

const Article = lazy(() => import("./Article"));

function FeaturedNews() {
  const [topHeadlines, setTopHeadlines] = useState<NewsType[]>([]);

  useEffect(() => {
    getTopHeadlines()
      .then((data) => {
        let newData: NewsType[] = [];

        data.articles?.forEach((item, index) => {
          if (index < 3) {
            newData.push(item);
          }
        });

        setTopHeadlines(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("headlines", topHeadlines);

  return (
    <>
      <Grid container spacing={2}>
        {topHeadlines.map((headline: NewsType, index: number) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Suspense fallback={<Loader />}>
                <Article
                  key={index}
                  urlToImage={headline?.urlToImage}
                  title={headline?.title}
                  description={headline?.description}
                  url={headline?.url}
                  author={headline?.author}
                  publishedAt={headline?.publishedAt}
                  source={headline?.source}
                />
              </Suspense>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default FeaturedNews;
