import './AccountDropDown.css';
import Style from '../Style.css';
import { GiIsland } from 'react-icons/gi'
import { BiPlanet } from 'react-icons/bi'
import { RiAccountCircleLine } from 'react-icons/ri'
import { BsMap } from 'react-icons/bs'

function AccountDropDown(props) {

    return (
        <div className="dropdown">
          <button className="dropbtn"><p className={Style.text}>Profile</p></button>
          <div className="dropdown-content">
            <a href="/account"><RiAccountCircleLine /> Account</a>
            <a href="/planets"><BiPlanet /> Planets</a>
            <a href="/lands"><GiIsland /> Lands</a>
            <a href="/map"><BsMap /> Map</a>
          </div>
        </div>
      );
}



export default AccountDropDown;