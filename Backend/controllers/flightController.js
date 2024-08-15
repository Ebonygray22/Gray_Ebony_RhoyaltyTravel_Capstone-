const Flight = require('../models/Flight');

const getFlights = async (req, res) => {
  const { origin, destination, date } = req.query;
  try {
    const flights = await Flight.find({
      origin: new RegExp(origin, 'i'),
      destination: new RegExp(destination, 'i'),
      date: date
    });
    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getFlights };
