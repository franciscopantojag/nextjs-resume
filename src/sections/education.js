import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

export default function Education() {
  return (
    <section className="sectionCont sectionContEducation">
      <div id="education" className="target"></div>
      <header>
        <h2>Education</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            <div className="cardCont">
              <h5>
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2015 - 2019
                </span>
              </h5>
              <h3>Bachelor of Engineering</h3>
              <h4>Universidad de Piura</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Systems and Industrial Engineering</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2004 - 2014
                </span>
              </h5>
              <h3>High School</h3>
              <h4>Colegio San Agustin de Chiclayo</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span> <span>IB Diploma</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
