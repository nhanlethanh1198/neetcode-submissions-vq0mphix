class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let sum = 0;

        for (let i = 0; i < s.length - 1; i++) {
            const a = s.charCodeAt(i);
            const b = s.charCodeAt(i + 1);

            sum += Math.abs(b - a);
        }

        return sum;
    }
}
