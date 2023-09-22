const router = require("express").Router();
const controller = require("./controller");

router.route("/star-wars/films").get(controller.getFilms);

router.route("/star-wars/people").get(controller.getPeople);

router.route("/star-wars/planets").get(controller.getPlanets);

router.route("/star-wars/vehicles").get(controller.getVehicles);

router.route("/star-wars/starships").get(controller.getStarship);

module.exports = router;
