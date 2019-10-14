function merge(sortedArr1, sortedArr2) {
    let i = 0;
    let j = 0;
    let result = [];

    while(i < sortedArr1.length && j < sortedArr2.length) {
        
        if(sortedArr1[i] < sortedArr2[j]) {
            result.push(sortedArr1[i]);
            i++;
        } else {
            result.push(sortedArr2[j]);
            j++;
        }
    }

    // if j hit the end first
    while(i < sortedArr1.length) {
        result.push(sortedArr1[i]);
        i++;
    }

    // if i hit the end first
    while(j < sortedArr2.length) {
        result.push(sortedArr2[j]);
        j++;
    }

    return result;
}

console.log("Merge Sort : " + merge([1,3,5], [2,4,6]))
