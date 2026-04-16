class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let res = 0, max = 0

        for (let i = 0; i < nums.length; i++) {
            
            if (nums[i] == 1) {
                res++
            } else {
                max = res
                res = 0
            }


        }

        return Math.max(res, max)

    }
}
