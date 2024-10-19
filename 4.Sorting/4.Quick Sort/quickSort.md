# Quick Sort

```
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

```

## Step 1

Select an element from the array as the pivot. Different strategies can be used (e.g., the first element, last element, random element, or median).

```
let pivot = list[list.length - 1];
```

## Step 2

Rearrange the elements in the array such that:

1. Elements smaller than the pivot are placed to its left.

2. Elements larger than the pivot are placed to its right. After this step, the pivot is in its correct sorted position.

```
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] < pivot) {
      left.push(list[i]);
    } else {
      right.push(list[i]);
    }
  }
```

## Step 3

Apply the same quick sort process recursively to the sub-arrays:

1. One sub-array for the elements to the left of the pivot.
2. Another sub-array for the elements to the right of the pivot.

```
return [...quickSort(left), pivot, ...quickSort(right)];
```

## Step 4

The recursion ends when the sub-arrays have fewer than two elements.

```
 if (list.length <= 1) {
    return list;
  }
```

### Time Complexity

Best and Average Case: O(n log n)

Worst Case: O(n²) (happens when the pivot is the smallest or largest element in each partition)
