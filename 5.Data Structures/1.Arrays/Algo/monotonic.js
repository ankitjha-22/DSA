function checkMonotonic(array) {
  let isMonotonic = true;
  let isAsc = array[0] <= array[array.length - 1] ? true : false;
  for (let idx = 0; idx < array.length - 1; idx++) {
    let current = array[idx];
    let next = array[idx + 1];

    if (isAsc && current > next) {
      return false;
    }

    if (!isAsc && current < next) {
      return false;
    }
  }
  return isMonotonic;
}
