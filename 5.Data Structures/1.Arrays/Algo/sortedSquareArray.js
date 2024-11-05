// Time : O(nlogn) Space : O(n)
function sortedSquarredArray(array) {
  if (array.length == 0) return array;

  let result = [];

  for (let idx = 0; idx < array.length; idx++) {
    const element = array[idx] * array[idx];
    result.push(element);
  }

  return result.sort(a, (b) => a - b);
}

// Time : O(n) Space : O(n)
function sortedSquarredArray2(array) {
  if (array.length == 0) return array;
  let newArray = new Array(array.length).fill(0);
  let left = 0;
  let right = array.length - 1;
  let filledCount = 0;
  while (left <= right) {
    let leftsquare = array[left] * array[left];
    let rightsquare = array[right] * array[right];
    if (leftsquare < rightsquare) {
      newArray[array.length - 1 - filledCount] = rightsquare;
      right--;
    } else {
      newArray[array.length - 1 - filledCount] = leftsquare;
      left++;
    }
    filledCount++;
  }

  return newArray;
}

sortedSquarredArray([-3, 1, 2, 8]);
sortedSquarredArray2([-3, 1, 2, 8]);
