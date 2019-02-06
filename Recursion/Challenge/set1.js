
// power
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}
//console.log(power(2,2));

// factorial
function factorial(n){
   if(n == 1) return 1;
   return n * factorial(n-1);
}

// productOfArray
function productOfArray(arr) {
    if(arr.length == 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}
//console.log("Product of array: " + productOfArray([1,2,3,10,7]));

// Recursive range
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 
function recursiveRange(num){
   if(num == 1) return 1;
    return num + recursiveRange(num - 1);
}
//console.log("Recursive Range: " + recursiveRange(6));// 21


// fib
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

fib(4) // 3 --- 1 1 2 4