function pattern(n) {
  for (let row = 0; row < n; row++) {
    let currentRow = "";
    for (let col = 0; col < n; col++) {
      currentRow += "*";
    }
    console.log(currentRow);
  }
}

pattern(5);
