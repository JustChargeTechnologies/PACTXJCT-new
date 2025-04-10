import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Project from "./pages/Project";
import NewsRoom from "./pages/NewsRoom";
import SingleNews from "./pages/SingleNews";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Volunteer from "./pages/Volunteer";
import CoporatePartner from "./pages/CoporatePartner";
import ProjectWrapper from "./ProtectWrapper.jsx/ProjectWrapper";
import ScrollToTop from "./components/ScrolltoTop";
import SupportUs from "./pages/SupportUs";
import Sponsor from "./pages/Sponsor";
import Poilcy from "./pages/Poilcy";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProjectWrapper>
              <Home />
            </ProjectWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <ProjectWrapper>
              <About />
            </ProjectWrapper>
          }
        />
        {/* <Route path="/about/project/:id" element={<Project />} /> */}
        <Route
          path="/about/project/:id"
          element={
            <ProjectWrapper>
              <Project />
            </ProjectWrapper>
          }
        />
        <Route path="/newsroom" element={<NewsRoom />} />
        <Route path="/newsroom/:id" element={<SingleNews />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/corporate" element={<CoporatePartner />} />
        <Route path="/supportus" element={<SupportUs />} />
        <Route path="/sponsor/:id" element={<Sponsor/>} />
        <Route path="/policy" element={<Poilcy/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
