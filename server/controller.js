module.exports = {
  getPeople: async (req, res) => {
    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();
    try {
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  getPlanets: async (req, res) => {
    const response = await fetch("https://swapi.dev/api/planets/");
    const data = await response.json();
    try {
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  getVehicles: async (req, res) => {
    const response = await fetch("https://swapi.dev/api/vehicles/");
    const data = await response.json();
    try {
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  getStarship: async (req, res) => {
    const response = await fetch("https://swapi.dev/api/starships/");
    const data = await response.json();
    try {
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
