import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ setFlights }) => {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get('/api/flights/search', { params: formData });
      setFlights(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3">
      <div className="col-md-4">
        <input
          type="text"
          name="origin"
          placeholder="Origin"
          className="form-control"
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-md-4">
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          className="form-control"
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-md-4">
        <input
          type="date"
          name="date"
          className="form-control"
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-md-12">
        <button type="submit" className="btn btn-primary w-100">Search Flights</button>
      </div>
    </form>
  );
};

export default SearchForm;
