import { Fragment, useState } from "react";
import StakeModal from "./StakeModal";
import Rules from "./Rules";
import BetHistory from "./BetHistory";

const BetSlipBottomPart = () => {
  const [rules, setRules] = useState(false);
  const [betHistory, setBetHistory] = useState(false);
  const [showStakeModal, setShowStakeModal] = useState(false);
  return (
    <Fragment>
      {showStakeModal && <StakeModal />}
      {rules && <Rules setRules={setRules} />}
      {betHistory && <BetHistory setBetHistory={setBetHistory} />}
      <div className="bottom-ctn">
        <div className="results-ctn">
          <button
            className="video-button border-gradient-btn border-gradient-purple-btn
  "
          >
            B
          </button>
          <button
            className="video-button border-gradient-btn border-gradient-purple-btn
  "
          >
            A
          </button>
          <button
            className="video-button border-gradient-btn border-gradient-purple-btn
  "
          >
            A
          </button>
        </div>
        <div
          className="current__chip-bg"
          onClick={() => setShowStakeModal((prev) => !prev)}
        >
          <div className="current__chip ">
            <img
              src="/src/assets/images/red-chip.f94529bb3fc703696a0a6157cffd3eb6.svg"
              alt=""
            />
            <span className="cdChipSpan">100</span>
          </div>
        </div>
        <div className="w-46" />
        <div className="rules-hist-ctn">
          <img
            className="u-img"
            src="/src/assets/images/undo.c7023ef928c006460f00cbb70745022c.svg"
            alt=""
          />
          <img
            onClick={() => setRules(true)}
            className="p-img"
            src="/src/assets/images/rules-icon.14ce6aa68b03f36ae119e62a4d76d895.svg"
            alt=""
          />
          <img
            onClick={() => setBetHistory(true)}
            src="/src/assets/images/history.18932c5dd760933f954383d8df61b79e.svg"
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
};

export default BetSlipBottomPart;
