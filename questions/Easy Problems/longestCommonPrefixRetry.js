const longCommonPref = (strs) => {
  let checkArray = [...strs].slice(1, strs.length);
  let testString = '';
  let result = '';
  for (let char of strs[0]) {
    let counter = 0;
    testString += char;
    for (let index = 0; index < checkArray.length; index++) {
      let word = checkArray[index];
      if (word.startsWith(testString)) {
        counter++;
      }
    }
    if (counter === checkArray.length) {
      result = testString;
    }
  }
  return result;
};

//console.log(longCommonPrefOptimized(['flower', 'flow', 'flight']));
