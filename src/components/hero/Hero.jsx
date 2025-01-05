import Header from "../header/Header";
import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
      </div>
      <div className="right-h"> right side</div>
    </div>
  );
}

export default Hero;
