import React from 'react';
import Modal from 'react-modal';
import CallMidwifeButton from "../components/CallMidwifeButton";
import PopupButton from "../components/PopupButton";
import "../pages/Popup.scss";
import logo from '../assets/logo.png';
import cross from '../assets/cross.png';

Modal.setAppElement('#root')
function Popup() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  

  return (
    <div>
      <img className="logo" src={logo} alt="ob-logo" onClick={openModal}></img>
      <Modal
        className='modal'
        isOpen={modalIsOpen}
        onRequestClose={closeModal}

        style={{
          overlay: {
            backgroundColor: 'grey'
          },
          content: {
            color: 'white'
          },

        }}
      >
        <div className="wrapper">
          <div className="crossbutton">
            <img src={cross} alt="crossicon" onClick={closeModal} />
          </div>
        
          <div>
            <PopupButton id="gridItem1" path="/timer" text="Gå till timer" />
          </div>
          <div>
            <PopupButton id="gridItem2" path="/symptoms" text="Jag vill registrera sympton" />
          </div>
          <div>
            <PopupButton id="gridItem3" path="/information" text="Viktig information" />
          </div>
          <div>          
             <CallMidwifeButton id="gridItem4" path="/ring" text="Ring barnmorska" />
          </div>
        </div> 
      </Modal>
    </div>
  );
}

export default Popup;
