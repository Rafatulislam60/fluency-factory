import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="max-w-screen-2xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
