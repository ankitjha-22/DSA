function pattern(n) {
  let AIdx = "A".charCodeAt(0);
  for (let row = 0; row < n; row++) {
    let currentRow = "";
    for (let col = 0; col <= row; col++) {
      currentRow += String.fromCharCode(AIdx + row);
    }
    console.log(currentRow);
  }
}

pattern(5);
