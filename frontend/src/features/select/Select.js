import { useState, useEffect } from "react";

import { useGetFilmsQuery, useGetPeopleQuery } from "../api/starWarsApiSlice";
import { useSelector, useDispatch } from "react-redux";
import { filmsAdded, peopleAdded, charactersCompared } from "./selectSlice";

const Select = () => {
  const [character1, setCharacter1] = useState(null);
  const [character2, setCharacter2] = useState(null);

  const people = useSelector((state) => state.select.people);
  const sameFilms = useSelector((state) => state.select.sameFilms);
  const dispatch = useDispatch();

  const filmsData = useGetFilmsQuery();
  const peopleData = useGetPeopleQuery();

  useEffect(() => {
    if (filmsData.isSuccess && peopleData.isSuccess) {
      dispatch(filmsAdded(filmsData.data));
      dispatch(peopleAdded(peopleData.data));
    }
    if (character1 && character2) {
      dispatch(charactersCompared({ character1, character2 }));
    }
  }, [filmsData.isSuccess, peopleData.isSuccess, character1, character2]);

  return (
    <>
      {"same films " + sameFilms}
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => setCharacter1(e.target.value)}
      >
        <option disabled hidden value="DEFAULT">
          Select Character
        </option>
        {people.map((person, index) => (
          <option key={index} value={index}>
            {person.name}
          </option>
        ))}
      </select>
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => setCharacter2(e.target.value)}
      >
        <option disabled hidden value="DEFAULT">
          Select Character
        </option>
        {people.map((person, index) => (
          <option key={index} value={index}>
            {person.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;

// <select onChange={(e) => setCharacter1(e.target.value)}>
//   <option value={null}>Select Character</option>
//   {people.map((person, index) => (
//     <option key={person.url} value={index}>
//       {person.name}
//     </option>
//   ))}
// </select>
// <select onChange={(e) => setCharacter2(e.target.value)}>
//   <option value={null}>Select Character</option>
//   {people.map((person, index) => (
//     <option key={person.url} value={index}>
//       {person.name}
//     </option>
//   ))}
// </select>
