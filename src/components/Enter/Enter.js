import { useNavigate } from 'react-router-dom'
import './Enter.css';
import { useEthers } from "@usedapp/core";


function Enter(props) {
    const navigate = useNavigate()
    const { activateBrowserWallet, account } = useEthers();
    function handleConnectWallet() {
        activateBrowserWallet();
    }
    function nav(){
        navigate('/map')
    }
    return (
        <div style={{backgroundColor: '#111', width: '100vw', height: '89.9vh', margin: '0'}} className='enterWindow'>
            {account
             ? <button className='enterButton' onClick={nav} type='submit'>Open Map</button>
             : <button className='enterButton' onClick={handleConnectWallet} type='submit'>Connect with MetaMask</button>
            }
        </div>
      );
}



export default Enter;