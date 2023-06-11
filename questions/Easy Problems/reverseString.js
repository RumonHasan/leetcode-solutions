const reverseString = (s) => {
  let right = s.length;
  let left = 0;
  while (left < right) {
    let leftSide = s[left];
    s[left] = s[right - 1];
    s[right - 1] = leftSide;
    left++;
    right--;
  }
  return s;
};

// console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
