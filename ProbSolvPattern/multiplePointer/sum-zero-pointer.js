function sumOfZeroPair(arr) { // sorted array

    var left = 0;
    var right = arr.length -1;

    while(left < right) {
        sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left],arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

//[-3,-2, -1, 1, 2, 4, 4] : -2, 2