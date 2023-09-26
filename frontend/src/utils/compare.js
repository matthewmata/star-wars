// compareCharacter checks if the two have shared a planet, starship or vehicle before, and returns a string with the movie(s) names where such interactions occurred

export const compare = (character1, character2, films) => {
  if (character1 === character2) {
    return `You chose ${character1.name} for both characters, please select another character.`;
  }

  // check same values between characters
  const sameHomeworld =
    character1.homeworld === character2.homeworld ? [character1.homeworld] : [];
  const sameStarships = character1.starships.filter((film) =>
    character2.starships.includes(film)
  );
  const sameVehicles = character1.vehicles.filter((film) =>
    character2.vehicles.includes(film)
  );

  // finds same films between characters
  const filmsWithSamePlanet = compareValues(
    sameHomeworld,
    "planets",
    films,
    character1,
    character2
  );
  const filmsWithSameStarship = compareValues(
    sameStarships,
    "starships",
    films,
    character1,
    character2
  );
  const filmsWithSameVehicle = compareValues(
    sameVehicles,
    "vehicles",
    films,
    character1,
    character2
  );

  // removes any duplicate films
  let sameFilms = {
    ...filmsWithSamePlanet,
    ...filmsWithSameStarship,
    ...filmsWithSameVehicle,
  };
  // format string if characters had same film
  sameFilms = Object.keys(sameFilms);
  if (sameFilms.length) {
    let result = `${character1.name} and ${character2.name} were seen together in`;
    for (let i = 0; i < sameFilms.length; i++) {
      if (i !== sameFilms.length - 1) {
        result += ` ${sameFilms[i]},`;
      } else {
        result += ` and ${sameFilms[i]}.`;
      }
    }
    return result;
  } else {
    return `${character1.name} and ${character2.name} did not share a planet, starship, or vehicle.`;
  }
};

// compareValues goes through each film, each value, and and each character name to see if its a match for the same Film
const compareValues = (values, type, films, character1, character2) => {
  const sameFilms = {};

  for (const film of films) {
    values.forEach((value) => {
      // check if the type and value is on the film
      const checkIfValueOnFilm = film[type].indexOf(value);
      // check if the character is on the film
      const checkIfCharacter1OnFilm = film.characters.indexOf(character1.url);
      const checkIfCharacter2OnFilm = film.characters.indexOf(character2.url);
      if (
        checkIfValueOnFilm >= 0 &&
        checkIfCharacter1OnFilm >= 0 &&
        checkIfCharacter2OnFilm >= 0
      ) {
        sameFilms[film.title] = true;
      }
    });
  }
  return sameFilms;
};
