class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const mapped = new Map()

        strs.forEach(s => {
            const sorted = s.split("").sort().join("");
            const val = mapped.get(sorted)
           
            if (val) {    
                val.push(s)
            } else {
                mapped.set(sorted, [s])
            }
        })

        return Array.from(mapped.values())
    }

}
