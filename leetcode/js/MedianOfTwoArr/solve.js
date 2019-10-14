/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var i = 0;
    var j = 0;
    var result = [];
    var median;

    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] < nums2[j]) {
            result.push(nums1[i]);
            i++;
        } else {
            result.push(nums2[j]);
            j++;
        }
    }

    while(i < nums1.length) {
        result.push(nums1[i]);
        i++;
    }

    while(j < nums2.length) {
        result.push(nums2[j]);
        j++;
    }

    var length = result.length;
    var ind;

    if(length % 2 === 0) {
        var ind = length / 2;
        median = (result[ind] + result[ind - 1]) / 2;
    } else {
        ind = Math.floor(length / 2);
        median = result[ind];
    }

    return median;
};
