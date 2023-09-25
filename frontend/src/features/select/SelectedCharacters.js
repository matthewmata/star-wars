import { useSelector } from "react-redux";
import galacticRepublic from "../../images/galactic-republic.png";
import jediOrder from "../../images/jedi-order.jpeg";

const SelectedCharacters = ({ character1, character2 }) => {
  const sameFilms = useSelector((state) => state.select.sameFilms);
  const selectedBothFilms = character1 && character2 ? sameFilms : "";

  const character1Image = character1 ? character1.image : galacticRepublic;
  const character2Image = character2 ? character2.image : jediOrder;

  const character1Name = character1 ? character1.name : "Pick A Character";
  const character2Name = character2 ? character2.name : "Pick A Character";

  return (
    <div className="selected-characters">
      <div className="image-container">
        <div className="character">
          <h3>Character 1</h3>
          <img src={character1Image} alt={character1Name} />
          <div className="overlay-text">{character1Name}</div>
        </div>
        <div className="character">
          <h3>Character 2</h3>
          <img src={character2Image} alt={character2Name} />
          <div className="overlay-text">{character2Name}</div>
        </div>
      </div>
      <div className="same-films center">
        <p>{selectedBothFilms}</p>
      </div>
    </div>
  );
};

export default SelectedCharacters;
