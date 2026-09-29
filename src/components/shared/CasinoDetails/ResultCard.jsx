import { useRef } from "react";
import "./result-card.css";
import useCloseModalClickOutside from "../../../hooks/closeModal";
const ResultCard = ({ setShowResultCard }) => {
  const ref = useRef(null);
  useCloseModalClickOutside(ref, () => setShowResultCard(false));
  return (
    <div
      role="presentation"
      id="simple-popover"
      className="MuiModal-root MuiPopover-root teenpatti css-jp7szo"
    >
      <div
        aria-hidden="true"
        className="MuiBackdrop-root MuiBackdrop-invisible css-esi9ax"
        style={{
          opacity: 1,
          transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
      <div tabIndex={0} data-test="sentinelStart" />
      <div
        className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1dmzujt"
        tabIndex={-1}
        style={{
          opacity: 1,
          transform: "none",
          transition:
            "opacity 256ms cubic-bezier(0.4, 0, 0.2, 1), transform 170ms cubic-bezier(0.4, 0, 0.2, 1)",
          top: "206px",
          left: "16px",
          transformOrigin: "15.0026px 0px",
        }}
      >
        <div className="tp-popover" ref={ref}>
          <div className="result-div">
            <div className="title-div">
              <img
                src="https://rg-assests.royaladmin.live/common/flag-logo.png"
                alt="flag-logo"
                className="flag-icon"
              />
              <div className="title">Result Card</div>
            </div>
            <div className="cards-div">
              <div className="player-cards">
                <div className="empty-div" />
                <div className="cards">
                  <img
                    alt=""
                    className="card-img teenpatti-winner-card"
                    src="https://rg-assests.royaladmin.live/display-cards/D10.svg"
                  />
                  <img
                    alt=""
                    className="card-img teenpatti-winner-card"
                    src="https://rg-assests.royaladmin.live/display-cards/C2.svg"
                  />
                  <img
                    alt=""
                    className="card-img teenpatti-winner-card"
                    src="https://rg-assests.royaladmin.live/display-cards/S9.svg"
                  />
                </div>
                <div className="caption">Player A</div>
              </div>
              <div
                className="player-cards"
                style={{ backgroundColor: "rgb(30, 102, 23)" }}
              >
                <div className="winner-div">WINNER</div>
                <div className="cards">
                  <img
                    alt=""
                    className="card-img teenpatti-winner-card"
                    src="https://rg-assests.royaladmin.live/display-cards/H7.svg"
                  />
                  <img
                    alt=""
                    className="card-img teenpatti-winner-card"
                    src="https://rg-assests.royaladmin.live/display-cards/H13.svg"
                  />
                  <img
                    alt=""
                    className="card-img teenpatti-winner-card"
                    src="https://rg-assests.royaladmin.live/display-cards/D11.svg"
                  />
                </div>
                <div className="caption">Player B</div>
              </div>
            </div>
          </div>
          <div className="round-id">Round Id: VTGTP103.1790657439</div>
        </div>
      </div>
      <div tabIndex={0} data-test="sentinelEnd" />
    </div>
  );
};

export default ResultCard;
