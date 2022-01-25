import Blue from '../Static/Background/Blue.jpg'
import Brown from '../Static/Background/Brown.jpg'
import DarkBlue from '../Static/Background/DarkBlue.jpg'
import Earth from '../Static/Background/Earth.jpg'
import Earth2 from '../Static/Background/Earth2.jpg'
import Pink from '../Static/Background/Pink.jpg'
import RadSand from '../Static/Background/RadSand.jpg'
import White from '../Static/Background/White.jpg'
import './PlanetsPage.css'
import { useEthers } from "@usedapp/core";
import { useGetPlanetValue, Withdraw } from '../../utils/index.js'
import { utils } from 'ethers';
import { useEffect, useState } from 'react'
import Loader from '../ui/Loader/Loader.js'



export default function PlanetsWindow(props){

    const { account } = useEthers()

    const [load, setLoad] = useState(false)
    var asd = useGetPlanetValue(1, account)
    var asd1 = useGetPlanetValue(2, account)
    var asd2 = useGetPlanetValue(3, account)
    var asd3 = useGetPlanetValue(4, account)
    var asd4 = useGetPlanetValue(5, account)
    var asd5 = useGetPlanetValue(6, account)
    var asd6 = useGetPlanetValue(7, account)
    var asd7 = useGetPlanetValue(8, account)

    function addValue(){
        var grid = [];
        try{
            asd = utils.formatEther(asd.toString())
            grid.push(asd);
            asd1 = utils.formatEther(asd1.toString())
            grid.push(asd1);
            asd2 = utils.formatEther(asd2.toString())
            grid.push(asd2);
            asd3 = utils.formatEther(asd3.toString())
            grid.push(asd3);
            asd4 = utils.formatEther(asd4.toString())
            grid.push(asd4);
            asd5 = utils.formatEther(asd5.toString())
            grid.push(asd5);
            asd6 = utils.formatEther(asd6.toString())
            grid.push(asd6);
            asd7 = utils.formatEther(asd7.toString())
            grid.push(asd7);
            setLoad(false)

        } catch(e){
            setLoad(true)
            console.log(e)
        }
        return grid
    }

    var values = []
    const [ grid, setGrid ] = useState(values)
    useEffect(() => {
        values = addValue()
        console.log('values', values)
        setGrid(values)
    },[asd])


    console.log(grid)

    var value
    const planets = props.planets
    var pl = ''
    var name=''




return(
        <>
            {planets.map((node, nodeId) => {
                    if((node == true)){
                        if ((nodeId == 0)) {
                            pl = RadSand
                            name = 'Red Planet'
                            value = grid[nodeId]

                        } else if ((nodeId == 1)){
                            pl = Blue
                            name = 'Blue Planet'
                            value = grid[nodeId]

                        }else if ((nodeId == 2)){
                            pl = Earth
                            name = 'Earth'
                            value = grid[nodeId]

                        }else if ((nodeId == 3)){
                            pl = DarkBlue
                            name = 'Dark Blue Planet'
                            value = grid[nodeId]

                        }else if ((nodeId == 4)){
                            pl = Brown
                            name = 'Brown Planet'
                            value = grid[nodeId]

                        }else if ((nodeId == 5)){
                            pl = Pink
                            name = 'Pink Planet'
                            value = grid[nodeId]

                        }else if ((nodeId == 6)){
                            pl = Earth2
                            name = 'Earth №2'
                            value = grid[nodeId]

                        }else if ((nodeId == 7)){
                            pl = White
                            name = 'White Planet'
                            value = grid[nodeId]

                        }
                            return (
                                    <div className='cardStyle'>
                                        <p style={{color: 'white', fontSize: '40px'}}>{name}</p>
                                        <img src={pl} alt='' style={{
                                        width: '20vh', height: '20vh',
                                        border: '1px solid white', marginTop: '-20%'}}></img>
                                        {load
                                         ?<Loader />
                                         : <><p style={{color: 'white', fontSize: '20px'}}>{value ? value : value} BNB</p>
                                            <Button
                                                id={nodeId}
                                            /></>
                                        }

                                    </div>
                              );
                              }
                          })}
        </>
    );

}

function Button(props){

    const [disabled, setDisabled] = useState(false)
    var count = 0
    if((props.id == 0)) count = 1
    else if((props.id == 1)) count = 2
    else if((props.id == 2)) count = 3
    else if((props.id == 3)) count = 4
    else if((props.id == 4)) count = 5
    else if((props.id == 5)) count = 6
    else if((props.id == 6)) count = 7
    else if((props.id == 7)) count = 9

    const { state, send: withDraw } =
                Withdraw("withdraw", count);
        async function withdraw(){
            setDisabled(true)
            await withDraw()
            setDisabled(false)
        }


    return(
        <>
            {disabled
             ? <Loader />
             : <button className='withdrawButton' onClick={withdraw} disabled={disabled}>Withdraw</button>
            }
        </>
    );

}