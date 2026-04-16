class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        s = s.trim().split(" ")

        const latest = s[s.length -1]

        return latest.length
    }
}
