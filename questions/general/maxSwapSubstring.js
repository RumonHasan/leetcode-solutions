const maxSwapSub = (text) => {
  // If empty string or single char
  if (text.length <= 1) return text.length;

  // Get char counts
  let map = new Map();
  for (let char of text) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // Get groups of consecutive chars
  let collection = [];
  let prevChar = text[0];
  let counter = 1;

  for (let i = 1; i <= text.length; i++) {
    // Need to check <= to handle last group
    if (i === text.length || text[i] !== prevChar) {
      collection.push({
        char: prevChar,
        charCount: counter,
      });
      if (i < text.length) {
        prevChar = text[i];
        counter = 1;
      }
    } else {
      counter++;
    }
  }

  let maxLen = 0;

  // Bridge case
  for (let i = 0; i < collection.length - 2; i++) {
    if (
      collection[i + 1].charCount === 1 &&
      collection[i].char === collection[i + 2].char
    ) {
      const combinedLength =
        collection[i].charCount + collection[i + 2].charCount;
      maxLen = Math.max(maxLen, combinedLength);
    }
  }

  // Extension case
  for (let group of collection) {
    const currChar = group.char;
    const currCount = group.charCount;
    if (map.get(currChar) > currCount) {
      maxLen = Math.max(maxLen, currCount + 1);
    }
    maxLen = Math.max(maxLen, currCount); // Also consider current length
  }

  return maxLen;
};

// Test
console.log(maxSwapSub('aaabaaa')); // Should print 3
