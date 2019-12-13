// JavaScript 
let username = 'abc1234'
let password = '1234'

let usernameChecker = function(myString) {
    // username must be greater than 6 characters AND contain 123
    if ((myString.includes(123)) && (myString.length > 6)) {
        return true
    } else {
        return false
    }
}

let passwordChecker = function(pass) {
    // password must contain 1234 and be GREATER than 8 characters long
    if ((pass.includes(1234)) && (pass.length > 8)) {
        return true
    } else {
        return false
    }
}

// Clears the input field when user begins typing username/password
const text = document.querySelector('input');
text.onclick = function() {
    text.value = '';
}