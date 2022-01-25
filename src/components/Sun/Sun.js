import React from 'react';
import Modal from 'react-modal';
import './Sun.css';
import CloseButton from '../ui/CloseButton/CloseButton.js';
import { useGetSun, BurnSun, Hash, Error } from './index.js';
import { useEthers } from "@usedapp/core";
import { useState, useEffect } from "react";
import { utils } from 'ethers';
import Loader from '../ui/Loader/Loader.js';


export default function Sun(props){

  const [modalIsOpen,setIsOpen] = React.useState(props.state);
  const [load,setLoad] = React.useState(false);
  const { account } = useEthers();
  const { state, send: burnSun } =
        BurnSun();
    var bnbValue

  var errorr
  var hash
  async function burn(){
        bnbValue = document.getElementById("bnb").value;
        setLoad(true);
        console.log(bnbValue)
        await burnSun({value: utils.parseEther(bnbValue.toString())})
        try {
            hash = Hash()
            console.log(hash)
            try{
                errorr = Error()
                if (errorr === '') {
                    console.log('if', errorr)
                }
                else {
                    console.log('else', errorr)
                    console.log('else', hash)
                    setLoad(false)
                }
            } catch(e){
                console.log('catch', e)
                setLoad(false)
            }
        } catch(e)
        {
            setLoad(false)
            console.log('error', e)
        }
    }

  var value = useGetSun(account)
  try{
    value = utils.formatEther(value.toString())
    var elem = document.getElementById("progressbar1");
    elem.style.width = (value * 100) + "%";
    } catch{}

  function afterOpenModal() {
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
          className='sunModalStyle'
          contentLabel="Example Modal"
          style={{
              overlay: {
                    backgroundColor: 'rgba(19,22,91, 0.75)'
                    }

          }}
        >
            <div className='sunClose'>
                <button onClick={closeModal} style={{backgroundColor: 'transparent', border: 'transparent'}}><CloseButton /></button>
            </div>
            <div className='sunModalContent'>
                <div className='sunImg'>
                    <img src={props.img} alt='' style={props.style}/>
                </div>
                <div className='sunModalInfo'>
                    <p style={{color: 'white', fontSize: '30px'}}>You need to burn 1 BNB in the Sun within a month, otherwise the MetaVerse will explode</p>
                    <div id="progressbar">
                        <div id='progressbar1'></div>
                    </div>
                    <p>{value ? value.toString() : <Loader />}</p>
                    {load
                     ?<Loader />
                     :<><input className='sunInput' id='bnb' />
                      <button className='sunBurn' onClick={burn}>Burn BNB</button></>
                    }

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