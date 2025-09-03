/*
    Time: O(n logn)
    Space: O(n)

 */

var isAnagram = (s, t) => {
    //if strings have different lengths, they can't be anagrams
    if (s.length !== t.length) return false

    //sort both strings alphabetically to compare characters
    const sSorted = s.split('').sort().join('')
    const tSorted = t.split('').sort().join('')

    //if any characters differ, not an anagram
    for (let i = 0; i < sSorted.length; i++) {
        //if letter from sSorted doesn't equal letter from tSorted, they aren't anagrams
        if (sSorted[i] !== tSorted[i]) return false
    }
    
    // if all characters match, it's an anagram
    return true
}