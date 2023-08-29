const canConstruct = (s, k) => {
  const horribleApproach = () => {
    if (s.length < k) return false;
    let oddCounter = k - 1;
    let oddOccurenceCheck = 0;
    let secondOddCheck = 0;
    let map = new Map();
    for (let index = 0; index < s.length; index++) {
      if (map.has(s[index])) {
        map.set(s[index], map.get(s[index]) + 1);
      } else {
        map.set(s[index], 1);
      }
    }
    // reduce the odd frequencies k - 1 times
    for (let [key, value] of map) {
      if (oddCounter === 0) {
        break;
      }
      if (value % 2 === 1) {
        map.set(key, map.get(key) - 1);
        if (map.get(key) === 0) {
          map.delete(key);
        }
        oddCounter--;
      }
    }
    // first check for segmentation
    let occurenceValues = [...map.values()];
    let check = occurenceValues.every((val) => val % 2 === 0);
    if (check) return true;
    for (const [_, value] of map) {
      if (value % 2 === 1) {
        oddOccurenceCheck++;
      }
    }
    for (let [key, value] of map) {
      value % 2 === 1 && secondOddCheck++;
    }
    if (secondOddCheck > 1) return false;
    return oddOccurenceCheck <= k ? true : false;
  };
};
// basic logic when the count of frequency is less than or equal to K then it will be true
// eliminating character occurences and making them into even occurences in order to make palindrome
//console.log(canConstruct('xiaomi', 3));
