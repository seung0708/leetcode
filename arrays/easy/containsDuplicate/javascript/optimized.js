/*
    Time: O(n^2)
    Space: O(1)

 */

var containsDuplicate = function(nums) {
    //since we are trying to find frequency, use Set to get the unique numbers from the array
    const seen = new Set()
    for (let num in nums) {
        //if number already exists in the Set, return true
        if (set.has(num)) {
            return true
        }
        //otherwise add it to the Set
        seen.add(nums)
    }
    //if all numbers a unique, the array doesn't contain duplicates, so return false
    return false
};