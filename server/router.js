const router = require("express").Router();
const controller = require("./controller");

router.route("/star-wars/films").get(controller.getFilms);

router.route("/star-wars/people").get(controller.getPeople);

module.exports = router;
