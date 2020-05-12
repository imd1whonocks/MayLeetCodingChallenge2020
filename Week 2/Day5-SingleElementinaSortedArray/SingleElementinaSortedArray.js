/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if (nums.length == 1) return nums[0]
    const binSearch = (start, end) => {
        const mid = Math.floor((start + end)/2);
        if (mid % 2 == 0) {
            // even
            if (nums[mid] == nums[mid + 1]) {
                return binSearch(mid, end);
            } else if (nums[mid] == nums[mid - 1]) {
                return binSearch(start, mid);
            } else {
                return nums[mid];
            }
        } else {
            // odd
            if (nums[mid] == nums[mid + 1]) {
                return binSearch(start, mid - 1);
            } else if (nums[mid] == nums[mid - 1]) {
                return binSearch(mid + 1,end);
            } else {
                return nums[mid];
            }
        }
    }
    return binSearch(0, nums.length - 1);
};