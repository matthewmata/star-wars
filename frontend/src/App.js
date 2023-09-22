import { useState, useEffect } from "react";

// TESTING SO I DONT GET BLACKLISTED FROM API
import FILMS from "./constants/films";
import PEOPLE from "./constants/people";
import PLANETS from "./constants/planets";
import STARSHIPS from "./constants/starships";
import VEHICLES from "./constants/vehicles";

const App = () => {
  const [films, setFilms] = useState(FILMS);
  const [people, setPeople] = useState(PEOPLE);
  const [planets, setPlanets] = useState(PLANETS);
  const [starships, setStarships] = useState(STARSHIPS);
  const [vehicles, setVehicles] = useState(VEHICLES);

  useEffect(() => {
    const fetchData = async () => {
    //   const responseFilms = await fetch(
    //     "http://localhost:5000/api/star-wars/films"
    //   );
    //   const filmsData = await responseFilms.json();
    //   setFilms(filmsData);

    //   const responsePeople = await fetch(
    //     "http://localhost:5000/api/star-wars/people"
    //   );
    //   const peopleData = await responsePeople.json();
    //   setPeople(peopleData);
    //   const responsePlanets = await fetch(
    //     "http://localhost:5000/api/star-wars/planets"
    //   );
    //   const planetsData = await responsePlanets.json();
    //   setPlanets(planetsData);
    //   const responseStarships = await fetch(
    //     "http://localhost:5000/api/star-wars/starships"
    //   );
    //   const starshipsData = await responseStarships.json();
    //   setStarships(starshipsData);
    //   const responseVehicles = await fetch(
    //     "http://localhost:5000/api/star-wars/vehicles"
    //   );
    //   const vehiclesData = await responseVehicles.json();
    //   setVehicles(vehiclesData);
    };


    fetchData();
  }, []);
  return <div>
    
  </div>;
};

export default App;
