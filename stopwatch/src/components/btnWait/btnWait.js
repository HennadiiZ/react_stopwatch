
import './btnWait.css'

const BtnWait = ({wait}) =>{
    return ( 
        <div className='BtnWait'>
            <button onDoubleClick={wait}>Wait</button>
        </div>
    )
 }
 export default BtnWait