import React, { useState, useEffect } from 'react'
import './PlanetsPage.css';
import { GiRallyTheTroops } from 'react-icons/gi'
import { useEthers } from "@usedapp/core";
import { useWhiteListedUserBlue } from '../../contractsOfPlanets/BluePlanet/blueIndex.js'
import { useWhiteListedUserBrown } from '../../contractsOfPlanets/BrownPlanet/brownIndex.js'
import { useWhiteListedUserDarkBlue } from '../../contractsOfPlanets/DarkBluePlanet/darkBlueIndex.js'
import { useWhiteListedUserEarth } from '../../contractsOfPlanets/Earth/earthIndex.js'
import { useWhiteListedUserEarth2 } from '../../contractsOfPlanets/Earth2/earth2Index.js'
import { useWhiteListedUserPink } from '../../contractsOfPlanets/PinkPlanet/pinkIndex.js'
import { useWhiteListedUserRed } from '../../contractsOfPlanets/RedPlanet/redIndex.js'
import { useWhiteListedUserWhite } from '../../contractsOfPlanets/WhitePlanet/whiteIndex.js'


import PlanetsWindow from './windowComp.js'
import isOrNot from './utils.js'



function PlanetsPage(props) {

    const { account } = useEthers();

    const[planets, setPlanets] = useState(false)


    function addPlanets(){
        setPlanets(true)
    }
    const grid = [];
    const whiteListBlue = useWhiteListedUserBlue(account)
    grid.push(whiteListBlue);
    const whiteListBrown = useWhiteListedUserBrown(account)
    grid.push(whiteListBrown);
    const whiteListDarkBlue = useWhiteListedUserDarkBlue(account)
    grid.push(whiteListDarkBlue);
    const whiteListEarth = useWhiteListedUserEarth(account)
    grid.push(whiteListEarth);
    const whiteListEarth2 = useWhiteListedUserEarth2(account)
    grid.push(whiteListEarth2);
    const whiteListPink = useWhiteListedUserPink(account)
    grid.push(whiteListPink);
    const whiteListRed = useWhiteListedUserRed(account)
    grid.push(whiteListRed);
    const whiteListWhite = useWhiteListedUserWhite(account)
    grid.push(whiteListWhite);

    var open
    useEffect(() => {
        open = isOrNot(grid)
        setPlanets(open)
    },[grid])


    return (
        <div className='windowPlanet'>
            {planets
             ? <><p className='texta' style={{marginLeft: '5%', marginTop: '3%'}}>Your planets</p>
               <div className='row'>
                   <PlanetsWindow
                        planets={grid}
                    /></div></>
             : <>
                <p style={{color: 'white', fontSize: '40px'}}>You have not got any planets</p>
                <GiRallyTheTroops style={{fontSize: '50px', color: 'white'}}/>
               </>
            }

        </div>
      );
}





export default PlanetsPage;