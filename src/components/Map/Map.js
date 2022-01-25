import { useEffect, useState } from "react";
import './Map.css';
import Style from '../Style.css';
import PlanetModal from '../PlanetModal/PlanetModal.js'
import Sun from '../Sun/Sun.js'
import PlanetRed from '../Static/PlanetRed.png'
import PlanetBlue from '../Static/PlanetBlue.png'
import PlanetDarkBlue from '../Static/PlanetDarkBlue.png'
import PlanetEarth from '../Static/PlanetEarth.png'
import PlanetEarth2 from '../Static/PlanetEarth2.png'
import PlanetBrown from '../Static/PlanetBrown.png'
import PlanetPink from '../Static/PlanetPink.png'
import PlanetWhite from '../Static/PlanetWhite.png'
import SunImg from '../Static/Sun.png'

import { PlanetRedStyle,
         PlanetBlueStyle,
         PlanetDarkBlueStyle,
         PlanetEarthStyle,
         PlanetEarth2Style,
         PlanetBrownStyle,
         PlanetPinkStyle,
         PlanetWhiteStyle,
         SunStyle,
         PlanetRedStyleM,
         PlanetBlueStyleM,
         PlanetDarkBlueStyleM,
         PlanetEarthStyleM,
         PlanetEarth2StyleM,
         PlanetBrownStyleM,
         PlanetPinkStyleM,
         PlanetWhiteStyleM,
         SunStyleM} from '../Static/PlanetStyles.js'

var imageId = ''

function Block(props){

    const [imageTrue, setImageTrue] = useState(false)
    const [element, setElement] = useState('')
    const [planetStyle, setPlanetStyle] = useState('')
    const [planetStyleM, setPlanetStyleM] = useState('')
    const [planetInfo, setPlanetInfo] = useState(false)
    const [sun, setSun] = useState(false)
    const [sunOpen, setSunOpen] = useState(false)
    const [name, setName] = useState('')
    const [id, setId] = useState(0)

    useEffect(() => {
        initImage()
    },[])

    async function planetModalOpen(){
        if ((sunOpen == true)){
            await setSun(false)
            await setSun(true)
        } else{
            await setPlanetInfo(false)
            await setPlanetInfo(true)
        }
    }

    async function initImage(){
        setElement(false)
        if ((props.id == 364)) {
            setElement(PlanetRed)
            setPlanetStyle(PlanetRedStyle)
            setPlanetStyleM(PlanetRedStyleM)
            setName('Red Planet')
            setId(1)
            await setImageTrue(true)
        }else if ((props.id == 535)) {
            setElement(PlanetBlue)
            setPlanetStyle(PlanetBlueStyle)
            setPlanetStyleM(PlanetBlueStyleM)
            setName('Blue Planet')
            setId(2)
            await setImageTrue(true)
        }else if ((props.id == 136)) {
            setElement(PlanetEarth)
            setPlanetStyle(PlanetEarthStyle)
            setPlanetStyleM(PlanetEarthStyleM)
            setName('Earth')
            setId(3)
            await setImageTrue(true)
        }else if ((props.id == 265)) {
            setElement(PlanetDarkBlue)
            setPlanetStyle(PlanetDarkBlueStyle)
            setPlanetStyleM(PlanetDarkBlueStyleM)
            setName('Dark Blue Planet')
            setId(4)
            await setImageTrue(true)
        }else if ((props.id == 485)) {
            setElement(PlanetBrown)
            setPlanetStyle(PlanetBrownStyle)
            setPlanetStyleM(PlanetBrownStyleM)
            setName('Brown Planet')
            setId(5)
            await setImageTrue(true)
        }else if ((props.id == 128)) {
            setElement(PlanetPink)
            setPlanetStyle(PlanetPinkStyle)
            setPlanetStyleM(PlanetPinkStyleM)
            setName('Pink Planet')
            setId(6)
            await setImageTrue(true)
        }else if ((props.id == 430)) {
            setElement(PlanetEarth2)
            setPlanetStyle(PlanetEarth2Style)
            setPlanetStyleM(PlanetEarth2StyleM)
            setName('Earth №2 Planet')
            setId(7)
            await setImageTrue(true)
        }else if ((props.id == 347)) {
            setElement(SunImg)
            setPlanetStyle(SunStyle)
            setPlanetStyleM(SunStyleM)
            setName('Sun')
            setSunOpen(true)
            setId(9)
            await setImageTrue(true)
        }else if ((props.id == 83)) {
            setElement(PlanetWhite)
            setPlanetStyle(PlanetWhiteStyle)
            setPlanetStyleM(PlanetWhiteStyleM)
            setName('White Planet')
            setId(8)
            await setImageTrue(true)
        } else{
            setElement('')
            await setImageTrue(false)
        }
    }

    return(
        <div className='block'>
            {imageTrue
             ? <button type="button" className='planetButtonStyle' style={planetStyle} onClick={planetModalOpen}>
                    <img src={element} style={planetStyle} alt='' className='imgScale' />
               </button>
             : <p style={{color: 'white'}}></p>
            }
            {planetInfo
             ? <>
                 <PlanetModal
                    img={element}
                    state={true}
                    style={planetStyleM}
                    name={name}
                    id={id}
                    />

                </>
             : <></>
            }
            {sun
             ? <>
                 <Sun
                    img={element}
                    state={true}
                    style={planetStyleM}
                    name={name}
                    id={id}
                 />

                </>
             : <></>
            }
        </div>
    )
}


var row


function Map() {


    const grid = [];
    for (let row = 0; row < 666; row++) {
        grid.push(row.value);

    }
  return (
  <>
    <div className='mapWindow'>
        <div className='map'>
                {grid.map((node, nodeId) => {
                imageId = nodeId
                    return (
                        <Block
                            id={nodeId}
                        ></Block>
                      );
                  })}
        </div>
    </div>


    </>
  );
}

export default Map;
