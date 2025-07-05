const maxCostChar = (s, chars, vals) => {
  let maximumCost = 0;
  let currMaximumCost = 0;

  const charValue = (char) => {
    return char.charCodeAt(0) - 97 + 1;
  };

  const getCharValue = (char) => {
    const indexValue = chars.indexOf(char);
    if (indexValue !== -1) {
      return vals[indexValue];
    } else {
      return charValue(char);
    }
  };

  for (let index = 0; index < s.length; index++) {
    let currChar = s[index];
    currMaximumCost = Math.max(
      currMaximumCost + getCharValue(currChar),
      getCharValue(currChar)
    ); // gets the currmax and the local max and keeps updating
    maximumCost = Math.max(currMaximumCost, maximumCost);
  }

  return maximumCost;
};

// approach+ using linear dp approach combined with Kadane's algorithm in order to find the maximum cost of the chars
console.log(maxCostChar('adaa', 'd', [-1000]));
