import React, { useEffect, useState } from 'react'
import { useEthers } from "@usedapp/core";
import './Planets.css';
import { BsCheckCircleFill } from 'react-icons/bs'
import Pink from '../Static/Background/Pink.jpg'
import { Background } from './utils.js'
import { useParams } from "react-router-dom"
import { BuyLands, Hash, Error } from '../../utils/index.js'
import { utils } from 'ethers';

var url = '../Static/Background/RadSand.jpg'
var hash
var errorr
var state2


function Block(props){
    var idLand = props.id
    var idPlanet = props.idPlanet
    const { account } = useEthers();
    const { state: too, amount, id, send: BuyLand } =
        BuyLands("mint", idPlanet);

    const [isMinting, setIsMinting] = useState(false)
    var value = 0.05
    async function buyLand(){
        setIsMinting(true);
        let state = true
        await BuyLand(account, 1, idLand, {value: utils.parseEther(value.toString())})
        try {
            hash = Hash()
            console.log(hash)
            try{
                errorr = Error()
                if (errorr === '') {
                    console.log('if', errorr)
                    state2 = false
                }
                else {
                    console.log('else', errorr)
                    state2 = true
                    setIsMinting(false)
                }
            } catch(e){
                console.log('catch', e)
            }
        } catch(e)
        {
            console.log('error', e)
        }
    }


    return(
        <div className='blockPlanet' style={{borderColor: `${props.border}`}}>
            <button className='buttonForBuy' onClick={buyLand}>
                <p style={{color: props.text, fontSize: '30px', marginBottom: '-5%'}}>Buy</p>
                <p style={{color: props.text, fontSize: '30px', marginTop: '-5%'}}>{props.id}</p>
            </button>
        </div>
    )
}

function Planets(props) {

    const { id } = useParams()
    const { resId, border, text } = Background(id)

    const grid = [];
    for (let row = 1; row < 73; row++) {
        grid.push(row.value);
    }

    return (
        <div className='planetMapWindow' style={{backgroundImage: `url(${resId})`}}>
            <div className='planetMap'>
                    {grid.map((node, nodeId) => {
                        return (
                            <Block
                                id={nodeId}
                                border={border}
                                text={text}
                                idPlanet={id}
                            ></Block>
                          );
                      })}
            </div>
        </div>
      );
}



export default Planets;
