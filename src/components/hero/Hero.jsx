import Header from "../header/Header";
import "./hero.css";
import hero_image from "/hero_image.png";
import hero_image_back from "/hero_image_back.png";
import heart from "/heart.png";
import calories from "/calories.png";

function Hero() {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        {/* HERO HEADING */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* HERO HEADING */}

        {/* HERO FIGURE */}
        <div className="figures">
          <div>
            <span>+ 130</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+ 1000</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* HERO FIGURE */}

        {/* HERO BUTTONS */}
        <div className="hero-buttons">
          <button className="btn btn-1">Get Started</button>
          <button className="btn btn-2">Learn More</button>
        </div>
        {/* HERO BUTTONS */}
      </div>

      {/* RIGHT SECTION */}
      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={heart} alt="image heart" />
          <span>Heart Rate</span>
          <span className="heart-rate-count">116 bpm</span>
        </div>

        {/* HERO IMAGE */}
        <img src={hero_image} alt="human image" className="hero-img" />
        <img
          src={hero_image_back}
          alt="half circle image"
          className="hero-img-back"
        />
        <div className="calories">
          <img src={calories} alt="calories graph image" />
          <div className="calories-content">
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>
        {/* HERO IMAGE */}
      </div>
      {/* RIGHT SECTION */}
    </div>
  );
}

export default Hero;
