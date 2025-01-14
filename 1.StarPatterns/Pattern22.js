function pattern(n) {
  for (let row = 0; row < 2 * n - 1; row++) {
    let currentRow = "";

    for (let col = 0; col < 2 * n - 1; col++) {
      // Logic for border: First/Last row/column
      if (row === 0 || row === 2 * n - 2 || col === 0 || col === 2 * n - 2) {
        currentRow += n;
      } else {
        // Inner area: Decreasing numbers based on proximity to the center
        let minDistance = Math.min(row, col, 2 * n - 2 - row, 2 * n - 2 - col);
        currentRow += n - minDistance;
      }
    }
    console.log(currentRow); // Print the current row
  }
}

pattern(4);
