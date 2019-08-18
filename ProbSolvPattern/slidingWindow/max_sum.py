import math


def max_sum_subarr(arr, num):
    """ Finding max sum sub array """
    if not len(arr) > num or num < 1:
        return None

    maxSum = -math.inf

    for idx in range(len(arr) - num + 1):
        temp = 0
        for i in range(num):
            temp += arr[idx + i]
        if temp > maxSum:
            maxSum = temp

    return maxSum


def max_sum_refactored(arr, num):
    """ Refactored version of sub sum array """
    max_sum = 0
    temp_sum = 0

    for i in range(num):
        max_sum += arr[i]

    temp_sum = max_sum
    for i in range(num, len(arr)):
        temp_sum = temp_sum - arr[i - num] + arr[i]
        max_sum = max(max_sum, temp_sum)

    return max_sum


print(max_sum_refactored([10, 2, 3, 4, 3, 2 , 5], 3))
