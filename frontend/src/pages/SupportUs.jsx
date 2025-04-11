import React, { Suspense } from "react";
const Sponsor = React.lazy(() => import("../components/SupportUs/Sponsor"));
import Volnteer from "../components/SupportUs/Volnteer";
const Donate = React.lazy(() => import("../components/SupportUs/Donate"));

const SupportUs = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading....</p>}>
        <Donate />
      </Suspense>
      <Suspense fallback={<p>Loading....</p>}>
        <Sponsor />
      </Suspense>
      <Volnteer />
    </div>
  );
};

export default SupportUs;
