import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";
import flyingRocket from "../../Assets/flyingRocket02.png";
import {
  Container,
  Paper,
  Box,
  Button,
  Typography,
  FormGroup,
  TextField,
} from "@mui/material";
import { userLogin, googleSignin } from "../../Apis/auth.api";
import GoogleIcon from "@mui/icons-material/Google";
import { useNewsContext } from "../../Context/NewsContext";
import { UserDataType } from "../../@types/index.d";

function Login() {
  const { setStore } = useNewsContext();
  const navigate = useNavigate();
  const [authData, setAuthData] = useState<UserDataType>({
    emailID: "",
    password: "",
  });
  const [btnDisabled, setBtnDisabled] = useState(false);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setAuthData({ ...authData, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setBtnDisabled(true);

    console.log(authData);

    userLogin(authData)
      .then((resp) => {
        console.log(resp);

        setStore((prev: any) => {
          return {
            ...prev,
            user: {
              userName: resp.user.displayName
                ? resp.user.displayName
                : authData?.userName,
              emailID: resp.user.email,
              uid: resp.user.uid,
            },
          };
        });

        if (authData.userName !== undefined) {
          localStorage.setItem(
            "userName",
            resp.user?.displayName ? resp.user?.displayName : authData?.userName
          );
        }
        localStorage.setItem(
          "emailID",
          resp.user?.email ? resp.user?.email : ""
        );
        localStorage.setItem("uid", resp.user?.uid ? resp.user?.uid : "");

        navigate("/blog");
      })
      .catch((err) => {
        console.log(err);
        setBtnDisabled(false);
        console.log(err.message);
        alert(err.message);
      });
  };

  const handleGoogleSignin = async () => {
    googleSignin()
      .then((resp) => {
        console.log(resp);

        setStore((prev: any) => {
          return {
            ...prev,
            user: {
              userName: resp.user.displayName
                ? resp.user.displayName
                : authData?.userName,
              emailID: resp.user.email,
              uid: resp.user.uid,
            },
          };
        });

        if (authData.userName !== undefined) {
          localStorage.setItem(
            "userName",
            resp.user?.displayName ? resp.user?.displayName : authData?.userName
          );
        }
        localStorage.setItem(
          "emailID",
          resp.user?.email ? resp.user?.email : ""
        );
        localStorage.setItem("uid", resp.user?.uid ? resp.user?.uid : "");

        navigate("/blog");
      })
      .catch((error) => {
        console.log(error);

        alert(error.message);
      });
  };

  return (
    <>
      <section className={styles.bgViolet}>
        <Container
          maxWidth="xs"
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Paper
              elevation={5}
              sx={{
                borderRadius: 8,
              }}
            >
              <img
                src={flyingRocket}
                alt="login"
                loading="lazy"
                className={styles.authcardimage}
              />

              <Box sx={{ paddingX: 3 }}>
                <Typography
                  variant="h5"
                  component="h1"
                  className={styles.textViolet}
                  sx={{
                    textAlign: "center",
                    fontWeight: 700,
                    color: "#6A5BC3",
                  }}
                >
                  Welcome to NewsVortex
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    color: "gray",
                  }}
                >
                  Login to get into the vortex of latest news.
                </Typography>

                <Box sx={{ paddingY: 2 }}>
                  <form onSubmit={handleSubmit}>
                    <FormGroup sx={{ marginBottom: 2 }}>
                      <TextField
                        fullWidth
                        type="email"
                        id="emailID"
                        name="emailID"
                        label="Email Address"
                        color="primary"
                        value={authData.emailID}
                        onChange={handleChange}
                      />
                    </FormGroup>

                    <FormGroup sx={{ marginBottom: 2 }}>
                      <TextField
                        fullWidth
                        type="password"
                        id="password"
                        name="password"
                        label="Email Password"
                        color="primary"
                        value={authData.password}
                        onChange={handleChange}
                      />
                    </FormGroup>

                    <FormGroup
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 2,
                      }}
                    >
                      <Typography>
                        <Link to="/register" className={styles.linkHighlight}>
                          Create Account
                        </Link>
                      </Typography>
                      <Typography
                        sx={{
                          color: "#6A5BC3",
                          fontWeight: 600,
                        }}
                      >
                        Forgot Password?
                      </Typography>
                    </FormGroup>

                    <FormGroup
                      sx={{
                        marginBottom: 2,
                      }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        disabled={btnDisabled}
                        sx={{
                          width: "100%",
                          backgroundColor: "#6A5BC3",
                          color: "#fff",
                          textTransform: "unset",
                          border: "1px solid #6A5BC3",
                          transition: "all 0.3s ease-in-out",
                          "&:hover": {
                            backgroundColor: "#fff",
                            color: "#6A5BC3",
                            border: "1px solid #6A5BC3",
                          },
                        }}
                      >
                        Login
                      </Button>
                    </FormGroup>
                  </form>

                  {/* login with google auth */}
                  <FormGroup
                    sx={{
                      marginBottom: 2,
                    }}
                  >
                    <Button
                      variant="outlined"
                      onClick={handleGoogleSignin}
                      sx={{
                        width: "100%",
                        textTransform: "unset",
                      }}
                    >
                      <GoogleIcon sx={{ marginRight: 1 }} />
                      Log in with Google
                    </Button>
                  </FormGroup>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Container>
      </section>
    </>
  );
}

export default Login;
