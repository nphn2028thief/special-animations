import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/index.tsx";
import HomePage from "./pages/HomePage/index.tsx";
import SliderPage from "./pages/SliderPage/index.tsx";
import ButtonPage from "./pages/ButtonPage/index.tsx";
import JuicePage from "./pages/JuicePage/index.tsx";
import ToggleSwitchPage from "./pages/ToggleSwitchPage/index.tsx";
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
        path: EPath.SLIDER,
        element: <SliderPage />,
      },
      {
        path: EPath.BUTTON,
        element: <ButtonPage />,
      },
      {
        path: EPath.JUICE,
        element: <JuicePage />,
      },
      {
        path: EPath.TOGGLE_SWITCH,
        element: <ToggleSwitchPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
