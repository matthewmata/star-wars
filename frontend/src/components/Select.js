import { useState, useEffect } from "react";
import { compareCharacters } from "../utils/compare";

const Select = ({ people, films, setSeenTogether }) => {
  const [character1, setCharacter1] = useState(null);
  const [character2, setCharacter2] = useState(null);

  useEffect(() => {
    if (character1 && character2) {
        console.log(people[character1], people[character2]);
        // console.log(films);
        const sameFilms = compareCharacters(
          people[character1],
          people[character2],
          films
        );
        console.log(sameFilms);
        // setSeenTogether(sameFilms);
    }
  }, [character1, character2]);

  return (
    <>
      <select onChange={(e) => setCharacter1(e.target.value)}>
        <option value={null}>Select Character</option>
        {people.map((person, index) => (
          <option key={person.url} value={index}>
            {person.name}
          </option>
        ))}
      </select>
      <select onChange={(e) => setCharacter2(e.target.value)}>
        <option value={null}>Select Character</option>
        {people.map((person, index) => (
          <option key={person.url} value={index}>
            {person.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
