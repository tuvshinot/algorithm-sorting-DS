function rotLeft(a, d) {
    var element;
    for (var i = 0; i < d; i++) { 
        element = a.shift();
        a.push(element)
    }
    return a;
}

var arr = rotLeft([1,2,3,4,5], 4);
console.log(arr);