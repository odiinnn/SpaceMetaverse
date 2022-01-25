import React, { useState, useEffect } from 'react'
import './Lands.css';
import { useEthers } from "@usedapp/core";
import { RiCharacterRecognitionLine } from 'react-icons/ri'
import { GiRallyTheTroops } from 'react-icons/gi'
import { useGetBlue } from '../../contractsOfPlanets/BluePlanet/blueIndex.js'
import { useGetBrown } from '../../contractsOfPlanets/BrownPlanet/brownIndex.js'
import { useGetDarkBlue } from '../../contractsOfPlanets/DarkBluePlanet/darkBlueIndex.js'
import { useGetEarth } from '../../contractsOfPlanets/Earth/earthIndex.js'
import { useGetEarth2 } from '../../contractsOfPlanets/Earth2/earth2Index.js'
import { useGetPink } from '../../contractsOfPlanets/PinkPlanet/pinkIndex.js'
import { useGetRed } from '../../contractsOfPlanets/RedPlanet/redIndex.js'
import { useGetWhite } from '../../contractsOfPlanets/WhitePlanet/whiteIndex.js'
import GetLands from './LandsPage.js'
import isOrNot from './utils.js'



function Lands(props) {

    const[lands, setLands] = useState(false)
    const[blue, setBlue] = useState(false)
    const[brown, setBrown] = useState(false)
    const[darkBlue, setDarkBlue] = useState(false)
    const[earth, setEarth] = useState(false)
    const[earth2, setEarth2] = useState(false)
    const[pink, setPink] = useState(false)
    const[red, setRed] = useState(false)
    const[white, setWhite] = useState(false)
    const { account } = useEthers();

    const grid = []
    const balanceBlue = useGetBlue(account)
    const balanceBrown = useGetBrown(account)
    const balanceDarkBlue = useGetDarkBlue(account)
    const balanceEarth = useGetEarth(account)
    const balanceEarth2 = useGetEarth2(account)
    const balancePink = useGetPink(account)
    const balanceRed = useGetRed(account)
    const balanceWhite = useGetWhite(account)
    try{
        grid.push(balanceBlue.toNumber());
        grid.push(balanceBrown.toNumber());
        grid.push(balanceDarkBlue.toNumber());
        grid.push(balanceEarth.toNumber());
        grid.push(balanceEarth2.toNumber());
        grid.push(balancePink.toNumber());
        grid.push(balanceRed.toNumber());
        grid.push(balanceWhite.toNumber());
        } catch{}

    console.log(grid)
    var open
    useEffect(() => {
        open = isOrNot(grid)
        setLands(open)
    },[grid])

    return (
        <div className='windowLand'>
            {lands
             ? <><p className='texta' style={{marginLeft: '5%', marginTop: '3%'}}>Your Lands</p>
                    <GetLands
                        lands={grid}
                    />


               </>
             : <>
                <p className='texta'>You have not got any lands</p>
                <GiRallyTheTroops style={{fontSize: '50px', color: 'white'}}/>
               </>
            }

        </div>
      );
}



export default Lands;