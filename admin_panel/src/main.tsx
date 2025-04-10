import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "simplebar-react/dist/simplebar.min.css";
import "flatpickr/dist/flatpickr.css";
import App from "./App.js";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import AuthProvider from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
    <ThemeProvider>
        <App />
    </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
