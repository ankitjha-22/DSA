//Solution 1
function semordnilap(words) {
  if (words.length == 0) {
    return [];
  }
  let tracker = {};
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let reverseWord = currentWord.split("").reverse().join("");
    if (tracker[reverseWord] == 1) {
      result.push([reverseWord, currentWord]);
    } else {
      tracker[currentWord] = 1;
    }
  }
  return result.reverse();
}

//Solution 2
function semordnilap(words) {
  if (words.length == 0) {
    return [];
  }
  let reverseSet = new Set();
  let result = [];

  for (item of words) {
    let reversedWord = item.split("").reverse().join("");
    if (reverseSet.has(reversedWord)) {
      result.push([reversedWord, item]);
    }
    reverseSet.add(item);
  }

  return result.reverse();
}

let result = semordnilap(["diaper", "abc", "test", "cba", "repaid"]);
console.log("result", result);
