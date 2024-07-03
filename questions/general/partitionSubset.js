const partitionSubset = (nums) => {
  const setApproach = () => {
    let sum = nums.reduce((a, b) => a + b, 0);
    if (sum % 2 === 1) return false;
    let target = sum / 2;
    let set = new Set(); // to store the sums and possible combinations
    set.add(0);
    for (let i = nums.length - 1; i >= 0; i--) {
      // rev iteration in order to check from left to right for existing sums
      const currNum = nums[i];
      let setArray = [];
      let existingSet = [...set];
      for (const setValue of set) {
        setArray.push(setValue + currNum);
      }
      let newArray = [...setArray, ...existingSet];
      set = new Set([...newArray]);
      if (set.has(target)) return true;
    }
    return false;
  };
};

//console.log(partitionSubset([1, 5, 11, 5]));

const minimumLength = (s) => {
  const initialApproach = () => {
    let array = s.split('');
    if (s.length === 1) return 1;
    if (array[0] !== array[array.length - 1]) return array.length;
    if (array.every((letter) => letter === array[0])) return 0;
    // core logic for checking duplicate chars
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
      if (array[left] === array[right]) {
        let prevLeft = array[left];
        let prevRight = array[right];
        while (left < right && array[left] === prevRight) {
          left++;
        }
        while (right > left && array[right] === prevLeft) {
          right--;
        }
        if (array.length === 3 && array[left] === array[right]) return 1;
        if (array[left] === array[right] && right - left === 0) return 0;
        if (array[left] === array[right] && right - left === 1) return 0;
        if (right - left === 2) {
          if (array[right] === array[left]) return 1;
          if (array[right] !== array[left]) return 3;
        }
      } else {
        break;
      }
      return right - left + 1;
    }
  };

  const optimizedApproach = () => {
    if (s.length === 1) return 0;
    let left = 0;
    let right = s.length - 1;
    while (left < right && s[left] === s[right]) {
      let char = s[left];
      while (left <= right && s[left] === char) left++;
      while (left <= right && s[right] === char) right--;
      // notice here the number crosses over so we can get it as 0
    }
    return right - left + 1;
  };

  console.log(optimizedApproach());
};

console.log(minimumLength('cabaabac'));
