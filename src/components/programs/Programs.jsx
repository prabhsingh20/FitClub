import "./programs.css";
import { programsData } from "../../data/programsData";
import rightArrow from "/rightArrow.png";

function Programs() {
  return (
    <div className="programs" id="programs">
      {/* HEADER */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      {/* HEADER */}
      <div className="program-categories">
        {programsData.map((program) => (
          <div key={program.heading} className="category">
            <img src={program.image} alt={program.heading} className="icons" />
            <span className="program-heading">{program.heading}</span>
            <span className="program-details">{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
