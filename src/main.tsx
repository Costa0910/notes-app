import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Auth from "./pages/Auth.tsx";
import Welcome from "./pages/Welcome.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/dashboard",
    element: <App />,
  },
  {
    path: "*",
    element: <h1>Error Page not found</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
