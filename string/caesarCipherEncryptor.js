/*

Caesar Cipher checks
1.Input Non empty string and lowercase
2. non negative key which will get added to string elements 

Example 
input xyz
key 2
output zab

*/

function caesarCipherEncryptor(inputString, key) {
  let newKey = key % 26;
  let mystringdb = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    let currentElement = inputString[i];
    let indexCurrentElement = mystringdb.indexOf(currentElement);
    let shiftedbykey =
      indexCurrentElement + newKey <= mystringdb.length - 1
        ? mystringdb[indexCurrentElement + newKey]
        : mystringdb[indexCurrentElement + newKey - mystringdb.length];
    result += shiftedbykey;
  }
  return result;
}

function caesarCipherEncryptor2(inputString, key) {
  let newKey = key % 26;

  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    let currentElement = inputString[i];
    let indexCurrentElement = currentElement.charCodeAt();
    let indexNewElement = indexCurrentElement + newKey;

    let shiftedbykey =
      indexNewElement <= 122
        ? String.fromCharCode(indexNewElement)
        : String.fromCharCode(96 + (indexNewElement % 122));

    result += shiftedbykey;
  }
  return result;
}

let inputString = "abc";
let key = 2;

let data = caesarCipherEncryptor(inputString, key);
let data2 = caesarCipherEncryptor2(inputString, key);
console.log("input", inputString);
console.log("output", data2);
