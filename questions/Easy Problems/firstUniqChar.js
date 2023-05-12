const firstUniqChar = (s) => {
  let hash = {};
  for (let index in s) {
    hash[s[index]] ? hash[s[index]]++ : (hash[s[index]] = 1);
  }
  let checkHash = {};
  for (let [key, value] of Object.entries(hash)) {
    if (value === 1) {
      checkHash[key] = value;
    }
  }
  for (let index in s) {
    if (checkHash[s[index]]) {
      return Number(index);
    }
  }
  return -1;
};

//console.log(firstUniqChar('loveleetcode'));
