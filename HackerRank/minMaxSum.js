function miniMaxSum(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    if (max < sum - arr[i]) {
      max = sum - arr[i];
    }
    if (min > sum - arr[i]) {
      min = sum - arr[i];
    }
  }

  console.log(`${min} ${max}`);
}
console.log(
  miniMaxSum([769082435, 210437958, 673982045, 375809214, 380564127])
);
