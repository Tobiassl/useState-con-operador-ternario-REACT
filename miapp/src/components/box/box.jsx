import React from 'react';
import './box.css'

const Box = ({text}) => {
    //console.log(props)
    return(
        <div className='caja'>
            <h1>{text}</h1>
        </div>
    )
}

export { Box }