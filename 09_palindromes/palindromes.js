const palindromes = function (text) {
    let rawText = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
    
    
    let reversed = ''
    for (let i = 1; i <= rawText.length; i++) {
        reversed += rawText[rawText.length-i]
    }
    return(rawText==reversed);
};

// Do not edit below this line
module.exports = palindromes;
