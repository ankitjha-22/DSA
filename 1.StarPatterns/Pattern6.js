function pattern(n) {
  for (let row = 0; row < n; row++) {
    let currentRow = "";
    for (let col = 0; col < n - row; col++) {
      currentRow += col + 1;
    }
    console.log(currentRow);
  }
}

pattern(5);
