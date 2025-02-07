import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ locations, selectedLocation }) => {
  return (
    <MapContainer
      center={selectedLocation ? [selectedLocation.latitude, selectedLocation.longitude] : [37.7749, -122.4194]}
      zoom={5}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapUpdater selectedLocation={selectedLocation} />

      {locations.map((location, index) => (
        <Marker key={index} position={[location.latitude, location.longitude]}>
          <Popup>
            <strong>{location.username}</strong> <br />
            Lat: {location.latitude} <br />
            Lng: {location.longitude}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

// Component to update map center when a user is selected
const MapUpdater = ({ selectedLocation }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedLocation) {
      map.flyTo([selectedLocation.latitude, selectedLocation.longitude], 10, { animate: true });
    }
  }, [selectedLocation, map]);

  return null;
};

export default MapComponent;
