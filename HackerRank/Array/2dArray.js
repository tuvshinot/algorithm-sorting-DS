// Complete the array2D function below.
function array2D(arr) {
    let temp = 0;
    let sumMax = -1000; // approximately smallest num just for test cases
    let sums = new Array();

    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            temp = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] 
            + arr[i + 1][j + 1] 
            + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            sumMax = Math.max(sumMax, temp);
            sums.push(temp);
            temp = 0;
        }
    }
    console.log(sums);
    return sumMax;
}

/*
-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
We calculate the following 16 hourglass values:

-63, -34, -9, 12, 
-10, 0, 28, 23, 
-27, -11, -2, 10, 
9, 17, 25, 18


*/

let maxSum = array2D([
    [-9, -9, -9, 1, 1, 1], 
    [ 0, -9,  0, 4, 3, 2], 
    [-9, -9, -9, 1, 2, 3],
    [ 0,  0,  8, 6, 6, 0],
    [ 0,  0,  0,-2, 0, 0],
    [ 0,  0,  1, 2, 4, 0]
]);
console.log(maxSum);
