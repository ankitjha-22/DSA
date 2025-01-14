function pattern(n) {
  for (let row = 0; row < n; row++) {
    let currentRow = "";
    for (let col = 0; col < n - row - 1; col++) {
      currentRow += " ";
    }

    for (let col = 0; col < 2 * row + 1; col++) {
      currentRow += "*";
    }

    for (let col = 0; col < n - row - 1; col++) {
      currentRow += " ";
    }
    console.log(currentRow);
  }
}

pattern(5);
