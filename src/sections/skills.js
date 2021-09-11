import Skill from "../components/skill";
import CircularProg from "../components/circularProg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  const mainTechSkills = [
    { name: "HTML", progress: "90" },
    { name: "CSS", progress: "90" },
    { name: "JavaScript", progress: "95" },
    { name: "React", progress: "60" },
    { name: "SQL", progress: "75" },
    { name: "Git / GitHub", progress: "50" },
  ];
  const overallCirSkills = [
    { name: "Web Development", progress: "90" },
    { name: "Database Management", progress: "75" },
    { name: "OOP", progress: "85" },
  ];
  const softSkills = [
    "TeamWork",
    "LeaderShip",
    "Communication",
    "Problem Solving Skills",
  ];
  const softwareSkills = [
    { name: "VS Code", progress: "80" },
    { name: "Bash", progress: "50" },
    { name: "AutoCAD", progress: "75" },
    { name: "Premiere", progress: "75" },
    { name: "Photoshop", progress: "60" },
    { name: "MS Excel", progress: "90" },
  ];
  return (
    <section className="container">
      <div className="containerCont sectionCont  sectionContSkills">
        <header>
          <h2>Skills</h2>
        </header>
        <div className="rowFlexRes breakMainTechOverall">
          <div className="cardContainer">
            <div className="card">
              <h3>Main Tech</h3>
              <ul>
                {mainTechSkills.map((skill, pos) => (
                  <Skill key={pos} skill={skill} />
                ))}
              </ul>
            </div>
          </div>
          <div className="cardContainer">
            <div className="card">
              <h3>Overall</h3>
              <ul className="rowFlexRes breakOverall">
                {overallCirSkills.map((skill, pos) => (
                  <CircularProg key={pos} skill={skill} />
                ))}
              </ul>
              <ul>
                <li>
                  <ul className="rowFlexRes">
                    {softSkills.slice(0, 2).map((skill, pos) => (
                      <li key={pos}>
                        <FontAwesomeIcon color="var(--red)" icon={faCheck} />{" "}
                        <span style={{ opacity: "0.9" }}>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <ul className="rowFlexRes">
                    {softSkills.slice(2, 4).map((skill, pos) => (
                      <li key={pos}>
                        <FontAwesomeIcon color="var(--red)" icon={faCheck} />{" "}
                        <span style={{ opacity: "0.9" }}>{`${skill}`}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cardContainer">
          <div className="card">
            <h3>Software</h3>
            <ul>
              {softwareSkills.map((skill, pos) => (
                <Skill key={pos} skill={skill} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
