class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

      const countMap = new Map()

      // Count
      for (const num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1)
      }

      // bucket index: = frequences
      const frequences = Array(nums.length + 1).fill(null).map(() => [])

      for (const [num, freq] of countMap.entries()) {
        frequences[freq].push(num)
      }
      const res = []

      for (let i = frequences.length - 1 ; i >= 0; i--) {
        for (const num of frequences[i]) {
            res.push(num)

            if (res.length == k) {
                return res
            }
        }
      }

      return res
    }
}
