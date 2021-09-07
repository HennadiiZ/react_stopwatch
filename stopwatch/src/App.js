import React, {useState} from 'react';
import './App.css';
import Main from './components/Main/Main'
import BtnStart from './components/btnStart/btnStart'
import BtnWait from './components/btnWait/btnWait'
import BtnReset from './components/btnReset/btnReset'


function App() {

const [time, setTime] = useState({h:0, m:0,  s:0});
const [interv, setInterv] = useState();
const [status, setStatus] = useState(0);

const start = () =>{
  run();
  // setInterval(run,1000);
  setStatus(1)
  setInterv(setInterval(run,1000));
}
let updatedH = time.h;
let updatedM = time.m;
let updatedS = time.s;
const run = () =>{
  if(updatedS === 60){
    updatedM++;
    updatedS = 0;
  }
  if(updatedM === 60){ 
    updatedH++;
    updatedM = 0;
  }
updatedS++;
return setTime({h:updatedH, m:updatedM,  s:updatedS})
}
const wait = () =>{
  clearInterval(interv);
  setStatus(2);
}

const stopped = () =>{
  clearInterval(interv);
  setStatus(2);
}

const stopReset = () =>{
  clearInterval(interv);
  setStatus(0);
  setTime({h:0, m:0,  s:0})
}

const reset = () =>{
  clearInterval(interv);
  setStatus(0);
  setTime({h:0, m:0,  s:0})
}

// const resume = () =>{
// start();
// }

  return (
    <div className="App">
     <Main time={time}/>

     <BtnStart 
     start={start}   
    //  resume={resume} 
     stopped={stopped} stopReset={stopReset}/>
     <BtnWait wait={wait}/>
     <BtnReset reset={reset} /> 

    </div>
  );
}
export default App;

