class FindSumPairs {
  constructor(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.nums1Count = this._countNums(nums1);
    this.nums2Count = this._countNums(nums2);
  }

  _countNums(arr) {
    const map = new Map();
    for (const n of arr) map.set(n, (map.get(n) || 0) + 1);
    return map;
  }

  add(index, val) {
    const oldVal = this.nums2[index];
    const newVal = oldVal + val;
    this.nums2[index] = newVal;

    this.nums2Count.set(oldVal, this.nums2Count.get(oldVal) - 1);
    if (!this.nums2Count.get(oldVal)) this.nums2Count.delete(oldVal);

    this.nums2Count.set(newVal, (this.nums2Count.get(newVal) || 0) + 1);
  }

  count(tot) {
    let res = 0;
    for (const [num1, cnt1] of this.nums1Count) {
      const complement = tot - num1;
      const cnt2 = this.nums2Count.get(complement) || 0;
      res += cnt1 * cnt2;
    }
    return res;
  }
}
