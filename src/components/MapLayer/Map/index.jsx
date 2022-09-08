import React from "react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";

const Map = ({ todosLosPuntos }) => {
  const MapLeafletComponent = dynamic(() => import("../MapLeafletComponent"), {
    ssr: false,
  });
  return <MapLeafletComponent todosLosPuntos={todosLosPuntos} />;
};

Map.propTypes = {
  todosLosPuntos: PropTypes.string.isRequired,
};

export default Map;
