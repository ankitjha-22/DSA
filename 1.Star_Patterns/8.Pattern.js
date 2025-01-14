function pattern(n) {
  for (let row = 0; row < n; row++) {
    let currentRow = "";
    for (let col = 0; col < row; col++) {
      currentRow += " ";
    }

    for (let col = 0; col < 2 * n - (2 * row + 1); col++) {
      currentRow += "*";
    }

    for (let col = 0; col < row; col++) {
      currentRow += " ";
    }
    console.log(currentRow);
  }
}
pattern(5);
