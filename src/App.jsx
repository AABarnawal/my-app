import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Amazon from "./Amazon";
import Netflix from "./Netflix";
import All from "./ALL";
import { useState } from 'react';

function App() {
    const [flag, setflag]= useState(1);


const ShoW = ()=>{
    if(flag === 2){
        return <Netflix />
      }else if(flag === 3){
        return <Amazon />
      }
      else{
          return <All /> 
      }
}
    return(
        <>
       <h1 id="heading">top web series</h1>
       <div style={{display:'flex'}}>
        <button onClick={() => setflag(1)}>All</button>
        <button onClick={() => setflag(2)}>NETFLIX</button>
        <button onClick={() => setflag(3)}>AMAZON</button>
       </div>
       <div id="division" >
        <ShoW />
        
       </div>
    </>
    )
    
}
export default App;
