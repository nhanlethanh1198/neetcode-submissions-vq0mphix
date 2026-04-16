class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let i = 0 // pointer for s
        let j = 0 // pointer for t

        while (i < s.length && j < t.length) {
            
            if (s[i] == t[j]) {
                i++
            }

            j++
        }

       

        return i == s.length
    }
}
