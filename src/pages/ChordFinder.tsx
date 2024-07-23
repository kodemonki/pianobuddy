import { Link } from "react-router-dom";
import Piano from "../components/Piano";

const ChordFinder = () => {
  return (
    <div className="page">
      <h2>Chord Finder</h2>
      <br />
      <Piano root={-1} selectedNotes={[]} />
      <br />
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default ChordFinder;
