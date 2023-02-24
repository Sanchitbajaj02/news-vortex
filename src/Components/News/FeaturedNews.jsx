import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { getTopHeadlines } from "../../Apis/news.api";
import Article from "./Article";

function FeaturedNews() {
  const [topHeadlines, setTopHeadlines] = useState([]);

  useEffect(() => {
    getTopHeadlines()
      .then((data) => {
        let newData = [];

        data.articles.forEach((item, index) => {
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

  console.log(topHeadlines);

  return (
    <>
      <Grid container spacing={2}>
        {topHeadlines.map((headline, index) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Article
                key={index}
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

export default FeaturedNews;
