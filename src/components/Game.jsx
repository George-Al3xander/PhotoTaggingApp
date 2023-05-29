import background1 from "../assets/pic.jpg"
import hulk from "../assets/hero_1.png"
import vision from "../assets/hero_2.png"
import ironfist from "../assets/hero_3.png"
import DropdownMenu from './DropdownMenu.jsx'
import DisplayTime from "./DisplayTime"
import React,  { useEffect, useState } from "react"
import DisplayHeroes from "./DisplayHeroes"
import { checkHeroes } from "./Validation"


const Game = (props) => {
  const [coordX, setCoordX] = useState(0);
  const [coordY, setCoordY] = useState(0);

  const [menuStatus, setMenuStatus] = useState(false);  
  const [gameDisplay, setGameDisplay] = useState("none");

  const [currentClickHero, setCurrentClickHero] = useState("");
  const [currentClickMenu, setCurrentClickMenu] = useState("");
 
  const [clickedClass , setClickedClass] = useState([]);


  const heroesId = ["red_hulk","vision","ironfist"];
  const [clickedHeroes, setClickedHeroes] = useState([]);    
  
  function menuClick(e) {
      let gameDiv = document.querySelector(".divGame");      
      let val = e.target.innerHTML.toLowerCase();
      val = val.replace(" ", "_")
      setCurrentClickMenu(val);    
      if(currentClickHero == val) {
        let tempArray = [...clickedHeroes]
        tempArray = tempArray.concat(val);
        setClickedHeroes(tempArray);
        props.addClickedHeroes(val);
        let heroClass = "." + document.getElementById(val).classList[1];          
        document.querySelectorAll(heroClass).forEach((hero) => hero.style.opacity = ".3"); 
        gameDiv.style.border = "10px solid green"       
         
        setTimeout(() => {
          gameDiv.style.border = "none" 

       },500)     
      }   
      else {
        gameDiv.className = "divGame shake"
        setTimeout(() => {
           gameDiv.className = "divGame"

        },300)
      }
      setMenuStatus(false);
    }      
   
    function handleClick(e) {
      let id = e.target.id;
      if(menuStatus == false) {
        setMenuStatus(true);  
        setCoords(e);  
      }
      else {
        setMenuStatus(false);  
        setCoords(e)          
      }      
      setCurrentClickHero(id);   
      if(id != undefined) {
          let tempArray = [...clickedClass];
          tempArray.push(id);
          setClickedClass(tempArray);
      }     
    }

    function setCoords(e) {      
      let height  = document.body.offsetHeight;      
      let differ = height - e.target.parentElement.offsetHeight;      
      if(window.innerWidth - (e.clientX - 50) < 150) {
        setCoordX(e.clientX - 80); 
      } 
      else if(window.innerWidth - (e.clientX - 50) > window.innerWidth) {
        setCoordX(e.clientX - 10);
      }      
      else {
        setCoordX(e.clientX - 50);  
      }
      setCoordY((e.clientY - height/30) + window.scrollY - differ);
    } 

     //Win check
    useEffect(() => {
      if(clickedHeroes.length > 2) {
        props.gameWon();      
      }
    },[clickedHeroes]);


    //Waiting to all images to load
    useEffect(()=> {
      setTimeout(()=> {
        setGameDisplay("flex")
      },3);      
    },[]);

  
    return(
    <>   
    <header className="board-timer">
      <DisplayHeroes />
      <div className="timer">{<DisplayTime time={props.time}/>}</div>
    </header>
    <div className='game'>      
      <div style={{display: gameDisplay}} onClick={handleClick} className="divGame"         
      onMouseMove={menuStatus == false ? setCoords : null}
      >
      {menuStatus == true ?  <DropdownMenu menuClickFunc={menuClick} styleLeft={coordX} styleTop={coordY} array={clickedHeroes}/>  : null}       
        <img  className="background-image" src={background1} alt="" />
        <img id={heroesId[0]} className="hero hero1" src={hulk} alt="" />
        <img id={heroesId[1]}  className="hero hero2" src={vision} alt="" />
        <img id={heroesId[2]}  className="hero hero3" src={ironfist} alt="" />
        </div>       
    </div>     
    </>
    )
}

export default Game
