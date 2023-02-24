import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import NewsContextProvider from "./Context/NewsContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6a5bc3",
      contrastText: "gray",
    },
    text: {
      primary: "#fff",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <NewsContextProvider>
      <App />
    </NewsContextProvider>
  </ThemeProvider>
);
