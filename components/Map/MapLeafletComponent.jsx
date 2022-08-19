import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
// import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

const MapComponent = () => {
  return (
    <MapContainer
      center={[-34.60, -58.40]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-34.60, -58.40]}>
        <Popup>
          Museo Casa Carlos Gardel
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
