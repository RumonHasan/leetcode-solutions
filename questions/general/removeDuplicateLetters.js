const removeDuplicateLetters = (s) => {
  let seenMap = new Map();
  let map = new Map();
  let stack = [];
  // have to keep track of the frequency and seen in order to traverse
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
    seenMap.set(char, false);
  }

  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    // only can be popped if occurence is more than 0
    map.set(currChar, map.get(currChar) - 1); // decrease either from the total freuency
    if (seenMap.get(currChar)) continue;
    // only pop when its bigger than 0
    while (
      stack.length &&
      stack[stack.length - 1] > currChar &&
      map.get(stack[stack.length - 1]) > 0
    ) {
      seenMap.set(stack.pop(), false); // because its not seen from the left side
    }
    // only add if the element has not been seen before
    stack.push(currChar);
    seenMap.set(currChar, true);
  }

  return stack.join('');
};

// using a combination of monotonic stack.. incresing order... frequency maintenance and seen array
console.log(removeDuplicateLetters('cbacdcbc'));
