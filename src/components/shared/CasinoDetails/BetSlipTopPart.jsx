import { Fragment } from "react";

const BetSlipTopPart = () => {
  return (
    <Fragment>
      <div className="last-win">
        <div className="l-t-ctn">
          <img
            className="win-icon"
            src="/src/assets/images/cap.b2718af386c9384502887b12ab051844.svg"
            alt="F"
          />
          <span>Last Win</span>
        </div>
        <div className="win-amount-ctn">
          <span>0</span>
        </div>
      </div>
      <div className="min-max-ctn">
        <span>Total Bet: 0.0</span>
        <br />
        <span className="min-max-text">Min: 10</span>{" "}
        <span className="min-max-text">Max:150K</span>
      </div>
      <div className="trapezoid-ctn">
        <img
          className="t-img"
          src="/src/assets/images/7UD-trapezoid.44dc0b1e8f57697dfae09752e720c60e.svg"
          alt=""
        />
        <span className="round-status">CARD OPENING...</span>
        <span className="time-duration">4</span>
      </div>
    </Fragment>
  );
};

export default BetSlipTopPart;
