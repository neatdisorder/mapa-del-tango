import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
// import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

//
import { attributes, react as MuseoContent } from "../../../../content/puntos/museo-casa-carlos-gardel.md";
//

const MapComponent = () => {

  let { name, xCoord, yCoord } = attributes;

  console.log(name, xCoord, yCoord);

  return (
    <MapContainer
      center={[-34.60, -58.40]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "calc(100vh - 44px)", width: "100%" }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MuseoContent />
      <Marker position={[xCoord, yCoord]}>
        <Popup>
          {name}
        </Popup>
      </Marker>
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
};

export default MapComponent;
