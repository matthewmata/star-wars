import starWarsLogo from "../../images/star-wars-logo.png"

const Header = () => {
    return (
      <header>
        <div className="center">
          <img className="logo" src={starWarsLogo}></img>
        </div>
        <div className="how-to-use center">
          <h3>How To Use</h3>
          <p>
            Select 2 items from the dropdown to pick any Star Wars character
            that are available from the Star Wars API.
          </p>
          <p>
            If the two have shared a planet, starship or vehicle before, below
            will have the movie(s) where such interactions occurred.
          </p>
        </div>
      </header>
    );
}

export default Header;