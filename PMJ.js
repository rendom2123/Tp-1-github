const fetchForecast = async () => {
    const url = 'https://api.openweathermap.org/data/2.5/forecast';
    await axios.get(url, {
      params: {
        q: input,
        units: 'metric',
        appid: api_key,
      },
    })
    .then((res) => {
      // Traitement des données de prévisions
      setForecast(res.data);
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération des prévisions :', error);
    });
  };
  