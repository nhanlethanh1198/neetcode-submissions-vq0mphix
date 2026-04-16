class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        s = s.trimEnd()
        let res = 0
        for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] != " ") {
                res++
            } else {
                break
            }
        }

        return res
    }
}
