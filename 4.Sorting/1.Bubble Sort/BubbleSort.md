# Bubble Sort

```
function bubbleSort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    let isSwap = false;

    // Inner loop compares adjacent elements
    for (let j = 0; j < list.length - 1 - i; j++) {
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
```

## Compare adjacent elements:

1. Start from the first element and compare it with the second.If the first element is larger than the second, swap them.
2. Move to the next pair (second and third element) and repeat the process.

## Repeat the process:

1. Continue comparing and swapping adjacent elements, moving from the start to the end of the array.
2. After each pass, the largest unsorted element will "bubble up" to its correct position at the end of the array.

## Reduce the comparison range:

After each pass, reduce the number of elements to be compared, as the largest elements are already in place.

## Stop when no swaps occur:

The algorithm stops when a pass through the array results in no swaps, indicating that the array is sorted.
