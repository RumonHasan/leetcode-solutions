const alternatingII = (colors, k) => {
  const TLESolution = () => {
    let newColors = [...colors, ...colors];
    let altCount = 0;

    for (let i = 0; i < colors.length; i++) {
      let isAlternating = true;

      for (let j = i; j < i + k - 1; j++) {
        const currColor = newColors[j];
        const nextColor = newColors[j + 1];

        if (currColor === nextColor) {
          isAlternating = false;
          break;
        }
      }

      if (isAlternating) {
        altCount++;
      }
    }

    return altCount;
  };

  const optimized = (colors, k) => {
    // Duplicate the array to handle circular sequences
    let newColors = colors;
    newColors.push(...newColors.slice(0, k - 1));
    let altCount = 0;
    let j = 0; // Tracks the start of a valid alternating sequence

    for (let i = 0; i < newColors.length; i++) {
      // Check if adjacent elements are the same
      if (i > 0 && newColors[i] === newColors[i - 1]) {
        // checking if previous is wrong then reset j to start new sequence
        // Reset `j` to start a new sequence
        j = i;
      }
      // Check if the current alternating sequence length is at least `k`
      if (i - j + 1 >= k) {
        altCount++;
      }
    }
    // Since we duplicated the array, we need to ensure we don't overcount sequences
    return altCount > colors.length ? altCount - colors.length : altCount;
  };

  console.log(optimized(colors, k));
};

//console.log(alternatingII([0, 1, 0, 1, 0], 3));

// getting equal budget string
const getEqualSubstring = (s, t, maxCost) => {
  let currentCost = 0;
  let end = 0;
  let start = 0;
  let maxLen = 0;

  while (end < s.length) {
    const charCodeS = s.charCodeAt(end);
    const charCodeT = t.charCodeAt(end);

    const cost = Math.abs(charCodeT - charCodeS);
    currentCost += cost;

    while (currentCost > maxCost) {
      const currStartCost = Math.abs(s.charCodeAt(start) - t.charCodeAt(start));
      currentCost -= currStartCost;
      start++;
    }

    maxLen = Math.max(end - start + 1, maxLen);

    end++;
  }

  return maxLen;
};

console.log(getEqualSubstring('abcd', 'cdef', 3));
