function sortTime(array) {   
    let arrayIndex = [];
    let tempArray = array.map((item) => {
        let time = item.time;
        let hours = time[0] * 3600;
        let minutes = time[1] * 60;
        let seconds = time[2];
        return {name: item.name, time_default: time, time: hours + minutes + seconds}
    })

    let finArray = tempArray.sort(function(a, b) {
        arrayIndex.push(array.indexOf(b))
        return a.time - b.time;
    })
    
    finArray = finArray.map((item) => {
        return {name: item.name, time: item.time_default}
    })

    return finArray
}

export default sortTime