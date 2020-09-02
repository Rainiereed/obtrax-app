import React from 'react';
import Modal from 'react-modal';
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
            <button className="buttonMenu" id="gridItem1">Gå till timer</button>
          </div>
          <div>
            <button className="buttonMenu" id="gridItem2">Jag vill registrera sympton</button>
          </div>
          <div>
            <button className="buttonMenu" id="gridItem3">Viktig information</button>
          </div>
          <div>
            <button className="buttonRing" id="gridItem4">Ring barnmorska</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Popup;
