function runLengthEncoding(string) {
  let count = 1;
  let currentChar = null;
  let output = "";
  for (let i = 0; i < string.length; i++) {
    currentChar = string[i];
    if (currentChar == string[i + 1] && count < 9) {
      count++;
    } else {
      output = `${output}${count}${currentChar}`;
      count = 1;
    }
  }
  return output;
}

let sampleText = "************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA";
console.log(runLengthEncoding(sampleText));
