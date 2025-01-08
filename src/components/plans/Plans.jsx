import "./plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "/whiteTick.png";
import rightArrow from "/rightArrow.png";

function Plans() {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">Ready to Start</span>
        <span>Your Journey</span>
        <span className="stroke-text">now withus</span>
      </div>

      {/* PLANS CARDS */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div key={i} className="plan">
            <img src={plan.icon} alt={plan.name} className="plan-icon" />
            <span className="plan-name">{plan.name}</span>
            <span className="plan-price">₹ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div key={i} className="feature">
                  <img src={whiteTick} alt="tick image" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span className="benefits">
                See more benefits <img src={rightArrow} alt="right arrow" />
              </span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
      {/* PLANS CARDS */}
    </div>
  );
}

export default Plans;
