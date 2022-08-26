const reverseString = function(text) {
    let myArray = text.split('');
    let reversed = ''
    for (let i = 1; i <= myArray.length; i++) {
        reversed += myArray[myArray.length-i]
    }
    return reversed;
}

// Do not edit below this line
module.exports = reverseString;
