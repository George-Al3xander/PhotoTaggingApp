function checkName(name) {   
    let letterValid = /^[a-zA-Z\s]*$/; ;
    let letterTest = letterValid.test(name);
   
    return new Promise((resolve, reject) => {
        if(name == "" || name == " " || name.trim().length < 3 || letterTest == false) {
            reject("Enter valid name");
        } else {
            resolve(name);
        }
    })    
}
//"red_hulk","vision","ironfist"

function checkHeroes(arr) {
    let test = ["red_hulk","vision","ironfist"];
    return new Promise((resolve, reject) => {
        if(arr.includes(test[0]) &&  arr.includes(test[1]) && arr.includes(test[2])) {
            resolve("");
        } 
        else {
            reject("You didn't find all the characters!")
        }
    })
}

function checkTime(arr) {
    return new Promise((resolve, reject) => {
        if(arr[1] == 0 && arr[2] == 0) {
            reject("Invalid time, restart game!")
        } else {
            resolve("")
        }
    })
}


export default checkName
export {checkHeroes, checkTime}