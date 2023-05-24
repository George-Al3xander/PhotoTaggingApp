const timer = () => {
    //s , m, h
    let time = [0, 0, 0] 
    let isStart = null
    
    

    function stopwatch (){
        time[0]++;
        if(time[0] == 60) {
            time[0] = 0;
            time[1]++;
            if(time[1] == 60) {
                time[1] = 0;
                time[2]++;
            }
        }       
    }
    //let s = seconds < 10 ? "0" + seconds : seconds;
    //let m = minutes < 10 ? "0" + minutes : minutes;
   // let h = hours < 10 ? "0" + hours : hours;
    

    const start = () => {
        if(isStart !== null) {
            clearInterval(isStart)
        }
        isStart = setInterval(stopwatch,1000);    
        console.log(time) 
    }

    const stop = () => {
        clearInterval(isStart)
        time = [0, 0, 0] ;
    }


    return {
        get watchTime() {
            return  time;            
        },
        start,
        stop
    }
}


export default timer