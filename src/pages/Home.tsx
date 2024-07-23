import { Link } from "react-router-dom";
import Piano from "../components/Piano";

const Home = () => {
  return (
    <div className="page">
      <h2>Piano Buddy</h2>
      <Piano root={-1} selectedNotes={[]} />
      <br />
      <Link to="/scale">
        <button>ScaleFinder</button>
      </Link>{" "}
      <Link to="/chord">
        <button>ChordFinder</button>
      </Link>
    </div>
  );
};

export default Home;
