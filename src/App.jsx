import { useEffect, useState } from 'react'
import background1 from "./assets/pic.jpg"
import hulk from "./assets/hero_1.png"
import vision from "./assets/hero_2.png"
import ironfist from "./assets/hero_3.png"
import DropdownMenu from './components/DropdownMenu.jsx'
import timer from './components/timer'




function App() {
  const [coordX, setCoordX] = useState(0);
  const [coordY, setCoordY] = useState(0);
  const [menuStatus, setMenuStatus] = useState(false);  
  const [currentClickHero, setCurrentClickHero] = useState("");
  const [currentClickMenu, setCurrentClickMenu] = useState("");
  const [gameDisplay, setGameDisplay] = useState("none");
  const[win, setWin] = useState(false);
  let width = window.innerWidth;
  let height = window.innerHeight;
  const heroesId = ["red_hulk","vision","ironfist"];
  const [clickedHeroes, setClickedHeroes] = useState([])
  
  const[isTimerStarted, setIsTimerStarted] = useState(false);
 
  const [time, setTime] = useState([0, 0, 0]);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);


  function start() {    
      setIsTimerStarted(true);
  }


  // useEffect(()=> {
  //   if(isTimerStarted != true) {
  //   let tempTime = time;
  //   setInterval(() => {
  //     tempTime[2]++;
  //     if(tempTime[2] == 60) {
  //         tempTime[2] = 0;
  //         tempTime[1]++;
  //         if(tempTime[1] == 60) {
  //             tempTime[1] = 0;
  //             tempTime[0]++;
  //         }
  //     }      
  //     setTime(tempTime);

  //   },1000)
  //   }
  // },[]) ;


  

  function getCoords(e) {    
    let finX = (Math.floor((e.clientX / width) * 100)-3);
    let finY = (Math.floor((e.clientY / height) * 100)-5);
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
    getCoords(e);
    setCurrentClickHero(e.target.id);
  }
 

  //Win check

  useEffect(() => {
    if(clickedHeroes.length > 2) {
      setWin(true);
      console.log("Win")
    }
  },[clickedHeroes])

  
  //Waiting for all pictures to load
  useEffect(()=> {
    setTimeout(()=> {
      setGameDisplay("block")
    },3)
  },[win])


  useEffect(()=> {
    if(isTimerStarted == true) {

    setInterval(() => {      
        setSeconds((prev) => prev + 1);
    },1000)
    }
  },[isTimerStarted])

  useEffect(()=> {
    if(seconds  == 60) {       
        setSeconds(0);
        setMinutes((prev) => prev + 1);          
      } 
  },[seconds]);


  useEffect(()=> {
    if(minutes  == 60) {       
        setMinutes(0);
        setHours((prev) => prev + 1);          
      } 
  },[minutes]);

  return (
    <div className='test'>    
      <nav><p>X: {coordX} ; 
      Time: {`${hours < 10 ? "0" + hours : hours} : ${minutes < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`}</p>
      <button onClick={start} >Start</button>
     </nav>
    
      <div style={{display: gameDisplay}} onClick={handleClick} className="divGame" >
      {menuStatus == true ?  <DropdownMenu menuClickFunc={menuClick} styleLeft={coordX} styleTop={coordY} />  : null} 
        <img  className="background-image" src={background1} alt="" />
        <img id={heroesId[0]} className="hero" src={hulk} alt="" />
        <img id={heroesId[1]}  className="hero" src={vision} alt="" />
        <img id={heroesId[2]}  className="hero" src={ironfist} alt="" />
        </div>
    </div>
  )
}

export default App
