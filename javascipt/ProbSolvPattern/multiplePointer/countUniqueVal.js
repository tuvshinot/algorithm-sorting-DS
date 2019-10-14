function countUniqueValue(arr) {
    if(arr.length === 0) {
        return 0;
    }

    var i = 0;

    for (let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
            // arr.splice(i,1,arr[j]);
        }
    }
    return i + 1;
}

//[1,1,1,2,3] : 3