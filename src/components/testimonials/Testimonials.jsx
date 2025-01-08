import { useState } from "react";
import { testimonialsData } from "../../data/testimonialsData";
import "./testimonials.css";
import leftArrow from "/leftArrow.png";
import rightArrow from "/rightArrow.png";

function Testimonials() {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="testimonials" id="testimonials">
      {/* LEFT OF THE TEST */}
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span className="tName">{testimonialsData[selected].name}</span> -{" "}
          {testimonialsData[selected].status}
        </span>
      </div>
      {/* LEFT OF THE TEST */}

      {/* RIGHT SIDE OF TEST */}
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="customer image" />
        <div className="arrows">
          <img
            src={leftArrow}
            alt="left arrow image"
            onClick={() =>
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1)
            }
          />
          <img
            src={rightArrow}
            alt="right arrow image"
            onClick={() =>
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }
          />
        </div>
      </div>
      {/* RIGHT SIDE OF TEST */}
    </div>
  );
}

export default Testimonials;
