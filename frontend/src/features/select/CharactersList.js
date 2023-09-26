const CharactersList = ({
  people,
  character1,
  character2,
  characterSelectHandler,
}) => {
  const colorSelectHandler = (person) => {
    if (character1?.name === person.name && character2?.name === person.name) {
      return "selected-same-character";
    } else if (person.name === character1?.name) {
      return "selected-character1";
    } else if (person.name === character2?.name) {
      return "selected-character2";
    }
  };

  return (
    <div className="grid-container">
      {people.map((person) => (
        <div
          className={`grid-item ${colorSelectHandler(person)}`}
          key={person.id}
          onClick={() => characterSelectHandler(person)}
        >
          <img src={person.image} alt={person.name}></img>
          <div className="overlay-text">
            <div>{person.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharactersList;
