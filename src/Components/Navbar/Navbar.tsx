import styles from "./Navbar.module.css";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useNewsContext } from "../../Context/NewsContext";
import {
  Container,
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { googleSignout } from "../../Apis/auth.api";

const pages = ["Home", "Business", "Entertainment", "Health", "Technology"];

function Navbar() {
  const { store, setStore } = useNewsContext();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignout = () => {
    googleSignout()
      .then(() => {
        setStore((prev: any) => {
          return {
            ...prev,
            user: {
              userName: null,
              emailID: null,
              uid: null,
            },
          };
        });
        localStorage.removeItem("userName");
        localStorage.removeItem("emailID");
        localStorage.removeItem("uid");

        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };

  return (
    <AppBar position="sticky" color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* ============== Mobile ============== */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: "text.primary",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <a key={page} href={`#${page}`} className={styles.navLink}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </a>
              ))}
            </Menu>
          </Box>

          {/* ============== Desktop ============== */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <a href={`#${page}`} className={styles.navLink} key={page}>
                <Button
                  sx={{
                    my: 2,
                    display: "block",
                    color: "text.primary",
                    textTransform: "capitalize",
                    fontSize: 16,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      fontWeight: "bold",
                    },
                  }}
                >
                  {page}
                </Button>
              </a>
            ))}
          </Box>

          {/* ============== Common ============== */}

          {store?.user && (
            <Box sx={{ flexGrow: 0 }}>
              <Button
                sx={{
                  my: 2,
                  textTransform: "capitalize",
                  fontSize: 16,
                  transition: "all 0.3s ease",
                  color: "text.primary",
                }}
              >
                {store?.user?.userName}
              </Button>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <AccountCircle
                  sx={{ color: "text.primary" }}
                  fontSize="large"
                />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  My Account
                </MenuItem>
                <MenuItem
                  onClick={handleSignout}
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
