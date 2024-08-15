const express = require('express');
const amadeus = require('../services/amadeusService');

const router = express.Router();

// GET flight offers based on search parameters
router.get('/search', async (req, res) => {
  const { origin, destination, date } = req.query;

  try {
    const response = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: origin,
      destinationLocationCode: destination,
      departureDate: date,
      adults: '1'
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
