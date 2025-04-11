import React, { Suspense } from "react";
import Heading from "../components/NewsRoom/Heading";
const News = React.lazy(() => import("../components/NewsRoom/News"));

const NewsRoom = () => {
  return (
    <div>
      <Heading />
      <Suspense fallback={<p>Loading...</p>}>
        <News />
      </Suspense>
    </div>
  );
};

export default NewsRoom;
