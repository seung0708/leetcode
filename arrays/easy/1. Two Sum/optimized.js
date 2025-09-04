/*

    Time (O(n))
    Space: (O(n))

*/

var twoSum = function(nums, target) {
    //create an empty object to store numbers we've seen so far
    //the keys will be numbers from the array, values will be their indices
    const map = {}; 

    // oop through each number in the array
    for (let i = 0; i < nums.length; i++) {
        // calculate the difference needed to reach the target
        let diff = target - nums[i];

        // check if this difference is already in the map
        // if yes, we found the two numbers that add up to the target
        if (Object.hasOwn(map, diff)) {
            // return the indices of the two numbers
            return [map[diff], i];
        }

        // otherwise, store the current number and its index in the map
        map[nums[i]] = i;
    }

    // if no solution is found, return an empty array
    return [];
};