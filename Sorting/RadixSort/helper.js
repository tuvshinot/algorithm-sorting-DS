function getDigit(num, ind) {
    let str = num.toString();
    if(ind > str.length - 1) {
        return 0;
    }

    return Number(str[str.length - 1 - ind]);
}

function getDigitColt(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigitCount = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigitCount = Math.max(maxDigitCount, digitCount(nums[i]));
    }
    return maxDigitCount;
}