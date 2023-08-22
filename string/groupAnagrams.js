function groupAnagrams(words) {
  let result = [];
  let recordBook = {};
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i].split("").sort().join("");
    if (recordBook[currentWord] && recordBook[currentWord]?.length > 0) {
      recordBook[currentWord].push(words[i]);
    } else {
      recordBook[currentWord] = [words[i]];
    }
  }
  for (const key in recordBook) {
    result.push(recordBook[key]);
  }
  return result;
}

function groupAnagrams(words) {
  let anagrams = {};
  for (let i = 0; i < words.length; i++) {
    let charSum = getCharMultiply(words[i]);
    if (anagrams[charSum]) {
      anagrams[charSum].push(words[i]);
    } else {
      anagrams[charSum] = [words[i]];
    }
  }
  return Object.entries(anagrams).map(([key, val]) => val);
}

function getCharMultiply(str) {
  let res = 1;
  for (let i = 0; i < str.length; i++) {
    res *= str[i].charCodeAt();
  }
  return res;
}

console.log(
  "Result",
  groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"])
);
