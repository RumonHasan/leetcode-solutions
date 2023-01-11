const minStepsToAnagram = (s, t) => {
  let tHash = {};
  let sHash = {};
  if (s.length !== t.length) {
    return;
  }
  for (let index in t) {
    tHash[t[index]] ? tHash[t[index]]++ : (tHash[t[index]] = 1);
    sHash[s[index]] ? sHash[s[index]]++ : (sHash[s[index]] = 1);
  }
  // note t should be the anagram of s meaning need to get rid of the extra chars
  let word = s;
  let countChanges = 0;
  for (let i = 0; i < word.length; i++) {
    if (!tHash[word[i]]) {
      countChanges++;
      // since there is no tChar only one char count is added without removing object
    } else {
      if (tHash[word[i]] < sHash[word[i]]) {
        const difference = sHash[word[i]] - tHash[word[i]];
        countChanges += difference;
        sHash[word[i]] -= difference;
        // reducing the object and its letter by its difference frequency in order to elminate the character
      }
    }
  }
  return countChanges;
};

// console.log(
//   minStepsToAnagram(
//     'gctcxyuluxjuxnsvmomavutrrfb',
//     'qijrjrhqqjxjtprybrzpyfyqtzf'
//   )
// );
