import background1 from "../assets/pic.jpg"
import hulk from "../assets/hero_1.png"
import vision from "../assets/hero_2.png"
import ironfist from "../assets/hero_3.png"
import DropdownMenu from './DropdownMenu.jsx'
import DisplayTime from "./DisplayTime"
import React,  { useEffect, useState } from "react"
import ResSubmit from './ResSubmit';


const Game = (props) => {
  const [coordX, setCoordX] = useState(0);
  const [coordY, setCoordY] = useState(0);

  const [menuStatus, setMenuStatus] = useState(false);  
  const [gameDisplay, setGameDisplay] = useState("none");

  const [currentClickHero, setCurrentClickHero] = useState("");
  const [currentClickMenu, setCurrentClickMenu] = useState("");
 

  const heroesId = ["red_hulk","vision","ironfist"];
  const [clickedHeroes, setClickedHeroes] = useState([]);

  let win = props.winStatus;

    
  
    function menuClick(e) {
      let val = e.target.innerHTML.toLowerCase();
      val = val.replace(" ", "_")
      setCurrentClickMenu(val);    
      if(currentClickHero == val) {
        let tempArray = [...clickedHeroes]
        tempArray = tempArray.concat(val);
        setClickedHeroes(tempArray);
      }   
      setMenuStatus(false);
    }      
   
    function handleClick(e) {
      if(menuStatus == false) {
        setMenuStatus(true);  
        setCoords(e);  
      }
      else {
        setMenuStatus(false);  
        setCoords(e)          
      }      
      setCurrentClickHero(e.target.id);      
    }

    function setCoords(e) {
      console.log("Height ",innerHeight);
      console.log("Y ",e.clientY);
      let height  = window.innerHeight; 
     // let divGameH = document.querySelector(".divGame")
      let differ = height - e.target.parentElement.clientHeight ;    
      setCoordX(e.clientX - 50);      
      setCoordY((e.clientY - height/40) + window.scrollY + differ);

    } 

     //Win check
    useEffect(() => {
      if(clickedHeroes.length > 2) {
        props.gameWon();      
      }
    },[clickedHeroes]);

    useEffect(()=> {
      setTimeout(()=> {
        setGameDisplay("block")
      },3);      
    },[]);

  
    return(
    <>
    {win == false ? <div className='game'>  
      <header>Time: {<DisplayTime time={props.time}/>}</header>
      <button onClick={props.startTimer}>start time</button>
      <div style={{display: gameDisplay}} onClick={handleClick} className="divGame"         
      onMouseMove={menuStatus == false ? setCoords : null}
      >
      {menuStatus == true ?  <DropdownMenu menuClickFunc={menuClick} styleLeft={coordX} styleTop={coordY} />  : null}       
        <img  className="background-image" src={background1} alt="" />
        <img id={heroesId[0]} className="hero" src={hulk} alt="" />
        <img id={heroesId[1]}  className="hero" src={vision} alt="" />
        <img id={heroesId[2]}  className="hero" src={ironfist} alt="" />
        </div>       
    </div> : <ResSubmit time={props.time}/>}
    </>
    )
}


export default Game
