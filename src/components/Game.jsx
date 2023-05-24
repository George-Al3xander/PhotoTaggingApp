import background1 from "../assets/pic.jpg"
import hulk from "../assets/hero_1.png"
import vision from "../assets/hero_2.png"
import ironfist from "../assets/hero_3.png"
import DropdownMenu from './DropdownMenu.jsx'


import React from "react"

const Game = (props) => {
    let hours = props.hours;
    let minutes = props.minutes;
    let seconds = props.minutes;


    let coordX = props.coordX;
    let coordY = props.coordY;

    let heroesId = props.heroesId;
    
    return(
    <div className='test'>    
      <nav><p>X: {coordX} ; 
      Time: {`${hours < 10 ? "0" + hours + "h" : hours} : ${minutes < 10 ? "0" + minutes + "m" : minutes} : ${seconds < 10 ? "0" + seconds + "s" : seconds}`}</p>
      <button onClick={props.startTimer} >Start</button>
      <button onClick={props.stopTimer} > Stop</button>
     </nav>
    
      <div style={{display: props.gameDisplay}} onClick={props.handleClick} className="divGame" >
      {props.menuStatus == true ?  <DropdownMenu menuClickFunc={props.menuClick} styleLeft={coordX} styleTop={coordY} />  : null} 
        <img  className="background-image" src={background1} alt="" />
        <img id={heroesId[0]} className="hero" src={hulk} alt="" />
        <img id={heroesId[1]}  className="hero" src={vision} alt="" />
        <img id={heroesId[2]}  className="hero" src={ironfist} alt="" />
        </div>
    </div>

    )
}


export default Game
