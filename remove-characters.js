function removeCharacters(str, chars) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    let isVowel = false;
    for (let j = 0; j < chars.length; j++) {
      if (str[i] === chars[j]) {
        isVowel = true;
        break;
      }
    }
    if (!isVowel) {
      newString += str[i];
    }
  }
  return newString;
}

console.log(
  removeCharacters("Battle of the Vowels: Hawaii vs. Grozny", "aeiou")
);

// Polynomial time O(n^2), I don't think it can be optimized since it involves you going through two non sorted arrays/strings
