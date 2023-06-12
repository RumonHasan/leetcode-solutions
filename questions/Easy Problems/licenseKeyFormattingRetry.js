const licenseKeyFormattingRetry = (s, k) => {
  let array = s.split('-').join('');
  let segments = [];
  let segmentCounter = 0;
  let end = array.length - 1;
  let singleSegment = '';
  while (end >= 0) {
    if (segmentCounter === k) {
      segments.unshift(singleSegment.split('').reverse().join(''));
      singleSegment = '';
      segmentCounter = 0;
    }
    singleSegment += array[end];
    // push the remaining
    if (end === 0) {
      segments.unshift(singleSegment.split('').reverse().join(''));
      break;
    }
    segmentCounter++;
    end--;
  }
  let hashCounter = segments.length - 1;
  let result = '';
  for (let index in segments) {
    hashCounter > 0
      ? (result += segments[index].toUpperCase() + '-')
      : (result += segments[index].toUpperCase());
    hashCounter--;
  }
  return result;
};

//console.log(licenseKeyFormattingRetry('5F3Z-2e-9-w', 4));
