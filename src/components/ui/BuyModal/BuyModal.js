import React from 'react'
import './BuyModal.css';
import Modal from 'react-modal';
import Loader from '../Loader/Loader.js';
import { BsCheckCircleFill } from 'react-icons/bs'

const fontStyles = {color: '#10C84E', fontSize: '200px', border: '2px solid white', borderRadius: '50%'};
var id
var load
var hash

function BuyModal(props) {
  const [modalIsOpen,setIsOpen] = React.useState(true);
  id = props.id
  load = props.state2
  hash = props.hash
  console.log('state', load)
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
          className='buyModalStyle'
          contentLabel="Example Modal"
          style={{
              overlay: {
                    backgroundColor: 'rgba(19,22,91, 0.75)'
                    }

          }}
        >

            <div className='modalBuyContent'>
                {props.state
                 ?<>
                    <p style={{fontSize: '45px', color: '#9658EB'}}>You can see the free land by clicking on this button</p>
                    <a href={'/planet/'+id}>Check it</a>
                  </>
                 :<>
                    {load
                     ?<><Loader /></>
                     :<><BsCheckCircleFill style={fontStyles} />
                        <p style={{fontSize: '20px', color: '#318CE7'}}>You can check yor planet here:</p>
                        <a href={'/planet/'+id}>Go to my planet</a>
                        <a href={'https://testnet.bscscan.com/tx/'+hash}>Transaction Hash: {hash &&
                              `${hash.slice(0, 6)}...${hash.slice(
                                hash.length - 6,
                                hash.length
                          )}`}</a></>
                    }

                  </>

                }
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


export default BuyModal;
