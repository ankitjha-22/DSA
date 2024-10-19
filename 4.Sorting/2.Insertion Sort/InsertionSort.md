# Insertion Sort

```
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
```

## Step 1 : Start with second element

Start with the second element in the array (index 1), as the first element is trivially sorted.

```
let i = 1;
```

## Step 2 : Compare the current element

Compare the current element with the elements in the sorted portion of the array (elements to the left).

```
 while (j > 0 && list[j] < list[j - 1])
```

## Step 3 : Shift the larger elements

Shift the larger elements in the sorted portion one position to the right to make space for the current element.

```
 swap(j, j - 1, list);
```

## Step 4 : Insert the current element

Insert the current element into the correct position in the sorted portion.

## Step 5 : Repeat steps 2 to 4

Repeat steps 2 to 4 for all elements in the array until the entire array is sorted.
