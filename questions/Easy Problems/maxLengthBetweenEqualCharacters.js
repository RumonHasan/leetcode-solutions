const maxLenBetweenEqualChars = (s) => {
  let distanceObject = {};
  let distanceMap = new Map();
  for (let index = 0; index < s.length; index++) {
    if (distanceObject[s[index]]) {
      distanceObject[s[index]] = [...distanceObject[s[index]], index];
    } else {
      distanceObject[s[index]] = [index];
    }
  }
  let maxLength = -1;
  for (let [_, value] of Object.entries(distanceObject)) {
    if (value.length > 1) {
      const firstIndex = value[0];
      const lastIndex = value[value.length - 1];
      maxLength = Math.max(lastIndex - firstIndex - 1, maxLength);
    }
  }
  return maxLength;
};
// console.log(maxLenBetweenEqualChars('csdsc'));
