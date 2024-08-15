const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('/api/flights', { params: formData });
      setFlights(response.data);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };
  