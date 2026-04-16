class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let currentMax = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            let p = arr[i];

            if (i == arr.length - 1) {
                arr[i] = -1;
                currentMax = Math.max(p, currentMax);

            } else {
                arr[i] = currentMax
                currentMax = Math.max(p, currentMax);
            }

        }

        return arr
    }
}
