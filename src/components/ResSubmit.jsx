import React, { useState } from "react";
import DisplayTime from "./DisplayTime";
import checkName  from "./Validation";

const ResSubmit = (props) => {

    const[name,setName] = useState("")
    function showName(e) {
        setName(e.target.value);
    }

    function submitName() {
        try {
            checkName(name);
        } catch (error) {
            console.log("Bitch!")
        }
    }

    return(
        <div className="res-submit">
            <h1>{<DisplayTime time={props.time}/>}</h1>
            <input onChange={showName} type="text" />           
            <button onClick={submitName}>Submit</button>
        </div>
    )
}


export default ResSubmit