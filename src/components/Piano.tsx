import useBreakpoint from "../hooks/useBreakpoint";
import * as Tone from "tone";
import config from "../service/config";

interface PianoProps {
  root: number;
  selectedNotes: number[];
}

const Piano: React.FC<PianoProps> = ({ root, selectedNotes }) => {
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

  const breakpoint = useBreakpoint();

  //create a synth and connect it to the main output (your speakers)
  const synth = new Tone.Synth().toDestination();

  const onKeyboardPress = (note: number) => {
    synth.triggerAttackRelease(`${config.notes[note]}4`, "16n");
  };

  const Octave = () => {
    return (
      <>
        <div
          onClick={() => {
            onKeyboardPress(0);
          }}
          className={`key key__white${selected0 ? " key__selected" : ""}${
            root === 0 ? " key__root" : ""
          }`}
        ></div>
        <div
          onClick={() => {
            onKeyboardPress(1);
          }}
          className={`key key__black${selected1 ? " key__selected" : ""}${
            root === 1 ? " key__root" : ""
          }`}
        ></div>
        <div
          onClick={() => {
            onKeyboardPress(2);
          }}
          className={`key key__white${selected2 ? " key__selected" : ""}${
            root === 2 ? " key__root" : ""
          }`}
        ></div>
        <div
          onClick={() => {
            onKeyboardPress(3);
          }}
          className={`key key__black${selected3 ? " key__selected" : ""}${
            root === 3 ? " key__root" : ""
          }`}
        ></div>
        <div
          onClick={() => {
            onKeyboardPress(4);
          }}
          className={`key key__white${selected4 ? " key__selected" : ""}${
            root === 4 ? " key__root" : ""
          }`}
        ></div>
        <div
          onClick={() => {
            onKeyboardPress(5);
          }}
          className={`key key__white${selected5 ? " key__selected" : ""}${
            root === 5 ? " key__root" : ""
          }`}
        ></div>
        <div
          onClick={() => {
            onKeyboardPress(6);
          }}
          className={`key key__black${selected6 ? " key__selected" : ""}${
            root === 6 ? " key__root" : ""
          }`}
        ></div>
        <div
          onClick={() => {
            onKeyboardPress(7);
          }}
          className={`key key__white${selected7 ? " key__selected" : ""}${
            root === 7 ? " key__root" : ""
          }`}
        ></div>
        <div
          onClick={() => {
            onKeyboardPress(8);
          }}
          className={`key key__black${selected8 ? " key__selected" : ""}${
            root === 8 ? " key__root" : ""
          }`}
        ></div>
        <div
          onClick={() => {
            onKeyboardPress(9);
          }}
          className={`key key__white${selected9 ? " key__selected" : ""}${
            root === 9 ? " key__root" : ""
          }`}
        ></div>
        <div
          onClick={() => {
            onKeyboardPress(10);
          }}
          className={`key key__black${selected10 ? " key__selected" : ""}${
            root === 10 ? " key__root" : ""
          }`}
        ></div>
        <div
          onClick={() => {
            onKeyboardPress(11);
          }}
          className={`key key__white${selected11 ? " key__selected" : ""}${
            root === 11 ? " key__root" : ""
          }`}
        ></div>
      </>
    );
  };

  const isSmall = breakpoint === "xs" || breakpoint === "sm";
  const isMedium = breakpoint === "md";

  return (
    <div className="piano">
      {<Octave />}
      {!isSmall && <Octave />}
      {!isSmall && !isMedium && <Octave />}
    </div>
  );
};

export default Piano;
