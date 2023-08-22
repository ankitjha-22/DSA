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

console.log(
  "Result",
  groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"])
);
