import React from 'react';
import './btnStart.css'

const BtnStart = ({start,stopped, stopReset }) =>{
return ( 
<div className='BtnStart'>
    <button  onClick={start}>Start</button> 
    <button onClick={stopped} onDoubleClick={stopReset}>Stop</button>
</div>
)
 }
 export default BtnStart







