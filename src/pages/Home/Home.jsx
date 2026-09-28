import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <div className="potrait router-ctn-dark">
        <div className="l-if-m-ctn">
          <div className="container">
            <div className="header">
              <div className="lobby-image">
                <div className="lobby-text">Lobby</div>
                <div className="lobby-size">14</div>
              </div>
            </div>
            <div className="mini-lobby-ctn">
              <div className="lobby-wrapper">
                <div className="MuiTabs-root card-wrapper css-orq8zk">
                  <div className="MuiButtonBase-root MuiTabScrollButton-root MuiTabScrollButton-horizontal Mui-disabled MuiTabs-scrollButtons MuiTabs-scrollButtonsHideMobile css-1q0ig8p">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="KeyboardArrowLeftIcon"
                    >
                      <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
                    </svg>
                    <span className="MuiTouchRipple-root css-w0pj6f" />
                  </div>
                  <div
                    className="MuiTabs-scrollableX MuiTabs-hideScrollbar css-oqr85h"
                    style={{
                      width: "99px",
                      height: "99px",
                      position: "absolute",
                      top: "-9999px",
                      overflow: "scroll",
                    }}
                  />
                  <div
                    className="MuiTabs-scroller MuiTabs-hideScrollbar MuiTabs-scrollableX css-12qnib"
                    style={{ marginBottom: "0px" }}
                  >
                    <div
                      className="MuiTabs-flexContainer css-k008qs"
                      role="tablist"
                    >
                      <button
                        onClick={() => navigate("/casino/teenpatti")}
                        className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root game-card css-1ujsas3"
                        tabIndex={0}
                        type="button"
                        value={0}
                      >
                        <a className="nav-link">
                          <img src="https://rg-assests.royaladmin.live/MiniGamesLobbyicons/TP.png" />
                          <div className="game-name-ctn">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium player-icon css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="PeopleAltIcon"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
                              />
                              <circle cx={9} cy={8} r={4} fillRule="evenodd" />
                              <path
                                fillRule="evenodd"
                                d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                              />
                            </svg>
                            143
                          </div>{" "}
                        </a>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </button>
                      {/* <button
                        className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root game-card css-1ujsas3"
                        tabIndex={0}
                        type="button"
                        value={1}
                      >
                        <a
                          className="nav-link"
                          href="/casino/RGONLINE/UkdPTkxJTkU6VkdBQjEwMTpWVEdBQjEwMw=="
                        >
                          <img src="https://rg-assests.royaladmin.live/MiniGamesLobbyicons/ABN.png" />
                          <div className="game-name-ctn">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium player-icon css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="PeopleAltIcon"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
                              />
                              <circle cx={9} cy={8} r={4} fillRule="evenodd" />
                              <path
                                fillRule="evenodd"
                                d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                              />
                            </svg>
                            26
                          </div>{" "}
                        </a>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </button>
                      <button
                        className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root game-card css-1ujsas3"
                        tabIndex={0}
                        type="button"
                        value={2}
                      >
                        <a
                          className="nav-link"
                          href="/casino/RGONLINE/UkdPTkxJTkU6VkdTUE8xMDE6VlRHU1BPMTAz"
                        >
                          <img src="https://rg-assests.royaladmin.live/MiniGamesLobbyicons/superover.png" />
                          <div className="game-name-ctn">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium player-icon css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="PeopleAltIcon"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
                              />
                              <circle cx={9} cy={8} r={4} fillRule="evenodd" />
                              <path
                                fillRule="evenodd"
                                d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                              />
                            </svg>
                            143
                          </div>{" "}
                        </a>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </button> */}
                      <button
                        onClick={() => navigate("/casino/dragon-tiger")}
                        className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root game-card css-1ujsas3"
                        tabIndex={0}
                        type="button"
                        value={3}
                      >
                        <a className="nav-link">
                          <img src="https://rg-assests.royaladmin.live/MiniGamesLobbyicons/DT.png" />
                          <div className="game-name-ctn">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium player-icon css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="PeopleAltIcon"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
                              />
                              <circle cx={9} cy={8} r={4} fillRule="evenodd" />
                              <path
                                fillRule="evenodd"
                                d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                              />
                            </svg>
                            105
                          </div>{" "}
                        </a>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </button>
                      <button
                        className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root game-card css-1ujsas3"
                        tabIndex={0}
                        type="button"
                        value={4}
                      >
                        <a
                          className="nav-link"
                          href="/casino/RGONLINE/UkdPTkxJTkU6VkdBMzEwMTpWVEdBMzEwMw=="
                        >
                          <img src="https://rg-assests.royaladmin.live/MiniGamesLobbyicons/AAA.png" />
                          <div className="game-name-ctn">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium player-icon css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="PeopleAltIcon"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
                              />
                              <circle cx={9} cy={8} r={4} fillRule="evenodd" />
                              <path
                                fillRule="evenodd"
                                d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                              />
                            </svg>
                            42
                          </div>{" "}
                        </a>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </button>
                      <button
                        className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root game-card css-1ujsas3"
                        tabIndex={0}
                        type="button"
                        value={5}
                      >
                        <a
                          className="nav-link"
                          href="/casino/RGONLINE/UkdPTkxJTkU6VkdCQUMxMDE6VlRHQkFDMTAz"
                        >
                          <img src="https://rg-assests.royaladmin.live/MiniGamesLobbyicons/baccarat.png" />
                          <div className="game-name-ctn">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium player-icon css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="PeopleAltIcon"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
                              />
                              <circle cx={9} cy={8} r={4} fillRule="evenodd" />
                              <path
                                fillRule="evenodd"
                                d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                              />
                            </svg>
                            78
                          </div>{" "}
                        </a>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </button>
                      <button
                        className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root game-card css-1ujsas3"
                        tabIndex={0}
                        type="button"
                        value={6}
                      >
                        <a
                          className="nav-link"
                          href="/casino/RGONLINE/UkdPTkxJTkU6VkdQT0sxMDE6VlRHUE9LMTAz"
                        >
                          <img src="https://rg-assests.royaladmin.live/MiniGamesLobbyicons/poker.png" />
                          <div className="game-name-ctn">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium player-icon css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="PeopleAltIcon"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
                              />
                              <circle cx={9} cy={8} r={4} fillRule="evenodd" />
                              <path
                                fillRule="evenodd"
                                d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                              />
                            </svg>
                            98
                          </div>{" "}
                        </a>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </button>
                      <button
                        className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root game-card css-1ujsas3"
                        tabIndex={0}
                        type="button"
                        value={7}
                      >
                        <a
                          className="nav-link"
                          href="/casino/RGONLINE/UkdPTkxJTkU6VkdDVzEwMTpWVEdDVzEwMw=="
                        >
                          <img src="https://rg-assests.royaladmin.live/MiniGamesLobbyicons/CricketWar.png" />
                          <div className="game-name-ctn">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium player-icon css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="PeopleAltIcon"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
                              />
                              <circle cx={9} cy={8} r={4} fillRule="evenodd" />
                              <path
                                fillRule="evenodd"
                                d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                              />
                            </svg>
                            149
                          </div>{" "}
                        </a>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </button>
                      <button
                        className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root game-card css-1ujsas3"
                        tabIndex={0}
                        type="button"
                        value={8}
                      >
                        <a
                          className="nav-link"
                          href="/casino/RGONLINE/UkdPTkxJTkU6VkdNVFAxMDE6VlRHTVRQMTAz"
                        >
                          <img src="https://rg-assests.royaladmin.live/MiniGamesLobbyicons/TeenpatiMuflis.png" />
                          <div className="game-name-ctn">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium player-icon css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="PeopleAltIcon"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
                              />
                              <circle cx={9} cy={8} r={4} fillRule="evenodd" />
                              <path
                                fillRule="evenodd"
                                d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                              />
                            </svg>
                            140
                          </div>{" "}
                        </a>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </button>
                      <button
                        className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root game-card css-1ujsas3"
                        tabIndex={0}
                        type="button"
                        value={9}
                      >
                        <a
                          className="nav-link"
                          href="/casino/RGONLINE/UkdPTkxJTkU6VkdEVEwxMDE6VlRHRFRMMTAz"
                        >
                          <img src="https://rg-assests.royaladmin.live/MiniGamesLobbyicons/DragonTilerLion.png" />
                          <div className="game-name-ctn">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium player-icon css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="PeopleAltIcon"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
                              />
                              <circle cx={9} cy={8} r={4} fillRule="evenodd" />
                              <path
                                fillRule="evenodd"
                                d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                              />
                            </svg>
                            190
                          </div>{" "}
                        </a>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </button>
                      <button
                        className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root game-card css-1ujsas3"
                        tabIndex={0}
                        type="button"
                        value={10}
                      >
                        <a
                          className="nav-link"
                          href="/casino/RGONLINE/UkdPTkxJTkU6VkdMSzcxMDE6VlRHTEs3MTAz"
                        >
                          <img src="https://rg-assests.royaladmin.live/MiniGamesLobbyicons/lucky7.png" />
                          <div className="game-name-ctn">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium player-icon css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="PeopleAltIcon"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
                              />
                              <circle cx={9} cy={8} r={4} fillRule="evenodd" />
                              <path
                                fillRule="evenodd"
                                d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                              />
                            </svg>
                            191
                          </div>{" "}
                        </a>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </button>
                      <button
                        className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root game-card css-1ujsas3"
                        tabIndex={0}
                        type="button"
                        value={11}
                      >
                        <a
                          className="nav-link"
                          href="/casino/RGONLINE/UkdPTkxJTkU6VkdGQlMxMDE6VlRHRkJTMTAz"
                        >
                          <img src="https://rg-assests.royaladmin.live/MiniGamesLobbyicons/FTS.png" />
                          <div className="game-name-ctn">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium player-icon css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="PeopleAltIcon"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
                              />
                              <circle cx={9} cy={8} r={4} fillRule="evenodd" />
                              <path
                                fillRule="evenodd"
                                d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                              />
                            </svg>
                            68
                          </div>{" "}
                        </a>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </button>
                      <button
                        className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root game-card css-1ujsas3"
                        tabIndex={0}
                        type="button"
                        value={12}
                      >
                        <a
                          className="nav-link"
                          href="/casino/RGONLINE/UkdPTkxJTkU6VkcyVFAxMDE6VlRHMlRQMTAz"
                        >
                          <img src="https://rg-assests.royaladmin.live/MiniGamesLobbyicons/TwoCardTeenpati.png" />
                          <div className="game-name-ctn">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium player-icon css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="PeopleAltIcon"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
                              />
                              <circle cx={9} cy={8} r={4} fillRule="evenodd" />
                              <path
                                fillRule="evenodd"
                                d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                              />
                            </svg>
                            100
                          </div>{" "}
                        </a>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </button>
                      <button
                        className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root game-card css-1ujsas3"
                        tabIndex={0}
                        type="button"
                        value={13}
                      >
                        <a
                          className="nav-link"
                          href="/casino/RGONLINE/UkdPTkxJTkU6VkdBUlcxMDE6VlRHQVJXMTAz"
                        >
                          <img src="https://rg-assests.royaladmin.live/MiniGamesLobbyicons/ARW.png" />
                          <div className="game-name-ctn">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium player-icon css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="PeopleAltIcon"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
                              />
                              <circle cx={9} cy={8} r={4} fillRule="evenodd" />
                              <path
                                fillRule="evenodd"
                                d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                              />
                            </svg>
                            135
                          </div>{" "}
                        </a>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </button>
                    </div>
                    <span
                      className="MuiTabs-indicator css-ttwr4n"
                      style={{ left: "0px", width: "0px" }}
                    />
                  </div>
                  <div className="MuiButtonBase-root MuiTabScrollButton-root MuiTabScrollButton-horizontal MuiTabs-scrollButtons MuiTabs-scrollButtonsHideMobile css-1q0ig8p">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="KeyboardArrowRightIcon"
                    >
                      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                    </svg>
                    <span className="MuiTouchRipple-root css-w0pj6f" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
