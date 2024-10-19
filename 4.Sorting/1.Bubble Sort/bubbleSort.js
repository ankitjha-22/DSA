// Question : Use Bubble Sort and sort the given array

function bubbleSort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    let isSwap = false;

    // Inner loop compares adjacent elements
    for (let j = 0; j < list.length - 1 - i; j++) {
      // list.length - 1 - i because for i iterations the array is already sorted and the values are at the end of the array.
      if (list[j] > list[j + 1]) {
        // Swap if they are in the wrong order
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
        isSwap = true;
      }
    }

    // If no swaps happened, the list is already sorted
    if (!isSwap) {
      break;
    }
  }

  return list;
}

console.log(bubbleSort([5, 1, 4, 2, 8]));
