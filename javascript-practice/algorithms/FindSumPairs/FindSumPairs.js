class FindSumPairs {
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   */
  constructor(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.nums1Count = new Map();
    this.nums2Count = new Map();

    for (const num of nums1) {
      this.nums1Count.set(num, (this.nums1Count.get(num) || 0) + 1);
    }
    for (const num of nums2) {
      this.nums2Count.set(num, (this.nums2Count.get(num) || 0) + 1);
    }
  }

  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  add(index, val) {
    const oldVal = this.nums2[index];
    const newVal = oldVal + val;
    this.nums2[index] = newVal;

    // Decrement old value count
    this.nums2Count.set(oldVal, this.nums2Count.get(oldVal) - 1);
    if (this.nums2Count.get(oldVal) === 0) {
      this.nums2Count.delete(oldVal);
    }
    // Increment new value count
    this.nums2Count.set(newVal, (this.nums2Count.get(newVal) || 0) + 1);
  }

  /**
   * @param {number} tot
   * @return {number}
   */
  count(tot) {
    let result = 0;
    for (const [num1, count1] of this.nums1Count.entries()) {
      const complement = tot - num1;
      if (this.nums2Count.has(complement)) {
        result += count1 * this.nums2Count.get(complement);
      }
    }
    return result;
  }
}
