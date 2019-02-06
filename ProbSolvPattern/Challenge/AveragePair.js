// multiple pointers
function averagePair(sortedArr, targetAverage){
    // add whatever parameters you deem necessary - good luck!
    if(sortedArr == null || targetAverage == null) return false;

    let average = 0;
    let left = 0;
    let right = sortedArr.length - 1;

    while(left < right) {
        average = (sortedArr[left] + sortedArr[right]) / 2;
        if(average === targetAverage) {
            return true;
        } else if (average < targetAverage) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

//alert(averagePair([1,2,3], 2.5)); true
//alert(averagePair([1,3,3,5,6,7,10,12,19], 8)); true
//alert(averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([],4));
console.log(averagePair([2,2,2,2,3,4,5,6,7], 2.5)); // true