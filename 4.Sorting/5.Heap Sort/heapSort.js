function buildMaxHeap(list) {
  const firstParentIdx = Math.floor((list.length - 2) / 2);
  for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
    shiftDown(currentIdx, list.length - 1, list);
  }
}

function shiftDown(currentIdx, endIdx, heap) {
  let childOneIdx = 2 * currentIdx + 1;
  while (childOneIdx <= endIdx) {
    const childTwoIdx = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1;
    let idxToSwap;

    if (childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]) {
      idxToSwap = childTwoIdx;
    } else {
      idxToSwap = childOneIdx;
    }
    if (heap[idxToSwap] > heap[currentIdx]) {
      swap(currentIdx, idxToSwap, heap);
      currentIdx = idxToSwap;
      childOneIdx = currentIdx * 2 + 1;
    } else {
      return;
    }
  }
}

function swap(i, j, list) {
  let temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}
function heapSort(list) {
  buildMaxHeap(list);
  for (let endIdx = list.length - 1; endIdx > 0; endIdx--) {
    swap(0, endIdx, list);
    shiftDown(0, endIdx - 1, list);
  }
  return list;
}
console.log(heapSort([5, 1, 4, 2, 8]));

// Space O(1)
// Time O(nlog(n))
