import React from 'react';
// import "./styles/Slidebar.scss";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Slidebar= () => {
  return (
      <div>
        <Slider
        defaultValue={15}
        trackStyle={{ 
          background: 'linear-gradient(to right, #6ce6ae, #e6cd71, #e867a2, #ed292c)', 
          height: 12 
        }}
        handleStyle={{
          borderColor: 'White',
          height: 28,
          width: 28,
          marginLeft: -14,
          marginTop: -9,
          backgroundColor: 'whiteSmoke',
        }}
        railStyle={{ background: 'linear-gradient(to right, #e1faef, #faf5e3, #fbe1ed, #fcd4d5)', 
        height: 12 
        }}
      />
      </div>
  )
}

export default Slidebar;





