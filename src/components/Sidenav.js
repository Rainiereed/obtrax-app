import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import burger from '../assets/burger.png';
import cross from '../assets/cross.png';
import "./styles/Sidenav.scss";

class Sidenav extends React.Component {
    showSettings (event) {
      event.preventDefault();
     
    }
  
    render () {
      
      return (
        <Menu disableAutoFocus width={ '95%' } customBurgerIcon={ <img src={burger} alt="burgericon"/> } customCrossIcon={ <img src={cross} alt="crossicon"/> }>
          
          <a id="timer" className="menu-item" href="/timer">TIMER</a>
          <a id="minprofil" className="menu-item" href="/minprofile">MIN PROFIL</a>
          <a id="inställningar" className="menu-item" href="/inställningar">INSTÄLLNINGAR</a>
          <a id="viktiginformation" className="menu-item" href="/viktiginformation">VIKTIG INFORMATION</a>
          
        </Menu>
      );
    }
  }

export default Sidenav;
