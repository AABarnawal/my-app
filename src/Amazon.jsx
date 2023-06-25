import React from "react";
import ReactDOM from "react-dom/client";
import Sdata from "./Sdata";
import Card from "./Card";

const nrd = (val)=>{
    
        if(val.ott === "AMAZON"){
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
 

const Amazon = () =>{
    return(
        <div id="division" >
        {Sdata.map(nrd)}
       </div>
    )
}
export default Amazon;
