import { Link } from "react-router-dom";
import Piano from "../components/Piano";
import scales from "../assets/scales.json";
import { useEffect, useState } from "react";
import config from "../service/config";

const ScaleFinder = () => {
  const [selectedNotes, setSelectedNotes] = useState<number[]>([]);
  const [selectedScale, setSelectedScale] = useState(0);
  const [selectedKey, setSelectedKey] = useState(0);

  useEffect(() => {
    setSelectedNotes([]);
  }, []);

  useEffect(() => {
    const scaleArray: number[] = [];
    scales[selectedScale].notes.forEach((scale)=>{
      let num = scale + selectedKey;
      if (num >= 12) num -= 12;
      scaleArray.push(num);

    }) 
    setSelectedNotes(scaleArray);
  }, [selectedKey, selectedScale]);

  const handleChangeKey = (e: { target: { value: string } }) => {
    setSelectedKey(Number(e.target.value));
  };

  const handleChangeScale = (e: { target: { value: string } }) => {
    setSelectedScale(Number(e.target.value));
  };

  return (
    <div className="page">
      <Piano root={selectedKey} selectedNotes={selectedNotes}/>
      <br />
      <form>
        <label>Key</label>{" "}
        <select onChange={handleChangeKey} id="key">
          {config.notes.map((note, index) => {
            return (
              <option key={note} value={index}>
                {note.toUpperCase()}
              </option>
            );
          })}
        </select>{" "}
        <label>Scale</label>{" "}
        <select onChange={handleChangeScale}>
          {scales.map((scale, index) => {
            return (
              <option key={scale.name} value={index}>
                {scale.name}
              </option>
            );
          })}
        </select>
      </form>
      <br/>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default ScaleFinder;
