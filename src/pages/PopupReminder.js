import React from 'react';
import Modal from 'react-modal';
import "../pages/PopupReminder.scss";
import cross from '../assets/cross.png';
import logo from '../assets/logo.png';

Modal.setAppElement('#root')
function Popup() {
var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'black';
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
        onAfterOpen={afterOpenModal}
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
          <div className="crossbutton">
            <img src={cross} alt="crossicon" onClick={closeModal} />
          </div>
          <div>
            <h1>Det är dags!</h1>
          </div>
          <div>
            <p className="text" ref={_subtitle => (subtitle = _subtitle)}>Baserat på dina värkar och sammandragningar kommer du nu att bli kopplad till en barnmorska i ditt sjukhus med en sängplats.</p>
          </div>
          <div>
            <button className="buttonRing">Ring barnmorska</button>
          </div>
        </Modal>
    </div>

  );
}
export default Popup;
