class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    // Vertical Scaning
    longestCommonPrefix(strs) {

        for (let i = 1; i < strs.length; i++) {
           for (let s of strs) {
                if (i === s.length || s[i] !== strs[0][i]) {
                    return s.slice(0, i)
                }
           }
        }

        return ""

    }
}
