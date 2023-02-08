const licenseKeyFormatting = (s, k) => {
  const arrayNoHyphen = s.split('-').join('');
  // reverse looping
  let newArray = [];
  let tempString = '';
  let counter = 0;
  for (let index = arrayNoHyphen.length - 1; index >= 0; index--) {
    if (counter === k) {
      const reverseTemp = tempString.split('').reverse().join('');
      newArray.push(reverseTemp);
      counter = 0;
      tempString = '';
    }
    tempString += arrayNoHyphen[index].toUpperCase();
    counter++;
    if (index === 0) {
      const reverseTemp = tempString.split('').reverse().join('');
      newArray.push(reverseTemp);
    }
  }
  newArray.reverse();
  // creating hyphenated version
  let result = '';
  for (let index in newArray) {
    result += newArray[index] + '-';
  }
  return result.slice(0, -1);
};

// console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4));
