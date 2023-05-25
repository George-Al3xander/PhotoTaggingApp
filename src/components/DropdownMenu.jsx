import React from "react";

function DropdownMenu(props) {   
    return(

        <div style={{
            left: props.styleLeft + "px", 
            top: props.styleTop + "px",            
        }}  className="dropdown-menu">
        {/* <div className="crosshair"></div> */}
        <ul>
        <li onClick={props.menuClickFunc}>Red Hulk</li>
        <li onClick={props.menuClickFunc}>Vision</li>
        <li onClick={props.menuClickFunc}>Ironfist</li>
        </ul>
        </div>
    )
}


export default DropdownMenu