function pattern(n) {
  let currentNumber = 1;
  for (let row = 0; row < n; row++) {
    let currentRow = "";
    for (let col = 0; col <= row; col++) {
      currentRow += currentNumber++;
    }
    console.log(currentRow);
  }
}

pattern(5);
