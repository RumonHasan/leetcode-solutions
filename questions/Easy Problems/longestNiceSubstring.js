const longestNiceSubstring = (s) => {
  console.log(s);
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

//console.log(longestNiceSubstring('c'));
