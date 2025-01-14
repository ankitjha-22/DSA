function pattern(n) {
  for (let row = 0; row < n; row++) {
    let currentRow = "";
    for (let col = 0; col <= row; col++) {
      currentRow = currentRow[0] == 1 ? `0${currentRow}` : `1${currentRow}`;
    }
    console.log(currentRow);
  }
}

pattern(5);
