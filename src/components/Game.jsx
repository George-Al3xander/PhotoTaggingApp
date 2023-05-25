import background1 from "../assets/pic.jpg"
import hulk from "../assets/hero_1.png"
import vision from "../assets/hero_2.png"
import ironfist from "../assets/hero_3.png"
import DropdownMenu from './DropdownMenu.jsx'

import React,  { useEffect, useState } from "react"


function Cursor(props)  {
 // console.log(this)
 // let w = this.clientWidth;
 // let h = this.clientHeight; 

  return <div style={{transform : `translate(${props.coordX - 40}px, ${props.coordY - 40}px)`}} className="cursor-custom"></div>
}

const Game = (props) => {
  const [coordX, setCoordX] = useState(0);
  const [coordY, setCoordY] = useState(0);

  const [menuStatus, setMenuStatus] = useState(false);  
  const [gameDisplay, setGameDisplay] = useState("none");

  const [currentClickHero, setCurrentClickHero] = useState("");
  const [currentClickMenu, setCurrentClickMenu] = useState("");


  let width = window.innerWidth;
  let height = window.innerHeight;

  const heroesId = ["red_hulk","vision","ironfist"];
  const [clickedHeroes, setClickedHeroes] = useState([]);

  const [customCursor, setCustomCursor] = useState("none")
   

    function getCoords(e) {    
      setCoordX(finX);
      setCoordY(finY);     
    }
  
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
      }
      else {
        setMenuStatus(false);            
      }
      //getCoords(e);
      setCurrentClickHero(e.target.id);
      
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
    },3)
  },[]);


  function trackCursor(e) {       
    setCoordX(e.clientX);
    setCoordY(e.clientY);
  }


 
    
    return(
    <div className='game'>  
      
      <div style={{display: gameDisplay}} onClick={handleClick} className="divGame"      
      // onMouseEnter={()=> setCustomCursor("block")}
      // onMouseLeave={()=> setCustomCursor("none")}
     onMouseMove={menuStatus == false ? trackCursor : null}
      >
      {menuStatus == true ?  <DropdownMenu menuClickFunc={menuClick} styleLeft={coordX} styleTop={coordY} />  : null} 
      {menuStatus == true ? <Cursor coordX={coordX} coordY={coordY} /> : null }
        <img  className="background-image" src={background1} alt="" />
        <img id={heroesId[0]} className="hero" src={hulk} alt="" />
        <img id={heroesId[1]}  className="hero" src={vision} alt="" />
        <img id={heroesId[2]}  className="hero" src={ironfist} alt="" />
        </div>

        {/* <div style={{display: customCursor}} className="custom-cursor">
          
        </div> */}
    </div>

    )
}


export default Game
