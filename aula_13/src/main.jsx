import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import Prodcuts from "./pages/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Prodcuts />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
