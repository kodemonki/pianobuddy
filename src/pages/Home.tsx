import { Link } from "react-router-dom";
import Piano from "../components/Piano";

const Home = () => {
  return (
    <div className="page">
      <Piano root={-1} selectedNotes={[]} />     
      <h3>Piano Buddy</h3>
      <Link to="/mode">
        <button>Mode Finder</button>
      </Link>{" "}
      <Link to="/scale">
        <button>Scale Finder</button>
      </Link>{" "}
      <Link to="/chord">
        <button>Chord Finder</button>
      </Link>
    </div>
  );
};

export default Home;
