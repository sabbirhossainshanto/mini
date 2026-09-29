import "./poker.css";
import Header from "../../../components/shared/CasinoDetails/Header";
import BetSlipTopPart from "../../../components/shared/CasinoDetails/BetSlipTopPart";
import BetSlipBottomPart from "../../../components/shared/CasinoDetails/BetSlipBottomPart";
const Poker = () => {
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

                  <div className="Mini-poker-odds-ctn">
                    <div className="lo-o-l">
                      <div className="m-o-ctn">
                        <div className="p-a-ctn">
                          <div className="t-o-img ">
                            <div className="dummy-bets-ctn left">
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
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
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                            </div>
                            <div className="runner-odds">
                              <span>Player A</span>
                              <span>1.98</span>
                            </div>
                            <div className="t-img">
                              <img
                                className="a-img"
                                src="/src/assets/images/A.c6674996f4a9e1af08069b2320a2d61a.svg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-b-ctn">
                          <div className="t-o-img win-odds-btn">
                            <div className="dummy-bets-ctn right">
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                              <span className="dummy-bets" />
                              <span className="dummy-bets" />
                              <div className="chip-dummy-bets pink-chip bets-fly" />
                            </div>
                            <div className="t-img">
                              <img
                                className="b-img"
                                src="/src/assets/images/B.83cd8f0f268edcc13eabd29529bc5e76.svg"
                                alt=""
                              />
                            </div>
                            <div className="runner-odds">
                              <span>Player B</span>
                              <span>1.98</span>
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

export default Poker;
