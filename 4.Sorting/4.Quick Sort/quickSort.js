function quickSort(list) {
  if (list.length <= 1) {
    return list;
  }

  let pivot = list[list.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] < pivot) {
      left.push(list[i]);
    } else {
      right.push(list[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 1, 4, 2, 8]));
