import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const ncard = (val)=>{
    return(  <Card
     key={val.id}
     ott={val.ott}
     lin={val.imge}
     title={val.title}
     net={val.lnk}
     />
     
     )
 }

 const All =()=>{
    return(
        Sdata.map(ncard)
    )
 }
 export default All;
