import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HeadProvider } from "react-head"; // ✅ SEO provider


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeadProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HeadProvider>
  </React.StrictMode>
);
