const canConstructString = (ransomNote, magazine) => {
  let map = new Map();
  for (let index in magazine) {
    if (map.has(magazine[index])) {
      map.set(magazine[index], map.get(magazine[index]) + 1);
    } else {
      map.set(magazine[index], 1);
    }
  }
  // getting and deleting chars from map
  let counter = 0;
  for (let index in ransomNote) {
    if (map.has(ransomNote[index])) {
      counter++;
      map.set(ransomNote[index], map.get(ransomNote[index]) - 1);
      // deletes from map if there is 0
      if (map.get(ransomNote[index]) === 0) {
        map.delete(ransomNote[index]);
      }
    }
  }
  return counter === ransomNote.length;
};

//console.log(canConstructString('aa', 'acb'));
