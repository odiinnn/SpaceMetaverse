import './Nav.css';
import Avatar from '../Static/Avatar.jpg';
import Style from '../Style.css'
import AccountDropDown from '../AccountDropDown/AccountDropDown.js'
import { useEthers } from "@usedapp/core";

function Nav() {

    const { account } = useEthers()

    return (
    <div className='fixed-top-nav'>
        <div className='navigationWindow'>
            <p className={Style.text}>Space Life Meta</p>
            <div className='account'>
                <div className='accountImage'>
                    <img src={Avatar} alt='' />
                </div>
                {account
                 ? <AccountDropDown />
                 : <></>
                }

            </div>
        </div>
    </div>
    );
}

export default Nav;
