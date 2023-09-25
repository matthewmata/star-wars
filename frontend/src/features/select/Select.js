import { useState, useEffect } from "react";

import { useGetFilmsQuery, useGetPeopleQuery } from "../api/starWarsApiSlice";
import { useSelector, useDispatch } from "react-redux";
import { charactersCompared } from "./selectSlice";

import SelectedCharacters from "./SelectedCharacters";
import CharactersList from "./CharactersList";
import Loading from "../loading/Loading";

const Select = () => {
  const [character1, setCharacter1] = useState(null);
  const [character2, setCharacter2] = useState(null);
  const people = useSelector((state) => state.select.people);
  const dispatch = useDispatch();
  const filmsData = useGetFilmsQuery();
  const peopleData = useGetPeopleQuery();

  const characterSelectHandler = (character) => {
    // sets character 1 and character 2
    if (character1 === null) setCharacter1(character);
    else if (character2 === null) setCharacter2(character);
    // resets characters
    if (character1 && character2) {
      setCharacter1(character);
      setCharacter2(null);
    }
  };

  useEffect(() => {
    if (character1 && character2) {
      dispatch(charactersCompared({ character1, character2 }));
    }
  }, [character1, character2]);

  return (
    <section>
      {filmsData.isSuccess && peopleData.isSuccess ? (
        <>
          <SelectedCharacters character1={character1} character2={character2} />
          <CharactersList
            people={people}
            character1={character1}
            character2={character2}
            characterSelectHandler={characterSelectHandler}
          />
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Select;
