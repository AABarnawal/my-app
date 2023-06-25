import React from "react";
import ReactDOM from "react-dom/client";
import Sdata from "./Sdata";
import Card from "./Card";

const nard = (val)=>{
    
        if(val.ott === "NETFLIX"){
            return(  
            <Card
            key={val.id}
            ott={val.ott}
            lin={val.imge}
            title={val.title}
            net={val.lnk}
            
        />)
    }else{
        
    }
 }
 

const Netflix = () =>{
    return(
        <div id="division" >
        {Sdata.map(nard)}
       </div>
    )
}
export default Netflix;
