import React, { Suspense } from "react";
// import Navbar from "../components/Navbar";
import Vision from "../components/Home/Vision";
import Slider2 from "../components/Home/Slider2";
import WhatWeDo from "../components/Home/WhatWeDo";
import CollaborativeApproach from "../components/Home/CollaborativeApproach";
import Donate from "../components/Home/Donate";
// const OurProject = React.lazy(() => import("../components/Home/OurProject"));
 import OurProject from "../components/Home/OurProject";

const Home = () => {
  return (
    <div>
      <Slider2 />

      <Vision />
      <WhatWeDo />
      <CollaborativeApproach />
      {/* <Suspense fallback={<p>Loading...</p>}> */}
        <OurProject />
      {/* </Suspense> */}

      <Donate />
    </div>
  );
};

export default Home;
