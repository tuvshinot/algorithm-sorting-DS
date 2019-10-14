//maxSubArray Solution - Sliding window
const maxSubArraySum = (arr, count) => {
    let tempsum = 0;
    let maxSum = 0;

    for(let i = 0; i < count; i++) {
        maxSum += arr[i];
    }

    tempsum = maxSum;
    for(let i = count; i < arr.length; i++) {
        tempsum = tempsum - arr[i - count] + arr[i];
        maxSum = Math.max(maxSum, tempsum);
    }

    return maxSum;
}