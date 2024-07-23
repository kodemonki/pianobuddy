import { Link } from "react-router-dom";
import Piano from "../components/Piano";
import scales from "../assets/scales.json";
import chords from "../assets/chords.json";
import { useEffect, useState } from "react";
import config from "../service/config";

const ChordFinder = () => {
  const [selectedNotes, setSelectedNotes] = useState<number[]>([]);
  const [selectedChord, setSelectedChord] = useState(0);
  const [selectedKey, setSelectedKey] = useState(0);

  useEffect(() => {
    setSelectedNotes([]);
  }, []);

  useEffect(() => {
    const selectedArray: number[] = [];
    const chordArray: number[] = [];
    scales[0].notes.forEach((note) => {
      let num = note + selectedKey;
      if (num >= 12) num -= 12;
      selectedArray.push(num);
    });
    chords[selectedChord].notes.forEach((note) => {
      chordArray.push(selectedArray[note]);
    });
    chords[selectedChord].adjustments.forEach((adjustment, index) => {
      chordArray[index] = chordArray[index] + adjustment;
    });
    setSelectedNotes(chordArray);
  }, [selectedKey, selectedChord]);

  const handleChangeKey = (e: { target: { value: string } }) => {
    setSelectedKey(Number(e.target.value));
  };

  const handleChangeChord = (e: { target: { value: string } }) => {
    setSelectedChord(Number(e.target.value));
  };

  return (
    <div className="page">
      <h2>Chord Finder</h2>
      <Piano root={selectedKey} selectedNotes={selectedNotes} />
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
        <label>Chord</label>{" "}
        <select onChange={handleChangeChord}>
          {chords.map((chord, index) => {
            return (
              <option key={chord.name} value={index}>
                {chord.name}
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

export default ChordFinder;
