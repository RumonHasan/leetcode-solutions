const longestNiceSubstring = (s) => {
  let end = 0;
  const checkSubstring = (sub) => {
    let subArray = new Array(...new Set([...sub.split('')]));
    let hash = {};
    for (let index in subArray) {
      let letter = subArray[index].toLowerCase();
      hash[letter] ? hash[letter]++ : (hash[letter] = 1);
    }
    let vals = Object.values(hash).some((val) => val === 1);
    if (vals) {
      return false;
    } else {
      return true;
    }
  };
  let collection = [];
  while (end < s.length) {
    for (let index = end; index < s.length; index++) {
      const substring = s.slice(end, index + 1);
      if (checkSubstring(substring)) {
        collection = [...collection, substring];
      }
    }
    end++;
  }
  if (collection.length === 0) return '';
  let maxLen = Math.max.apply(
    null,
    collection.map((word) => word.length)
  );
  return collection.filter((word) => word.length === maxLen)[0];
};

// my optimized version
// const optimizedVersionHuman = (s) => {
//   console.log(s);
//   let resultString = '';

//   for (let index = 0; index < s.length; index++) {
//     let wordSet = new Set();
//     wordSet.add(s[index]); // adds the initial character to the set inorder to check with the remsining substring
//     for (let subIndex = index; subIndex < s.length; subIndex++) {
//       let char = s[subIndex];
//       const checkSlice = s.slice(index, subIndex + 1);
//       wordSet.add(char);
//       if (wordSet.has(char.toLowerCase()) && wordSet.has(char.toUpperCase())) {
//         console.log(subIndex, index, checkSlice);
//       } else {
//       }
//     }
//   }

//   return resultString;
// };

console.log(optimizedVersionHuman('YazaAay'));

// chat gpt
const longestNiceSubstrinGPT = (s) => {
  let longest = '';
  for (let i = 0; i < s.length; i++) {
    let set = new Set();
    let map = new Map();
    for (let j = i; j < s.length; j++) {
      let char = s[j];
      set.add(char);
      map.set(char, (map.get(char) || 0) + 1);
      if (
        set.has(char.toLowerCase()) &&
        set.has(char.toUpperCase()) &&
        !map.has(char.toLowerCase()) &&
        !map.has(char.toUpperCase())
      ) {
        if (j - i + 1 > longest.length) {
          longest = s.substring(i, j + 1);
        }
      }
    }
  }
  return longest;
};

//console.log(longestNiceSubstrinGPT('YazaAay'));
