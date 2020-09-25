import React from 'react';
import calling from '../assets/calling.png';
import black from '../assets/black.png';
import endingLogo from '../assets/endingLogo.png';
import Sidenav from "../components/Sidenav";
import "../pages/CallMidwife.scss";

class CallMidwife extends React.Component {
	constructor(props) {
  	super(props)
    this.backgrounds = [calling, black, endingLogo]
    this.state = { backgroundIndex: 0 }
    this.animDuration = 1
    this.changeBackground = this.changeBackground.bind(this)
  }

   componentDidMount () {
    this.timeout = setTimeout(
      this.changeBackground,     
      this.animDuration * 2000     
    )
  } 
  
  componentWillUnmount() {
  	if (this.timeout) clearTimeout(this.timeout)
  } 

  changeBackground () {
    this.setState(function ({ backgroundIndex }) {
      const nextBackgroundIndex = ++backgroundIndex 
      //% this.backgrounds.length
      
      return { backgroundIndex: nextBackgroundIndex }
    }, function () {
        this.timeout = setTimeout(
        this.changeBackground,
        this.animDuration * 2000
      )
    })
  }

  render () {
    
    return (
      <div>
      <div>
      <img className="image" src={this.backgrounds[this.state.backgroundIndex]} alt="" />
      </div>
      <Sidenav />
      </div>
    )
  }
}

export default CallMidwife;
