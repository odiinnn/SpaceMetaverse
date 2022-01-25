import React from 'react';
import Modal from 'react-modal';
import './PlanetModal.css';
import CloseButton from '../ui/CloseButton/CloseButton.js';
import InfoTable from '../InfoTable/InfoTable.js';


function PlanetModal(props){
  const [modalIsOpen,setIsOpen] = React.useState(props.state);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    <Content />

  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
          className='planetModalStyle'
          contentLabel="Example Modal"
          style={{
              overlay: {
                    backgroundColor: 'rgba(19,22,91, 0.75)'
                    }

          }}
        >
            <div className='close'>
                <button onClick={closeModal} style={{backgroundColor: 'transparent', border: 'transparent', color: '#318CE7'}}><CloseButton /></button>
            </div>
            <div className='modalContent'>
                <div className='planetImg'>
                    <img src={props.img} alt='' style={props.style}/>
                </div>
                <div className=''>
                    <InfoTable
                        name={props.name}
                        id={props.id}
                    />
                </div>
            </div>

        </Modal>
      </div>
    );
}


function Content() {
    return(
        <div className=''>agfhkjgh</div>

    );

}

export default PlanetModal;