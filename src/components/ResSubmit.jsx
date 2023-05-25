import React, { useState } from "react";
import DisplayTime from "./DisplayTime";

const ResSubmit = (props) => { 
    return(
        <div className="res-submit">
            <h1>{<DisplayTime time={props.time}/>}</h1>
            <input onChange={props.changeName} type="text" />           
            <button onClick={props.submitName}>Submit</button>
        </div>
    )
}


export default ResSubmit