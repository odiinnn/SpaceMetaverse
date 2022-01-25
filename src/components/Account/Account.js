import './Account.css';
import { RiCharacterRecognitionLine } from 'react-icons/ri'
import { useEthers } from "@usedapp/core";


function Account(props) {
    const { account } = useEthers();
    return (
        <div className='accountPage'>
            <div className='content'>
                <p style={{textDecoration: 'underline'}}>Your account: {account &&
                              `${account.slice(0, 6)}...${account.slice(
                                account.length - 6,
                                account.length
                          )}`}</p>
                <p style={{textDecoration: 'underline'}}>Your character:</p>
                <div className='character'>
                    <RiCharacterRecognitionLine style={{fontSize: '130px', color: '#20B2AA'}}/>
                </div>
            </div>
        </div>
      );
}



export default Account;