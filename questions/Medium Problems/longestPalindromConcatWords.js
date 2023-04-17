const longestPalConcatTwoWords = (words) => {
  console.log(words);
  let map = new Map();
  let sameRevMap = new Map();
  for (let index in words) {
    let rev = words[index].split('').reverse().join('');
    if (rev == words[index]) {
      if (sameRevMap.has(words[index])) {
        sameRevMap.set(words[index], sameRevMap.get(words[index]) + 1);
      } else {
        sameRevMap.set(words[index], 1);
      }
    } else {
      if (map.has(words[index])) {
        map.set(words[index], map.get(words[index]) + 1);
      } else {
        map.set(words[index], 1);
      }
    }
  }
  console.log(map, sameRevMap);
  // main length
  let mainLen = 0;
  for (let [key, value] of map) {
    let revKey = key.split('').reverse().join('');
    if (map.has(revKey)) {
      const lowerVal = Math.min(value, map.get(revKey));
      mainLen += lowerVal * 2 * revKey.length;
      map.delete(key);
      map.delete(revKey);
    }
  }
  console.log(mainLen, 'before same');
  if (sameRevMap.size === 0) {
    return mainLen;
  }
  // second length
  let array = [];
  for (let [key, value] of sameRevMap) {
    array.push([key, value]);
  }
  let sortedArray = array.sort((a, b) => b[1] - a[1]);
  let check = false;
  console.log(sortedArray);

  if (sortedArray.some((val) => val[1] === 1)) {
    for (let index = 0; index < sortedArray.length; index++) {
      if (sortedArray[index][1] % 2 === 0) {
        mainLen += 2 * sortedArray[index][1];
      }
      if (sortedArray[index][1] % 2 === 1) {
        mainLen += 2 * (sortedArray[index][1] - 1);
      }
      if (!check && sortedArray[index][1] === 1) {
        mainLen += 2;
        check = true;
      }
    }
  } else {
    let biggestOdd = 0;
    let key = '';
    for (let index in sortedArray) {
      if (sortedArray[index][1] % 2 === 1) {
        biggestOdd = Math.max(sortedArray[index][1], biggestOdd);
      }
    }
    mainLen += biggestOdd * 2;
    for (let index in sortedArray) {
      if (sortedArray[index][1] === biggestOdd) {
        sortedArray.splice(Number(index), 1);
        break;
      }
    }
    for (let index = 0; index < sortedArray.length; index++) {
      if (sortedArray[index][1] % 2 === 0) {
        mainLen += 2 * sortedArray[index][1];
      }
      if (sortedArray[index][1] % 2 === 1) {
        mainLen += 2 * (sortedArray[index][1] - 1);
      }
    }
  }
  console.log(mainLen, 'after same');
  return mainLen;
};

// return the longest palindrome by concatenating two words
console.log(
  longestPalConcatTwoWords([
    'wy',
    'wy',
    'nn',
    'ww',
    'yy',
    'nw',
    'nn',
    'yw',
    'ww',
    'yw',
    'yy',
    'nn',
    'yw',
    'ny',
    'nn',
    'yy',
    'yy',
    'nw',
    'yy',
    'ww',
    'wy',
    'wy',
    'wn',
    'wn',
    'ny',
    'ny',
    'yn',
    'ww',
    'wn',
    'yn',
    'yn',
    'wy',
    'nw',
    'wn',
    'yn',
    'wn',
    'nn',
    'yw',
    'wy',
    'ww',
    'wy',
    'wy',
    'yw',
    'nn',
    'nw',
    'nn',
    'yy',
    'ww',
    'yn',
    'yw',
    'yw',
    'yn',
    'yw',
    'nw',
    'yn',
    'yn',
    'yy',
    'wn',
    'wn',
    'nw',
    'yn',
    'nw',
    'yw',
    'nw',
    'nw',
    'nn',
    'ww',
    'nw',
    'nw',
    'wn',
    'wn',
    'nw',
    'nn',
    'nw',
    'wy',
    'nn',
    'yy',
    'ww',
    'yn',
    'nw',
    'wn',
    'yn',
    'yn',
    'nw',
    'yy',
    'nn',
    'wy',
    'nn',
    'wn',
  ])
);
