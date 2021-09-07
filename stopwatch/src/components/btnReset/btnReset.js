
import './btnReset.css'
const BtnReset = ({reset}) =>{
    return ( 
        <div className='BtnReset'>
                <button type='button' onClick={reset}>Reset</button>
        </div>
    )
 }
 export default BtnReset