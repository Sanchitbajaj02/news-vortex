import React, { useState, lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useNewsContext } from "./Context/NewsContext";
import { auth } from "./firebase.config";

import Loader from "./Components/Loader/Loader";

// Components import
const Home = lazy(() => import("./Components/Home/Home"));
const Register = lazy(() => import("./Components/Auth/Register"));
const Login = lazy(() => import("./Components/Auth/Login"));
const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const NewsBoard = lazy(() => import("./Components/News/NewsBoard"));
const PageNotFound = lazy(() => import("./PageNotFound"));

function App(): JSX.Element {
  const { store } = useNewsContext();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/not-found"
            element={
              <Suspense fallback={<Loader />}>
                <PageNotFound />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<Loader />}>
                <Register />
              </Suspense>
            }
          />

          {store && store?.user?.uid && (
            <>
              <Route
                path="/blog"
                element={
                  <>
                    <Suspense fallback={<Loader />}>
                      <Outlet />
                    </Suspense>
                  </>
                }
              >
                <Route
                  index
                  element={
                    <>
                      <Navbar />
                      <NewsBoard />
                    </>
                  }
                />
              </Route>
            </>
          )}

          <Route
            path="*"
            element={<Navigate to="/not-found" replace={false} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
