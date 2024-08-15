import React from 'react';

const FlightList = ({ flights }) => {
  return (
    <div>
      <h2>Available Flights</h2>
      <div className="row">
        {flights.map((flight, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{flight.itineraries[0].segments[0].carrierCode}</h5>
                <p className="card-text">
                  From: {flight.itineraries[0].segments[0].departure.iataCode} <br />
                  To: {flight.itineraries[0].segments[0].arrival.iataCode} <br />
                  Departure: {flight.itineraries[0].segments[0].departure.at} <br />
                  Arrival: {flight.itineraries[0].segments[0].arrival.at} <br />
                  Price: {flight.price.total} {flight.price.currency}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightList;
