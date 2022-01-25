import Blue from '../Static/Background/Blue.jpg'
import Brown from '../Static/Background/Brown.jpg'
import DarkBlue from '../Static/Background/DarkBlue.jpg'
import Earth from '../Static/Background/Earth.jpg'
import Earth2 from '../Static/Background/Earth2.jpg'
import Pink from '../Static/Background/Pink.jpg'
import RadSand from '../Static/Background/RadSand.jpg'
import White from '../Static/Background/White.jpg'
import './Lands.css'

export default function GetLands(props){
    var lands = props.lands
    var number = 0
    var land = ''
    var name = ''

    return(
        <div className='start'>

            {lands.map((node, nodeId) => {
                    if((node != 0)){
                        if ((nodeId == 0)) {
                            land = RadSand
                            name = 'Red Planet'
                            number = node
                        } else if ((nodeId == 1)){
                            land = Blue
                            name = 'Blue Planet'
                            number = node
                        }else if ((nodeId == 2)){
                            land = Earth
                            name = 'Earth'
                            number = node
                        }else if ((nodeId == 3)){
                            land = DarkBlue
                            name = 'Dark Blue Planet'
                            number = node
                        }else if ((nodeId == 4)){
                            land = Brown
                            name = 'Brown Planet'
                            number = node
                        }else if ((nodeId == 5)){
                            land = Pink
                            name = 'Pink Planet'
                            number = node
                        }else if ((nodeId == 6)){
                            land = Earth2
                            name = 'Earth №2'
                            number = node
                        }else if ((nodeId == 7)){
                            land = White
                            name = 'White Planet'
                            number = node
                        }
                            return (
                                    <>
                                    <div className='landsPageStyle'>
                                        <p className='texta'>{name}</p>
                                        <p style={{color: 'white', fontSize: '30px'}}>Number of Lands {number}</p>
                                            <img src={land} alt='' style={{padding: '2%',
                                                                        width: '10vh',
                                                                        height: '10vh',
                                                                        paddingBottom: '2%',
                                                                        border: '1px solid white'}}>
                                            </img>

                                    </div>
                                    </>
                              );
                              }
                          })}
        </div>
    );
}