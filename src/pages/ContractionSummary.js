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

          <div className="contractionText">CONTRACTIONS</div>
          <div className="dateText">2020-09-14 - 2020-09-19</div>
         
          <div className="title1">Frekvens</div>
          <div className="backgroundShape shape1" id="Item1">Var 5:e minut</div>
        
          <div className="title2">Genomsnittslängd</div>
          <div className="backgroundShape shape2" id="Item2">54 sekunder</div>
        
          <div className="title3">Genomsnittlig smärta</div>
          <div className="backgroundShape shape3" id="Item3">Hög smärta</div>
        
          <div className="title4">Värkar totalt</div>
          <div className="backgroundShape shape4" id="Item4">60 minuter</div>
        
      </div>
 
  );
}

export default ContractionSummary;
