// JavaScript 
let userEmail = 'abc1234'
let password = '1234'

let userChecker = function(myString) {
    // userEmail must be greater than 6 characters AND contain 123
    if ((myString.includes(123)) && (myString.length > 6)) {
        return true
    } else {
        return false
    }
}

console.log(userChecker(userEmail));