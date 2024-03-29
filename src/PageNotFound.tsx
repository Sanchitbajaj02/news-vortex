import { Link } from "react-router-dom";
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
      <Box>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: 800,
            color: "text.primary",
            paddingBottom: 2,
            fontSize: "5rem",
          }}
        >
          404 Page not found
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "text.primary",
            fontSize: "2rem",
          }}
        >
          If you think this is a mistake, please{" "}
          <Link
            to="/"
            style={{
              color: "#fff",
            }}
          >
            click here
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default PageNotFound;
