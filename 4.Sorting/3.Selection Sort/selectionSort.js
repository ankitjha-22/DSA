function selectionSort(list) {
  let startIndex = 0;

  while (startIndex < list.length - 1) {
    let smallestIndex = startIndex;
    for (let i = startIndex + 1; i < list.length; i++) {
      if (list[smallestIndex] > list[i]) {
        smallestIndex = i;
      }
    }
    swap(startIndex, smallestIndex, list);
    startIndex++;
  }
  return list;
}

function swap(i, j, list) {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}
console.log(selectionSort([5, 1, 4, 2, 8]));
