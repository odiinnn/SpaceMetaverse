import './InfoTable.css';
import BuyButton from '../ui/BuyButton/BuyButton.js'

function InfoTable(props) {
  return (
    <div className='modalInfo'>
        <div className='tableInfo'>
            <h2>{props.name}</h2>
            <div className='border'>
                <div className='rowMode'>
                    <p>Owner: </p>
                    <p>Alex</p>
                </div>
                <div className='rowMode'>
                    <p>Total residents: </p>
                    <p>150</p>
                </div>
                <div className='rowMode'>
                    <p>Other info</p>
                    <p>Tra Tra Tra</p>
                </div>
            </div>
            <div className='rowMode'>
                <BuyButton
                    text='Live here'
                    text1='Buy it'
                    id={props.id}
                    state={false}
                />

            </div>
        </div>
    </div>
   );
}

export default InfoTable;
