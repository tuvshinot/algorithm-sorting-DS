
// n^2
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol");

// n working on its
function stringNaiveButBigN(long, short) {
    let start = 0;
    let next = 1;
    let count = 0;

    for (let i = 0; i < long.length; i++) {
        
        if(long[i] === short[start]) {
            start++;
            next++;
        } else {
            start = 0;
        }

        if(start === short.length - 1) {
            count++;
            start = 0;
        }
    }

    return count;
}

console.log("Number of lol : " + stringNaiveButBigN("lololie loled", "lol"));
console.log("Number of lol : " + naiveSearch("lololie loled", "lol"));