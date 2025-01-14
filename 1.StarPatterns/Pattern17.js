function pattern(n) {
  let AIdx = "A".charCodeAt(0);
  let endIdx = AIdx + n;
  for (let row = 0; row < n; row++) {
    let currentRow = "";
    for (let col = 0; col <= row; col++) {
      currentRow += String.fromCharCode(endIdx - 1 - col);
    }
    currentRow = currentRow.split("").reverse().join("");
    console.log(currentRow);
  }
}

pattern(5);
