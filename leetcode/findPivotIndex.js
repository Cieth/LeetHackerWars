var pivotIndex = function (nums) {
  let sum = 0;
  for (let i in nums) {
    sum += nums[i];
  }

  let st = 0;

  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];

    if (st === sum) {
      return i;
    }
    st += nums[i];
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
