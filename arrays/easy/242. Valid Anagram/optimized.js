/*
    Time: O(n)
    Space: O(1)

 */

var isAnagram = (s, t) => {
    //if strings have different lengths, they can't be anagrams
    if (s.length !== t.length) return false;

    // Array to count each character (26 letters)
    const count = new Array(26).fill(0);

    const base = 'a'.charCodeAt(0);

    // Increment for s, decrement for t
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - base]++;
        count[t.charCodeAt(i) - base]--;
    }

    // If all counts are zero, they are anagrams
    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) return false;
    }

    return true;
}