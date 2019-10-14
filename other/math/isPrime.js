function isPrime(num) {
    let isPrime = true;    
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime)
        return `${num} is Prime Number`;
}