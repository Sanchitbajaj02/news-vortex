import React from "react";
import homeStyles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Container, Paper, Box, Button, Typography, Grid } from "@mui/material";
// import { useNewsContext } from "../../Context/NewsContext";
// import { googleSignout } from "../../Apis/auth.api";

function Home() {
  // const { store, setStore } = useNewsContext();
  const navigate = useNavigate();

  // const handleSignout = () => {
  //   googleSignout()
  //     .then(() => {
  //       setStore((prev) => {
  //         return {
  //           ...prev,
  //           user: {
  //             userName: null,
  //             emailID: null,
  //             uid: null,
  //           },
  //         };
  //       });
  //       localStorage.removeItem("userName");
  //       localStorage.removeItem("emailID");
  //       localStorage.removeItem("uid");

  //       navigate("/");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert(err.message);
  //     });
  // };

  return (
    <Box bgcolor="primary.main">
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Paper
          elevation={5}
          sx={{
            width: "100%",

            borderRadius: 5,
            padding: 3,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "primary.main",
              marginBottom: 2,
            }}
          >
            Welcome to NewsVortex
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "primary.contrastText",
            }}
          >
            News Vortex is a news aggregator that allows users to view the
            latest news from various sources. Users first have to make an
            account using their email address and password. Once they are logged
            in, they can view the latest news from various sources. They can
            also save articles to read later.
          </Typography>

          {/* <Box sx={{ marginTop: 3 }}>
            {store?.user?.emailID && store?.user?.uid ? (
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Link to="/blog" className={homeStyles.linkHighlight}>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        width: "100%",
                        textTransform: "unset",
                        "&:hover": {
                          backgroundColor: "primary.main",
                          color: "primary.white",
                        },
                      }}
                    >
                      Start Reading
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="outlined"
                    size="large"
                    // onClick={handleSignout}
                    sx={{
                      width: "100%",
                      textTransform: "unset",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "primary.white",
                      },
                    }}
                  >
                    Logout
                  </Button>
                </Grid>
              </Grid>
            ) : (
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Link to="/register" className={homeStyles.linkHighlight}>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        width: "100%",
                        textTransform: "unset",
                        "&:hover": {
                          backgroundColor: "primary.main",
                          color: "primary.white",
                        },
                      }}
                    >
                      Register
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Link to="/login" className={homeStyles.linkHighlight}>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        width: "100%",
                        textTransform: "unset",
                        "&:hover": {
                          backgroundColor: "primary.main",
                          color: "primary.white",
                        },
                      }}
                    >
                      Login
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            )}
          </Box> */}
        </Paper>
      </Container>
    </Box>
  );
}

export default Home;
