import React from "react";
import newsPlaceholder from "../../Assets/placeholder.webp";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const descriptionSlicer = (description) => {
  return description.slice(0, 100) + "...";
  // return description;
};

function Article({ urlToImage, title, description, url, author }) {
  return (
    <>
      <Card sx={{ maxWidth: "100%", height: "100%" }}>
        <CardMedia
          sx={{ height: 200, width: "100%" }}
          image={urlToImage ? urlToImage : newsPlaceholder}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description ? descriptionSlicer(description) : "No description"}
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            sx={{ marginTop: 1 }}
          >
            By: {author ? author : "Anonymous"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textTransform: "Capitalize",
            }}
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Article;
