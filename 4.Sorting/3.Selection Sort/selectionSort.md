# Selection Sort

```
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
```

## 1. Divide the array into two parts:

Sorted portion: Initially empty.
Unsorted portion: Contains the entire array at the start.

## 2. Find the minimum element:

In each iteration, find the smallest element from the unsorted portion of the array.
Swap it with the first unsorted element:

Swap the smallest element found with the first element of the unsorted portion.
After this, the first element of the unsorted portion is now part of the sorted portion.

## 3. Repeat the process:

Move the boundary between the sorted and unsorted portions to the right.
Continue finding the smallest element from the unsorted portion and swapping it with the leftmost unsorted element.

eg sorted : [] insorted: [5,3,2,1] -> 1 and 5 will be swaped and 1 will be sorted

## 4. Stop when all elements are sorted:

Continue the process until the entire array is sorted.
