# Merge Sort

Merge Sort is a classic divide-and-conquer algorithm used to sort an array or list by breaking it down into smaller subarrays, sorting each of them, and then merging them back together.

Stable Sort: Merge Sort is stable, meaning it preserves the relative order of equal elements.

Time Complexity: 𝑂(𝑛 log 𝑛)
O(nlogn), where n is the number of elements in the array.

Space Complexity: O(n)
O(n) due to the use of ** auxiliary arrays ** during merging.

### How Merge Sort Works:

1. Divide: Split the array into two halves recursively until each subarray contains only a single element.

2. Conquer: Sort each subarray. Since a single-element array is already sorted, this step is trivial.

3. Merge: Combine the two sorted subarrays into a single sorted array.

```
// Code Example

// Time : O(nlog(n)) Space :O(nlog(n))

function mergeSort(list) {
  if (list.length <= 1) return list;

  const middleIdx = Math.floor(list.length / 2);
  const leftHalf = list.slice(0, middleIdx);
  const rightHalf = list.slice(middleIdx);

  return mergeSortArrays(
    mergeSort(leftHalf),mergeSort(rightHalf)
    );
}



function mergeSortArrays(leftHalf, rightHalf) {

  const sortedArray = new Array(leftHalf.length + rightHalf.length);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < leftHalf.length && j < rightHalf.length) {
    /*
    Small number will come early then increment
    k and i or j beased on condition
    */

    if (leftHalf[i] <= rightHalf[j]) {
      sortedArray[k++] = leftHalf[i++];
    } else {
      sortedArray[k++] = rightHalf[j++];
    }
  }

  while (i < leftHalf.length) {
    sortedArray[k++] = leftHalf[i++];
  }
  while (j < rightHalf.length) {
    sortedArray[k++] = rightHalf[j++];
  }

  return sortedArray;
}

```

## Using Auxiliary Array

```
// Optimised MergeSort Using Auxiliary Array

// Time : O(nlog(n)) , Space : O(n)

function mergeSort(list) {
  if (list.length <= 1) return list;
  const auxiliaryArray = list.slice();
  mergeSortHelper(list, 0, list.length - 1, auxiliaryArray);
  return list;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;

  while (i <= middleIdx && j <= endIdx) {
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  while (i <= middleIdx) {
    mainArray[k++] = auxiliaryArray[i++];
  }

  while (j <= endIdx) {
    mainArray[k++] = auxiliaryArray[j++];
  }
}


```
