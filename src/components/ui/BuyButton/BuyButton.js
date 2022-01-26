import React, { useState } from 'react'
import './BuyButton.css';
import { GrMoney } from 'react-icons/gr'
import BuyModal from '../BuyModal/BuyModal.js'
import { utils } from 'ethers';
import { BuyPlanets, Error, Hash } from '../../../utils/index.js'
import { useEthers } from "@usedapp/core";


const fontStyles = {color: 'white', fontSize: '35px'};
var errorr
var hash


function BuyButton(props) {


        const [landsModel, setLandsModel] = useState(false)
        const [modalIsOpen,setIsOpen] = React.useState(false);
        const [load, setLoad] = React.useState(false)

        var idPlanet = props.id
        const { account } = useEthers();
        const { state: acc, send: BuyPlanet } =
            BuyPlanets("whitelistUser", idPlanet);

        const value = 0.1
        async function buyLand(){
            await setLandsModel(false)
            await setIsOpen(true)
            setLoad(true)
            await BuyPlanet(account, {value: utils.parseEther(value.toString())})
            try {
                hash = Hash()
                console.log(hash)
                try{
                    errorr = Error()
                    if (errorr === '') {
                        console.log('if', errorr)
                        setLoad(false)
                        console.log(hash)
                    }
                    else {
                        console.log('else', errorr)
                        setIsOpen(false)
                        setLoad(false)
                    }
                } catch(e){
                    console.log('catch', e)
                    setIsOpen(false)
                }
            } catch(e)
            {
                setIsOpen(false)
                console.log('error', e)
            }
        }



        async function openBuyModal(){
            await setLandsModel(false)
            await setIsOpen(false)
            await setIsOpen(true)
            await setLandsModel(true)
        }





      return (
      <>
        <button className='buttonDiv' onClick={openBuyModal}>
            <p style={{color: '#9658EB'}}> {props.text} </p>
            <div className='buyButton'><GrMoney style={fontStyles} /></div>
        </button>
        <button className='buttonDiv' onClick={buyLand}>
            <p style={{color: '#9658EB'}}> {props.text1} </p>
            <div className='buyButton'><GrMoney style={fontStyles} /></div>
        </button>
        {modalIsOpen
         ?<BuyModal
            state={landsModel}
            id={props.id}
            state2={load}
            hash={hash}
          />
         :<></>
        }
      </>
      );
}

export default BuyButton;
