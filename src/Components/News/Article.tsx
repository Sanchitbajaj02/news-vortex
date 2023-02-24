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
import { NewsType } from "../../@types/index.d";

const descriptionSlicer = (description: string): string => {
  return description.slice(0, 100) + "...";
  // return description;
};

function Article({
  urlToImage,
  title,
  description,
  url,
  author,
  publishedAt,
  source,
}: NewsType) {
  return (
    <>
      <Card sx={{ maxWidth: "100%", height: "100%", padding: 2 }}>
        <CardMedia
          sx={{ height: 250, width: "100%" }}
          image={urlToImage ? urlToImage : newsPlaceholder}
          component="img"
          title={title ? title : "No title"}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "primary.contrastText",
            }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description ? descriptionSlicer(description) : "No description"}
          </Typography>

          <Typography
            variant="body1"
            sx={{ marginTop: 1, color: "primary.contrastText" }}
          >
            By: {author ? author : "Anonymous"}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
            }}
          >
            {publishedAt
              ? `Published at: ${new Date(publishedAt).toLocaleDateString(
                  "en-GB"
                )}`
              : "No date"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            href={url ? url : "/"}
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
