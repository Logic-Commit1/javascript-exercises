const sumAll = function(x,y) {
    const myArray = [];
    let total = 0;
    if(x < 0 || y < 0) {
        return 'ERROR';
    } else if (typeof(x) != "number" || typeof(y) != "number") {
        return 'ERROR';
    } else {
        if (x>y) {
            while (x != y) {
                myArray.unshift(x);
                x--;
            }
            myArray.unshift(y)
            for (const element of myArray) {
                total += element;
            }
            return(total);
        } else if (x<y) {
            while (y != x) {
                myArray.unshift(y);
                y--;
            }
            myArray.unshift(x)
            for (const element of myArray) {
                total += element;
            }
            return(total);
        }
    }
   
    
}; 

// Do not edit below this line
module.exports = sumAll;
