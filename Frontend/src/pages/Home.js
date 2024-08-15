import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import FlightList from '../components/FlightList';

const Home = () => {
  const [flights, setFlights] = useState([]);

  return (
    <div>
      <h1>Search Flights</h1>
      <SearchForm setFlights={setFlights} />
      {flights.length > 0 && <FlightList flights={flights} />}
    </div>
  );
};

export default Home;
