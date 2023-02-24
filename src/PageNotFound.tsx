import React, { ReactNode } from "react";
import { Typography, Box } from "@mui/material";

function PageNotFound(): JSX.Element {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          color: "primary.white",
        }}
      >
        404 Page Not Found
      </Typography>
    </Box>
  );
}

export default PageNotFound;
