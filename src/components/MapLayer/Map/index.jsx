import React from 'react';
import dynamic from "next/dynamic";

const Map = () => {
  const Map = dynamic(() => import("../MapLeafletComponent"), {
    ssr: false,
  });
  return <Map />;
};

export default Map;
