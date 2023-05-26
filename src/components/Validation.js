function checkName(name) {
    console.log(name);
    let letterValid = /^[a-zA-Z\s]*$/; ;
    let letterTest = letterValid.test(name);

    console.log(letterTest)
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


export default checkName
export {checkHeroes}