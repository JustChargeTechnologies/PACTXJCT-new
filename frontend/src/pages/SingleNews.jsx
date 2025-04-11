import React, { Suspense } from "react";
const NewsDetail =React.lazy(()=>import("../components/SingleNews/NewsDetail"));

const SingleNews = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
      <NewsDetail/>
      </Suspense>
        
    </div>
  );
};

export default SingleNews;
