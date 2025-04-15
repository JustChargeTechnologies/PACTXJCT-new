import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "simplebar-react/dist/simplebar.min.css";
import "flatpickr/dist/flatpickr.css";
import App from "./App.js";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import AuthProvider from "./context/AuthContext.tsx";
import ProjectsProvider from "./context/ProjectsProvider.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <AuthProvider>
    <ProjectsProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </ProjectsProvider>
  </AuthProvider>
  // </StrictMode>
);
