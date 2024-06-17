import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    }, 
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
     {
      path: "/:username",
      element: <User />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    }, */
  ]);

  return <RouterProvider router={router} />;
}

export default App;
