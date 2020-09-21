import React, { useState } from 'react';
import "../pages/ContractionSummary.scss";

const ContractionSummary = () => {
  const [animation, setAnimation] = useState(false);

  function toggleButton() {
    setAnimation(!animation);
  }

  return (
    <div
      className={
        !animation
          ? "summaryCard reverse-animation"
          : "summaryCard is-animated"
      }
      onClick={() => toggleButton()}
    >
      <div>
        <p className="contractionText">CONTRACTION</p>
        <p>2020-09-10 - 2020-09-12</p>
      </div>
      <div grid-wrapper>
        <div>
          <p>Frekvens</p>
          <div className="backgroundShape" id="Item1">Var 5:e minut</div>
        </div>
        <div>
          <p>Genomsnittslängd</p>
          <div className="backgroundShape" id="Item2">54 sekunder</div>
        </div>
        <div>
          <p>Genomsnittlig smärta</p>
          <div className="backgroundShape" id="Item3">Hög smärta</div>
        </div>
        <div>
          <p>Värkar totalt</p>
          <div className="backgroundShape" id="Item4">60 minuter</div>
        </div>
      </div>
    </div>
  );
}

export default ContractionSummary;
