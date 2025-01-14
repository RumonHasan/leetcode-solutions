const isomorphicString = (s, t) => {
  let map = new Map();
  let mapTwo = new Map();
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    // false condition
    if (
      (map.has(sChar) && map.get(sChar) !== tChar) ||
      (mapTwo.has(tChar) && mapTwo.get(tChar) !== sChar)
    )
      return false;

    map.set(sChar, tChar);
    mapTwo.set(tChar, sChar);
  }

  return true;
};

console.log(isomorphicString('badc', 'baba'));

const findAndReplace = (words, pattern) => {
  let list = [];

  const checkPattern = (word, wordTwo) => {
    if (word.length !== wordTwo.length) return false;
    let hash = {};
    let hashTwo = {};

    let end = 0;
    while (end < word.length) {
      // false statement
      if (
        (hash[word[end]] && hash[word[end]] !== wordTwo[end]) ||
        (hashTwo[wordTwo[end]] &&
          hashTwo[wordTwo[end]] &&
          hashTwo[wordTwo[end]] !== word[end])
      )
        return false;

      hash[word[end]] = wordTwo[end];
      hashTwo[wordTwo[end]] = word[end];
      end++;
    }

    return true;
  };

  for (let word of words) {
    if (checkPattern(word, pattern)) {
      list.push(word);
    }
  }

  return list;
};

// console.log(findAndReplace(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb'));
// counting unique minutes
const findingUsersActiveMinutes = (logs, k) => {
  let uamDp = new Array(k).fill(0); // uam dp is calculated from 1 to 5 -> based on the UAM count
  let uamMap = new Map();
  for (let i = 0; i < logs.length; i++) {
    const currLog = logs[i];
    const [user, time] = currLog;
    if (uamMap.has(user)) {
      const currUamVal = uamMap.get(user); // set
      if (!currUamVal.has(time)) {
        uamMap.get(user).add(time);
      }
    } else {
      uamMap.set(user, new Set([time]));
    }
  }
  let uamCountMap = new Map(); // map for uam count based on uamMap
  // populate map with 1 to k values first
  for (let i = 1; i <= k; i++) {
    uamCountMap.set(i, 0);
  }
  for (const [_, value] of uamMap) {
    const valLen = value.size;
    if (uamCountMap.has(valLen)) {
      uamCountMap.set(valLen, (uamCountMap.get(valLen) || 0) + 1);
    }
  }
  // populating the UAMdp array
  for (const [key, val] of uamCountMap) {
    const keyNum = Number(key);
    uamDp[keyNum - 1] = val;
  }
  return uamDp;
};

console.log(
  findingUsersActiveMinutes(
    [
      [0, 5],
      [1, 2],
      [0, 2],
      [0, 5],
      [1, 3],
    ],
    5
  )
);
