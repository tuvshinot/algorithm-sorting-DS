var printAtLeastFive = n => {
    for (let i = 0; i < Math.max(5, n); i++) {  // o(n)
        console.log(i);
    }
}

var printAtMostFive = n => {
    for (let i = 0; i < Math.min(5, n); i++) {  // o(1)
        console.log(i);
    }
}