import React from "react";

function DropdownMenu(props) {   
    return(
      <ul 
        style={{
            left: props.styleLeft + "%", 
            top: props.styleTop + "%"
        }} className="dropdown-menu">
        <div className="crosshair"></div>
        <li onClick={props.menuClickFunc}>Red Hulk</li>
        <li onClick={props.menuClickFunc}>Vision</li>
        <li onClick={props.menuClickFunc}>Ironfist</li>
      </ul>
    )
}


export default DropdownMenu