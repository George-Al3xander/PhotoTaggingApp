import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Game from './components/Game'



function App() {

  const [coordX, setCoordX] = useState(0);
  const [coordY, setCoordY] = useState(0);

  const [menuStatus, setMenuStatus] = useState(false);  
  const [gameDisplay, setGameDisplay] = useState("none");

  const [currentClickHero, setCurrentClickHero] = useState("");
  const [currentClickMenu, setCurrentClickMenu] = useState("");

  const[win, setWin] = useState(false);

  let width = window.innerWidth;
  let height = window.innerHeight;

  const heroesId = ["red_hulk","vision","ironfist"];
  const [clickedHeroes, setClickedHeroes] = useState([])
  
  
  const [time, setTime] = useState([0, 0, 0]);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const[isTimerStarted, setIsTimerStarted] = useState(false);
  const [timerFunction, setTimerFunction] = useState(0);



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
      stopTimer();
    }
  },[clickedHeroes])

  
  //Waiting for all pictures to load
  useEffect(()=> {
    setTimeout(()=> {
      setGameDisplay("block")
    },3)
  },[win])


  //Timer hooks
  //Adding seconds
  useEffect(()=> {
    if(isTimerStarted == true) {
      setTimerFunction(setInterval(() => {      
        setSeconds((prev) => prev + 1);
    },1000))
    
    }
  },[isTimerStarted])
  //Adding minutes
  useEffect(()=> {
    if(seconds  == 60) {       
        setSeconds(0);
        setMinutes((prev) => prev + 1);          
      } 
  },[seconds]);

  //Ading hours
  useEffect(()=> {
    if(minutes  == 60) {       
        setMinutes(0);
        setHours((prev) => prev + 1);          
      } 
  },[minutes]);


  function startTimer() {    
    setIsTimerStarted(true);
  }

  function stopTimer() {    
    clearInterval(timerFunction);
    setIsTimerStarted(false);
    setTime([hours, minutes, seconds]);    
  }


  return (
    <>
    <Routes>
      <Route 
        path="/game" 
        element={
        <Game
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          coordX={coordX}
          coordY={coordY}
          heroesId={heroesId}
          startTimer={startTimer}
          stopTimer={stopTimer}
          gameDisplay={gameDisplay}
          handleClick={handleClick}
          menuStatus ={menuStatus}
        

        />
        }/>
    </Routes>
    
    </>
  )
}

export default App
