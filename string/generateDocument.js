function generateDocument(characters, document) {
  let characterMap = {};

  for (let ch of characters) {
    if (!(ch in characterMap)) characterMap[ch] = 0;
    characterMap[ch]++;
  }

  for (let ch of document) {
    if (!(ch in characterMap) || characterMap[ch] === 0) return false;
    characterMap[ch]--;
  }

  return true;
}

function generateDocument(characters, document) {
  const doc = document.split(""); // spliting document here

  for (let i = 0; i < doc.length; i++) {
    const charsPost = characters.replace(doc[i], ""); // replace character string  with "" for the current index doc
    if (characters === charsPost) {
      // When this equation is true that means in last step no such replacement took place
      return false;
    } else {
      characters = charsPost; // if we dont have characters === charsPost we reassign characters to charsPost
    }
  }
  return true;
}

let result = generateDocument("A", "a");
console.log("result", result);
