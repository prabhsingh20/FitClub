import Header from "../header/Header";
import "./hero.css";

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
            <span>+130</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+1000</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
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
      <div className="right-h"> right side</div>
    </div>
  );
}

export default Hero;
