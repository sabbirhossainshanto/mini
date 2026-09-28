import "./rules.css";

const Rules = ({ setRules }) => {
  return (
    <div className="rules-model">
      <div className="r-background" />
      <div className="min-rules-ctn">
        <div className="top-content">
          <div className="rules-txt-ctn">
            <span className="r-txt">Rules</span>
          </div>
          <div className="game-name">Teenpatti Yuvi</div>
          <div className="cls-icon-ctn" onClick={() => setRules(false)}>
            <svg
              className="MuiSvgIcon-root c-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </div>
        </div>
        <div className="middle-content">
          <div>
            <p className="ruletitle">
              To guess whether the Player A or Player B will get a better hand.
            </p>
            <div className="rulestable">
              <div className="rulesLeft">
                <b>Hands dealt</b>
              </div>
              <div className="rulesRight">
                2 (3 cards for Player A, 3 cards for Player B)
              </div>
            </div>
            <div className="rulestable">
              <div className="rulesLeft">
                <b>Number Ranking</b>
              </div>
              <div className="rulesRight">
                Lowest to highest: 2, 3, 4, 5, 6, 7,8, 9, 10, Jack, Queen, and
                King (Ace can be 1 or 14).
              </div>
            </div>
            <div className="rulestable">
              <div className="rulesLeft">
                <b>Suit Ranking (Highest to Lowest)</b>
              </div>
              <div className="rulesRight">Spades, Hearts, Clubs, Diamonds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
