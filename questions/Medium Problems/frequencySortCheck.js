const frequencySortCheck = (s) => {
  let hash = {};
  for (let char of s) {
    hash[char] ? hash[char]++ : (hash[char] = 1);
  }
  let array = [];
  for (let [key, value] of Object.entries(hash)) {
    array = [...array, [key, value]];
  }
  let sortedArray = array.sort((a, b) => b[1] - a[1]);
  let result = '';
  for (let index in sortedArray) {
    let blockString = sortedArray[index][0].repeat(sortedArray[index][1]);
    result += blockString;
  }
  return result;
};

//console.log(frequencySortCheck('tree'));
