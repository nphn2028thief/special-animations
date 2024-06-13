import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/index.tsx";
import HomePage from "./pages/HomePage/index.tsx";
import JuicePage from "./pages/JuicePage/index.tsx";
import EPath from "./constant/path.ts";

import "./main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: EPath.HOME,
        element: <HomePage />,
      },
      {
        path: EPath.JUICE,
        element: <JuicePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
