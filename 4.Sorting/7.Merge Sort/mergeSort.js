function mergeSort(list) {
  if (list.length <= 1) return list;
  const middleIdx = Math.floor(list.length / 2);
  const leftHalf = list.slice(0, middleIdx);
  const rightHalf = list.slice(middleIdx);
  return mergeSortArrays(mergeSort(leftHalf), mergeSort(rightHalf));
}

function mergeSortArrays(leftHalf, rightHalf) {
  const sortedArray = new Array(leftHalf.length + rightHalf.length);
  let k = 0;
  let i = 0;
  let j = 0;

  while (i < leftHalf.length && j < rightHalf.length) {
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
