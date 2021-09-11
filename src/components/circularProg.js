import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function circularProg({ skill }) {
  return (
    <li className="circleSkillContainer">
      <div>
        <CircularProgressbar
          value={skill.progress}
          text={`${skill.progress}%`}
        />
      </div>
      <div>{skill.name}</div>
    </li>
  );
}
