// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let obj = {};
    let color;
    let pairs = 0;
    let temp;

    for(let i = 0; i < n; i++) {
        color = ar[i];
        obj[color] ? obj[color]++ : obj[color] = 1;    
    }

    for(color in obj) {
        temp = Math.floor(obj[color] / 2);
        pairs += temp;
    }
    return pairs;
}

var pairs = sockMerchant(9, [10,20,20,10,10,30,50,10,20]);
console.log(pairs);