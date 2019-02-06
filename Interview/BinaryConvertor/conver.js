function DecimalToBinary(num) {
    let acc = [];
    let remainder;
    let binary;

    while(num > 0) {
        remainder = num % 2;
        (remainder === 1) ? acc.push(1) : acc.push(0);
        num = Math.floor(num / 2);
    }
    acc.reverse();

    binary =  acc.reduce(function(acc, cur) {
       return acc += cur;
    }, "");
    
    return binary;
}

console.log(DecimalToBinary(75));
// console.log(DecimalToBinary(142));
// console.log(DecimalToBinary(145454545454));

function BinaryToDecimal(binary) {
    let dec = 0;
    let str = binary.toString();
    let len = str.length;

    for(let i = 0; i < len; i++) {
        if(str[len - i - 1] === "1") {
            dec += Math.pow(2, i);
        }
    }
    return dec;
}

console.log(BinaryToDecimal(1001011));
// console.log(BinaryToDecimal(11111101)); // 253