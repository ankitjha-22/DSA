function pattern(n) {
  for (let row = 0; row < n; row++) {
    let currentRow = "";
    for (let col = 0; col < n - row; col++) {
      currentRow += "*";
    }
    for (let col = 0; col < row; col++) {
      currentRow += "  ";
    }
    for (let col = 0; col < n - row; col++) {
      currentRow += "*";
    }
    console.log(currentRow);
  }
  for (let row = 0; row < n; row++) {
    let currentRow = "";
    for (let col = 0; col < row; col++) {
      currentRow += "*";
    }
    for (let col = 0; col < n - row; col++) {
      currentRow += "  ";
    }
    for (let col = 0; col < row; col++) {
      currentRow += "*";
    }
    console.log(currentRow);
  }
}

pattern(6);
