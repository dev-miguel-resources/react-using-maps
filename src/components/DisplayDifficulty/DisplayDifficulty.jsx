import s from "./style.module.css";

// STATELESS COMPONENT
const DisplayDifficulty = (props) => (
  <div className={s.container}>
    {props.difficulty
      ? `Difficulty set to ${props.difficulty}`
      : "No difficulty set"}
  </div>
);

export default DisplayDifficulty;
