import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocations = () => {
      axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(response => {
          console.log(response.data.results);
          setLocations(response.data.results);
        })
        .catch(error => {
          console.log('Server Error', error);
        })
    }

    getLocations();
  }, []);

  return (
    <section className="location-list grid-view">
      <div>
        {locations.map((location, index) => (
          <LocationCard location={location} key={index} />
        ))}
      </div>
    </section>
  );
}
