import { useState, useEffect } from "react";
import MapComponent from "./components/MapComponent";
import "./App.css"

function App() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/locations")
      .then((response) => response.json())
      .then((data) => setLocations(Array.isArray(data) ? data : [data]))
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  return (
    <div className="container">
      <h1>User Locations</h1>

      {/* Map at the Top - Fixed Position */}
      <div className="map-container">
        <MapComponent locations={locations} selectedLocation={selectedLocation} />
      </div>

      {/* User Data Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{location.username}</td>
                <td>{location.latitude}</td>
                <td>{location.longitude}</td>
                <td>
                  <button className="location-btn" onClick={() => setSelectedLocation(location)}>
                    Show Location
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
