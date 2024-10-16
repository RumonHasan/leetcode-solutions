const numAtMostK = (s, k) => {
  let zeroCount = 0;
  let oneCount = 0;
  let end = 0;
  let start = 0;
  let total = 0;
  while (end < s.length) {
    const currChar = s[end];
    if (currChar == '0') {
      zeroCount++;
    } else {
      oneCount++;
    }
    // both have to be not one at a time
    while (zeroCount > k && oneCount > k) {
      if (s[start] == '0') {
        zeroCount--;
      } else {
        oneCount--;
      }
      start++;
    }
    total += end - start + 1;
    end++;
  }
  return total;
};

console.log(numAtMostK('1010101', 2));

// counting large groups
const largeGroups = (s) => {
  let result = [];
  let prev = s[0];
  let startIndex = 0;
  let counter = 1;
  for (let i = 1; i < s.length; i++) {
    const currChar = s[i];
    if (prev == currChar) {
      counter++;
    } else {
      if (counter >= 3) {
        result.push([startIndex, i - 1]);
      }
      startIndex = i;
      counter = 1;
      prev = s[i];
    }
    if (i === s.length - 1) {
      if (counter >= 3) {
        result.push([startIndex, i]);
      }
    }
  }
  return result;
};

console.log(largeGroups('aaaa'));
