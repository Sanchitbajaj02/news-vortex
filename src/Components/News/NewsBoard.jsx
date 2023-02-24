import React, { lazy, Suspense } from "react";
import { Container, Typography, Box, Divider } from "@mui/material";

// lazy import of featured jobs
const FeaturedNews = lazy(() => import("./FeaturedNews"));

const GlobalNews = lazy(() => import("./GlobalNews"));

function NewsBoard() {
  const newsCategories = ["Business", "Entertainment", "Health", "Technology"];

  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
        <Box
          id="Home"
          sx={{
            marginY: 10,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{ textAlign: "center", fontWeight: 600, marginBottom: 3 }}
          >
            Featured News
          </Typography>
          <Suspense fallback={<h1>Loading...</h1>}>
            <FeaturedNews />
          </Suspense>
        </Box>
        <Divider sx={{ my: 5, border: "2px solid rgba(0,0,0,0.4)" }} />

        {newsCategories.map((category) => {
          return (
            <>
              <Box
                key={category}
                id={category}
                sx={{
                  height: 80,
                }}
              ></Box>
              <Box
                sx={{
                  marginBottom: 10,
                }}
              >
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{
                    textAlign: "center",
                    fontWeight: 600,
                    marginBottom: 3,
                  }}
                >
                  News on {category}
                </Typography>

                <Suspense fallback={<h1>Loading...</h1>}>
                  <GlobalNews category={category} />
                </Suspense>
              </Box>
              <Divider sx={{ my: 5, border: "2px solid rgba(0,0,0,0.4)" }} />
            </>
          );
        })}
      </Container>
    </>
  );
}

export default NewsBoard;
