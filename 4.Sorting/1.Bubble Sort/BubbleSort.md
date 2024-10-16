# Detailed Explanation

## Passes through the list

In each pass, the algorithm compares adjacent elements and swaps them if they are in the wrong order (i.e., if the first element is greater than the second in case of ascending order).

## **Optimization**

After each pass, the largest unsorted element moves to its correct position at the end of the list. Therefore, on each subsequent pass, the range of unsorted elements to check decreases. **This saves some work because the last few elements are already sorted.**

## **Early Exit**

An optimization can be added where, if no swaps are made during a pass, the algorithm can terminate early, as the list is already sorted.

### Initial Array:

[5,1,4,2,8]

### Outer Loop (Pass 1):

- `i = 0`, `isSwap = false` initially.
- We compare adjacent elements in the inner loop, and swap them if necessary.

#### Inner Loop:

- Compare `5` and `1` → since `5 > 1`, **swap**:

[1, 5, 4, 2, 8]

Set `isSwap = true` since a swap occurred.

- Compare `5` and `4` → since `5 > 4`, **swap**:

[1, 4, 5, 2, 8]

- Compare `5` and `2` → since `5 > 2`, **swap**:

[1, 4, 2, 5, 8]

- Compare `5` and `8` → no swap needed, since `5 < 8`.

After Pass 1, the largest element `8` is in its correct position at the end of the array.

**Array after Pass 1:**
[1, 4, 2, 5, 8]

---

### Outer Loop (Pass 2):

- `i = 1`, `isSwap = false` initially.
- The inner loop now only goes up to `list.length - 1 - i = 3` since the last element is already sorted.

#### Inner Loop:

- Compare `1` and `4` → no swap needed, since `1 < 4`.

- Compare `4` and `2` → since `4 > 2`, **swap**:

  [1, 2, 4, 5, 8]

Set `isSwap = true` since a swap occurred.

- Compare `4` and `5` → no swap needed, since `4 < 5`.

**Array after Pass 2:**
[1, 2, 4, 5, 8]

---

### Outer Loop (Pass 3):

- `i = 2`, `isSwap = false` initially.
- The inner loop goes up to `list.length - 1 - i = 2` since the last two elements are already sorted.

#### Inner Loop:

- Compare `1` and `2` → no swap needed, since `1 < 2`.

- Compare `2` and `4` → no swap needed, since `2 < 4`.

Since no swaps were made during this pass, the `isSwap` flag remains `false`, and the algorithm terminates early as the array is now fully sorted.

**Array after Pass 3:**
[1, 2, 4, 5, 8]

### Final Sorted Array:

### Summary of Passes:

1. After Pass 1: `[1, 4, 2, 5, 8]`
2. After Pass 2: `[1, 2, 4, 5, 8]`
3. After Pass 3: Array is already sorted, so the algorithm terminates.

Since the array becomes sorted after Pass 3, the function exits early due to the `isSwap` flag, optimizing the process.

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
