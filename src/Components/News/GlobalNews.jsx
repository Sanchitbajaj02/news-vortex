import React, { useEffect, useState } from "react";
import Article from "./Article";
import { Grid, Divider } from "@mui/material";
import { getNewsByCategory } from "../../Apis/news.api";

function GlobalNews({ category }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNewsByCategory(category)
      .then((data) => {
        let newData = [];

        data.articles.forEach((item, index) => {
          if (index < 6) {
            newData.push(item);
          }
        });

        setNews(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <>
      <Grid container spacing={4}>
        {news.map((headline, index) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Article
                key={headline?.title}
                urlToImage={headline?.urlToImage}
                title={headline?.title}
                description={headline?.description}
                url={headline?.url}
                author={headline?.author}
                choice="top"
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default GlobalNews;
