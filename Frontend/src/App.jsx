import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/locations")
            .then(response => setLocations(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>User Locations</h2>
            <ul>
                {locations.map((loc) => (
                    <li key={loc._id}>
                        {loc.username}: ({loc.latitude}, {loc.longitude})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
