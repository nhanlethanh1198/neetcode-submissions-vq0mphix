class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        s = s.trim().split(" ").filter(Boolean)
        return s[s.length -1].length
    }
}
