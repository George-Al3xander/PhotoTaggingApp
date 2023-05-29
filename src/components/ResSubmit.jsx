import React from "react";
import { Link } from "react-router-dom";

const ResSubmit = (props) => { 
    return(
        <>
        <header><Link to="/"><h1>Find Me</h1></Link> </header>
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