/*

Palindrome check
1. Input is a non empty string.
2 Output is a boolean representing if the string is a palindrome.

what is a palindrome?
It is defined as a string thats written the same forward and backward.

Are single characters palindrome?
yes

Example: string="abcdedcba"
true

split -> O(n)
reverse -> O(n)
join -> O(n)
*/

const isPalindromeType1 = (text) => {
  let reversejoin = text.split("").reverse().join("");
  return text == reversejoin;
};

const isPalindromeType2 = (text) => {
  let start = 0;
  let end = text.length - 1;
  while (start < end) {
    if (text[start] != text[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

const isPalindromeType3 = (text) => {
  for (let i = text.length - 1; i >= 0; i--) {
    if (text[i] != text[text.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const isPalindromeType4 = (text) => {
  let reversejoin = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversejoin = reversejoin + text[i];
  }
  if (reversejoin != text) {
    return false;
  }
  return true;
};

const isPalindromeType5 = (text) => {
  let reversejoin = [];
  for (let i = text.length - 1; i >= 0; i--) {
    reversejoin.push(text[i]);
  }
  if (reversejoin.join("") != text) {
    return false;
  }
  return true;
};

// Sample Input
let sampletext = "abcdedcba";
console.log("T1", isPalindromeType1(sampletext));
console.log("T2", isPalindromeType2(sampletext));
console.log("T3", isPalindromeType3(sampletext));
console.log("T4", isPalindromeType4(sampletext));
console.log("T5", isPalindromeType5(sampletext));
