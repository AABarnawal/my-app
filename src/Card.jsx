import React from "react";
import "./index.css";

function Card (props){
   return <div id="card_wrap">
        <div id="card" >
        <img src={props.lin} alt={props.title} />
        <p>NETFLIX original series</p>
        <h2>{props.title}</h2>
        <a href={props.net} ><button>WATCH NOW</button></a>
        </div>
    </div>
}

export default Card;