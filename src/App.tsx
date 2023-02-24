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

// Components import
const Home = lazy(() => import("./Components/Home/Home"));
const Register = lazy(() => import("./Components/Auth/Register"));
const Login = lazy(() => import("./Components/Auth/Login"));

const PageNotFound = lazy(() => import("./PageNotFound"));

function App(): JSX.Element {
  // const { store } = useNewsContext();

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
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/not-found"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PageNotFound />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Register />
              </Suspense>
            }
          />

          {/* {store && store?.user?.uid && (
            <>
              <Route
                path="/blog"
                element={
                  <>
                    <Outlet />
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
          )} */}

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
