import React, { useState } from "react";
import DisplayTime from "./DisplayTime";

const ResSubmit = (props) => { 
    return(
        <>
        <header><h1>Find me</h1></header>
        <div className="res-submit">           
            <div className="submit-menu">
            <input required placeholder="Enter your name" onChange={props.changeName} type="text" />           
            <button onClick={props.submitInfo}>Submit</button>
            </div>
        </div>
        </>
    )
}


export default ResSubmit