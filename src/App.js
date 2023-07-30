import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [city, setCity] = useState("");
  const [locationData, setLocationData] = useState(null);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace YOUR_ACCESS_TOKEN with your actual LocationIQ API access token
    const access_token = "YOUR_ACCESS_TOKEN";

    axios
      .get(`https://us1.locationiq.com/v1/search.php?key=${access_token}&q=${city}&format=json`)
      .then((response) => {
        // Assuming the API response is an array of locations, take the first result
        const result = response.data[0];
        setLocationData(result);
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
        setLocationData(null);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Enter city name"
        />
        <button type="submit">Explore!</button>
      </form>

      {locationData && (
        <div>
          <p>City: {locationData[0].display_name}</p>
          <p>Latitude: {locationData[0].lat}</p>
          <p>Longitude: {locationData[0].lon}</p>
        </div>
      )}
    </div>
  );
};

export default App;