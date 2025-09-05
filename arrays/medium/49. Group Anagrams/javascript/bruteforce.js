/*
    Time: O(n * m log m)
    Space: O(n * m)
*/

var groupAnagrams = function(strs) {
    //create a map to store sorted words as key and array of anagrams as value
    const map = new Map();

    //loop through each word in the input array
    for (let word of strs) {
        //sort the letters of the words alphabetically
        const sorted = word.split('').sort().join('')

        //if the sorted word already exists as a key in the map
        if(map.has(sorted)) {
            //get the existing array of anagrams for this key
            const array = map.get(sorted)
            //add the current word to that array
            array.push(word)
        } else {
            //if key doesn't exist, create a new array with this word
            map.set(sorted, [word])
        }
    }

    //convert the map values into a final array
    return [...map.values()]
};