import React from "react";

const DisplayTime = (props) => {
    let hours = props.time[0];
    let minutes = props.time[1];
    let seconds = props.time[2];
    return <>{`${hours < 10 ? "0" + hours  : hours}h  : ${minutes < 10 ? "0" + minutes : minutes}m : ${seconds < 10 ? "0" + seconds : seconds}s`}</>
}


export default DisplayTime