import React, { useEffect, useState } from "react";
import Article from "./Article";
import { Grid } from "@mui/material";
import { getNewsByCategory } from "../../Apis/news.api";

import { NewsType } from "../../@types/index.d";

function GlobalNews({ category }: { category: string }) {
  const [news, setNews] = useState<NewsType[]>([]);

  useEffect(() => {
    getNewsByCategory(category)
      .then((data) => {
        let newData: NewsType[] = [];

        data.articles?.forEach((item: NewsType, index: number): void => {
          if (index < 6) {
            newData.push(item);
          }
        });
        setNews(newData);
      })
      .catch((err) => {
        if (err.response.status) {
          console.log(err);
        }
      });
  }, [category]);

  console.log(`Global news by ${category}`, news);

  return (
    <>
      <Grid container spacing={4}>
        {news.map((headline: NewsType, index: number) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <Article
                urlToImage={headline?.urlToImage}
                title={headline?.title}
                description={headline?.description}
                url={headline?.url}
                author={headline?.author}
                publishedAt={headline?.publishedAt}
                source={headline?.source}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default GlobalNews;
