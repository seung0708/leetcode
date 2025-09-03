/*

    Time (O n^2)
    Space: (1)

*/

var twoSum = function(nums, target) {
    // check each pair of numbers in the array
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // if the pair adds up to the target, return their indices
            if (target - nums[i] == nums[j]) {
                return [i, j]
            }
        }
    }
    return []
};