function checkName(name) {
    let letterValid = /[^a-zA-Z\s]+/;
    let letterTest = letterValid.test(name);

    console.log(letterTest)
    return new Promise((resolve, reject) => {
        if(name == "" || name == " " || name.trim().length < 3 || letterTest == true) {
            reject("");
        } else {
            resolve(name);
        }
    })    
}


export default checkName