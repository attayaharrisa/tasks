//To check the valid stuff:

function checkLength(password) {
    if ((password.length) == 16) {
        return true;
    }
    return false;
}

function containsNumbers(password) {
    for (let i = 0; i < password.length; i++) {
        if (isNaN(password[i]) || password[i] == " ") {
            //Do nothing
        }
        else {
            return true;
        }
    }
    return false;
}

function containsLetters(password) {
    for (let i = 0; i < password.length; i++) {
        if (password.match(/[a-z]/i)) {
            return true;
        }
    }
    return false;
}
//Method used from: https://bobbyhadz.com/blog/javascript-check-if-string-contains-special-characters
function containsSpecial(password) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(password);
}

function noSpecialInFirst(password) {
    const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
    for (let i = 0; i < specialChars.length; i++) {
        if (password[0] == specialChars[i]) {
            return false;
        }
    }
    return true;
}

function noNumberInFirst(password) {
    const numbers = '1234567890';
    for (let i = 0; i < numbers.length; i++) {
        if (password[0] == numbers[i]) {
            return false;
        }
    }
    return true;
}

module.exports.checkLength = checkLength;
module.exports.containsNumbers = containsNumbers;
module.exports.containsLetters = containsLetters;
module.exports.containsSpecial = containsSpecial;
module.exports.noSpecialInFirst = noSpecialInFirst;
module.exports.noNumberInFirst = noNumberInFirst;