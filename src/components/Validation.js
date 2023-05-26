function checkName(name) {
    console.log(name);
    let letterValid = /^[a-zA-Z]+$/;
    let letterTest = letterValid.test(name);

    console.log(letterTest)
    return new Promise((resolve, reject) => {
        if(name == "" || name == " " || name.trim().length < 3 || letterTest == false) {
            reject("");
        } else {
            resolve(name);
        }
    })    
}


export default checkName