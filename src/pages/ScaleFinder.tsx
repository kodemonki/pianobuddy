import { Link } from "react-router-dom";
import Piano from "../components/Piano";
import modes from "../assets/modes.json";
import scales from "../assets/scales.json";
import { useEffect, useState } from "react";
import config from "../service/config";

const ScaleFinder = () => {
  const [selectedNotes, setSelectedNotes] = useState<number[]>([]);
  const [selectedMode, setSelectedMode] = useState(0);
  const [selectedKey, setSelectedKey] = useState(0);

  useEffect(() => {
    setSelectedNotes([]);
  }, []);

  useEffect(() => {
    const selectedArray: number[] = [];
    scales[0].notes.forEach((note) => {
      let num = note + selectedKey;
      if (num >= 12) num -= 12;
      selectedArray.push(num);
    });
    modes[selectedMode].notes.forEach((adjustment, index) => {
      selectedArray[index] = selectedArray[index] + adjustment;
    });

    setSelectedNotes(selectedArray);
  }, [selectedKey, selectedMode]);

  const handleChangeKey = (e: { target: { value: string } }) => {
    setSelectedKey(Number(e.target.value));
  };

  const handleChangeMode = (e: { target: { value: string } }) => {
    setSelectedMode(Number(e.target.value));
  };

  return (
    <div className="page">
      <h2>
        Scale Finder
      </h2>
      <Piano root={selectedKey} selectedNotes={selectedNotes}/>
      <br />
      <form>
        <label>Key</label>{" "}
        <select onChange={handleChangeKey} id="key">
          {config.notes.map((note, index) => {
            return (
              <option key={note} value={index}>
                {note}
              </option>
            );
          })}
        </select>{" "}
        <label>Mode</label>{" "}
        <select onChange={handleChangeMode}>
          {modes.map((mode, index) => {
            return (
              <option key={mode.name} value={index}>
                {mode.name}
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
