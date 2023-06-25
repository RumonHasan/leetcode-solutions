const divideStringBasedOnRules = (s, k, fill) => {
  // not brute force but this is unclean O(n) approach
  const firstWay = () => {
    let result = [];
    let counter = 0;
    let localString = '';
    for (let index = 0; index < s.length; index++) {
      if (counter === k) {
        result.push(localString);
        localString = '';
        counter = 0;
      }
      localString += s[index];
      counter++;
      if (index === s.length - 1) {
        result.push(localString);
      }
    }
    // incase filler chars are required
    if (result[result.length - 1].length < k) {
      result[result.length - 1] =
        result[result.length - 1] +
        fill.repeat(k - result[result.length - 1].length);
      return result;
    } else {
      return result;
    }
  };
  // optimized way
  const optimizedWay = () => {
    let array = [];
    let end = 0;
    while (end < s.length) {
      let slice = s.slice(end, end + k);
      if (slice.length < k) {
        array.push((slice += fill.repeat(k - slice.length)));
      } else {
        array.push(slice);
      }
      end += k;
    }
    return array;
  };
};

console.log(divideStringBasedOnRules('abcdefghij', 3, 'x'));
