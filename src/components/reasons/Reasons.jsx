import "./reasons.css";
import image1 from "/image1.png";
import image2 from "/image2.png";
import image3 from "/image3.png";
import image4 from "/image4.png";
import nb from "/nb.png";
import adidas from "/adidas.png";
import nike from "/nike.png";
import tick from "/tick.png";

function Reasons() {
  return (
    <div className="reasons" id="reasons">
      {/* LEFT IMAGE SECTION */}
      <div className="left-r">
        <img src={image1} alt="human lifting weights" className="image1" />
        <img src={image2} alt="human lifting weights" className="image2" />
        <img src={image3} alt="human lifting weights" className="image3" />
        <img src={image4} alt="human lifting weights" className="image4" />
      </div>
      {/* LEFT IMAGE SECTION */}

      <div className="right-r">
        <span className="some-reasons">some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span className="choose-us"> choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="tick image"></img>
            <span>over 140+ expert coachs</span>
          </div>
          <div>
            <img src={tick} alt="tick image"></img>
            <span>train smarter and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="tick image"></img>
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="tick image"></img>
            <span>reliable partners</span>
          </div>
        </div>

        {/* OUR PARTNERS */}
        <span className="partners">OUR PARTNERS</span>
        <div className="partners-img">
          <img src={nb} alt="nb company logo" />
          <img src={adidas} alt="adidas company logo" />
          <img src={nike} alt="nike company logo" />
        </div>
        {/* OUR PARTNERS */}
      </div>
    </div>
  );
}

export default Reasons;
