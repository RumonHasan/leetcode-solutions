const addingSpaces = (s, spaces) => {
  let stack = [];
  let spaceIndex = 0;
  for (let i = 0; i < s.length; i++) {
    const currentSpaceIndex = spaces[spaceIndex];
    const currChar = s[i];
    if (i === currentSpaceIndex) {
      stack.push(' ');
      spaceIndex++;
    }
    stack.push(currChar);
  }
  return stack.join('');
};

// console.log(addingSpaces('LeetcodeHelpsMeLearn', [8, 13, 15]));

const canChooose = (groups, nums) => {
  let groupIndex = 0;
  let i = 0;
  while (i < nums.length) {
    const currNum = nums[i];
    // if the first num is equal then check ohter combinations
    if (currNum === groups[groupIndex][0]) {
      let local = i;
      let check = true;

      for (let j = 0; j < groups[groupIndex].length; j++) {
        const groupEl = groups[groupIndex][j];
        if (groupEl !== nums[local]) {
          check = false;
          break;
        }
        local++;
      }
      // checking whether group is present or not
      if (!check) {
        i++;
      } else if (check) {
        groupIndex++;
        i = local;
      }
      if (groupIndex === groups.length) return true;
    } else {
      i++;
    }
  }
  return false;
};

console.log(
  canChooose(
    [[9099312, -7882487, -1441304, 6624042, -6043305]],
    [-1441304, 9099312, -7882487, -1441304, 6624042, -6043305, -1441304]
  )
);

const firstUnique = (s) => {
  let hash = {};
  for (let char of s) {
    hash[char] = (hash[char] || 0) + 1;
  }
  let char = '';
  for (let [key, value] of Object.entries(hash)) {
    if (value === 1) {
      char = key;
      break;
    }
  }

  return char ? s.indexOf(char) : -1;
};

console.log(firstUnique('loveleetcode'));
