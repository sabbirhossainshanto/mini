import "./stake-modal.css";

const StakeModal = () => {
  return (
    <div className="stakes-panel">
      <div className="chipDeck ">
        <div className="chip-ctn">
          <div id="fadeIn" className="show-stakes">
            <div className="chips-layer">
              <div
                className="cdChip 
                  first-chip
                  noActive"
              >
                <img
                  src="/src/assets/images/red-chip.f94529bb3fc703696a0a6157cffd3eb6.svg"
                  alt=""
                />
                <span className="cdChipSpan">10</span>
              </div>
              <div
                className="cdChip 
                  
                  noActive"
              >
                <img
                  src="/src/assets/images/red-chip.f94529bb3fc703696a0a6157cffd3eb6.svg"
                  alt=""
                />
                <span className="cdChipSpan">50</span>
              </div>
              <div
                className="cdChip 
                  
                  active"
              >
                <img
                  src="/src/assets/images/red-chip.f94529bb3fc703696a0a6157cffd3eb6.svg"
                  alt=""
                />
                <span className="cdChipSpan">100</span>
              </div>
              <div
                className="cdChip 
                  
                  noActive"
              >
                <img
                  src="/src/assets/images/maroon-chip.1b53955ed13af6a6d134562fef02644e.svg"
                  alt=""
                />
                <span className="cdChipSpan">500</span>
              </div>
              <div
                className="cdChip 
                  
                  noActive"
              >
                <img
                  src="/src/assets/images/green-chip.6aba2377fb5d549768872eecfeb61d83.svg"
                  alt=""
                />
                <span className="cdChipSpan">1K</span>
              </div>
              <div
                className="cdChip 
                  
                  noActive"
              >
                <img
                  src="/src/assets/images/green-chip.6aba2377fb5d549768872eecfeb61d83.svg"
                  alt=""
                />
                <span className="cdChipSpan">2.5K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakeModal;
