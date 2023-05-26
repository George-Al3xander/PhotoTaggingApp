import React, { useState } from "react";

const ResSubmit = (props) => { 
    return(
        <>
        <header><h1>Find me</h1></header>
        <div className="res-submit block-main">           
            <div className="submit-menu">
            <input required placeholder="Enter your name" onChange={props.changeName} type="text" />   
            {props.validStatus == true ? null : <p className="error">{props.errorText}</p>}        
            <button onClick={props.submitInfo}>Submit</button>
            </div>
        </div>
        </>
    )
}


export default ResSubmit