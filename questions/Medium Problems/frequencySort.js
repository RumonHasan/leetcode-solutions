const frequencySort = (s) => {
  let stringMap = new Map();
  for (let index in s) {
    if (stringMap.has(s[index])) {
      stringMap.set(s[index], stringMap.get(s[index]) + 1);
    } else {
      stringMap.set(s[index], 1);
    }
  }
  let resultString = '';
  let array = [];
  for (const [key, value] of stringMap) {
    array.push({ key: key, value: value });
  }
  array.sort((a, b) => b.value - a.value);
  for (let index in array) {
    resultString += array[index].key.repeat(array[index].value);
  }
  return resultString;
};

//console.log(frequencySort('tree'));
