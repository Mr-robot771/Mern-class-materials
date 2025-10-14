import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Slide, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer position="top-right" transition={Slide} autoClose={1000} />
    <App />
  </StrictMode>
);
