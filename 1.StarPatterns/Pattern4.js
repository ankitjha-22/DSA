function Pattern(n) {
  for (let row = 0; row < n; row++) {
    let currentRow = "";
    for (let col = 0; col <= row; col++) {
      currentRow += row + 1;
    }
    console.log(currentRow);
  }
}

Pattern(5);
