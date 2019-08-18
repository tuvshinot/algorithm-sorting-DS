// Original Solution OOOON SORTED LIST
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version on sorted list
function binarySearchRefac(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearchRefac([2,5,6,9,13,15,28,30], 103)


// My
function BinarySeachMy(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let mid = 0;

    for (let i = 0; i < arr.length; i++) {
        mid = Math.floor((left + right) / 2);
        if(arr[mid] === val) {
            return mid;
        } else if(arr[mid] < val) {
            left = mid + 1;
        } else {
            right = mid -1;
        }
    }
    return -1;
}

console.log("Binary search : " + BinarySeachMy([1,2,3,4,5,6,7,8,9,12], 2));
