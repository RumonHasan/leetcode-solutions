const minimumDeletionsTillBalanced = (s) => {
  let aDp = new Array(s.length).fill(0);
  let minCount = s.length; // cannot exceed the total length of s
  for (let i = s.length - 1; i >= 0; i--) {
    const currChar = s[i];
    if (i === s.length - 1) {
      if (currChar === 'a') {
        aDp[i] = 1;
      } else {
        aDp[i] = 0;
      }
    }
    // remaining checking right for a
    if (i < s.length - 1) {
      const nextDpVal = aDp[i + 1];
      if (currChar === 'a') {
        aDp[i] = nextDpVal + 1;
      } else {
        aDp[i] = nextDpVal;
      }
    }
  }
  // checking for b then calculating minimum value
  let bCount = 0;
  for (let i = 0; i < s.length; i++) {
    // minimzing the count
    minCount = Math.min(minCount, bCount + (i < s.length - 1 ? aDp[i + 1] : 0)); // here have to checking whether there elements to teh right or not
    if (s[i] == 'b') {
      bCount++;
    }
  }
  return minCount;
};
// finding a middle point to cut off and make all the a letter on the left and b letter to the right
// console.log(
//   minimumDeletionsTillBalanced(
//     'aabbbbaabababbbbaaaaaabbababaaabaabaabbbabbbbabbabbababaabaababbbbaaaaabbabbabaaaabbbabaaaabbaaabbbaabbaaaaabaa'
//   )
// );
