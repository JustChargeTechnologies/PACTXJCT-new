import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import Projects from "./pages/Projects";
import Volunteer from "./pages/Volunteer";
import News from "./pages/News";
import SoloPayments from "./pages/SoloPayments";
import Sponser from "./pages/Sponser";
import Payments from "./pages/Payments";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Contacts from "./pages/Contacts";
import ProtectWrapper from "./context/ProtectWrapper";
import Help from "./pages/Help";
import AllProjects from "./components/projects/AllProjects";
import EditProjects from "./components/projects/EditProjects";

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
              path="/supportus/:id"
              element={
                <ProtectWrapper>
                  <SoloPayments />
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

            <Route
              path="/sponser"
              element={
                <ProtectWrapper>
                  <Sponser />
                </ProtectWrapper>
              }
            />

            <Route
              path="/news"
              element={
                <ProtectWrapper>
                  <News />
                </ProtectWrapper>
              }
            />
          </Route>
          <Route
            path="/allprojects"
            element={
              <ProtectWrapper>
                <AllProjects />
              </ProtectWrapper>
            }
          />
          <Route
            path="/allprojects/edit/:id"
            element={
              <ProtectWrapper>
                <EditProjects />
              </ProtectWrapper>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
