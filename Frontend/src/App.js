import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FlightResults from './components/FlightResults';
import Footer from './components/Footer';
import './App.css'; // Import your CSS or SCSS file here

function App() {
  const [flights, setFlights] = useState([]);

  return (
    <div className="App">
      <Header />
      <SearchBar setFlights={setFlights} />
      <FlightResults flights={flights} />
      <Footer />
    </div>
  );
}

export default App;
