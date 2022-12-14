import React from "react";
import ReactDOM from "react-dom/client";
import App from "./menu";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Componentes from "./componentes";
import Alunas from "./alunas";
import Tecnologias from "./tecnologias"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/componentes",
    element: <Componentes />,
  },
  {
    path: "/alunas",
    element: <Alunas />,
  },
  {
    path: "/tecnologias",
    element: <Tecnologias />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
