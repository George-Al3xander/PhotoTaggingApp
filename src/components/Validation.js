function checkName(name) {
    let letterValid = /[^a-zA-Z\s]+/;
    let letterTest = letterValid.test(name)
    return new Promise((resolve, reject) => {
        if(name == "" || name == " " || name.trim().length < 3 || letterTest == false) {
            reject("");
        } else {
            resolve(name);
        }
    })    
}


export default checkName