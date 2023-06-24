import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";
import Sdata from "./Sdata";
ReactDOM.render(
    <>
       <h1 id="heading">top 5 netflix series</h1>
       <div id="division" >
            <Card
            lin={Sdata[0].imge}
            title={Sdata[0].title}
            net={Sdata[0].lnk}
            />
            <Card
            lin={Sdata[1].imge}
            title={Sdata[1].title}
            net={Sdata[1].lnk}
            />
            <Card
            lin={Sdata[2].imge}
            title={Sdata[2].title}
            net={Sdata[2].lnk}
            />
            <Card
            lin={Sdata[3].imge}
            title={Sdata[3].title}
            net={Sdata[3].lnk}
            />
            <Card
            lin={Sdata[4].imge}
            title={Sdata[5].title}
            net={Sdata[5].lnk}
            />
       </div>
    </>,
    document.getElementById('root')
)


//greeting project
// const heading = {
//     color: '#e9d8e4',
//     backgroundColor: '#343f71',
//     padding: '50px 10px',
//     margin: '30% 30px',
//     textAlign: 'center',
//     textTransform: 'capitalize',
//     borderRadius: '20px'
// };

// let currentDate = new Date();
// currentDate = currentDate.getHours();
// var text = ""
// if( currentDate>=0 && currentDate<12 ){text = "good morning"}
// else if( currentDate>=12 && currentDate<15 ){text = "good Afternoon"}
// else if( currentDate>=15 && currentDate<19 ){text = "good Evening"}
// else{text = "goodnight"}

// ReactDOM.render(
//     <>
//         <h1 style={heading} >
//             hello sir, 
//             <span style={{color:'#f34c19', backgroundColor: '#343f71',}} >{text}</span> 
//         </h1> 
//     </>,
//     document.getElementById('root')
// )


// const name = "Ankit Kumar"
// const img1 = "https://picsum.photos/200/300"
// const img2 = "https://picsum.photos/250/300"
// const img3 = "https://picsum.photos/300/300"

// ReactDOM.render(
//     <>
//     <h1 className="heading"  contentEditable="true" >hello {name}</h1>
//     <div className="image_div">
//         <img src={img1} alt="random image" />
//         <img src={img2} alt="random image" />
//         <img src={img3} alt="random image" />
//     </div>
//     </>,
//     document.getElementById('root')
// )
