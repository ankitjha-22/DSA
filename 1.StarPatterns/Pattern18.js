function pattern(n) {
  let AIdx = "A".charCodeAt(0);
  for (let row = 0; row < n; row++) {
    let currentRow = "";
    for (let col = 0; col <= n - row - 1; col++) {
      currentRow += " ";
    }

    for (let col = 0; col <= row; col++) {
      currentRow += String.fromCharCode(AIdx + col);
    }

    for (let col = row - 1; col >= 0; col--) {
      currentRow += String.fromCharCode(AIdx + col);
    }

    console.log(currentRow);
  }
}

pattern(5);
