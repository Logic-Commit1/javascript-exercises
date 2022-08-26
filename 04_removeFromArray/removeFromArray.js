const removeFromArray = function(x, ...theArgs) {
    const args = Array.from(theArgs);
    for (const arg of args) {
        if(x.indexOf(arg) >= 0 )
        x.splice(x.indexOf(arg),1);
        
    }
    return(x);
}

 
// Do not edit below this line
module.exports = removeFromArray;
