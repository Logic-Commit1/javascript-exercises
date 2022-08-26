const repeatString = function(text,num) {
    if(num < 0) {
        return 'ERROR';
    } else {
    let empty = ""
    for (let i = num; i != 0; i--) {
        empty += text;
    }
    return(empty);
};
}

// Do not edit below this line
module.exports = repeatString;
