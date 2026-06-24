import React from "react";
import ".//scroller.css";

const Scroller = () => {
  return (
    <div className="ticker_container">
      <div className="ticker_wrapper">
        <div className="ticker_track">
          <div className="ticker_content">
            MODMIX // ZERO PROOF // REFRESHING // LIVE LOUD // NATURAL
            BOTANICALS // MODMIX // ZERO PROOF // REFRESHING // LIVE LOUD //
            NATURAL BOTANICALS //
          </div>
          <div className="ticker_content" aria-hidden="true">
            MODMIX // ZERO PROOF // REFRESHING // LIVE LOUD // NATURAL
            BOTANICALS // MODMIX // ZERO PROOF // REFRESHING // LIVE LOUD //
            NATURAL BOTANICALS //
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroller;
