import { useState, useEffect } from "react";

import Select from "./components/Select";

// TESTING SO I DONT GET BLACKLISTED FROM API
import FILMS from "./constants/films";
import PEOPLE from "./constants/people";



const App = () => {
  const [films, setFilms] = useState(FILMS);
  const [people, setPeople] = useState(PEOPLE);
  const [seenTogether, setSeenTogether] = useState({});


  useEffect(() => {
    const fetchData = async () => {
        const responseFilms = await fetch(
          "http://localhost:5000/api/star-wars/films"
        );
        const filmsData = await responseFilms.json();
        setFilms(filmsData);
        const responsePeople = await fetch(
          "http://localhost:5000/api/star-wars/people"
        );
        const peopleData = await responsePeople.json();
        setPeople(peopleData);
    };


    // fetchData();
  }, []);
  return (
    <div>
      <Select people={people} films={films} setSeenTogether={setSeenTogether} />
      {JSON.stringify(seenTogether)}
    </div>
  );
};

export default App;
