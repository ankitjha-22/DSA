function firstNonRepeatingCharacter(string) {
  let data = string;
  let myobj = {};
  for (let i = 0; i < data.length; i++) {
    myobj[data[i]] = myobj.hasOwnProperty(data[i]) ? myobj[data[i]] + 1 : 1;
  }
  for (let j = 0; j < data.length; j++) {
    if (myobj[data[j]] == 1) {
      return j;
    }
  }
  return -1;
}

console.log("result", firstNonRepeatingCharacter("abcdcaf"));
