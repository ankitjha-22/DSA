function pattern(n) {
  for (let row = 0; row < 2 * n - 1; row++) {
    let currentRow = "";

    // Determine number of stars in the current row
    let starCount = row < n ? row + 1 : 2 * n - row - 1;

    // Add stars for the first part
    for (let col = 0; col < starCount; col++) {
      currentRow += "*";
    }

    // Add spaces in the middle
    let spaceCount = row < n - 1 ? 2 * (n - row - 1) : 2 * (row - n + 1);
    for (let col = 0; col < spaceCount; col++) {
      currentRow += " ";
    }

    // Add stars for the second part
    for (let col = 0; col < starCount; col++) {
      currentRow += "*";
    }

    console.log(currentRow); // Print the current row
  }
}

pattern(5);
