import "./lucky-seven.css";
import Header from "../../../components/shared/CasinoDetails/Header";
import BetSlipTopPart from "../../../components/shared/CasinoDetails/BetSlipTopPart";
import BetSlipBottomPart from "../../../components/shared/CasinoDetails/BetSlipBottomPart";
const LuckySeven = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="potrait router-ctn-dark">
        <div className="if-m-ctn">
          <div className="container">
            <Header />
            <div className="layout-layer">
              <div className="layout-wrapper">
                <div>
                  <BetSlipTopPart />

                  <div className="Mini-layout-three-odds-ctn">
                    <div className="lt-o-l">
                      <div className="lt-odds-ctn">
                        <div className="s-up-ctn low-card">
                          <div className="s-o-img ">
                            <span>Low Card</span>
                            <svg
                              width={48}
                              height={56}
                              viewBox="0 0 48 56"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="lowcard"
                            >
                              <path
                                d="M23.9274 32.9964C32.9001 32.9964 42.6498 24.7225 45.7426 16.7106C47.0857 20.1966 47.8516 24.0505 47.8516 28.12V28.1216L47.8492 28.12L23.9258 56L0.00236894 28.12L0 28.1216V28.12C0 24.0505 0.76589 20.1966 2.11212 16.7106C5.20174 24.7225 14.9562 32.9964 23.9274 32.9964Z"
                                fill="#03173A"
                              />
                              <path
                                d="M39.2978 0.729107C40.2452 3.18548 40.7853 5.90163 40.7853 8.77016H40.7822L23.9255 28.4141L7.06877 8.76937H7.06641C7.06641 5.90084 7.60648 3.18548 8.55397 0.728318C10.7324 6.37301 17.6049 12.204 23.9263 12.204C30.2484 12.2048 37.1185 6.3738 39.2978 0.729107Z"
                                fill="#03173A"
                              />
                            </svg>
                            <span>1.98</span>
                            <div className="dummy-bets-ctn left">
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip " />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip " />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip " />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip " />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip " />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip " />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                            </div>
                          </div>
                        </div>
                        <div className="s-down-ctn high-card">
                          <div className="s-o-img ">
                            <span>High Card</span>
                            <svg
                              width={48}
                              height={56}
                              viewBox="0 0 48 56"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="highcard"
                            >
                              <path
                                d="M23.9274 23.0036C32.9001 23.0036 42.6498 31.2775 45.7426 39.2894C47.0857 35.8034 47.8516 31.9495 47.8516 27.88V27.8784L47.8492 27.88L23.9258 0L0.00236894 27.88L0 27.8784V27.88C0 31.9495 0.76589 35.8034 2.11212 39.2894C5.20174 31.2775 14.9562 23.0036 23.9274 23.0036Z"
                                fill="#39070E"
                              />
                              <path
                                d="M39.2978 55.2709C40.2452 52.8145 40.7853 50.0984 40.7853 47.2298H40.7822L23.9255 27.5859L7.06877 47.2306H7.06641C7.06641 50.0992 7.60648 52.8145 8.55397 55.2717C10.7324 49.627 17.6049 43.796 23.9263 43.796C30.2484 43.7952 37.1185 49.6262 39.2978 55.2709Z"
                                fill="#39070E"
                              />
                            </svg>
                            <span>1.98</span>
                            <div className="dummy-bets-ctn right">
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip " />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip " />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip " />
                              <div className="chip-dummy-bets pink-chip " />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip " />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip " />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <BetSlipBottomPart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuckySeven;
