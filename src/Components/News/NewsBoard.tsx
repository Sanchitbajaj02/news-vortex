import { Container, Typography, Box, Divider } from "@mui/material";
import Loader from "../Loader/Loader";
// lazy import of featured jobs
import FeaturedNews from "./FeaturedNews";
import GlobalNews from "./GlobalNews";

function NewsBoard() {
  const newsCategories = ["Business", "Entertainment", "Health", "Technology"];

  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
        <Box
          id="Home"
          sx={{
            marginBottom: 10,
            paddingTop: 10,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{ textAlign: "center", fontWeight: 600, marginBottom: 5 }}
          >
            Featured News
          </Typography>
          <FeaturedNews />
        </Box>
        <Divider
          sx={{
            marginTop: 20,
            border: "2px solid rgba(0,0,0,0.4)",
          }}
        />

        {newsCategories.map((category: string, index: number) => {
          return (
            <Box
              key={index}
              sx={{
                marginBottom: 10,
                paddingTop: 10,
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  textAlign: "center",
                  fontWeight: 600,
                  marginBottom: 5,
                }}
              >
                News on {category}
              </Typography>

              <GlobalNews category={category} />

              <Divider
                sx={{
                  marginTop: 20,
                  border: "2px solid rgba(0,0,0,0.4)",
                }}
              />
            </Box>
          );
        })}
      </Container>
    </>
  );
}

export default NewsBoard;
