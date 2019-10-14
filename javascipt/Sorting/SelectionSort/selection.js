var selectionSort = arr => {
    let min = 0;
    
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j
            }
        }

        if(i !== min) swap(arr, i, min); // i is already min then do not swap
    }

    return arr;
}

console.log("Selection Sort : " + selectionSort([15,1,3,1,6]))