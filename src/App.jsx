import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Game from './components/Game'
import Homepage from './components/Homepage';
import checkName  from "./components/Validation";
import Leaderboard from './components/Leaderboard';
import ResSubmit from './components/ResSubmit';
import DisplayHeroes from './components/DisplayHeroes';

function App() {
  let testArr = [
    {name: "James",
      time: [0, 12, 3]}
  ]
  const navigate = useNavigate();
  const[win, setWin] = useState(false);   
  const [time, setTime] = useState([0, 0, 0]);
  const [name, setName] = useState("");
  const [finalInfo, setFinalInfo] = useState([]);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [timerFunction, setTimerFunction] = useState(0);

  
  
  const gameWon = () => {
    setWin(true);
    stopTimer();
    setHours(0);
    setSeconds(0);
    setMinutes(0);
    setTime([hours, minutes, seconds]);
    navigate("/res-submit")
    console.log('WON!');
  }
  
  
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
  
  function startGame() {
    setTimeout(()=> {
      startTimer();
    },3);
  }
  
  function changeName(e) {
      setName(e.target.value);
  }

  async function submitInfo() {
    try {
        await checkName(name);
        console.log("Good")
        setFinalInfo([name, time]);
        navigate("/leaderboard")
    } catch (error) {
        console.log("Bitch!")
    }
  } 

  return (
    <>    
    <Routes>
      <Route 
        path="/game" 
        element={
        <Game 
          winStatus = {win}
          gameWon={gameWon}
          time= {[hours, minutes, seconds]}
          startTimer={startGame}         
        />
        }/>

      <Route 
        path="/" 
        element={
        <Homepage 
         onStart = {startTimer}
        />
        }/>       
        <Route 
          path="/res-submit"
          element={<ResSubmit time={time} changeName={changeName} submitInfo={submitInfo}/>          
        }/>  

        <Route path="/leaderboard" element={<Leaderboard array={testArr}/>}/> 
        </Routes>                 
    </>
  )
}

export default App
