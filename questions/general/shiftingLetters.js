const shiftingLetters = (s, shifts) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let pref = new Array(shifts.length).fill(0); // needs total shifts from its position
  pref[pref.length - 1] = shifts[shifts.length - 1];
  for (let i = shifts.length - 2; i >= 0; i--) {
    pref[i] = pref[i + 1] + shifts[i];
  }
  // have to change based on the total shifts from the end
  let res = '';
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    const currPos = pref[i];
    const alphaPos = alphabet.indexOf(currChar);
    const newPos = (currPos + alphaPos) % 26; // to offset it by 26 if its more
    res += alphabet[newPos];
  }
  return res;
};

console.log(shiftingLetters('abc', [3, 5, 9]));

// getting unique length three palindromes while making aure they are all unique strings
const uniqueLengthThreePal = (s) => {
  let leftSet = new Set();
  let map = new Map();
  let set = new Set();
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (let char of s) {
    // remove the mid char
    map.set(char, map.get(char) - 1);
    if (map.get(char) === 0) {
      map.delete(char);
    }
    // checking all the letters to see whether there is any on the right to match
    for (let i = 97; i <= 122; i++) {
      const checkChar = String.fromCharCode(i);
      if (leftSet.has(checkChar) && map.get(checkChar) > 0) {
        // only works if the left side is valid
        set.add(`${checkChar}${char}${checkChar}`);
      }
    }
    if (!leftSet.has(char)) {
      leftSet.add(char);
    }
  }
  return set.size;
};

// console.log(uniqueLengthThreePal('aabca'));

const houseRobberCircular = (nums) => {
  let left = nums.slice(0, nums.length - 1);
  let right = nums.slice(1, nums.length);
  if (nums.length === 1) {
    return nums[0];
  }
  const dpCheck = (arr) => {
    let dp = new Array(arr.length).fill(0);
    // 1D dp approach
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        dp[i] = arr[i];
      } else if (i === 1) {
        dp[i] = Math.max(dp[i - 1], arr[i]);
      } else {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
      }
    }

    return dp[dp.length - 1];
  };

  const leftVal = dpCheck(left);
  const rightVal = dpCheck(right);

  return Math.max(rightVal, leftVal);
};

console.log(houseRobberCircular([1, 2, 3, 1]));
