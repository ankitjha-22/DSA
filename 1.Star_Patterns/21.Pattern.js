function pattern(n) {
  for (let row = 0; row < n; row++) {
    let currentRow = "";
    for (let col = 0; col < n; col++) {
      if (row == 0 || col == 0 || row == n - 1 || col == n - 1) {
        currentRow += "*";
      } else {
        currentRow += " ";
      }
    }
    console.log(currentRow);
  }
}

pattern(5);
