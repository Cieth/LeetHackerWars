var mergeTwoLists = function (list1, list2) {
  let uwu = [];
  for (let i = 0; i < list1.length; i++) {
    uwu.push(list1[i]);
    uwu.push(list2[i]);
  }
  return uwu;
};

(list1 = [1, 2, 4]), (list2 = [1, 3, 4]);

console.log(mergeTwoLists(list1, list2));
