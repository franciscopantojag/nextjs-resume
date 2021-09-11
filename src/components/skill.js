import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Skill({ skill }) {
  return (
    <li>
      <div className="rowFlexRes">
        <span>{skill.name}</span>
        <span>
          {skill.progress}
          {"%"}
        </span>
      </div>
      <div>
        <ProgressBar
          completed={skill.progress}
          bgcolor={"var(--red)"}
          baseBgColor={"rgba(233, 233, 233, 0.8)"}
          width={"100%"}
          height={"0.5rem"}
          labelSize={"0"}
        />
      </div>
    </li>
  );
}
