function staircase(n) {
  let arr = new Array(n).fill(' ');

  for (let i = n; i > 0; i--) {
    arr.shift();
    arr.push('#');
    console.log(arr.join(''));
  }
}
console.log(staircase(4));
