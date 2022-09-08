import React from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import PropTypes from "prop-types";

const MapLeafletComponent = ({ todosLosPuntos }) => {

  const puntos = JSON.parse(todosLosPuntos);

  return (
    <MapContainer
      center={[-34.6, -58.4]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "calc(100vh - 72px)", width: "100%" }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {puntos.map((punto) => {
        return (
          <Marker
            position={[punto.data.xCoord, punto.data.yCoord]}
            key={punto.data.name}
          >
            <Popup>{punto.data.name}</Popup>
          </Marker>
        );
      })}
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
};

MapLeafletComponent.propTypes = {
  todosLosPuntos: PropTypes.string.isRequired,
};

export default MapLeafletComponent;
