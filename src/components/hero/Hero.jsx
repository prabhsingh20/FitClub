import { motion } from "framer-motion";
import Header from "../header/Header";
import "./hero.css";
import calories from "/calories.png";
import heart from "/heart.png";
import hero_image from "/hero_image.png";
import hero_image_back from "/hero_image_back.png";
import NumberCounter from "number-counter";

function Hero() {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
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
            <span>
              <NumberCounter end={130} start={100} delay="4" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={1000} start={950} delay="4" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={40} delay="4" preFix="+" />
            </span>
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
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="image heart" />
          <span>Heart Rate</span>
          <span className="heart-rate-count">116 bpm</span>
        </motion.div>

        {/* HERO IMAGE */}
        <img src={hero_image} alt="human image" className="hero-img" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt="half circle image"
          className="hero-img-back"
        />
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="calories graph image" />
          <div className="calories-content">
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
        {/* HERO IMAGE */}
      </div>
      {/* RIGHT SECTION */}
    </div>
  );
}

export default Hero;
