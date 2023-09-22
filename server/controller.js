const combineData = require("./utils/combine-data");

module.exports = {
  getFilms: async (req, res) => {
    // could have just fetched films since it is a single api request, but future proofs request for future movies
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
};
