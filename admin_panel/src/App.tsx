import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import Projects from "./pages/Projects";
import Volunteer from "./pages/Volunteer";
import News from "./pages/News";
import Sponser from "./pages/Sponser";
import Payments from "./pages/Payments";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Contacts from "./pages/Contacts";
import ProtectWrapper from "./context/ProtectWrapper";
import Help from "./pages/Help";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route
              index
              path="/"
              element={
                <ProtectWrapper>
                  <Projects />
                </ProtectWrapper>
              }
            />
            {/* Others Page */}

            <Route
              path="/volunteer"
              element={
                <ProtectWrapper>
                  <Volunteer />
                </ProtectWrapper>
              }
            />
            <Route
              path="/help"
              element={
                <ProtectWrapper>
                  <Help />
                </ProtectWrapper>
              }
            />
            <Route
              path="/supportus"
              element={
                <ProtectWrapper>
                  <Payments />
                </ProtectWrapper>
              }
            />
            <Route
              path="/contacts"
              element={
                <ProtectWrapper>
                  <Contacts />
                </ProtectWrapper>
              }
            />

            {/* Forms */}
            <Route
              path="/sponser"
              element={
                <ProtectWrapper>
                  <Sponser />
                </ProtectWrapper>
              }
            />

            {/* Tables */}
            <Route
              path="/news"
              element={
                <ProtectWrapper>
                  <News />
                </ProtectWrapper>
              }
            />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
