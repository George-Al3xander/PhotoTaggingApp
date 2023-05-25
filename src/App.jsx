import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Game from './components/Game'
import DisplayTime from './components/DisplayTime';


function App() {

  const[win, setWin] = useState(false);
  
  
  
  const [time, setTime] = useState([0, 0, 0]);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const[isTimerStarted, setIsTimerStarted] = useState(false);
  const [timerFunction, setTimerFunction] = useState(0);


  const gameWon = () => {
    setWin(true);
    stopTimer();
    setTime([hours, minutes, seconds]);
    console.log('WON!')
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


  return (
    <>
    <nav>Hello <span onClick={startTimer}>click me</span> <DisplayTime time={[hours, minutes, seconds]}/></nav>
    <Routes>
      <Route 
        path="/game" 
        element={
        <Game 
          gameWon={gameWon}
        />
        }/>
    </Routes>
    
    </>
  )
}

export default App
