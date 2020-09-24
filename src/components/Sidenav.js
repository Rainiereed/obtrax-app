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
        <Menu disableAutoFocus width={ '90%' } customBurgerIcon={ <img src={burger} alt="burgericon" /> } customCrossIcon={ <img src={cross} alt="crossicon" /> }>
          
          <a id="timer" className="menu-item" href="/timer">TIMER</a>
          <a id="minprofil" className="menu-item" href="/minprofile">MIN PROFIL</a>
          <a id="inställningar" className="menu-item" href="/setting">INSTÄLLNINGAR</a>
          <a id="viktiginformation" className="menu-item" href="/information">VIKTIG INFORMATION</a>
          <a id="historik" className="menu-item" href="/history">HISTORIK</a>
          
        </Menu>
      );
    }
  }

export default Sidenav;
