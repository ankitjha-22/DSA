function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let j = i;
    while (j > 0 && list[j] < list[j - 1]) {
      swap(j, j - 1, list);
      j--;
    }
  }
  return list;
}

function swap(i, j, list) {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}

console.log(insertionSort([5, 1, 4, 2, 8]));

// Best Case: O(n)
// Average Case: O(n²)
// Worst Case: O(n²)
