const sentenceSimilarity = (sentence1, sentence2) => {
  let s1 = sentence1.split(' ');
  let s2 = sentence2.split(' ');
  if (s1.length > s2.length) {
    let temp = s1;
    s1 = s2;
    s2 = temp;
  }
  // s1 is always the shorted to check prefix or suffix
  let s1Pref = 0;
  let s2Pref = 0;
  let counterOne = 0;
  let counterTwo = 0;
  while (s2Pref < s2.length) {
    if (s2[s2Pref] == s1[s1Pref]) {
      s1Pref++;
      s2Pref++;
      counterOne++;
    } else {
      break;
    }
  }
  // checking for suffix and checking for indices
  let s1Suff = s1.length - 1;
  let s2Suff = s2.length - 1;
  while (s2Suff >= 0) {
    if (s1[s1Suff] === s2[s2Suff]) {
      s1Suff--;
      s2Suff--;
      counterTwo++;
    } else {
      break;
    }
  }
  return counterOne + counterTwo >= s1.length; // final condition
};

console.log(
  sentenceSimilarity('Hello I Good I Hello Good Jane', 'Hello Good Jane')
);
