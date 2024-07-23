interface PianoProps {
  root: number;
  selectedNotes: number[];
  octaves: number;
}

const Piano: React.FC<PianoProps> = ({ root, selectedNotes, octaves }) => {
  console.log(selectedNotes);

  const selected0 = selectedNotes.includes(0);
  const selected1 = selectedNotes.includes(1);
  const selected2 = selectedNotes.includes(2);
  const selected3 = selectedNotes.includes(3);
  const selected4 = selectedNotes.includes(4);
  const selected5 = selectedNotes.includes(5);
  const selected6 = selectedNotes.includes(6);
  const selected7 = selectedNotes.includes(7);
  const selected8 = selectedNotes.includes(8);
  const selected9 = selectedNotes.includes(9);
  const selected10 = selectedNotes.includes(10);
  const selected11 = selectedNotes.includes(11);

  const Octave = () => {
    return (
      <>
        <div
          className={`key key__white${selected0 ? " key__selected" : ""}${
            root === 0 ? " key__root" : ""
          }`}
        ></div>
        <div
          className={`key key__black${selected1 ? " key__selected" : ""}${
            root === 1 ? " key__root" : ""
          }`}
        ></div>
        <div
          className={`key key__white${selected2 ? " key__selected" : ""}${
            root === 2 ? " key__root" : ""
          }`}
        ></div>
        <div
          className={`key key__black${selected3 ? " key__selected" : ""}${
            root === 3 ? " key__root" : ""
          }`}
        ></div>
        <div
          className={`key key__white${selected4 ? " key__selected" : ""}${
            root === 4 ? " key__root" : ""
          }`}
        ></div>
        <div
          className={`key key__white${selected5 ? " key__selected" : ""}${
            root === 5 ? " key__root" : ""
          }`}
        ></div>
        <div
          className={`key key__black${selected6 ? " key__selected" : ""}${
            root === 6 ? " key__root" : ""
          }`}
        ></div>
        <div
          className={`key key__white${selected7 ? " key__selected" : ""}${
            root === 7 ? " key__root" : ""
          }`}
        ></div>
        <div
          className={`key key__black${selected8 ? " key__selected" : ""}${
            root === 8 ? " key__root" : ""
          }`}
        ></div>
        <div
          className={`key key__white${selected9 ? " key__selected" : ""}${
            root === 9 ? " key__root" : ""
          }`}
        ></div>
        <div
          className={`key key__black${selected10 ? " key__selected" : ""}${
            root === 10 ? " key__root" : ""
          }`}
        ></div>
        <div
          className={`key key__white${selected11 ? " key__selected" : ""}${
            root === 11 ? " key__root" : ""
          }`}
        ></div>
      </>
    );
  };

  return (
    <div className="piano">
      {octaves > 0 && <Octave />}
      {octaves > 1 && <Octave />}
      {octaves > 2 && <Octave />}
    </div>
  );
};

export default Piano;
