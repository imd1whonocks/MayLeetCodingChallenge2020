/**
 * @param {number[]} A
 * @return {number}
 */
/*
We can have two cases:
A. maximum subarray is not wrapping (One Interval subarray): Use Kadane's Algorithm for this
B. maximum subarray is wrapping (Two Interval subarray)
for wrapping subarray, we find minimum subarray sum. We can subtract this from array's sum to get maximum subarray sum.

Assume array X = [12 -5 4 -8 11]
Using A. , we get kadane(X) = 12 ....(Step 1)
Now trying for B.
To find minimum subarray sum, reverse the sign of X and find maximum subarray sum,
This will be minimum_subarray_sum_in_inverted_arr = kadane(-X) = 9 [5, -4, 8]
=> minimum_subarray_sum_in_original_arr = - minimum_subarray_sum_in_inverted_arr = -9
sum(A) = 14
maximum subarray sum = sum(A) - minimum_subarray_sum_in_original_arr = 14 + 9 = 23 .... (Step 2)
Answer would be max(Step 1, Step 2)

NOTE: There can be a case when minimum_subarray_sum_in_inverted_arr includes complete arr
=> This makes our ans = 0
=> This happens when all el in arr are negative
In such case we should take Step 1 result
*/
var maxSubarraySumCircular = function(A) {
    const kadane = (arr) => {
        let localMax = arr[0];
        let max = arr[0];
        let i = 1;
        while(i < arr.length) {
            localMax = Math.max(arr[i], arr[i] + localMax);
            max = Math.max(max, localMax);
            i++
        }
        return max;
    }
    let allNegative = true;
    const oneIntervalMaxSum = kadane(A);
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
        if (A[i] > 0) {
            allNegative = false;    
        }
        A[i] = -1 * A[i];
    }
    const twoIntervalMaxSum = sum + kadane(A)
    return allNegative ? oneIntervalMaxSum : Math.max(oneIntervalMaxSum, twoIntervalMaxSum)
};