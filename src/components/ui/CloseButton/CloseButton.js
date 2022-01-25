import './CloseButton.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'

const fontStyles = {color: '#318CE7', fontSize: '35px'};

function CloseButton() {
  return (
    <div>
      <button className='closeButton'>< AiOutlineCloseCircle style={fontStyles} /></button>
    </div>
  );
}

export default CloseButton;
