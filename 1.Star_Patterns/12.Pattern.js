function pattern(n) {
  for (let row = 0; row < n; row++) {
    let currentRow = "";
    for (let col = 0; col <= row; col++) {
      currentRow += col + 1;
    }
    for (let col = 0; col < n - row - 1; col++) {
      currentRow += " ";
    }
    currentRow += currentRow.split("").reverse().join("");
    console.log(currentRow);
  }
}

pattern(10);
