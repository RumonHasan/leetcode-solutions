const canConstruct = (ransomNote, magazine) => {
  let map = new Map();
  for (let index in magazine) {
    if (map.has(magazine[index])) {
      map.set(magazine[index], map.get(magazine[index]) + 1);
    } else {
      map.set(magazine[index], 1);
    }
  }
  // iterating through ransome note for checking
  let string = '';
  for (let index = 0; index < ransomNote.length; index++) {
    if (map.has(ransomNote[index])) {
      map.set(ransomNote[index], map.get(ransomNote[index]) - 1);
      if (map.get(ransomNote[index]) === 0) {
        map.delete(ransomNote[index]);
      }
      string += ransomNote[index];
    } else {
      map.delete(ransomNote[index]);
    }
  }
  return string == ransomNote;
};
// using js map approach
//console.log(canConstruct('aa', 'aba'));
