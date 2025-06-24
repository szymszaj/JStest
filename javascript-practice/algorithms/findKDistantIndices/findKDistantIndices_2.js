function shortKDistant(arr, val, dist) {
  let out = [];
  for (let idx = 0; idx < arr.length; idx++) {
    for (let jdx = 0; jdx < arr.length; jdx++) {
      if (arr[jdx] === val && Math.abs(idx - jdx) <= dist) {
        out.push(idx);
        break;
      }
    }
  }
  return out;
}
