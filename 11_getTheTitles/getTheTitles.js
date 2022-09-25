const getTheTitles = function(x) {
    let titles = [];
    
    for(i = 0; i < x.length; i++) {
        titles.push(x[i].title)        
    }
    return titles;
   

};

// Do not edit below this line
module.exports = getTheTitles;
