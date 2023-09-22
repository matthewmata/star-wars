const combineData = require("./utils/combine-data");

module.exports = {
  getFilms: async (req, res) => {
    const data = await combineData("https://swapi.dev/api/films/");
    try {
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  getPeople: async (req, res) => {
    const data = await combineData("https://swapi.dev/api/people/");
    try {
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  getPlanets: async (req, res) => {
    const data = await combineData("https://swapi.dev/api/planets/");
    try {
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  getVehicles: async (req, res) => {
    const data = await combineData("https://swapi.dev/api/vehicles/");
    try {
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  getStarship: async (req, res) => {
    const data = await combineData("https://swapi.dev/api/starships/");
    try {
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
