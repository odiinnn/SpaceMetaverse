import React from 'react';
import cl from './Loader.module.css';

var tekst = 'asd'

const Loader = (props) => {
    tekst = props.tekst

    return (
    <>
        <div className={cl.loader}>

        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p className={cl.text}>{tekst}</p>
        </div>

    </>
    )

}

export default Loader;