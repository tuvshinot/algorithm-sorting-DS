function countingValleys(n, s) {
// n = number of steps
// s = path sequence
    let level = 0;
    let valleyCount = 0;

    for(let i = 0; i < n; i++) {
        if(s[i] === 'U') {
            level++;
        } else {
            if(level === 0) {
                valleyCount++;
            }
            level--;
        }
    }
    return valleyCount;
}

let numOfValley = countingValleys(8, 'UDDDUDUU');
console.log(numOfValley);