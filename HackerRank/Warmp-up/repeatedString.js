function repeatedStringNaive(s, n) {
    let str = '';
    let count = 0;
    for(let i = 0; i < n; i++) {
        str += s;
    }

    for(let i = 0; i < str.length; i++) {
        if(str[i] === 'a') count++;
    }
    
    return count;
}

var count = repeatedStringNaive('abc', 3); // 3 times
console.log(count)

function repeatedStr(s, n) {
    let countA = 0;
    let length = s.length;

    for(let i = 0; i < length; i++) {
        if(s[i] === 'a') countA++;
    }

    let wholePart = Math.floor(n / length);
    let decimalPart = n % length;

    countA = countA * wholePart;

    if(decimalPart !== 0) {
        for(let i = 0; i < decimalPart; i++) {
            if(s[i] === 'a') countA++;
        }
    }

    return countA;
}

count = repeatedStr('a', 1000000000000);
console.log(count);