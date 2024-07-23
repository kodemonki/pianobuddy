import { Link } from "react-router-dom";
import Piano from "../components/Piano";

const Home = () => {
  return (
    <div className="page">
      <h2>Piano Buddy</h2>
      <Link to="/scale">
        <button>ScaleFinder</button>
      </Link>{" "}
      <Link to="/chord">
        <button>ChordFinder</button>
      </Link>
      <br />
      <br />
      <Piano root={-1} selectedNotes={[]} octaves={1} />
    </div>
  );
};

export default Home;
