import React from "react";

function DropdownMenu(props) {   
    return(
        <div style={{
           // left: props.styleLeft + "px", 
           // top: props.styleTop + "px", 
           transform : `translate(${props.styleLeft}px, ${props.styleTop}px)`           
        }}  className="dropdown-menu">
        <div className="crosshair"></div>
        <ul>
        {props.array.includes("red_hulk") == false ? <li onClick={props.menuClickFunc}>Red Hulk</li> : <li style={{opacity: ".7", cursor: "no-drop", backgroundColor: "green"}}>Red Hulk</li>}
        {props.array.includes("vision") == false ? <li onClick={props.menuClickFunc}>Vision</li> : <li style={{opacity: ".7", cursor: "no-drop", backgroundColor: "green"}}>Vision</li>}
        {props.array.includes("ironfist") == false ? <li onClick={props.menuClickFunc}>Ironfist</li> : <li style={{opacity: ".7", cursor: "no-drop", backgroundColor: "green"}}>Ironfist</li>}
        </ul>
        </div>
    )
}


export default DropdownMenu