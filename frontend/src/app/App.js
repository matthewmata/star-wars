import Header from "../features/header/Header";
import Select from "../features/select/Select";
import spaceBackground from "../images/space-background.jpg"

const App = () => {
  return (
    <div className="app" style={{ backgroundImage: `url(${spaceBackground})` }}>
      <Header />
      <Select />
    </div>
  );
};

export default App;
