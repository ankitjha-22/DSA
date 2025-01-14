function pattern(n) {
  for (let row = 0; row <= 2 * n - 1; row++) {
    let currentRow = "";
    let end = row > n ? 2 * n - row : row;
    for (let col = 0; col < end; col++) {
      currentRow += "*";
    }

    console.log(currentRow);
  }
}

pattern(5);
