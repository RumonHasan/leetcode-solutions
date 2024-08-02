const longestPalSubstring = (s) => {
  let slice = [];
  if (s.length === 1) return s;
  //spreading from the middle to both left and right
  const expandAroundCenter = (left, right, localSlice, mainSlice) => {
    while (left >= 0 && right < s.length && s[left] == s[right]) {
      localSlice.push(s[right]);
      localSlice.unshift(s[left]);
      left--;
      right++;
    }
    if (mainSlice.length < localSlice.length) {
      mainSlice = localSlice;
    }
    return mainSlice;
  };
  let res = '';
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    // for expansing oddly
    let sliceCheck = expandAroundCenter(i - 1, i + 1, [currChar], slice);
    // for expansing evenly
    let finalSlice = expandAroundCenter(i, i + 1, [], sliceCheck);
    if (res.length < finalSlice.length) {
      res = finalSlice.join('');
    }
  }
  return res;
};

// console.log(longestPalSubstring('babad'));

const checkIfStringBreakable = (s1, s2) => {
  const sortString = (string) =>
    string.split('').sort((a, b) => a.localeCompare(b));
  const stringOne = sortString(s1).join('');
  const stringTwo = sortString(s2).join('');
  let checkObj = {
    stringOne: 0,
    stringTwo: 0,
  };
  for (let i = 0; i < s1.length; i++) {
    const letterOneCharCode = stringOne.charCodeAt(i);
    const letterTwoCharCode = stringTwo.charCodeAt(i);
    if (letterOneCharCode === letterTwoCharCode) {
      checkObj.stringOne += 1;
      checkObj.stringTwo += 1;
    } else if (letterOneCharCode > letterTwoCharCode) {
      checkObj.stringOne += 1;
    } else {
      checkObj.stringTwo += 1;
    }
  }
  if (
    checkObj.stringOne !== stringOne.length &&
    checkObj.stringTwo !== stringTwo.length
  ) {
    return false;
  }
  return true;
};

//console.log(checkIfStringBreakable('abc', 'xya'));
